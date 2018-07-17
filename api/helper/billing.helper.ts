import LoggerUtil from './../logs/log';
import Promise = require('tspromise');
import { UserDtlsForRstPswdRequest } from '../request/profile.request';
import * as cst from './../util/constant';
import { CommonUtil } from './../util/common.util';
import { BillingService } from '../services/billing.service';
import { BankDetailsDO, BankAccount, SubmitPayment, SubmitPaymentRequestDO,Payment, IndInvoice, PaymentHistory, PaymentHistoryDO, BillInvoices, CollectiveInvoice, IndividualInvoice } from '../model/billing.model'
import { BankDetailsRequest, SubmitPaymentRequest, UpdateBankDetailsRequest, BillingDetailsRequest } from './../request/billingdetails.request'
import moment = require('moment-timezone');
import { CommonUtilityHelper } from './../helper/commonutility.helper'
import { EmailHelper } from './../helper/email.helper'
import bigDecimal = require('js-big-decimal');
import * as _ from "lodash";
import { SchedulePaymentEmail, PaymentEmail } from '../model/email'

export class BillingHelper {

  private billingService: BillingService;
  private commonUtilityHelper: CommonUtilityHelper;
  private emailHelper : EmailHelper;

  constructor(){
      this.billingService = new BillingService();
      this.commonUtilityHelper = new CommonUtilityHelper();
      this.emailHelper = new EmailHelper();

  }

   /**
   * Gets the Billing invoices on the click on Pay bill on lefe navigation.
   * It returns both collective and individual invoices for the relationship id of the property.
   */
   public getBillingDetails(req: any): Promise<any> {
      return this.getInvoices(req);
   }

  private getInvoices(req: any): Promise<any> {

      let commonUtilityHelper = new CommonUtilityHelper()
      let request:BillingDetailsRequest = this.populateBillingDetailsRequest(req);
      var p = new Promise((resolve, reject) => {
       this.billingService.getBillingDetails(request).then(s => {
         let invoices =  new BillInvoices();
         if(null != s && undefined != s){
            invoices = this.processCollAndIndvBillInvoices(s, req);
         }else{
           let errorMessage = "BP NUMBER INPUT LIST TO GET THE BILLING INVOICES:::";
         }
         resolve(invoices)
       });
      })
      return p;
  }

  private  populateBillingDetailsRequest(req:any):BillingDetailsRequest{
      let commonUtilityHelper = new CommonUtilityHelper();
      let request = new BillingDetailsRequest();
      try{
        let nonCAABPList:string[] = req.body.nonCAABPList;
        LoggerUtil.info("BP NUMBER LIST FOR THE BILLING INVOICES:::::::::"+nonCAABPList);
        request.bpNumberList = nonCAABPList;
        request.strCompanycode = cst.GMESS_CC_0270;
        request.strPortal = cst.GMESS_PORTAL;
        request.strLoggedInUserName = CommonUtil.getLoggedInUserName(req);
      }catch(e){
        LoggerUtil.error("Error in BillingHelper::populateBillingDetailsRequest():::"+e.message);
      }
      return request;
  }

