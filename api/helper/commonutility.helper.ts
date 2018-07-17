import LoggerUtil from './../logs/log';
import Promise = require('tspromise');
import * as cst from './../util/constant';
import { CommonUtil } from './../util/common.util';
import { Error } from './../model/error';
import { Esiiddo } from './../model/esiiddo';
import {BaseRequest } from './../request/base.request';
import { ESIID } from './../model/bmfss.session';
import { Unit, MFPropertyAddress } from './../model/bmfss.session';
import {ESIIDDetailsForBuilderRequest } from './../request/esiiddetailsforbuilder.request';
import {ESIIDDetailsForMultifamilyRequest } from './../request/esiiddetailsformultifamily.request';
import {AddSSFailTransactionRequest} from './../request/addssfailtransaction.request';
import {GetTCSEsidDetailsRequest } from './../request/gettcsesiddetails.request';
import { ESIIDBPNumberDO } from './../model/esiidbpnumberdo';
import { MyAccountService } from './../services/myaccount.service';
import { EsiidDetailsFromCCSDO } from './../model/esiiddetailsfromccsdo';
import { StructuralDO, ContractAccount } from '../model/billing.model'
import { includes } from 'lodash';
import {TdspByESIDRequest } from './../request/tdspbyesid.request';
import {UserTransactionService} from './../services/usertransaction.service';
import {OetdspRequest } from './../request/oetdsp.request';
import moment = require('moment-timezone');
import { Address } from '../model/bmfss.session';
import * as _ from "lodash";
import { EsiidDetailsForMultifamilyRequest } from '../request/myaccount.request';
import { StructuralRequest } from './../request/billingdetails.request'
import { BillingService } from '../services/billing.service'



export class CommonUtilityHelper {

    private myAccountService: MyAccountService;
    private userTxnSvc :UserTransactionService;
    private billingService: BillingService;

    constructor(){
        this.myAccountService = new MyAccountService();
        this.userTxnSvc = new UserTransactionService();
        this.billingService = new BillingService();
    }

    //This method is used  so that the invoice PDF is not displayed on web if the billing Date is current day minus one business day
    //Billing date is <= than current day - 1 business day
    public isBillingDateIsCurrentDayMinusOneBusinessDay(billingDateAsStr:string,  dateFormatPattern:string): boolean {

        let billingDate:any = null;
        try{
          billingDate = moment(billingDateAsStr,dateFormatPattern);
          let daysDifference:number = this.getDaysDifferenceBasedOnDay();
          return (moment().diff(billingDate,'days') > 0 && moment().diff(billingDate,'days') >= daysDifference);
        }catch(ex){
            LoggerUtil.error("EXCEPTION OCCURED WHILE CONVERTING STRING TO BILLING DATE::::",ex);
        }
        LoggerUtil.info("SKIPPING because of billing date is not current day - 1 business day " + billingDateAsStr);
        return false;
    }


    private getDaysDifferenceBasedOnDay(): number{

      let day = moment(moment.now()).day();
      switch (day) {
        case 6: return 2;
        case 7: return 3;
        case 1: return 3;
      }
      return 1;
    }

    public  isCAAAndNONCAACCSESIIDListExistInSession(s:any):boolean{
        if(null != CommonUtil.getBMFSSSession(s)
        && null != CommonUtil.getBMFSSSession(s).selectedProperty.ESIIDDetails
        && null != CommonUtil.getBMFSSSession(s).selectedProperty.ESIIDDetails.CCSNONCAAESIIDList
        && null != CommonUtil.getBMFSSSession(s).selectedProperty.ESIIDDetails.CCSCAAESIIDList)
        {
            return true;
        }
        return false;
    }

    public  isNONCAACCSESIIDListExistInSession(s:any):boolean{

        if(null != CommonUtil.getBMFSSSession(s)
        && null != CommonUtil.getBMFSSSession(s).selectedProperty.ESIIDDetails
        && null != CommonUtil.getBMFSSSession(s).selectedProperty.ESIIDDetails.CCSNONCAAESIIDList)
        {
            return true;
        }
        return false;
    }

    public isBuilder(s:any):boolean{

        if(CommonUtil.equalsIgnoreCase(s.body.propertyType, cst.CUSTOMERTYPE_HB)){
            return true;
        }
        return false;
    }

    public  getEsiidDetailsForBuilderFromCCS( forCAA:boolean,forCAAAndNONCAA:boolean,s:any) :Array<ESIID>{

        let ESIIDList = new Array<ESIID>();
        let request = new ESIIDDetailsForBuilderRequest();
        let bpNumberList = new Array<string>();
        if(forCAAAndNONCAA){
            bpNumberList.concat(this.getNONCAABPNumberListUnderMasterNode(s));
            bpNumberList.concat(this.getCAABPNumberListUnderMasterNode(s));
            LoggerUtil.info("GETTING ESIID DETAILS FOR BOTH CAA AND NON CAA BP NUMBER LIST::::::"+bpNumberList);
        }else{
            if(!forCAA){
                bpNumberList = this.getNONCAABPNumberListUnderMasterNode(s);
                LoggerUtil.info("GETTING BUILDER ESIID DETAILS FOR THE SITE BP NUMBER LIST:::::"+bpNumberList);
            }else{
                bpNumberList = this.getCAABPNumberListUnderMasterNode(s);
                LoggerUtil.info("GETTING BUILDER ESIID DETAILS FOR THE NON SITE BP NUMBER LIST:::::"+bpNumberList);
            }
        }
        request.bpNumberList=(bpNumberList);
        request.strCompanyCode=(cst.GMESS_CC_0270);
        request.strLoggedInUserName = (this.getLoggedInUserName(s));
        request.strPortal= (cst.GMESS_PORTAL);
        var p = new Promise((resolve, reject) => {
          this.myAccountService.getESIDDetailsForBuilderFromCCS(request).then(t => {
            resolve(t);
            if(null != t && t.isDataAvilableForInput()){

                LoggerUtil.info("GOT THE ESIID DETAILS FOR THE BP NUMBER LIST:::::"+bpNumberList);
                let esiidDetailsList: Array<EsiidDetailsFromCCSDO> = t.getEsiidDOList;
                esiidDetailsList.forEach(esiidDO => {
                    let esiid = new ESIID();
                    esiid.bpNumber=(esiidDO.bpNumber);
                    esiid.esiid= (esiidDO.esiid);
                    esiid.strMoveInDate = (esiidDO.moveInDate);
                    esiid.strMoveOutDate = (esiidDO.moveOutDate);
                    esiid.strTaxStatus = (this.getTaxStatusTextBasedOnValue(esiidDO.taxStatus));
                    esiid.strDepositAmount = (esiidDO.depositAmount);
                    esiid.stopPendingStatusFromCCS = (esiidDO.stopPendingStatus);
                    ESIIDList.push(esiid);
                  this.updateSessionWithEsiidDetailsFromCCS(ESIIDList, forCAA, forCAAAndNONCAA,s);
                })

            }else{
                LoggerUtil.info("ESIID DETAILS NOT FOUND FOR THE BP NUMBER LIST:::::"+bpNumberList);
            }

        }).catch(e => {
            //console.log(e)
            resolve(e);
        })

    });
        return ESIIDList;
    }

