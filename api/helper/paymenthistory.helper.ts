import LoggerUtil from './../logs/log';
import Promise = require('tspromise');
import { UserDtlsForRstPswdRequest } from '../request/profile.request';
import * as cst from './../util/constant';
import { CommonUtil } from './../util/common.util';
import { BillingService } from '../services/billing.service';
import { PaymentHistory, PaymentHistoryDO } from '../model/billing.model'
import { PaymentHistoryRequest, ModifyPaymentRequest, CancelPaymentRequest } from './../request/billingdetails.request'
import  * as moment  from 'moment';
import {CommonUtilityHelper} from './../helper/commonutility.helper'
import {EmailHelper} from './../helper/email.helper'
import bigDecimal = require('js-big-decimal');
import * as _ from "lodash";

export class PaymentHistoryHelper {

  private billingService: BillingService;
  private commonUtilityHelper: CommonUtilityHelper;
  private emailHelper : EmailHelper;

  constructor(){
      this.billingService = new BillingService();
      this.commonUtilityHelper = new CommonUtilityHelper();
      this.emailHelper = new EmailHelper();
  }


  public getPaymentHistory(req:any):Promise<any> {
      LoggerUtil.info("START::BillingHistoryHelper::getPaymentHistory())>>>>>>");
      let paymentHisList = new Array<PaymentHistory>();
      let request: PaymentHistoryRequest = this.populatePaymentHistoryRequest(req);
      var p = new Promise((resolve, reject) => {
         this.billingService.getPaymentHistory(request).then(s => {
           if(null != s && s.dataAvilableForInput){
              paymentHisList = this.returnPaymentHistoryListFromResponseWithFormattedDates(s.paymentHistoryDOList);
           }else{
              LoggerUtil.info("NO PAYMENT HISTORY RESPONSE FOR THE CONTRACT ACCOUNT::::"+req.body.contractAccount+":::ACCOUNT TYPE::"+req.body.accountType);
           }
           resolve(paymentHisList);
        });
     });
     return p;
  }


 private  populatePaymentHistoryRequest(req:any):PaymentHistoryRequest{
     let commonUtilityHelper = new CommonUtilityHelper();
     let request = new PaymentHistoryRequest();moment("12-25-1995", "MM-DD-YYYY");
     let startDate = moment(req.body.startDate,"MM/DD/YYYY");
     let endDate = moment(req.body.endDate,"MM/DD/YYYY");
     try{
       request.strCompanycode = cst.GMESS_CC_0270;
       LoggerUtil.info("GETTING PAYMENT HISTORY FOR THE BP NUMBER::::::::"+req.body.bpNumber+":::CA:::"+req.body.contractAccNumber+":::FROM DATE::"
                       +startDate+":::TO DATE:::"+endDate);
       request.strBppNumber = req.body.bpNumber;
       request.strContractAccNumber = req.body.contractAccNumber;
       request.strFromDateyhymhyd = moment(startDate).format("YYYY-MM-DD");
       request.strToDateyhymhyd = moment(endDate).format("YYYY-MM-DD");
       request.strLoggedInUserName = CommonUtil.getLoggedInUserName(req);
     }catch(err){
        LoggerUtil.info("ERROR=====populatePaymentHistoryRequest>>>>"+err.message)
     }
     return request;
  }

 private returnPaymentHistoryListFromResponseWithFormattedDates(paymentHisList:Array<PaymentHistoryDO>):Array<PaymentHistory>{

       let payHisList = new Array<PaymentHistory>();
       try{
         if(null != paymentHisList){
             paymentHisList.forEach((payDO : PaymentHistoryDO) =>{
               let payHis = new PaymentHistory();
               payHis.bankAccNum = payDO.bankAccNum;
               payHis.bpNumber = payDO.bpNumber;
               payHis.city = payDO.city;
               payHis.confirmNum = payDO.confirmNum;
               payHis.accountNumber = payDO.contractAccountNum;
               payHis.isCollective = payDO.isCollective;
               payHis.paymentAmount = payDO.paymentAmount;
               payHis.paymentDescription= payDO.paymentDescription;
               payHis.paymentDocNum= payDO.paymentDocNum;
               payHis.paymentID= payDO.paymentID;
               payHis.paymentLot= payDO.paymentLot;
               payHis.postingDate = moment(payDO.postingDate,"YYYY-MM-DD").format("MM/DD/YYYY");
               payHis.receivedBy = payDO.receivedBy;
               payHis.routingNum = payDO.routingNum;
               payHis.scheduledCancelDate= moment(payDO.scheduledCancelDate,"YYYY-MM-DD").format("MM/DD/YYYY");
               payHis.status= payDO.status;
               payHis.state = payDO.state;
               payHis.streetName = payDO.streetName;
               payHis.streetNo= payDO.streetNo;
               payHis.unitNo = payDO.unitNo;
               payHis.zipCode= payDO.zipCode;
               payHis.maskBankAccount= CommonUtil.maskNumber(payDO.bankAccNum, 3);//masking will be done in frontend
               payHisList.push(payHis);
            });
         }
       }catch(err){
          LoggerUtil.info("ERROR====returnPaymentHistoryListFromResponseWithFormattedDates>>>>"+err.message)
       }
       return payHisList;
   }