  private processCollAndIndvBillInvoices(response:any, req:any):BillInvoices {
        LoggerUtil.info("START BillingHelper processCollectiveAndIndividualBillingInvoices()>>>>>>>");
        let billInvoices = new BillInvoices();
      let commonUtilityHelper = new CommonUtilityHelper();
      try{
        if(null != response && CommonUtil.equalsIgnoreCase(response.arDetailsFound, "Y") &&
                CommonUtil.equalsIgnoreCase(response.structuralDetailsFound, "Y")){
            billInvoices.structuralDetailsFound = CommonUtil.equalsIgnoreCase(response.structuralDetailsFound, "Y");
            billInvoices.arDetailsFound = CommonUtil.equalsIgnoreCase(response.arDetailsFound, "Y");
            if(null != response.collectiveInvoices && response.collectiveInvoices.length >0){
                let collInvList = new Array<CollectiveInvoice>();
                response.collectiveInvoices.forEach((collDO:CollectiveInvoice) => {
                  let collInvoice = new CollectiveInvoice();
                  collInvoice.accountType = commonUtilityHelper.getInvoicesAccountTypeForBilling(collDO.accountType,"PM");
                  collInvoice.bpNumber = collDO.bpNumber;
                  collInvoice.contractAccount = collDO.contractAccount;
                  collInvoice.currentBalance = this.returnZeroIfItIsNegativeAmount(collDO.currentBalance);
                  collInvoice.dueDate = collDO.dueDate;
                  if(this.commonUtilityHelper.isBillingDateIsCurrentDayMinusOneBusinessDay(collDO.billingDate, "MM/DD/YYYY"))
                      collInvoice.invoiceNumber= collDO.invoiceNumber;
                  collInvoice.ncaStatus = collDO.ncaStatus;
                  collInvoice.pastDue = this.returnZeroIfItIsNegativeAmount(collDO.pastDue);
                  collInvoice.lastPaymentDate = collDO.lastPaymentDate;
                  collInvList.push(collInvoice);
                });
                LoggerUtil.info("THE COLLECTIVE INVOICES LIST SIZE::::::::"+collInvList.length);
                billInvoices.collectiveInvoices = (collInvList);
            }
            if(null != response.individualInvoices && response.individualInvoices.length >0){
                billInvoices = this.getIndividualInvoicesFromResponse(billInvoices,response,req);
                LoggerUtil.info("THE INDIVIDUAL INVOICES LIST SIZE::::::::"+billInvoices.individualInvoices.length);
            }
         }else{
            LoggerUtil.info("AR DETAILS OR STRUCTURAL DETAILS NOT FOUND::::::");
            billInvoices = this.getBillingInvoicesIfNoARDetailsFoundOrNOStructuralDtlsFound(billInvoices,response,req);
         }
    }catch(e){
    LoggerUtil.error("Error in BillingHelper:::");
  }
   return billInvoices;
}


private  returnZeroIfItIsNegativeAmount(strAmount:string):string{
        try{
            let amount = new bigDecimal(strAmount);
            if((amount.compareTo(new bigDecimal(0))) < 0){
                return "0.00";
            }

      }catch(e){
        LoggerUtil.error("Error in returnZeroIfItIsNegativeAmount()::: "+e.message);
      }
        return strAmount;
    }




  private  getIndividualInvoicesFromResponse( billInvoices:BillInvoices, response:any, req:any):BillInvoices{
    let cmnAreaInvoiceList = new Array<IndInvoice>();
    let  resInvoiceList = new Array<IndInvoice>();
    let individualInvoices = new Array<IndividualInvoice>();
    let commonUtilityHelper = new CommonUtilityHelper();
    try{

        let NONCAABPNumList:Array<string>= commonUtilityHelper.getNONCAABPNumberListUnderMasterNode(req);
        let CAABPNumList :Array<string>= commonUtilityHelper.getCAABPNumberListUnderMasterNode(req);
        let indInvList:Array<IndInvoice> = response.individualInvoices;
        indInvList.forEach((indDO:IndInvoice) =>{
             LoggerUtil.info("START Individual " + indDO.billingDate+" END");
            let invoice = new IndInvoice();
            invoice.bpNumber = (indDO.bpNumber);
            invoice.builderAddress = (indDO.builderAddress);
            invoice.contractAccount = (indDO.contractAccount);
            invoice.currentBalance = (this.returnZeroIfItIsNegativeAmount(indDO.currentBalance));
            invoice.currentBalanceFlag = (new bigDecimal(indDO.currentBalance).compareTo(new bigDecimal('0')) > 0);
            invoice.pastDueFlag = (new bigDecimal(indDO.pastDue).compareTo(new bigDecimal('0')) > 0);
            invoice.dueDate = (indDO.dueDate);
            invoice.finalBill = (indDO.finalBill);
            LoggerUtil.info("Invoice Number is " + indDO.invoiceNumber +" END");
            if(this.commonUtilityHelper.isBillingDateIsCurrentDayMinusOneBusinessDay(indDO.billingDate,"MM/dd/yyyy"))
                invoice.invoiceNumber = (indDO.invoiceNumber);
            invoice.ncaStatus = (indDO.ncaStatus);
            invoice.pastDue = (indDO.pastDue);
            invoice.paymentAmount=(this.returnZeroIfItIsNegativeAmount(indDO.paymentAmount));
            invoice.premise = (commonUtilityHelper.getInvoicesAccountTypeForBilling(indDO.premise, req));
            invoice.propertyUnit = (indDO.propertyUnit);
            invoice.lastPaymentDate=(indDO.lastPaymentDate);
            if(CAABPNumList.indexOf(indDO.bpNumber) >= 0){
                cmnAreaInvoiceList.push(invoice);
            }else if(NONCAABPNumList.indexOf(indDO.bpNumber) >= 0){
                resInvoiceList.push(invoice);
            }
        });
    }catch(e){
      LoggerUtil.error("Error in getIndividualInvoicesFromResponse::::"+e.message)
    }
        LoggerUtil.info("THE RESDENTAIL INVOICES::::::::"+resInvoiceList.length);
        LoggerUtil.info("THE COMMOM AREA INVOICES::::::::"+cmnAreaInvoiceList.length);
        billInvoices.cmnAreaIndInvList = (cmnAreaInvoiceList);
        billInvoices.resInvoiceList = (resInvoiceList);
        billInvoices = this.setBillingInvoicesForResidentialAndCommonAreas(billInvoices,individualInvoices,resInvoiceList,cmnAreaInvoiceList,req);

        return billInvoices;
    }

