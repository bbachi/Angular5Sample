import LoggerUtil from './../logs/log';
import Promise = require('tspromise');
import { UserDtlsForRstPswdRequest } from '../request/profile.request';
import * as cst from './../util/constant';
import { CommonUtil } from './../util/common.util';
import { BillingService } from '../services/billing.service';
import { PreviousBill } from '../model/billing.model'
import { PreviousBillsRequest } from '../request/billingdetails.request'
import  * as moment  from 'moment';
import { CommonUtilityHelper } from './../helper/commonutility.helper'
import * as _ from "lodash";

export class PreviousBillsHelper {

    private billingService: BillingService;
    private commonUtilityHelper: CommonUtilityHelper;

    constructor(){
        this.billingService = new BillingService();
        this.commonUtilityHelper = new CommonUtilityHelper();
    }

    public getPreviousBills(req: any) :Promise<any> {
        LoggerUtil.info("START::BillingHelper::getPreviousBillsWS()>>>>>>");
        let commonUtilityHelper = new CommonUtilityHelper();
        let request = this.getPreviousBillsRequest(req);
        let previousBillList = new Array<PreviousBill>();
        var p = new Promise((resolve, reject) => {
             this.billingService.getPreviousBills(request).then(s => {
                resolve(this.populatePreviousBills(s));
             });
        });
        return p;
    }

    private populatePreviousBills(s:any): PreviousBill[] {
        let previousBillList = new Array<PreviousBill>();
        try{
          if(null != s && s.dataAvilableForInput){
              s.previousBillsList.forEach((bill:any) => {
                  //skipping this invoice
                  if(this.commonUtilityHelper.isBillingDateIsCurrentDayMinusOneBusinessDay(bill.invoiceDate,"yyyy-MM-dd")){
                    let pb = new PreviousBill();
                    pb.invoiceDate = moment(bill.invoiceDate).format("MM/DD/YYYY");
                    pb.startBillPeriod = moment(bill.startBillPeriod).format("MM/DD/YYYY");
                    pb.endBillPeriod = moment(bill.endBillPeriod).format("MM/DD/YYYY");
                    pb.billType = "Vacant Units";//Hardcoded since only CSA/NCSA accounts only and no common Areas
                    pb.dueDate = moment(bill.dueDate).format("MM/DD/YYYY");
                    pb.invoiceAmount = bill.amountDue;
                    pb.invoiceNumber = bill.invoiceNumber;
                    previousBillList.push(pb);
                  }
              });
          }
        }catch(err){
          LoggerUtil.info("ERROR======populatePreviousBills()===>"+err.message)
        }
        return previousBillList;
    }

    private getPreviousBillsRequest(req: any): PreviousBillsRequest {
        let request = new PreviousBillsRequest();
        request.strCompanycode = cst.GMESS_CC_0270;
        request.strContractAccNumber = req.body.contractAccNumber;
        request.accountType = req.body.accountType;//collective or Individual Service layer will call different rfc depending on the account type
        request.strFromDateyhymhyd = moment().subtract(14, 'month').format('YYYY-MM-DD');
        request.strToDateyhymhyd = moment().format('YYYY-MM-DD');
        request.strLoggedInUserName = CommonUtil.getLoggedInUserName(req);
        return request;
    }

}
