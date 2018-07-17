import LoggerUtil from './../logs/log';
import Promise = require('tspromise');
import { UserDtlsForRstPswdRequest } from '../request/profile.request';
import * as cst from './../util/constant';
import { CommonUtil } from './../util/common.util';
import { ProfileService } from '../services/profile.service';
import { DailyReport, VUMUnitAlertSetup, VUMEmail, Unit } from '../model/vum.model'
import { VUMEsidAttributeUpdateDO } from './../model/vumesidattributeupdatedo';
import { CommonUtilityHelper } from '../helper/commonutility.helper'
import{ VumDailyReportRequest, EmailPrefsUpdateRequest, VumUnitAlertRequest, VUMEsidAttributeUpdateRequest } from './../request/vum.request';
import { VUMService } from '../services/vum.service';
import { EmailHelper } from './email.helper';
import * as _ from "lodash";


export class VUMHelper {

    private profileService: ProfileService;
    private commonUtilityHelper: CommonUtilityHelper;
    private vumService: VUMService;
    private emailHelper: EmailHelper;

    constructor(){
        this.profileService = new ProfileService();
        this.commonUtilityHelper = new CommonUtilityHelper();
        this.vumService = new VUMService();
        this.emailHelper = new EmailHelper();
    }


    public getVUMDailyReportList(req:any):Promise<any>{
        LoggerUtil.info("START::MFVUMHelper::getVUMDailyReportList()>>>>>>");
        let request:VumDailyReportRequest = this.populateVumDailyReportRequest(req);
        var p = new Promise((resolve, reject) => {
          this.vumService.getVUEDailyReportList(request).then(s => {
            resolve(this.populateVUMDailyReportList(s,req.body.reportDate))
          });
        });
        LoggerUtil.info("END::MFVUMHelper::updateEmailPreference()<<<<<");
        return p;
    }


    private populateVUMDailyReportList(s:any,dailyReportDate: string): DailyReport[]{
          LoggerUtil.info("START::MFVUMHelper::getVUMDailyReportListFromResponse()>>>>>>");
          let dailyReportList = new Array<DailyReport>();
          if(undefined != s.vumDailyReportDOList && s.vumDailyReportDOList.length >0 && CommonUtil.isNotBlank(s.vumDailyReportDOList[0].consecutiveDays)){
            s.vumDailyReportDOList.forEach((vumDO:any) => {
                let report = new DailyReport();
                report.date = dailyReportDate;
                report.address = vumDO.streetAddress;
                //report.esiid = '"'+vumDO.esiid+'"';
                report.esiid = vumDO.esiid;
                report.kwh = vumDO.usageInKwh;
                report.threshold = vumDO.threshold;
                report.consecuteDays = vumDO.consecutiveDays;
                report.unitType = vumDO.unitType;
                dailyReportList.push(report);
            })
          }
          LoggerUtil.info("END::MFVUMHelper::getVUMDailyReportListFromResponse()<<<<<<");
          return dailyReportList;
      }

      private populateVumDailyReportRequest(req:any):VumDailyReportRequest {
        LoggerUtil.info("START::MFVUMHelper::populateVumDailyReportRequest()>>>>>>");
        let request = new VumDailyReportRequest();
        let commonUtilityHelper = new CommonUtilityHelper();
        try{
          request.dateRequiredToReturn = (_.isEmpty(req.body.reportDate));
          request.strCompanycode = cst.GMESS_CC_0270;
          request.strLoggedInUserName = CommonUtil.getLoggedInUserName(req);
          request.strDate = req.body.reportDate;
          request.strPortal = cst.GMESS_PORTAL;
          request.strRelationshipId = req.body.relationshipId;
        }catch(e){
          LoggerUtil.error("Error in MFVUMHelper::populateVumDailyReportRequest()::::" +e.message);
        }
        LoggerUtil.info("END::MFVUMHelper::populateVumDailyReportRequest()<<<<<<");
        return request;
    }

    private  isShowConsecutiveWrnMsg( vumDOList:any):boolean{
      vumDOList.forEach((vumDO:any) => {
        if((+(vumDO.consecutiveDays)) > 1){
          return true;
        }
      });
      return false;
    }

    public getVacantDailySetupData(req: any): Promise<any> {

        LoggerUtil.info("START::MFVUMHelper::getVacantDailySetupData()>>>>>>");
        let vumData = new VUMUnitAlertSetup();
        var p = new Promise((resolve, reject) => {
            this.populateVumUnitAlertRequest(req).then(inReq => {
                this.vumService.getVUMAlertSetup(inReq).then(s => {
                    resolve(this.getVUMSetupData(s));
                });
            });
        });
        return p;
    }

    private populateVumUnitAlertRequest(req: any): Promise<any> {

        let inReq = new VumUnitAlertRequest();
        inReq.strRelationshipId = req.body.relationshipId;
        inReq.strCompanycode = cst.GMESS_CC_0270;
        inReq.strLoggedInUserName = CommonUtil.getLoggedInUserName(req);
        inReq.strPortal = cst.GMESS_PORTAL;
        var p = new Promise((resolve, reject) => {
            if(undefined != req.body.esiidList && req.body.esiidList.length != 0){
                LoggerUtil.info("esiid length:::::"+req.body.esiidList.length);
                inReq.esiidList = req.body.esiidList;
                resolve(inReq);
            }else{
                LoggerUtil.info("ESIIDS NOT FOUND IN THE REQUEST:::::"+req.body.esiidList);
                this.commonUtilityHelper.getESIDDetailsForMultifamilyFromCCS(req).then(esiidList => {
                  if(null != esiidList){
                      let strEsiidList = new Array<string>();
                      esiidList.forEach((ESIID:any) => {strEsiidList.push(ESIID.esiid);});
                      inReq.esiidList = strEsiidList;
                      resolve(inReq);
                   }
                });
            }
        })
        return p;
    }