  private  setBillingInvoicesForResidentialAndCommonAreas( billInvoices:BillInvoices,individualInvoices:Array<IndividualInvoice> , resInvoiceList:Array<IndInvoice>, cmnAreaInvoiceList:Array<IndInvoice>,req:any ):BillInvoices{
    let commonUtilityHelper = new CommonUtilityHelper();
    try{
        if(null != resInvoiceList && resInvoiceList.length > 0){
            let resInvoice = new IndividualInvoice();
            if(commonUtilityHelper.isBuilder(req)){
                resInvoice.accountType = (cst.HB_PREMISE_PREMISE_TYPE);
            }else{
                resInvoice.accountType = (cst.PM_VU_PREMISE_TYPE);
            }
            resInvoice.currentBalance= (this.calculateTotalBalanceAndPastDue(resInvoiceList, true));
            resInvoice.pastDue=(this.calculateTotalBalanceAndPastDue(resInvoiceList, false));
            individualInvoices.push(resInvoice);
        }
        if(null != cmnAreaInvoiceList && cmnAreaInvoiceList.length > 0){
            let cmnAreaInvoice = new IndividualInvoice();
            cmnAreaInvoice.accountType =(cst.BMF_CMN_PREMISE_TYPE);
            cmnAreaInvoice.currentBalance =(this.calculateTotalBalanceAndPastDue(cmnAreaInvoiceList, true));
            cmnAreaInvoice.pastDue =(this.calculateTotalBalanceAndPastDue(cmnAreaInvoiceList, false));
            individualInvoices.push(cmnAreaInvoice);
        }
        billInvoices.individualInvoices =(individualInvoices);
    }catch(e){
      LoggerUtil.error("Error in setBillingInvoicesForResidentialAndCommonAreas:::"+e.message)
    }
        return billInvoices;
    }


private  calculateTotalBalanceAndPastDue(invoiceList:Array<IndInvoice> , isCurrentBal:boolean):string{

     let totalCurrentBalace = new bigDecimal(cst.DEFAULT_AMOUNT);
     let balance = new bigDecimal(cst.DEFAULT_AMOUNT);
     try{
         invoiceList.forEach((indDO:IndInvoice) =>{
           LoggerUtil.info("the current balace:::::::::::"+indDO.currentBalance);
           if(!CommonUtil.equalsIgnoreCase(indDO.ncaStatus, cst.STATUS_X_FLAG)){
             if(isCurrentBal)
               balance = new bigDecimal(indDO.currentBalance);
             else
               balance = new bigDecimal(indDO.pastDue);
             totalCurrentBalace = totalCurrentBalace.add(balance);
           }else{
             LoggerUtil.info("THIS CA HAS NCA FLAG X:::::NOT ADDING THIS CA AMOUNT TO TOTAL BALANCE::::");
           }
          LoggerUtil.info("the total current balace:::::::::::"+totalCurrentBalace);
         });
     }catch(e){
       LoggerUtil.error("Error in calculateTotalBalanceAndPastDue():::"+e.message)
     }

     return totalCurrentBalace.toString();
  }