   private isCustomerDetailsObjectNotNullInSession(req:any):boolean{

		if(null != CommonUtil.getBMFSSSession(req) && null != CommonUtil.getBMFSSSession(req).selectedProperty.customerDtls){
			return true;
		}
		return false;
	}

  public getLanguage(req:any):string{
  /*  if(this.isCustomerDetailsObjectNotNullInSession(req)){
      return (CommonUtil.getBMFSSSession(req).selectedProperty.customerDtls.correspondenceLang);
    }
    return "";*/
    return req.body.businessInfo.languagePref;
 }

public getMailingAddressCity(req:any):string{
  /*if(this.isCustomerDetailsObjectNotNullInSession(req)){
    return CommonUtil.getBMFSSSession(req).selectedProperty.customerDtls.mailingAddress.city;
  }
  return "";*/
   return req.body.businessInfo.addr.city;
}

public getMailingAddressState(req:any):string{

  /*if(this.isCustomerDetailsObjectNotNullInSession(req)){
    return  CommonUtil.getBMFSSSession(req).selectedProperty.customerDtls.mailingAddress.state;
  }
  return "";
  */
  return req.body.businessInfo.addr.state;
}

public getMailingAddressZipCode(req:any):string{

/*  if(this.isCustomerDetailsObjectNotNullInSession(req)){
    return CommonUtil.getBMFSSSession(req).selectedProperty.customerDtls.mailingAddress.zipcode;
  }
  return "";
  */
 return  req.body.businessInfo.addr.streetNum;
}

public  getMailingAddressStreetName(req:any):string{
/*
  if(this.isCustomerDetailsObjectNotNullInSession(req)){
    return CommonUtil.getBMFSSSession(req).selectedProperty.customerDtls.mailingAddress.streetName;
  }
  return "";
  */
   return req.body.businessInfo.addr.streetName;
}

public  getMailingAddressStreetNum(req:any):string{
/*  if(this.isCustomerDetailsObjectNotNullInSession(req)){
    return CommonUtil.getBMFSSSession(req).selectedProperty.customerDtls.mailingAddress.streetNum;
  }
  return "";*/
    return req.body.businessInfo.addr.streetNum;
}

public getMailingAddressPoBox(req:any):string{

/*  if(this.isCustomerDetailsObjectNotNullInSession(req)){
    return CommonUtil.getBMFSSSession(req).selectedProperty.customerDtls.mailingAddress.POBox;
  }
  return "";*/
  return req.body.businessInfo.addr.POBox;
}

public getTIN(req:any):string{
  /*if(this.isCustomerDetailsObjectNotNullInSession(req)){
  return (CommonUtil.getBMFSSSession(req).selectedProperty.customerDtls.fedtaxID);
 }
 return "";*/
   return req.body.businessInfo.fedTaxId;
}

protected  isLoggedInUserInBMFSessionNotNull(req:any):boolean{

		return (null != CommonUtil.getBMFSSSession(req).loggedInUser);

	}

	public getLoggedInUserFullName(req:any):string{
		/*if(this.isLoggedInUserExistInSession(req)){
			return CommonUtil.defaultIfEmpty(CommonUtil.getBMFSSSession(req).loggedInUser.firstName+" "+CommonUtil.getBMFSSSession(req).loggedInUser.lastName, cst.NOT_PROVIDED);
		}
    return ""*/

		return req.body.businessInfo.firstName + " "+req.body.businessInfo.lastName;
	}

	public  getLoggedInUserEmail(req:any):string{
		/*if(this.isLoggedInUserExistInSession(req)){
			return CommonUtil.defaultIfEmpty(CommonUtil.getBMFSSSession(req).loggedInUser.email,cst.NOT_PROVIDED);
		}
		return "";*/
    return req.body.businessInfo.email;
	}

	public getLoggedInUserFaxnumber(req:any):string{
		/*if(this.isLoggedInUserExistInSession(req)){
			return CommonUtil.defaultIfEmpty((_.isEmpty(CommonUtil.getBMFSSSession(req).loggedInUser.faxNum) || CommonUtil.equalsIgnoreCase(CommonUtil.getBMFSSSession(req).loggedInUser.faxNum, "null")?
					"":CommonUtil.getBMFSSSession(req).loggedInUser.faxNum),cst.NOT_PROVIDED);
		}
		return "";*/
    return CommonUtil.defaultIfEmpty(req.body.businessInfo.faxNumber,cst.NOT_PROVIDED);
	}

	public getLoggedInUserPhonenumber(req:any):string{
		/*if(this.isLoggedInUserExistInSession(req)){
			let exten:string= CommonUtil.isNotBlank(CommonUtil.getBMFSSSession(req).loggedInUser.phoneNumExtn)?" Extn "+CommonUtil.getBMFSSSession(req).loggedInUser.phoneNumExtn:"";
			return CommonUtil.defaultIfEmpty(((_.isEmpty(CommonUtil.getBMFSSSession(req).loggedInUser.phoneNum) || (CommonUtil.equalsIgnoreCase(CommonUtil.getBMFSSSession(req).loggedInUser.phoneNum, "null")))?"":CommonUtil.getBMFSSSession(req).loggedInUser.phoneNum+exten),cst.NOT_PROVIDED);
		}
		return "";*/
      let extn = CommonUtil.isNotBlank(req.body.businessInfo.extn)?" extn "+req.body.businessInfo.extn:"";
      return CommonUtil.defaultIfEmpty(req.body.businessInfo.phoneNumber+extn,cst.NOT_PROVIDED);
	}


//this is the MASTER NODE RELATIONSHIP ID FOR START/STOP TXN'S
	public  getMSTRNONCAABPNumberForStartStopTxn(req:any):string{

		/*if(this.isCustomerDetailsObjectNotNullInSession(req)){
			return CommonUtil.getBMFSSSession(req).selectedProperty.customerDtls.relationshipId;
		}
		return "";*/
    return req.body.relationshipId;
	}