    private getVUMSetupData(s: any): VUMUnitAlertSetup {

        let setupData = new VUMUnitAlertSetup();
        try{
           if(null != s && s.dataAvilableForInput){
              let vumEmail = new VUMEmail();
              vumEmail.email1 = s.vumEmailDO.email1;
              vumEmail.email2 = s.vumEmailDO.email2;
              vumEmail.vueEmailStatus = (s.vumEmailDO.vueEmailStatus == 'Y');
              setupData.vumEmail = vumEmail;
              let unitList = new Array<Unit>();
              if(s.vumUnitList.length > 0){
                s.vumUnitList.forEach((u: any) => {
                    let unit = new Unit();
                    unit.esiid = u.esiid;
                    unit.city = u.city;
                    unit.bpNumber = u.bpNumber;
                    unit.unitNumber = u.unitNumber;
                    unit.streetNum = u.streetAddress;
                    unit.state = u.state;
                    unit.zipcode = u.zipcode;
                    unit.unitType = u.unitType.substring(2);
                    unit.unitThreshold = u.unitThreshold.substring(2);
                    unitList.push(unit);
                })
            }
            setupData.unitList = unitList;
          }
        }catch(err){
            LoggerUtil.info("ERROR=====getVUMSetupData====>"+err.message)
        }
        return setupData;
    }

    public updateEmailPreference(req: any): Promise<any> {

        let emailPrefUpdStatus: boolean = false;
        let inReq =  this.getEmailPreferenceRequest(req);
        var p = new Promise((resolve, reject) => {
            this.vumService.updateVUMEmailPreference(inReq).then(s => {
                if(null != s && s.dataAvilableForInput){
                    //this.sendEmailNotification(req);
                    emailPrefUpdStatus = s.dataAvilableForInput;
                    resolve({status:emailPrefUpdStatus,message:s.strMessage})
                }else{
                    emailPrefUpdStatus = s.dataAvilableForInput;
                    resolve({status:emailPrefUpdStatus,message:s.strMessage})
                }
            })
        });
        return p;
    }

    public updateESIIDAttribute(req: any): Promise<any> {

        let inReq = this.populateVUMEsidAttributeUpdateRequest(req);
        var p = new Promise((resolve, reject) => {
            this.vumService.updateVUMESIDAttribute(inReq).then(s => {
                resolve({status:s.dataAvilableForInput,message:s.ccsMessage})
            });
        });
        return p;
    }

    private populateVUMEsidAttributeUpdateRequest(req: any): VUMEsidAttributeUpdateRequest {

        let inReq = new VUMEsidAttributeUpdateRequest();
        let list = new Array<VUMEsidAttributeUpdateDO>();
        req.body.unitList.forEach((unit:any) => {
            let esiidDO = new VUMEsidAttributeUpdateDO();
            esiidDO.strBPNumber = unit.bpNumber;
            esiidDO.strEsiid = unit.esiid;
            esiidDO.strThreshold = unit.unitThreshold;
            esiidDO.strUnitType = unit.unitType;
            esiidDO.strStreetAddress = unit.streetAddress;
            esiidDO.strCity = unit.city;
            esiidDO.strState = unit.state;
            esiidDO.strZipcode = unit.zipcode;
            esiidDO.strUnit = unit.unitNumber;
            list.push(esiidDO);
        });
        inReq.strWebSubscriberId = "WEB";
        inReq.strCompanycode = cst.GMESS_CC_0270;
        inReq.strLoggedInUserName = CommonUtil.getLoggedInUserName(req);
        inReq.strPortal = cst.GMESS_PORTAL;
        inReq.strPropertyName = req.body.propertyName;
        inReq.esidAttributeUpdateRequestList = list;
        return inReq;
    }

    private sendEmailNotification(req: any): void {

        try{
          if(req.body.updateType == 'EP'){
              let email1 = req.body.email1;
              let email2 = req.body.email2;
              let emailFlag = req.body.emailFlag;
              //this.emailHelper.sendVUMOptInAndOptOutNotificationEmail(email1,email2,emailFlag,req);
          }
        }catch(err){
            LoggerUtil.info("ERROR======>>>>>"+err.message)
        }
    }

    private getEmailPreferenceRequest(req: any): EmailPrefsUpdateRequest {

        let inReq = new EmailPrefsUpdateRequest();
        try{
          inReq.strCompanycode = cst.GMESS_CC_0270;
          inReq.strLoggedInUserName = CommonUtil.getLoggedInUserName(req);
          inReq.strPortal = cst.GMESS_PORTAL;
          inReq.strEmailAddress1 = req.body.email1;
          inReq.strEmailAddress2 = req.body.email2;
          inReq.strPropertyName = req.body.propertyName;
          inReq.strUpdateType = req.body.updateType;
          inReq.strRelationshipId = req.body.relationshipId;
          inReq.strVUEEmailFlag = req.body.emailFlag;
        }catch(err){
            LoggerUtil.info("ERROR=====getEmailPreferenceRequest====>"+err.message)
        }
        return inReq;
    }
}