  private  getBillingInvoicesIfNoARDetailsFoundOrNOStructuralDtlsFound( billInvoices:BillInvoices, response:any, req:any):BillInvoices{
        try{
            if(null != response && CommonUtil.equalsIgnoreCase(response.structuralDetailsFound, "y")){
                LoggerUtil.info("FOUND STRUCTURAL DETAILS:::::BUT NO AR DETAILS FOUND FOR THE CONTRACT ACCOUNTS:::::");
                let collContractAccList:Array<string> = (null !=response.collContractAccountList && response.collContractAccountList.length>0)?
                        (response.collContractAccountList):new Array<string>();
                  let indContractAccList:Array<string> = (null !=response.indContractAccountList && response.indContractAccountList.length>0)?
                         (response.indContractAccountList):new Array<string>();
                billInvoices.noArBalanceCollAcountList = (collContractAccList);
                billInvoices.noArBalanceIndAcountList = (indContractAccList);
            }
            billInvoices.structuralDetailsFound = (CommonUtil.equalsIgnoreCase(response.structuralDetailsFound, cst.YES));
            billInvoices.arDetailsFound = (CommonUtil.equalsIgnoreCase(response.arDetailsFound, cst.YES));
      }catch(e){
        LoggerUtil.error("Error in getBillingInvoicesIfNoARDetailsFoundOrNOStructuralDtlsFound():::"+e.message)
      }
      return billInvoices;
    }


  public submitPayment(req:any):Promise<any>{

      let commonUtilityHelper = new CommonUtilityHelper();

      let request:SubmitPaymentRequest = this.createSubmitPaymentRequest(req);
      var p = new Promise((resolve, reject) => {
        this.billingService.submitPayment(request).then(s => {
        if(null != s && undefined !=s && s.dataAvilableForInput){
            this.sendEmailIfPaymentSuccessful(req,s.confirmationNumber,request);
            resolve(
              {paymentSuccess:(undefined != s.confirmationNumber),
                confirmationNumber:s.confirmationNumber,
                submissionDate:moment().tz("America/Chicago").format("MMMM DD, YYYY HH:mm A z")
              }
            );
        }else{
            resolve({errorCode:2,errorMessage:s.message})
        }
        });
      })
      return p;
    }


    private sendEmailIfPaymentSuccessful(req: any,confirmNum: string, inReq: SubmitPaymentRequest): void{
        let emailHelper = new EmailHelper();
        try{
          if(undefined != confirmNum){
            let paymentStatus = inReq.submitPaymentRequestDOList[0].strCurrentSts;
            if(paymentStatus == cst.PAYMENT_SCHEDULED){
                emailHelper.sendScheduledPaymentConfirmEmail(emailHelper.getSchedulePaymentEmail(req,confirmNum,false));
            }else{
                emailHelper.sendPaymentConfirmEmail(emailHelper.getPaymentConfirmEmail(req));
            }
          }
        }catch(err){
            LoggerUtil.info("ERROR====sendEmailIfPaymentSuccessful>>>"+err.message);
        }
    }

    private  createSubmitPaymentRequest(req: any):SubmitPaymentRequest{

        let commonUtilityHelper = new CommonUtilityHelper();
        let inReq = new SubmitPaymentRequest();
        try{
           let billingType = req.body.payment.type;
           if(billingType == "C"){
                inReq = this.createSubmitPaymentRequestForCollective(req,inReq);
           }else{

           }
        }catch(err){
          LoggerUtil.error("Error in createSubmitPaymentRequest():::"+err.message);
        }
        return inReq;
     }


    private createSubmitPaymentRequestForCollective(req: any, inReq: SubmitPaymentRequest): SubmitPaymentRequest{

        try{
            inReq.strRelationshipId = req.body.relationshipId;
            let collectiveInfo = req.body.payment.collective;
            let bankInfo = req.body.payment.bank;
            inReq.strLoggedInUserName = CommonUtil.getLoggedInUserName(req);
            inReq.addBankDetailsFlag = bankInfo.saveBankFlag;
            inReq.strBankAccNumber = bankInfo.bankAccountNumber;
            inReq.strNickName = bankInfo.nickName;
            inReq.strRoutingNumber = bankInfo.bankRoutingNumber;
            inReq.dueDate = "";
            let submitPayList = new Array<SubmitPaymentRequestDO>();
            let submitDO = new SubmitPaymentRequestDO();
            submitDO.strBankAccountNum = bankInfo.bankAccountNumber;
            submitDO.strBpNumber = collectiveInfo.bpNumber;
            submitDO.strConractAccNum = collectiveInfo.caNumber;
            submitDO.strCurrentSts = this.getPaymentStatus(collectiveInfo.paymentDate);
            submitDO.strNickName = bankInfo.nickName;
            submitDO.strPaymentAmount = collectiveInfo.paymentAmount;
            submitDO.strPaymentDate = moment(collectiveInfo.paymentDate,"MM/DD/YYYY").format("YYYY-MM-DD");
            submitDO.strRoutingNum = bankInfo.bankRoutingNumber;
            submitPayList.push(submitDO);
            inReq.submitPaymentRequestDOList = submitPayList;
        }catch(err){
            LoggerUtil.info("ERROR====createSubmitPaymentRequestForCollective=====>"+err.message);
        }
        return inReq;
    }