	 public  getNONCAAPropertyNodeGuidList(req:any):Array<string>{
  		let nonCAANodeGuidList = new Array<string>();
  		nonCAANodeGuidList.push(req.body.strNodeGuidForStartStopTxn);
  		return nonCAANodeGuidList;
	 }

    private  updateSessionWithEsiidDetailsFromCCS( ESIIDList:Array<ESIID>,  forCAA:boolean,  forCAAAndNONCAA:boolean,s:any){
		if(forCAAAndNONCAA){
			LoggerUtil.info("UPDATING SESSION WITH ESIID DETAILS FROM CCS FOR BOTH CAA AND NON CAA::::");
			CommonUtil.getBMFSSSession(s).selectedProperty.ESIIDDetails.CCSCAAESIIDList = this.getESIIDListForCAA(ESIIDList,s);
			CommonUtil.getBMFSSSession(s).selectedProperty.ESIIDDetails.CCSNONCAAESIIDList = this.getESIIDListForNONCAA(ESIIDList,s);
		}else{
			LoggerUtil.info("UPDATING SESSION WITH ESIID DETAILS FROM CCS BASED ON THE CAA FLAG::::"+forCAA);
			if(forCAA){
				CommonUtil.getBMFSSSession(s).selectedProperty.ESIIDDetails.CCSCAAESIIDList = this.getESIIDListForCAA(ESIIDList,s);
			}else{
				CommonUtil.getBMFSSSession(s).selectedProperty.ESIIDDetails.CCSNONCAAESIIDList = this.getESIIDListForNONCAA(ESIIDList,s);
			}
        }
    }

    private getESIIDListForCAA(ESIIDList:Array<ESIID>,s:any):Array<ESIID>{

            let ESIIDListCAA = new Array<ESIID>();
            let caaBPList:string[] = this.getCAABPNumberListUnderMasterNode(s);
            for(let esiid of Object.keys(ESIIDList)){
                if(includes(caaBPList,(ESIIDList.pop().bpNumber))){
                    ESIIDListCAA.push(ESIIDList.pop());
                }
            }
            return ESIIDListCAA;
    }

    private getESIIDListForNONCAA(unitList:Array<ESIID>, s:any):Array<ESIID>{

            let ESIIDListNONCAA = new Array<ESIID>();
            let noncaaBPList:string[] = this.getNONCAABPNumberListUnderMasterNode(s);
            for(let esiid of Object.keys(unitList)){
                if(includes(noncaaBPList, (unitList.pop().bpNumber))){
                    ESIIDListNONCAA.push(unitList.pop());
                }
            }
            return ESIIDListNONCAA;
    }

    public getESIIDStrListForMultifamilyStartStopServiceAndVUM(req:any) :Array<string>{

		let strESIIDList = new Array<string>();
		LoggerUtil.info("getESIIDStrListForMultifamilyStartStopServiceAndVUM>>>>CHECKING CCS NONCAA ESIID DETAILS EXIST IN SESSION::::::");
    try{
		if(this.isNONCAACCSESIIDListExistInSession(req)){
			strESIIDList = this.getStrCCSNONCAAESIIDListFormSession(req);
			LoggerUtil.info("getESIIDStrListForMultifamilyStartStopServiceAndVUM>>>>GOT IT FROM THE SESSION::::::"+strESIIDList.length);
		}else{
			LoggerUtil.info("getESIIDStrListForMultifamilyStartStopServiceAndVUM>>>>GETTING IT FROM THE SERVICE LAYER::::::");
			let ESIIDDOList = this.getEsiidDetailsForMultifamilyFromCCS(false,false,req);
			this.updateUnitListInSession(ESIIDDOList, req);
		}
		 strESIIDList = this.getStrCCSNONCAAESIIDListFormSession(req);
   }catch (e){
      LoggerUtil.error("Error in getESIIDStrListForMultifamilyStartStopServiceAndVUM == ",e.message);
    }
		return strESIIDList;
	}

  public getSelectedPropertyRelationshipId(req:any):string{
		/*if(this.isBMFSessionNotNull(req)){
			return CommonUtil.getBMFSSSession(req).selectedProperty.relationshipId;
		}
		return "";*/
    return req.body.selectedPropRelationshipId;
	}

  public  getSelectedPropertyBPName(req:any):string{

		/*if(this.isBMFSessionNotNull(req)){
			return CommonUtil.getBMFSSSession(req).selectedProperty.bpName;
		}
		return "";
    */

   return req.body.selectedpropName;
	}


  private updateUnitListInSession(ESIIDList:Array<ESIID>, req:any){

		let unitListForCCS = new Array<Unit>();
    try{
    		if(null != ESIIDList && ESIIDList.length >0){
    			 ESIIDList.forEach((esiid:ESIID) =>{
    				let unit = new Unit();
    				unit.active = (esiid.active);
    				unit.bpNumber = (esiid.bpNumber);
    				unit.esiid = (esiid.esiid);
    				unit.strTaxStatus = (esiid.strTaxStatus);
    				unit.strDepositAmount = (esiid.strDepositAmount);
    				unitListForCCS.push(unit);
    			});
		    }
    }catch(e){
      LoggerUtil.error("Error in updateUnitListInSession():::: "+e.message);
    }
		CommonUtil.getBMFSSSession(req).selectedProperty.ESIIDDetails.unitList = (unitListForCCS);
	}





  public getStrCCSNONCAAESIIDListFormSession(s:any) :Array<string>{

		let ESIIDList = new Array<string>();
		if(null != CommonUtil.getBMFSSSession(s) && null!=CommonUtil.getBMFSSSession(s).selectedProperty.ESIIDDetails.CCSNONCAAESIIDList){

			  CommonUtil.getBMFSSSession(s).selectedProperty.ESIIDDetails.CCSNONCAAESIIDList.forEach((ESIID:ESIID) => {
				ESIIDList.push(ESIID.esiid);
			});
		}
		return ESIIDList;
	}


