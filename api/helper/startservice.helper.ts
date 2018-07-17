import LoggerUtil from './../logs/log';
import Promise = require('tspromise');
import { MFPropertyAddress } from './../model/bmfss.session';
import * as cst from './../util/constant';
import { CommonUtilityHelper } from '../helper/commonutility.helper';
import { ServiceAddressForStartStopRequest } from './../request/serviceaddressforstartstop.request';
import { ESIIDBPNumberDO } from './../model/esiidbpnumberdo';
import { StartStopTxnService } from '../services/startstoptxn.service';
import { PropertyAddressDO } from './../model/propertyaddressdo';
import { Esiiddo } from './../model/esiiddo';
import { Unit, ESIID } from './../model/bmfss.session';
import { CommonUtil } from './../util/common.util';
import { MFStartServiceRequest, GetPromoCodeDetailsRequest } from './../request/mfstartservice.request';
import {EmailHelper} from './email.helper';
import { DateUtil } from './../util/date.util';
import moment = require('moment-timezone');


export class StartServiceHelper {

    private startStopService: StartStopTxnService;
    private commonUtilityHelper: CommonUtilityHelper;

    constructor(){
        this.startStopService = new StartStopTxnService();
        this.commonUtilityHelper = new CommonUtilityHelper();
    }

    public listPropertyAddress(req: any): Promise<any> {

        LoggerUtil.info("START::MFStartStopHelper::getServiceAddressForMF()>>>>>>");
        let mfPropertyAddrssList = new  Array<MFPropertyAddress>();
        var p = new Promise((resolve, reject) => {
          this.populateServiceAddressStartStop(req).then(inReq => {
            this.startStopService.getServiceAddressForStartStopTxn(inReq[1]).then(s => {
                mfPropertyAddrssList= this.returnServiceAddressForMF(s,inReq[0]);
                LoggerUtil.info("SERVICE ADDRESS LIST FOR THIS PROPERTY:::::::"+mfPropertyAddrssList.length);
                resolve(mfPropertyAddrssList);
            });
          })
        });

       LoggerUtil.info("END::MFStartStopHelper::getServiceAddressForMF()>>>>>>");
       return p;
    }


    private returnServiceAddressForMF(s:any,req:any): Array<MFPropertyAddress>{
        let mfPropertyAddrssList = new  Array<MFPropertyAddress>();
        let propertyAddressList = new Array<PropertyAddressDO>();
        try{
         if(null != s && s.dataAvilableForInput){
              propertyAddressList = s.propertyAddrList;
              propertyAddressList.forEach( (propertyAddressDO:PropertyAddressDO) => {
                let propertyAddress = new MFPropertyAddress();
                propertyAddress.streetAddress= (propertyAddressDO.strStreetAdress);
                propertyAddress.city= (propertyAddressDO.strCity);
                propertyAddress.state = (propertyAddressDO.strState);
                propertyAddress.zipcode = (propertyAddressDO.strZipcode);
                 let esidDOList = propertyAddressDO.unitList;
                 let unitListArr = new Array<Unit>();

                 esidDOList.forEach((esiiddo:Esiiddo)=> {
                    let unit = new Unit();
                    unit.esiid = (esiiddo.esiid);
                    unit.priorityMoveInEnabled = (esiiddo.priorityMoveinEnabled);
                    unit.priorityMoveInFee = (esiiddo.priorityMoveinFee);
                    unit.strStreetNum = (esiiddo.streetNum);
                    unit.strStreetName = (esiiddo.streetName);
                    unit.strCity = (esiiddo.city);
                    unit.strState = (esiiddo.state);
                    unit.strUnitNumber = (esiiddo.unitNum);
                    unit.strZipcode = (esiiddo.zipcode);
                    unit.strMeterType = (esiiddo.meterType);
                    unit.selected = false;
                    unit.strServiceArea = (esiiddo.serviceArea);
                    unit.pending = (esiiddo.esidPending);
                    unit.marketHold = (esiiddo.marketHold);
                    unit.bpNumber = (esiiddo.bpNumber);
                    unit.active=(esiiddo.esidActive);
                    unitListArr.push(unit);
                  });
                unitListArr = this.mergeTCSResultWithCCSDetailsPendingStatus(unitListArr,req);
                propertyAddress.unitList = (unitListArr);
                mfPropertyAddrssList.push(propertyAddress);
              });

            }
            }catch(e){
                LoggerUtil.error("Error while getting the response in returnServiceAddressForMF()::::" +e.message);
           }
           return mfPropertyAddrssList;
     }


     private  mergeTCSResultWithCCSDetailsPendingStatus(unitList:Array<Unit>, esiidList:any):Array<Unit>{

          esiidList.forEach((ESIID:ESIID) => {
           unitList.forEach((unit:Unit) =>{
             if(CommonUtil.equalsIgnoreCase(unit.esiid, ESIID.esiid)){
               unit.startPendingStatusFromCCS = (ESIID.startPendingStatusFromCCS);
               unit.stopPendingStatusFromCCS= (ESIID.stopPendingStatusFromCCS);
             }
           });

         });
         return unitList;
 }