  private  getPaymentList(paymentVO:any):Array<Payment>{
        let paymentList = new Array<Payment>();
    try{
            if(!paymentVO.collective){
          paymentVO.selectedCADtlList((indInv:IndInvoice) =>{
                    LoggerUtil.info("THE BPNUMBER AND CA FOR THIS PAYMENT IS::::"+indInv.bpNumber+"AND"+indInv.contractAccount+"::FOR:");
                    let payWS = new Payment();
                    //payWS.setBankAccountNumber(decodeBankAccNumber(paymentVO.getBankAccountNum()));
                    payWS.bankAccountNumber = (paymentVO.bankAccountNum);
                    payWS.contractAccountNumber = (indInv.contractAccount);
                    payWS.currStatus = (this.getPaymentStatus(paymentVO.indPaymentDate).toUpperCase());
                    payWS.nickName = (paymentVO.nickName);
                    payWS.partnerNumber=(indInv.bpNumber);
                    payWS.paymentAmount=(indInv.paymentAmount);
                    payWS.paymentDate = moment(paymentVO.indPaymentDate, cst.BILLPAY_DATE_FORMAT).toString();
                    payWS.routingNumber =(paymentVO.routingNum);
                    paymentList.push(payWS);
          });
            }else{
                LoggerUtil.info("Setting the payment object for the collective billing:::::");
                let payWS = new Payment();
                //payWS.setBankAccountNumber(decodeBankAccNumber(paymentVO.getBankAccountNum()));
                payWS.bankAccountNumber = (paymentVO.bankAccountNum);
                payWS.contractAccountNumber = (paymentVO.collContractAccount);
                payWS.currStatus = (this.getPaymentStatus(paymentVO.collPaymentDate).toUpperCase());
                payWS.nickName = (paymentVO.nickName);
                payWS.partnerNumber=(paymentVO.bpNumber);
                payWS.paymentAmount=(paymentVO.collPaymentAmount);
                LoggerUtil.info("THE PAYMENT DATE::::::::::::"+paymentVO.collPaymentDate);
                payWS.paymentDate=moment(paymentVO.collPaymentDate, cst.BILLPAY_DATE_FORMAT).toString();
                payWS.routingNumber =(paymentVO.routingNum);
                payWS.paymentID = ("");
                paymentList.push(payWS);
            }
    }catch(e){
      LoggerUtil.error("Error in getPaymentList()::: "+e.message)
    }

        return paymentList;

    }

  private getPaymentStatus(paymentDate:string):string{

        if(!(_.isEmpty(paymentDate))){
            if((moment(paymentDate, "MM/DD/YYYY").diff(moment.now())>0))
                return cst.PAYMENT_SCHEDULED;
            else
                return cst.PAYMENT_POSTED;
        }
        return "";
    }

  private processSuccessPaymentListAfterSubmission(paymentList:Array<Payment> , response:any):Array<Payment> {
  try{
     let submitSuccessList:Array<SubmitPayment> = (null != response.submitPaymentSuccessDOList && response.submitPaymentSuccessDOList.length >0)?
                (response.submitPaymentSuccessDOList):new Array<SubmitPayment>();
    submitSuccessList.forEach((payresponse:SubmitPayment) =>{
      paymentList.forEach((pay:Payment) =>{
                if(CommonUtil.equalsIgnoreCase(pay.contractAccountNumber, payresponse.contractAccount)){
                    LoggerUtil.info("THE SUCCESS STATUS MESSAGE:::"+payresponse.message+":::FOR::::"+payresponse.partner+":::AND::"+payresponse.contractAccount);
                    pay.message = (payresponse.message);
                    pay.confirmNum = (payresponse.confirmationNumber);
                  pay.status = ((null != payresponse.status && CommonUtil.equalsIgnoreCase(payresponse.status, cst.STATUS_S_FLAG)));
                }
            });
        });
  }catch(e){
    LoggerUtil.error("Error in processSuccessPaymentListAfterSubmission()::"+e.message);
  }
        return paymentList;
    }