  /*
	 * Add every exception in BMFSS App FE to BMFSS SCEHMA.
	 */
	public addExceptionToBMFSSSchema( errorCode:string,  errorMessage:string, ex:any, req:any){
		LoggerUtil.info("START::CommonUtilityHelper::addExceptionToBMFSSSchema()>>>>>>");

		let request:AddSSFailTransactionRequest = this.populateAddSSFailTransactionRequest(errorCode,errorMessage,ex, req);
		  this.userTxnSvc.addFrontEndExceptionInBMFSSSchema(request).then(t => {

			if(null != t && null != t.transactionId){
				LoggerUtil.info("TRANSACTION ID FOR THIS FAILURE TRANSACTION:::::::::::"+t.transactionId);
			}else{
				LoggerUtil.info("NO FAILURE TRANSACTION IS UPDATED IN BMFSS SCHEMA FOR THIS ERROR:::::"+errorMessage);
			}
    });

		LoggerUtil.info("END::CommonUtilityHelper::addExceptionToBMFSSSchema()<<<<<<<<<");
	}

  private  populateAddSSFailTransactionRequest( errorCode:string, errorMessage:string, ex:any, req:any):AddSSFailTransactionRequest{
   LoggerUtil.info("START::CommonUtilityHelper::populateAddSSFailTransactionRequest()>>>>>>");
   let request = new AddSSFailTransactionRequest();
     request.errorCode = (errorCode+"_"+moment.now());
     //request.errorLocation=(getErrorLocationFromException(ex));
     request.errorLocation=((ex));
     request.errorMessage = ("ERROR OCCURED FOR INPUT PARAMS::::\r\n"+errorMessage);
     //request.reason = (getReasonFromException(ex));
     request.reason = ((ex));
     request.createdBy=(CommonUtil.getBMFSSSession(req).loggedInUser.userName);
     request.strLoggedInUserName = (CommonUtil.getBMFSSSession(req).loggedInUser.userName);
     request.strCompanyCode = cst.GMESS_CC_0270;
   LoggerUtil.info("END::CommonUtilityHelper::populateAddSSFailTransactionRequest()<<<<<<<<<");
   return request;
 }


    public getCAABPNumberListUnderMasterNode(s:any):Array<string>{

        return ((s.body.CAABPList != null)?s.body.CAABPList:new Array<string>());

    }

    public  getNONCAABPNumberListUnderMasterNode(s:any):Array<string>{

        let bpNumberList = new Array<string>();
        bpNumberList=[...(null != (s.body.NONCAABPList))?(s.body.NONCAABPList):new Array<string>()];
		    bpNumberList=[...(null != s.body.siteBPNumberList)?(s.body.siteBPNumberList):new Array<string>()];
		return bpNumberList;
	}

    private  getTaxStatusTextBasedOnValue(taxStatus:string):string{

		if(CommonUtil.equalsIgnoreCase(taxStatus, cst.TAX_STATUS_P0)){
			return cst.TAX_STATUS_P0_TXT;
		}else if(CommonUtil.equalsIgnoreCase(taxStatus, cst.TAX_STATUS_P1)){
			return cst.TAX_STATUS_P1_TXT;
		}else if(CommonUtil.equalsIgnoreCase(taxStatus, cst.TAX_STATUS_PE)){
			return cst.TAX_STATUS_PE_TXT;
		}else if(CommonUtil.equalsIgnoreCase(taxStatus, cst.TAX_STATUS_P3)){
			return cst.TAX_STATUS_P3_TXT;
		}else if(CommonUtil.equalsIgnoreCase(taxStatus, cst.TAX_STATUS_PH)){
			return cst.TAX_STATUS_PH_TXT;
		}else{
			return taxStatus;
		}

	}

    public getEsiidDetailsForMultifamilyFromCCS(forCAA:boolean, forCAAAndNONCAA:boolean, s:any):Array<ESIID> {

        let ESIIDList = new Array<ESIID>();
        let request = new ESIIDDetailsForMultifamilyRequest();
        let bpNumberList = new Array<string>();
        if(forCAAAndNONCAA){
            bpNumberList = [...(this.getNONCAABPNumberListUnderMasterNode(s))];
            bpNumberList= [...(this.getCAABPNumberListUnderMasterNode(s))];
            LoggerUtil.info("GETTING ESIID DETAILS FOR BOTH CAA AND NON CAA BP NUMBER LIST::::::"+bpNumberList);
        }else{
            if(!forCAA){
                bpNumberList = this.getNONCAABPNumberListUnderMasterNode(s);
                LoggerUtil.info("GETTING MULTIFAMILY ESIID DETAILS FOR THE CSA BP NUMBER LIST:::::"+bpNumberList);
            }else{
                bpNumberList = this.getCAABPNumberListUnderMasterNode(s);
                LoggerUtil.info("GETTING MULTIFAMILY ESIID DETAILS FOR THE NON CSA BP NUMBER LIST:::::"+bpNumberList);
            }
        }
        request.bpNumberList = (bpNumberList);
        request.strCompanyCode = (cst.GMESS_CC_0270);
        request.strLoggedInUserName = this.getLoggedInUserName(s);
        request.strPortal= cst.GMESS_PORTAL;
        var p = new Promise((resolve, reject) => {
            this.myAccountService.getESIDDetailsForMultifamilyFromCCS(request).then(t => {
              resolve(t);
              if(null != t && t.isDataAvilableForInput()){
                LoggerUtil.info("GOT THE ESIID DETAILS FOR THE BP NUMBER LIST:::::"+bpNumberList);
                let esiidDetailsList: Array<EsiidDetailsFromCCSDO> = t.getEsiidDOList;
                for(let esiidDO of Object.keys(esiidDetailsList)){
                    let esiid = new ESIID();
                    esiid.bpNumber=(esiidDetailsList.pop().bpNumber);
                    esiid.esiid= (esiidDetailsList.pop().esiid);
                    esiid.strMoveInDate = (esiidDetailsList.pop().moveInDate);
                    esiid.strMoveOutDate = (esiidDetailsList.pop().moveOutDate);
                    esiid.strTaxStatus = (this.getTaxStatusTextBasedOnValue(esiidDetailsList.pop().taxStatus));
                    esiid.strDepositAmount = (esiidDetailsList.pop().depositAmount);
                    esiid.stopPendingStatusFromCCS = (esiidDetailsList.pop().stopPendingStatus);
                    esiid.startPendingStatusFromCCS = (esiidDetailsList.pop().startPendingStatus)
                    ESIIDList.push(esiid);
                  this.updateSessionWithEsiidDetailsFromCCS(ESIIDList, forCAA, forCAAAndNONCAA,s);

                }
            }else{
                LoggerUtil.info("ESIID DETAILS NOT FOUND FOR THE BP NUMBER LIST:::::"+bpNumberList);
            }

        }).catch(e => {
            //console.log(e)
            resolve(e);
        })

    });
        return ESIIDList;


    }


