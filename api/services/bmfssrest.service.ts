import * as request from 'request';
import LoggerUtil from './../logs/log';
import Promise = require('tspromise');
import * as cst from './../util/constant';
import { RestUtil } from './../services/rest.util';
import { DateUtil } from './../util/date.util';
import { BaseService } from './base.service';
import { CommonUtil } from './../util/common.util';
import { ESIID } from './../model/bmfss.session';
import { MFPropertyAddress } from './../model/bmfss.session';
import  * as moment  from 'moment';

export class BMFSSRestService extends BaseService {

    constructor(){
        super();
    };

    public getScheduledPaymentFlag(relationshipId:string): Promise<any> {

        return this.restUtil.get(cst.ENVIRONMENT_CONFIG.baseRestURL+"/accountmanagement/scheduledpaymentflag/"+relationshipId);
    }

    public getDueDateForCA(caNumber:string): Promise<any> {

         return this.restUtil.get(cst.ENVIRONMENT_CONFIG.baseRestURL+"/payment/duedate/"+caNumber);
     }

     public getNearTo5PMFlag(fromPage : string): boolean {

         var dateUtil = new DateUtil();
         return dateUtil.isNearTo5PM(fromPage);
     }

     public getSubmitNearTo5PMFlagHB(fromPage : string, s:any): boolean {
          var dateUtil = new DateUtil();
          var isSameDayNearto5pmflag: boolean= false;
  		    var isNearto5pmflag :boolean = dateUtil.isNearTo5PM(fromPage);
          let esiidIdList: Array<ESIID> = CommonUtil.getBMFSSSession(s).selectedProperty.ESIIDDetails.builderStartESIIDList;
          let today:string = moment().format("MM/DD/YYYY");
          esiidIdList.forEach(s => {
              let selectedStartDt: string = moment((esiidIdList.pop().selectedStartDate)).format("MM/DD/YYYY");
              if(CommonUtil.isNotBlank(esiidIdList.pop().selectedStartDate) && (moment(today).isSame(selectedStartDt)) && dateUtil.isNearTo5PM("Verify")) {
                isSameDayNearto5pmflag = true;
              }
          });
          return isSameDayNearto5pmflag;
      }



     public getSubmitNearTo5PMFlagMF(fromPage:string, s:any): boolean {

          var dateUtil = new DateUtil();
          var isSameDayNearto5pmflag: boolean= false;
          var isNearto5pmflag :boolean = dateUtil.isNearTo5PM(fromPage);
          let today:string = moment().format("MM/DD/YYYY");
		      let mfPropAddrList: Array<MFPropertyAddress> = 	CommonUtil.getBMFSSSession(s).selectedProperty.mfPropertyAddrList;
          mfPropAddrList.forEach(s => {
              s.unitList.forEach(unit => {
                if(unit.selected){
                    let effectiveDt: string = moment(unit.effectiveDate).format("MM/DD/YYYY");
                  if(CommonUtil.isNotBlank(unit.effectiveDate) && (moment(today).isSame(unit.effectiveDate)) && dateUtil.isNearTo5PM("Verify")) {
                     isSameDayNearto5pmflag = true;
                   }
                 }
              })
          });
          return isSameDayNearto5pmflag;;
      }

  }