    private processFailurePaymentListAfterSubmission(paymentList:Array<Payment> ,response:any):Array<Payment> {
        try{
         let submitFailureList:Array<SubmitPayment> = (null != response.submitPaymentFailureDOList && response.submitPaymentFailureDOList.length >0)?
                (response.submitPaymentFailureDOList):new Array<SubmitPayment>();
        submitFailureList.forEach((payresponse:SubmitPayment) =>{
              paymentList.forEach((pay:Payment) =>{
                        if(CommonUtil.equalsIgnoreCase(pay.contractAccountNumber, payresponse.contractAccount)){
                            LoggerUtil.info("THE FAILURE STATUS MESSAGE:::"+payresponse.message+":::FOR::::"+payresponse.partner+":::AND::"+payresponse.contractAccount);
                            pay.message = (payresponse.message);
                            pay.confirmNum = (payresponse.confirmationNumber);
                          pay.status = ((null != payresponse.status && CommonUtil.equalsIgnoreCase(payresponse.status, cst.STATUS_S_FLAG)));
                        }
            });
        });
    }catch(e){
      LoggerUtil.error("Error in processFailurePaymentListAfterSubmission()::::"+e.message);
    }
        return paymentList;
    }


  public getStoredBankDtls(req:any):Promise<any>{
      let strBankAccList = new Array<BankAccount>();
      let request:BankDetailsRequest = this.populateBankDetailsRequest(req);
      var p = new Promise((resolve, reject) => {
       this.billingService.getBankDetails(request).then(s => {
         strBankAccList = this.getStoredBankDetailsFromTheServiceList(s);
         resolve({size:strBankAccList.length, paymentmethods:strBankAccList})
       });
     });
     return p;
 }


  private  populateBankDetailsRequest(req:any):BankDetailsRequest{
        let commonUtilityHelper = new CommonUtilityHelper();
        let request = new BankDetailsRequest();
        try{
            let relationshipId:string = req.body.relationshipId;
            LoggerUtil.info("SLECTED PROPERTY RELATIONSHIP ID FOR THE STORED BANK DETAILS CALL::::"+relationshipId);
            request.strCompanycode = cst.GMESS_CC_0270;
            request.strRelationshipId = relationshipId;
            request.strLoggedInUserName = CommonUtil.getLoggedInUserName(req);
        }catch(e){
          LoggerUtil.error("Error in populateBankDetailsRequest():::"+e.message)
        }
        return request;
    }

  private  getStoredBankDetailsFromTheServiceList(response:any):Array<BankAccount>{

      let strBankAccList = new Array<BankAccount>();
      try{
        if(null != response && response.dataAvilableForInput){
            let bankAccountList:Array<BankDetailsDO> = (response.bankDetailsList);
            let dateList:Array<Date> = new Array<Date>();
            bankAccountList.forEach((bankAccount:BankDetailsDO) =>{
                let stBank = new BankAccount();
                stBank.bankAccountNum = bankAccount.bankAccNumber;
                stBank.maskedBankAcc= CommonUtil.maskNumber(bankAccount.bankAccNumber,3);
                stBank.bankRoutingNum = bankAccount.routingNumber;
                stBank.bpnumber = bankAccount.bpNumber;
                stBank.nickname = bankAccount.nickName;
                stBank.storedDate = bankAccount.lastUsed;
                dateList.push(moment(bankAccount.lastUsed, "yyyy-MM-dd").toDate());
                strBankAccList.push(stBank);
                strBankAccList = this.setLatestUsedStoredCard(strBankAccList, dateList);
            });
        }else{
            LoggerUtil.info("GOT THE NULL RESPONSE FROM THE SERVICE CALL:::::GETTING STORED BANK DETAILS FOR THE SELECTED PROPERTY::::");
        }
      }catch(e){
        LoggerUtil.error("Error in getStoredBankDetailsFromTheServiceList()::: "+e.message)
      }
      return strBankAccList;
    }