    public getLoggedInUserName(s:any):string{
		if(this.isLoggedInUserExistInSession(s)){
			return CommonUtil.getBMFSSSession(s).loggedInUser.userName;
		}
		return cst.EMPTY_STR;
    }

    private isLoggedInUserExistInSession(s:any):boolean{
		if(null != CommonUtil.getBMFSSSession(s) && null != CommonUtil.getBMFSSSession(s).loggedInUser){
			return true;
		}
		return false;
    }

    /*public getUnavailableDates( esiID:string): Promise<any> {

        this.getTdspForEsiid(esiID);

      let tdsp_unavailable_dates_arr = new Array<string>();
   		let unavailableDates ="";
   		if( undefined != tdsp_unavailable_dates_arr && tdsp_unavailable_dates_arr.indexOf(tdsp) > -1){
   			unavailableDates = tdsp_unavailable_dates_arr[tdsp_unavailable_dates_arr.indexOf(tdsp)];
   		}else{
   			unavailableDates = this.getUnavailableDatesForEsiid(tdsp);
   			tdsp_unavailable_dates_arr.push(tdsp, unavailableDates);
   		}
 		   return unavailableDates;
 	}

  */


    public  getESIIDDetailsListFromTCS( esiidList:Array<string>, forCAAAndNONCAA:boolean,s:any) :Array<Unit>{

		let unitList = new Array<Unit>();
		LoggerUtil.info("THE ESIID LIST INPUT TO THE ESIID DETAILS CALL:::"+esiidList+"::::SIZE::"+esiidList.length);
		let request = new GetTCSEsidDetailsRequest();
        request.esiidList = (esiidList);
        var p = new Promise((resolve, reject) => {
            this.myAccountService.getESIDDetailsFromTCS(request).then(t => {
              resolve(t);
              if(null != t && t.isDataAvailForInput()){
                  let tcsEsiidDtls:Array<Esiiddo> = t.tcsEsiidDetailsDOList;
                  unitList = this.getUnitListFromTCSDetails(tcsEsiidDtls, forCAAAndNONCAA,s);
              }

        }).catch(e => {
            //console.log(e)
            resolve(e);
        })

    });

		return unitList;
    }

    public getUnitListFromTCSDetails(tcsEsiidDtls:Array<Esiiddo>,forCAAAndNONCAA:boolean,s:any) :Array<Unit> {

		let ESIIDList = CommonUtil.getBMFSSSession(s).selectedProperty.ESIIDDetails.CCSNONCAAESIIDList;
		LoggerUtil.info("UNIT LIST SIZE FROM THE SESSION:::::::::"+ESIIDList.length);
		LoggerUtil.info("ESIID LIST SIZE FROM THE TCS DATABASE:::::::::"+tcsEsiidDtls.length);
		let unitListFromTCS = new Array<Unit>();
		for(let esiid of Object.keys(ESIIDList)){
            for(let esiidDO of Object.keys(tcsEsiidDtls)){
				if(CommonUtil.equalsIgnoreCase(ESIIDList.pop().esiid, tcsEsiidDtls.pop().esiid)){
					let unitFromTCS = new Unit();
					unitFromTCS.esiid = tcsEsiidDtls.pop().esiid;
					unitFromTCS.priorityMoveInEnabled=tcsEsiidDtls.pop().priorityMoveinEnabled;
					unitFromTCS.priorityMoveInFee = tcsEsiidDtls.pop().priorityMoveinFee;
					unitFromTCS.strStreetNum= tcsEsiidDtls.pop().streetNum;
					unitFromTCS.strStreetName = tcsEsiidDtls.pop().streetName;
					unitFromTCS.strCity = tcsEsiidDtls.pop().city;
					unitFromTCS.strState = tcsEsiidDtls.pop().state;
					unitFromTCS.strUnitNumber = tcsEsiidDtls.pop().unitNum;
					unitFromTCS.strZipcode= tcsEsiidDtls.pop().zipcode;
					unitFromTCS.strMeterType = tcsEsiidDtls.pop().meterType;
					unitFromTCS.strServiceArea= tcsEsiidDtls.pop().serviceArea;
					unitFromTCS.pending = tcsEsiidDtls.pop().esidPending;
					unitFromTCS.marketHold= tcsEsiidDtls.pop().marketHold;
					unitFromTCS.bpNumber = tcsEsiidDtls.pop().bpNumber;
					unitFromTCS.active = tcsEsiidDtls.pop().esidActive;
					unitFromTCS.strMoveInDate = (ESIIDList.pop().strMoveInDate);
					unitFromTCS.strMoveOutDate= (ESIIDList.pop().strMoveOutDate);
					unitFromTCS.bpNumber=(ESIIDList.pop().bpNumber);
					unitFromTCS.strTaxStatus=(ESIIDList.pop().strTaxStatus);
					unitListFromTCS.push(unitFromTCS);
				}
			}
		}
		if(this.isBuilder(s)){
			unitListFromTCS = this.mergeWithCCSPedingStatusForBuilderStop(unitListFromTCS,s);
			//unitListFromTCS = this.getUnavialbleDatesForUnitList(unitListFromTCS);
		}
		LoggerUtil.info("UPDATING THE SESSION UNIT LIST WITH THE ESIID LIST FROM TCS:::::::::"+unitListFromTCS.length);
		if(null != CommonUtil.getBMFSSSession(s) && !forCAAAndNONCAA){
			CommonUtil.getBMFSSSession(s).selectedProperty.ESIIDDetails.unitList = unitListFromTCS;
		}
		return unitListFromTCS;
	}