    private populateServiceAddressStartStop(req:any): Promise<any> {

         let request = new ServiceAddressForStartStopRequest();
         var p = new Promise((resolve, reject) => {
             request.strCustomerType = "MFAM";
             request.strCompanycode = cst.GMESS_CC_0270;
             if(undefined != req.body.esiidList && req.body.esiidList.length != 0){
                 LoggerUtil.info("esiid length:::::"+req.body.esiidList.length);
                 resolve(this.getRequest(req.body.esiidList,request));
             }else{
                 LoggerUtil.info("ESIIDS NOT FOUND IN THE REQUEST:::::"+req.body.esiidList);
                 this.commonUtilityHelper.getESIDDetailsForMultifamilyFromCCS(req).then(s => {
                   resolve(this.getRequest(s,request));
                 });
             }
         })
         return p;
     }


     private getRequest(esiidList: any, request:any):any{
       let esiidBPList:Array<ESIIDBPNumberDO> = this.commonUtilityHelper.createEsiidbpNumberDOForBuilderStopAndMFTxns(esiidList);
       LoggerUtil.info("ESIID BP NUMBER LENGTH::::"+esiidBPList.length)
       request.esiidBPDOList = esiidBPList;
       LoggerUtil.info("GETTING THE ESIID DETAILS FOR MF START STOP FOR ESIID LIST::::::"+esiidBPList.length);
       return [esiidList,request];
     }

     public startServiceSubmit(req:any) :Promise<any>{
       LoggerUtil.info("START MFStartStopHelper startServiceSubmit()>>>>>>>");
       let selectedUnit:Unit[] = req.body.selectedUnits;
       let selectPropAddress: string =   selectedUnit[0].strStreetNum +" "+ selectedUnit[0].strStreetName;
       var p = new Promise((resolve, reject) =>{
         let request = this.populateStartServiceRequest(req, selectedUnit);
         let emailHelper = new EmailHelper();
         this.startStopService.updateMFStartService(request).then(s => {
              if(undefined != s && s.dataAvailForInput && null != s.transactionId){
                let propCity =  selectedUnit[0].strCity;
                let propZipcode = selectedUnit[0].strZipcode;
                emailHelper.sendMFStartServiceEmail(emailHelper.getStartServiceEmail(selectedUnit,s.transactionId, s.transactionDatetime,selectPropAddress,propCity,propZipcode,req));
                let timeZone = moment().tz("America/Chicago").format("z");
                resolve({submittedOn:s.transactionDatetime+" "+timeZone, transactionId:s.transactionId})
              }else{
                 LoggerUtil.error("Error Adding MF Start Service request to the DB");
                 resolve({error:true,errmsg:"Error Adding MF Start Service request to the DB"});
              }
            });
         });
      LoggerUtil.info("END MFStartStopHelper startServiceSubmit()>>>>>>>");
      return p;
    }