    private  setLatestUsedStoredCard(bankAccList:Array<BankAccount>, dateList:Array<Date> ):Array<BankAccount>{
        try{
          let latestDate:Date = CommonUtil.getSoonestDueDate(dateList);
          bankAccList.forEach((ba:BankAccount) =>{
              if(latestDate.getTime() === (moment(ba.storedDate, "YYYY-MM-DD").toDate().getTime())){
                  ba.selected = true;
              }
          });
        }catch(e){
           LoggerUtil.error("Error in setLatestUsedStoredCard()::::"+e.message)
        }
        return bankAccList;
    }

    public deleteBankDetails(req:any): Promise<any> {

        let inReq = this.populateUpdateBankDetailsRequest(req);
        var p = new Promise((resolve, reject) => {
            this.billingService.deleteBankDetails(inReq).then(s => {
                if(undefined != s && s.dataAvilableForInput){
                    let deleteStatus = s.strCCSCode == "S";
                    resolve({deleteStatus,message:s.strCCSMessage})
                }else{
                    resolve({deleteStatus:false, errorMessage:"No response from API"})
                }
            })
        });
        return p;
    }


    private populateUpdateBankDetailsRequest(req: any) {

        let inReq = new UpdateBankDetailsRequest();
        inReq.strAction = "D";
        inReq.strBankAccNumber = req.body.bankAccountNum;
        inReq.strLoggedInUserName = CommonUtil.getLoggedInUserName(req);
        inReq.strNickName = req.body.nickname;
        inReq.strRelationshipId = req.body.relationshipId;
        inReq.strRoutingNumber = req.body.bankRoutingNum;
        return inReq;
    }



    public getDashboardBillingDetails(req: any): Promise<any> {

        var p = new Promise((resolve, reject) => {
            if(undefined != req.body.invoices){
                resolve(this.calculateBalancesAndDues(req.body.invoices));
            }else{
                this.getInvoices(req).then(s => {
                    resolve(this.calculateBalancesAndDues(s));
                })
            }
        })
        return p;
   }


    private calculateBalancesAndDues(invoices: BillInvoices): any {

      let balances: any = {balanceDue:"Unavailable",currentBalance:"Unavailable",balanceForward:"Unavailable"};
      try{
        if(undefined != invoices && undefined != invoices.collectiveInvoices){
            let nonCAACollectiveInvoices = invoices.collectiveInvoices.filter(collInvoice =>
              (collInvoice.accountType == cst.PM_VU_PREMISE_TYPE || collInvoice.accountType == cst.PM_MIXED_PREMISE_TYPE));
            balances.balanceDue = this.getBalanceDue(nonCAACollectiveInvoices);
            balances.currentBalance = this.getCurrentBalance(nonCAACollectiveInvoices);
            balances.balanceForward = this.getBalanceForward(nonCAACollectiveInvoices);
        }
      }catch(err){
         LoggerUtil.info("ERROR=====calculateBalancesAndDues====>"+err.message);
      }
      return balances;
    }

    private getBalanceDue(nonCAACollectiveInvoices: CollectiveInvoice[]): string {

        let balanceDue = new bigDecimal("0.00");
        if(nonCAACollectiveInvoices.length > 0){
           nonCAACollectiveInvoices.forEach(collInv => {
              balanceDue = balanceDue.add(new bigDecimal(collInv.currentBalance));
           })
       }else{
          return "Unavailable";
       }
       return balanceDue.getValue();
    }

    private getCurrentBalance(nonCAACollectiveInvoices: CollectiveInvoice[]): string {

        let currentBal = new bigDecimal("0.00");
        let pastDueBal = new bigDecimal("0.00");
        if(nonCAACollectiveInvoices.length > 0){
           nonCAACollectiveInvoices.forEach(collInv => {
              currentBal = currentBal.add(new bigDecimal(collInv.currentBalance));
              pastDueBal = pastDueBal.add(new bigDecimal(collInv.pastDue));
           })
       }else{
          return "Unavailable";
       }
       return currentBal.subtract(pastDueBal).getValue();
    }

    private getBalanceForward(nonCAACollectiveInvoices: CollectiveInvoice[]): string {

        let pastDueBal = new bigDecimal("0.00");
        if(nonCAACollectiveInvoices.length > 0){
           nonCAACollectiveInvoices.forEach(collInv => {
              pastDueBal = pastDueBal.add(new bigDecimal(collInv.pastDue));
           })
       }else{
          return "Unavailable";
       }
       return pastDueBal.getValue();
    }

  }