    private mergeWithCCSPedingStatusForBuilderStop(unitList:Array<Unit>, s:any):Array<Unit>{

		if(null != CommonUtil.getBMFSSSession(s) && null!=CommonUtil.getBMFSSSession(s).selectedProperty.ESIIDDetails.CCSNONCAAESIIDList){
            let esiidList = CommonUtil.getBMFSSSession(s).selectedProperty.ESIIDDetails.CCSNONCAAESIIDList;
			for(let esiid of Object.keys(esiidList)){
				for(let unit of Object.keys(unitList)){
					if(CommonUtil.equalsIgnoreCase(unitList.pop().esiid, esiidList.pop().esiid)){
						unitList.pop().stopPendingStatusFromCCS=(esiidList.pop().stopPendingStatusFromCCS);
					}
				}
			}
		}
		return unitList;
    }


    //get TDSP for ESIID
	public getTdspForEsiid(inputEsiid:string): Promise<any> {

      let tdsp:string = "";
  		let reqst = new TdspByESIDRequest();
		  //reqst.strCompanycode = cst.GMESS_CC_0270 ;
      reqst.pointOfDeliveryId = inputEsiid;
      var p = new Promise((resolve, reject) => {
		      this.myAccountService.getTDSPFromESID(reqst).then(t => {
              resolve(null != t && null != t.dataAvailable?t.serviceId:"");
          });
      });
      return p;
  }


    //get unavailable date list for an Esiid
	public  getUnavailableDatesForEsiid(inputEsiid:string): Promise<any>{

      var p = new Promise((resolve, reject) => {
    		this.getTdspForEsiid(inputEsiid).then(tdsp => {
            let request_date:string = moment().format("MM/DD/YYYY");
            let end_date:string = this.getEndDateStr();
            LoggerUtil.info("TDSTP::::::"+tdsp)
            this.getUnavailableDatesForTdsp(tdsp, request_date,end_date).then(s => {
                resolve(s);
            })
        });
      });
      return p;
  }

    private  getRequestDateStr():string{

        let request_date:string = moment().format("MM/DD/YYYY");
        LoggerUtil.info("####################Request Date MMDDYYYY"+request_date);
        return request_date;

   }

    private  getEndDateStr():string{
             let endMonth:string="";
             let endDay:string="";
             let date = new Date();
             let end_date:string = "";
             try{
                date.setDate(date.getDate() + 62);
                if((date.getMonth()+1)<10) {
                    endMonth="0"+(date.getMonth()+1);
                } else {
                    endMonth=""+(date.getMonth()+1);
                }

                if((date.getDate()) <10) {
                    endDay="0"+date.getDate();
                } else {
                    endDay=""+date.getDate();
                }

                end_date = (endMonth)+('/')+(endDay)+('/')+(date.getUTCFullYear());
                LoggerUtil.info("####################End Date MM/DD/YYYY"+end_date);
              }catch(err){
                  LoggerUtil.info("ERROR=====>>>>>"+err.message)
              }
            return end_date;
    }


     //get unavailable date list for a TDSP and date range (MMddyyyy)
	private getUnavailableDatesForTdsp( tdsp:string,  request_date:string,  end_date:string): Promise<any>{

        LoggerUtil.info("Start CommonUtilityHelper:getUnavailableDatesForTdsp().");
        let unavailableDates:string ="";
    		let req = new OetdspRequest();
    		req.strCompanyCode = cst.GMESS_CC_0270;
    		req.startDate = request_date;
    		req.endDate = end_date;
    		req.tdsp = tdsp;
        var p = new Promise((resolve, reject) => {
            this.myAccountService.getTdspSpecificCalendarDates(req).then(t => {
                resolve(null != t?{unavailableDates:t}:"");
            });
        });
        return p;
    }

    //THIS IS FOR ESIID LIST FOR CAA AND NON CAA FOR VIEW METER ESIID LINK
	public  getStrCAAAndNONCAACCSESIDListFormSession(s:any):Array<string>{

		let strESIIDList = new Array<string>();
		if(null != CommonUtil.getBMFSSSession(s) &&  null != CommonUtil.getBMFSSSession(s).selectedProperty.ESIIDDetails.CCSNONCAAESIIDList){
            CommonUtil.getBMFSSSession(s).selectedProperty.ESIIDDetails.CCSNONCAAESIIDList.forEach(esiid => {

			   strESIIDList.push(esiid.esiid);
            }
        )}

		if(null != CommonUtil.getBMFSSSession(s) && null != CommonUtil.getBMFSSSession(s).selectedProperty.ESIIDDetails.CCSCAAESIIDList){
			CommonUtil.getBMFSSSession(s).selectedProperty.ESIIDDetails.CCSCAAESIIDList.forEach(esiid =>{
				strESIIDList.push(esiid.esiid);
			}
        )}
		return strESIIDList;
	}

    public getCAAAndNONCAABPNumberListUnderMasterNode(s:any) :string[]{
		let caaAndNonCaaBPList = new Array<string>();
		caaAndNonCaaBPList = [...this.getCAABPNumberListUnderMasterNode(s)];
		caaAndNonCaaBPList=[...this.getNONCAABPNumberListUnderMasterNode(s)];
		return caaAndNonCaaBPList;
    }


    public static createBpAddressStrFromObj(address: any): string {

  		 if(null != address && CommonUtil.isNotBlank(address.streetNumber) && CommonUtil.isNotBlank(address.streetName)){
  			   return address.streetNumber+cst.EMPTY_SPACE+CommonUtil.toUpperCase(address.streetName)+cst.EMPTY_SPACE+CommonUtil.toUpperCase(address.city)
  					   +cst.EMPTY_SPACE+address.state+","+cst.EMPTY_SPACE+address.zipCode;
  		   }else{
  			   return cst.NOT_PROVIDED;
  		   }
    }


    public static mapAddressFromServiceLayerToAddressInFE(address: any): Address{

        var addr = new Address();
        if(undefined != address){
          addr.streetNum = undefined != address.streetNumber?address.streetNumber:cst.EMPTY_STR;
          addr.streetName = undefined != address.streetName?CommonUtil.toUpperCase(address.streetName):cst.EMPTY_STR;
          addr.city = undefined != address.city?CommonUtil.toUpperCase(address.city):cst.EMPTY_STR;
          addr.POBox = undefined != address.poBox?address.poBox:cst.EMPTY_STR;
          addr.state = undefined != address.state?address.state:cst.EMPTY_STR;
          addr.zipcode = undefined != address.zipCode?address.zipCode:cst.EMPTY_STR;
        }
        return addr;
    }