   private populateStartServiceRequest(req:any, selectedUnit:Array<Unit>):MFStartServiceRequest{
       let request = new MFStartServiceRequest();
       let commonUtilityHelper = new CommonUtilityHelper();
       let totalNum :string;
       let concatEsiid:string = "";
       let concatEffectiveDate:string = "";
       let priorityMoveInFlagColsv:string = "";
       let concatUnitNum:string = "";
       let concatStreetNum:string = "";
       let concatStretName:string = "";
       let concatCity:string = "";
       let concatState:string = "";
       let concatZipCode:string = "";
       let concatBpNumber:string = "";
       try{
         selectedUnit.forEach((unit:Unit) =>{
            concatEsiid += unit.esiid + cst.EXCLAIMATIONSEPARATOR;
            concatEffectiveDate += unit.effectiveDate + cst.COLON;
            priorityMoveInFlagColsv += (unit.priorityDateSelected?"Y":"N")+cst.COLON;
            concatUnitNum += unit.strUnitNumber + cst.EXCLAIMATIONSEPARATOR;
            concatBpNumber += unit.bpNumber + cst.EXCLAIMATIONSEPARATOR;
            concatStreetNum += unit.strStreetNum + cst.EXCLAIMATIONSEPARATOR;
            concatStretName += unit.strStreetName + cst.EXCLAIMATIONSEPARATOR;
            concatCity += unit.strCity + cst.EXCLAIMATIONSEPARATOR;
            concatState += unit.strState + cst.EXCLAIMATIONSEPARATOR;
            concatZipCode += unit.strZipcode + cst.EXCLAIMATIONSEPARATOR;
        });
        concatEsiid = cst.EXCLAIMATIONSEPARATOR + concatEsiid;
        concatEffectiveDate = cst.COLON + concatEffectiveDate;
        priorityMoveInFlagColsv = cst.COLON + priorityMoveInFlagColsv;
        concatUnitNum = cst.EXCLAIMATIONSEPARATOR + concatUnitNum;
        concatBpNumber = cst.EXCLAIMATIONSEPARATOR + concatBpNumber;
        concatStreetNum = cst.EXCLAIMATIONSEPARATOR + concatStreetNum;
        concatStretName = cst.EXCLAIMATIONSEPARATOR + concatStretName;
        concatCity = cst.EXCLAIMATIONSEPARATOR + concatCity;
        concatState = cst.EXCLAIMATIONSEPARATOR + concatState;
        concatZipCode = cst.EXCLAIMATIONSEPARATOR + concatZipCode;
        totalNum = (String)(selectedUnit.length);
        let strNodeGuidList = commonUtilityHelper.getNONCAAPropertyNodeGuidList(req);
        request.strNONCSANODEGUIDList = strNodeGuidList;
        request.strCompanyCode = cst.GMESS_CC_0270;
        request.custServiceVerifyInd = ("Y");
        request.count = totalNum;
        request.requestorUserId = CommonUtil.getLoggedInUserName(req);
        request.date = concatEffectiveDate;//: separated value
        request.bpStreetNumber = req.body.businessInfo.addr.streetNum;
        request.bpStreetName= req.body.businessInfo.addr.streetName;
        request.bpCity = req.body.businessInfo.addr.city;
        request.bpState = req.body.businessInfo.addr.state;
        request.bpPoBox = req.body.businessInfo.addr.POBox;
        request.bpZipCode = req.body.businessInfo.addr.zipcode;
        request.bpBusinessName = req.body.selectedpropName;
        request.relationshipId = req.body.relationshipId;
        request.bpNumber = concatBpNumber;//: separated value
        request.unitNumber = concatUnitNum;//: separated value
        request.esiId = concatEsiid;//: separated value
        request.federalTaxId =  req.body.businessInfo.fedTaxId;
        request.correspondenceLanguagePref = req.body.businessInfo.languagePref;
        request.state = concatState;//: separated value
        request.city = concatCity;//: separated value
        request.streetName = concatStretName;//: separated value
        request.streetNumber = concatStreetNum;//: separated value
        request.zipCode = concatZipCode;//: separated value
        request.priorityMoveflag = priorityMoveInFlagColsv;//: separated value
        request.strPortal = cst.GMESS_PORTAL;
    }catch(e){
      LoggerUtil.info("Error while populating the request params for Start Service Submit::"+e.message);
    }
    return request;
  }

   public getUnavailableDates(req: any): Promise<any>{
       LoggerUtil.info("getUnavialbleDates for the request::::"+JSON.stringify(req.body));
       let commonUtilityHelper = new CommonUtilityHelper();
       var p = new Promise((resolve, reject) => {
         commonUtilityHelper.getUnavailableDatesForEsiid(req.body.esiid).then(unavailableDates => {
            resolve((undefined != unavailableDates)?unavailableDates.unavailableDates.split("|"):unavailableDates);
         });
       });
       return p;
    }

   public getPromocodeList(req: any): Promise<any> {

      let inReq = this.populateGetPromoCodeDetailsRequest(req);
      var p = new Promise((resolve, reject) => {
          this.startStopService.getPromocodeDetails(inReq).then(s => {
              if(undefined != s && s.dataAvailForInput){
                  resolve(s.serviceAreaPromoCodeList)
              }
          })
      });
      return p;
   }

   private populateGetPromoCodeDetailsRequest(req: any): GetPromoCodeDetailsRequest {

        let inReq = new GetPromoCodeDetailsRequest();
        inReq.strCompanyCode = cst.GMESS_CC_0270;
        inReq.strLoggedInUserName = CommonUtil.getLoggedInUserName(req);
        inReq.strPortal = cst.GMESS_PORTAL;
        inReq.strRelationshipId = req.body.relationshipId;
        return inReq;
   }


  /*  public startServiceSubmit(req: any): Promise<any>{

        return new Promise((resolve, reject) => {
            resolve({submittedOn:"March 10,2017 at 04:17 p.m, Central", transactionId:"0000000000"})
        });
    }*/

    public getNearTo5PMFlagSelectUnitsPage(req:any): Promise<any>{
        LoggerUtil.info("getNearTo5PMFlagSelectUnitsPage ::::");
        let dateUtil = new DateUtil();
        let nearTo5pmFlag:boolean=false;
        var p = new Promise((resolve, reject) => {
          nearTo5pmFlag = dateUtil.isNearTo5PM("StartService")
          //console.log("nearTo5PMFlag in startservc helper::"+nearTo5pmFlag)
             resolve(nearTo5pmFlag)
          });
       return p;
     }

     public getNearTo5PMFlagVerifyPage(req:any): Promise<any>{
         LoggerUtil.info("getNearTo5PMFlagVerifyPage ::::");
         let dateUtil = new DateUtil();
         let nearTo5pmFlag:boolean=false;
         var p = new Promise((resolve, reject) => {
           nearTo5pmFlag = dateUtil.isNearTo5PM("Verify")
              resolve(nearTo5pmFlag)
           });
        return p;
      }
}