 public modifyPayment(req:any):Promise<any> {

     let commonUtilityHelper =new CommonUtilityHelper();
     let emailHelper = new EmailHelper();
     LoggerUtil.info("START::BillingHistoryHelper::modifyPayment()>>>>>>");
     let paymentHisList = new Array<PaymentHistory>();
     let request: ModifyPaymentRequest = this.populateModifyPaymentRequest(req);
     var p = new Promise((resolve, reject) => {
        this.billingService.modifyPayment(request).then(s => {
          if(null != s && s.cancelPaymentSuccess && s.paymentSubmitSuccess){
             resolve({
                      confirmationNumber:s.confirmationNum,
                      submissionDate:moment().tz("America/Chicago").format("MMMM DD, YYYY HH:mm A z")
                    })
             emailHelper.sendModifyPaymentConfirmEmail(req,s.confirmationNum);
          }else{
            LoggerUtil.info("ModifyPayment failed!! "+JSON.stringify(s));
            resolve({error:2, errorMessage:s.errorMessage})
          }
       });
     });
     return p;
}




private  populateModifyPaymentRequest(req:any):ModifyPaymentRequest{

    let commonUtilityHelper = new CommonUtilityHelper();
    let request = new ModifyPaymentRequest();
    try{
      request.bankAccountNumber = req.body.bankAccountNumber;
      request.billingType = req.body.billingType;
      request.bpNumber = req.body.bpNumber;
      request.caNumber= req.body.caNumber;
      request.cancelPaymentId = req.body.cancelPaymentId;
      request.loggedInUserName = CommonUtil.getLoggedInUserName(req);
      request.maskedBankAccount = CommonUtil.maskNumber(req.body.bankAccountNumber,3);
      request.newPaymentAmount = req.body.newPaymentAmount.trim();
      request.newPaymentDate = req.body.newPaymentDate;
      request.nickName = req.body.nickName;
      request.oldPaymentAmount = req.body.oldPaymentAmount.trim();
      request.oldPaymentDate = moment(req.body.oldPaymentDate,"MM/DD/YYYY").format("YYYY-MM-DD");
      request.relationshipId = req.body.relationshipId;
      request.routingNumber = req.body.routingNum;
    }catch(err){
        LoggerUtil.info("ERROR====populateModifyPaymentRequest>>>> "+err.message);
    }
    return request;
}


public  cancelPayment(req:any):Promise<any>{

    let commonUtilityHelper = new CommonUtilityHelper();
    let request = this.populateCancelPaymentRequest(req);
    var p = new Promise((resolve, reject) => {
      this.billingService.cancelPayment(request).then(s => {
         if(null != s && s.success){
              resolve({status:"Y", cancelDate:moment().format("MM/DD/YYYY")})
              this.emailHelper.sendPaymentCancelEmail(this.emailHelper.getPaymentCancelEmail(req,false));
           }else{
              resolve({status:"N"})
              LoggerUtil.info("Cancel payment failed!! "+s.errorMessage);
           }
        });
    });
    return p;
}


  private  populateCancelPaymentRequest(req:any):CancelPaymentRequest {
    let request = new CancelPaymentRequest();
    try{
      request.caNumber = req.body.caNumber;
      request.paymentId = req.body.paymentId;
    }catch(e){
      LoggerUtil.error("Error in populateCancelPaymentRequest()::: "+e)
    }
    return request;
  }

  public getDueDateForCA(req: any): Promise<any> {

      var p = new Promise((resolve, reject) => {
          let caNumber = req.body.caNumber;
          if(CommonUtil.isNotBlank(caNumber)){
              this.billingService.getDueDateForCA(caNumber).then(s => {
                  resolve({dueDate:s});
              })
          }else{
              resolve({dueDate:""})
          }
      });
      return p;
  }

}