    /*
    public getSelectedPropertyBPType(s:any):string{

		if(this.isBMFSessionNotNull(s)){
			return CommonUtil.getBMFSSSession(s).selectedProperty.customerDtls.bpType;
		}
		return cst.EMPTY_STR;

    //return s.body.selectedPropBPType;
	}
*/
  private  isBMFSessionNotNull(s:any):boolean{
  		if(null != CommonUtil.getBMFSSSession(s)){
  			return true;
  		}
  		return false;
  	}

    //UT = User Type
	public  getSecurityRoleAndUserTypeFromWebSecurityRole(webSecurityRole:string,  returnType:string):string{

		if(_.isEqual(cst.USERTYPE_SP_INT_ADMIN, webSecurityRole)){
			return _.isEqual(returnType, "UT")?cst.EMPTY_STR:cst.SECURITY_ROLE_ADMIN;
		}else if(_.isEqual(cst.USERTYPE_SP_INT_AGT_EMM, webSecurityRole)){
			return _.isEqual(returnType, "UT")?cst.EMM:cst.SECURITY_ROLE_AGT;
		}else if(_.isEqual(cst.USERTYPE_SP_INT_AGT_EMA, webSecurityRole)){
			return _.isEqual(returnType, "UT")?cst.EMA:cst.SECURITY_ROLE_AGT;
		}else if(_.isEqual(cst.USERTYPE_SP_INT_AGT_OPREP, webSecurityRole)){
			return _.isEqual(returnType, "UT")?cst.EMPTY_STR:cst.SECURITY_ROLE_AGT;
		}else if(_.isEqual(cst.USERTYPE_SP_INT_READ_ONLY, webSecurityRole)){
			return _.isEqual(returnType, "UT")?cst.EMPTY_STR:cst.SECURITY_ROLE_READ_ONLY;
		}else if(_.isEqual(cst.USERTYPE_SP_EXT_BROKER, webSecurityRole)){
			return _.isEqual(returnType, "UT")?cst.EMPTY_STR:cst.SECURITY_ROLE_BROKER;
		}else if(_.isEqual(cst.USERTYPE_SP_EXT_BRK_ASC, webSecurityRole)){
			return _.isEqual(returnType, "UT")?cst.EMPTY_STR:cst.SECURITY_ROLE_BROKER_ASC;
		}else if(_.isEqual(cst.USERTYPE_SP_EXT_CA_PO, webSecurityRole)){
			return _.isEqual(returnType, "UT")?cst.PROPERTY_OWNER:cst.SECURITY_ROLE_CUS_ADMIN;
		}else if(_.isEqual(cst.USERTYPE_SP_EXT_CA_PM, webSecurityRole)){
			return _.isEqual(returnType, "UT")?cst.PROPERTY_MANAGER:cst.SECURITY_ROLE_CUS_ADMIN;
		}else if(_.isEqual(cst.USERTYPE_SP_EXT_CUS_ASC, webSecurityRole)){
			return _.isEqual(returnType, "UT")?cst.EMPTY_STR:cst.SECURITY_ROLE_CUS_ASC;
		}else if(_.isEqual(cst.USERTYPE_SP_EXT_READ_ONLY, webSecurityRole)){
			return _.isEqual(returnType, "UT")?cst.EMPTY_STR:cst.SECURITY_ROLE_EXT_READ_ONLY;
		}
		return cst.EMPTY_STR;
	}

  public createEsiidbpNumberDOForBuilderStopAndMFTxns(esiidList :any):Array<ESIIDBPNumberDO>{

      let EsiidbpNumberDOList = new Array<ESIIDBPNumberDO>();
      if(null != esiidList){
        esiidList.forEach((ESIID:ESIID) => {
             let ESIIDBP = new ESIIDBPNumberDO();
             ESIIDBP.bpNumber = (ESIID.bpNumber);
             ESIIDBP.esiid = (ESIID.esiid);
             ESIIDBP.esiidActiveFromCCS = (ESIID.active);
             EsiidbpNumberDOList.push(ESIIDBP);
          });
       }
       return EsiidbpNumberDOList;
  }


  public getESIDDetailsForMultifamilyFromCCS(req:any): Promise<any> {

      let inReq = this.populateEsiidDetailsForMultifamilyRequest(req);
      var p = new Promise((resolve,reject) => {
          this.myAccountService.getESIDDetailsForMultifamilyFromCCS(inReq).then(s => {
              let esiidListFromCCS: ESIID[] = this.populateESIIDResponseFromCCS(s);
              resolve(esiidListFromCCS)
          });
      });
      return p;
  }

  private populateESIIDResponseFromCCS(s: any): ESIID[] {

    let esiidList = new Array<ESIID>();
    try{
        if(undefined != s && s.dataAvilableForInput){
            LoggerUtil.info("GOT THE ESIID DETAILS FOR THE BP NUMBER LIST:::::");
            s.esiidDOList.forEach((esiidDO:any) => {
                let esiid = new ESIID();
                esiid.bpNumber = esiidDO.bpNumber;
                esiid.esiid = esiidDO.esiid;
                esiid.strMoveInDate = esiidDO.moveInDate;
                esiid.strMoveOutDate = esiidDO.moveOutDate;
                esiid.strTaxStatus = this.getTaxStatusTextBasedOnValue(esiidDO.taxStatus);
                esiid.strDepositAmount = esiidDO.depositAmount;
                esiid.stopPendingStatusFromCCS = esiidDO.stopPendingStatus;
                esiid.startPendingStatusFromCCS = esiidDO.startPendingStatus;
                esiid.active = esiidDO.active;
                esiidList.push(esiid);
            })
        }else{
          LoggerUtil.info("no response from ESIDDetailsForMultifamilyFromCCS")
        }
      }catch(err){
        LoggerUtil.info("ERROR====populateESIIDResponse=====>"+err.message);
      }
      return esiidList;
  }

  private populateEsiidDetailsForMultifamilyRequest(req: any): EsiidDetailsForMultifamilyRequest {

      let inReq = new EsiidDetailsForMultifamilyRequest();
      inReq.bpNumberList = req.body.bpNumberList;
      inReq.strCompanyCode = cst.GMESS_CC_0270;
      inReq.strPortal = cst.GMESS_PORTAL;
      inReq.strLoggedInUserName = CommonUtil.getLoggedInUserName(req);
      return inReq;

  }

  /*public updateSessionWithSubmittedTxnDetails(selectedUnit:Array<Unit>,  selectPropAddress:string, req:any){
  try{
    if(null != CommonUtil.getBMFSSSession(req) && null != CommonUtil.getBMFSSSession(req).selectedProperty.mfPropertyAddrList && CommonUtil.getBMFSSSession(req).selectedProperty.mfPropertyAddrList.length >0){
      CommonUtil.getBMFSSSession(req).selectedProperty.mfPropertyAddrList.forEach((propertyAddress:MFPropertyAddress) =>{
        if(CommonUtil.equalsIgnoreCase(selectPropAddress, propertyAddress.streetAddress)){
         propertyAddress.unitList.forEach((unit:Unit) => {
           selectedUnit.forEach((selUnit:Unit) =>{
              if(CommonUtil.equalsIgnoreCase(selUnit.strUnitNumber,unit.strUnitNumber)){
                unit.pending = (true);
              }
            });
          });
        }
      });
    }
  }catch(e){
    LoggerUtil.info("Error in updateSessionWithSubmittedTxnDetails :::"+e.message);
  }

}*/

 public getStructuralDetails(req: any): Promise<any> {

    let inReq = this.populateStructuralRequest(req);
    var p = new Promise((resolve,reject) => {
        this.billingService.getContractAccountList(inReq).then(s => {
            let indAndCollAccounts = this.divideCollectiveAndIndiAcounts(s);
            resolve(indAndCollAccounts);
        });
    });
    return p;
 }

 private populateStructuralRequest(req: any): StructuralRequest {
    let strucReq = new StructuralRequest();
    strucReq.bpNumberList = req.body.bpNumberList;
    strucReq.strCompanyCode = cst.GMESS_CC_0270;
    strucReq.strLoggedInUserName = CommonUtil.getLoggedInUserName(req);
    strucReq.strPortal = cst.GMESS_PORTAL;
    return strucReq;
 }


 private divideCollectiveAndIndiAcounts(s: any): any {

    let indContractAccountList = new Array<ContractAccount>();
    let collContractAccountList = new Array<ContractAccount>();
    let tempContractAccountList = new Array<string>();
    try{
      if(undefined != s && s.dataAvilableForInput){
          let strcuDOList: StructuralDO[] = this.populateStructuralList(s.structuralDOList);
          strcuDOList.forEach(strucDO => {
              if(CommonUtil.isNotBlank(strucDO.collContractAct)){
                  if(!CommonUtil.isArrayContains(tempContractAccountList,strucDO.collContractAct)){
                      let ca = new ContractAccount;
                      ca.partnerNumber = strucDO.partnerNumber;
                      ca.address = this.getAddressStringFromObject(strucDO).trim();
                      ca.contractAccountNumber = strucDO.collContractAct;
                      collContractAccountList.push(ca);
                      tempContractAccountList.push(strucDO.collContractAct);
                  }
              }else{
                  let ca = new ContractAccount;
                  ca.partnerNumber = strucDO.partnerNumber;
                  ca.address = this.getAddressStringFromObject(strucDO).trim();
                  ca.contractAccountNumber = strucDO.contractAccount;
                  indContractAccountList.push(ca);
              }
          })
          LoggerUtil.info("INDIVIDUAL CONTRACT ACCOUNT LIST::::::"+indContractAccountList.length);
		      LoggerUtil.info("COLLECTIVE CONTRACT ACCOUNT LIST::::::"+collContractAccountList.length);
      }
    }catch(err){
      LoggerUtil.info("ERROR=======divideCollectiveAndIndiAcounts==="+err.message)
    }
    return {collContractAccountList,indContractAccountList};
 }


 private getAddressStringFromObject(struc: StructuralDO): string{

		return struc.streetNum+" "+struc.streetName+((CommonUtil.isNotBlank(struc.unitNumber)?" Unit"+
				struc.unitNumber:cst.EMPTY_STR)+" "+struc.city+", "+struc.state+" "+struc.zipCode);
	}

 private populateStructuralList(strucList: any): StructuralDO[] {

    let structuralList = new Array<StructuralDO>();
    try{
        strucList.forEach((strucDO:any) => {
            let struc = new StructuralDO();
            struc.city = strucDO.city;
    				struc.collContractAct = strucDO.collContractAct;
    				struc.contract = strucDO.contract;
    				struc.contractAccount = strucDO.contractAccount;
    				struc.esiid = strucDO.esiid;
    				struc.fullZipCode = strucDO.fullZipCode;
    				struc.houseNo = strucDO.houseNo;
    				struc.partnerNumber = strucDO.partnerNumber;
    				struc.premiseType = strucDO.premiseType;
    				struc.state = strucDO.state;
    				struc.streetName = strucDO.streetName;
    				struc.streetNum = strucDO.streetNum;
    				struc.unitNumber = strucDO.unitNumber;
    				struc.zipCode = strucDO.zipCode;
            structuralList.push(struc);
        });
    }catch(err){
      LoggerUtil.info("ERROR======populateStructuralList=====>"+err.message)
    }
    return structuralList;
 }

 public getInvoicesAccountTypeForBilling(premiseType:string, propertyType: string):string {

		 let premiseName = "";
     try{
  		 if(CommonUtil.equalsIgnoreCase(propertyType, cst.CUSTOMERTYPE_PM)){
  			   premiseName = cst.PM_MIXED_PREMISE_TYPE;
  			   if(CommonUtil.equalsIgnoreCase(premiseType, cst.COMMON_AREA_02)){
  				    premiseName = cst.BMF_CMN_PREMISE_TYPE;
  				}else if(CommonUtil.equalsIgnoreCase(premiseType, cst.VU_OR_PREMISE_01)){
  				   premiseName = cst.PM_VU_PREMISE_TYPE;
  			  }
  		 }else if (CommonUtil.equalsIgnoreCase(propertyType, cst.CUSTOMERTYPE_HB)){
  			   premiseName = cst.HB_MIXED_PREMISE_TYPE;
  			   if(CommonUtil.equalsIgnoreCase(premiseType, cst.COMMON_AREA_02)){
  				    premiseName = cst.HB_PREMISE_PREMISE_TYPE;
  			   }else if(CommonUtil.equalsIgnoreCase(premiseType, cst.VU_OR_PREMISE_01)){
  				   premiseName = cst.BMF_CMN_PREMISE_TYPE;
  			   }
  		 }
     }catch(err){
        LoggerUtil.info("ERROR=====getInvoicesAccountTypeForBilling>>>>"+err.message)
     }
		 return premiseName;
	}
}
