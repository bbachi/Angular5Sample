import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BaseService } from './base.service';
import { Payment, CollectiveInfo, PCIData } from '../app-state/models'
import * as URL_CONSTS from './urlconstants'
import * as moment from 'moment'

@Injectable()
export class BillingService extends BaseService {

    private getPaymentHistoryUrl = URL_CONSTS.GET_PAYMENT_HISTORY_URL;
    private getPreviousBillsUrl = URL_CONSTS.GET_PREVIOUS_BILLS_URL;
    private getContractAccountListUrl = URL_CONSTS.GET_CONTRACT_ACCOUNT_LIST_URL;
    private getInvoicesListUrl = URL_CONSTS.GET_INVOICE_LIST_URL;
    private getPaymentMethodsUrl = URL_CONSTS.GET_PAYMENT_METHODS_URL;
    private deletePaymentMethodUrl = URL_CONSTS.DELETE_PAYMENT_METHOD_URL;
    private cancelpaymentUrl = URL_CONSTS.CANCEL_PAYMENT_URL;
    private modifyPaymentUrl = URL_CONSTS.MODIFY_PAYMENT_URL;
    private submitPaymentUrl = URL_CONSTS.SUBMIT_PAYMENT_URL;
    private getDashboardPayDtlsUrl = URL_CONSTS.GET_BILLING_DTLS_FOR_DASHBOARD;
    private getDueDateForCAUrl = URL_CONSTS.GET_DUEDATE_FOR_CA_URL;


    getPaymentHistory(inData: any): Observable<any> {
        return super.callAPI(this.getPaymentHistoryUrl,inData);
    }

    getPreviousBills(inData: any): Observable<any> {
        return super.callAPI(this.getPreviousBillsUrl,inData);
    }

    getContractAccountList(inData: any): Observable<any> {
        return super.callAPI(this.getContractAccountListUrl,inData);
    }

    getBillingInvoiceList(inData: any): Observable<any> {
        return super.callAPI(this.getInvoicesListUrl,inData);
    }

    getPaymentMethods(inData: any): Observable<any> {
        return super.callAPI(this.getPaymentMethodsUrl,inData);
    }

    addPaymentMethod(inData: any): Observable<any> {
        return super.callAPI(this.getPaymentMethodsUrl,inData);
    }

    deletePaymentMethod(inData: any): Observable<any> {
        return super.callAPI(this.deletePaymentMethodUrl,inData);
    }

    submitPayment(inData: any): Observable<any> {
        return super.callAPI(this.submitPaymentUrl,inData);
    }

    cancelPayment(inData: any): Observable<any> {
        return super.callAPI(this.cancelpaymentUrl,inData);
    }

    modifyPayment(inData: any): Observable<any> {
        return super.callAPI(this.modifyPaymentUrl,inData);
    }

    getDashboardPaymentDtls(inData: any): Observable<any> {
        return super.callAPI(this.getDashboardPayDtlsUrl, inData);
    }

    getDueDateForCA(inData: any): Observable<any> {
        return super.callAPI(this.getDueDateForCAUrl, inData);
    }

    getCollectivePaymentInfo(invoice: any): Payment {
        let payment = new Payment;
        payment.type = "C";
        let collInfo = new CollectiveInfo();
        collInfo.bpNumber = invoice.bpNumber;
        collInfo.caNumber = invoice.contractAccount;
        collInfo.currentBalance = invoice.currentBalance;
        collInfo.dueDate = invoice.dueDate;
        collInfo.invoiceNumber = invoice.invoiceNumber;
        collInfo.pastDue = invoice.pastDue;
        collInfo.paymentAmount = invoice.currentBalance;
        collInfo.paymentDate = moment().format("MM/DD/YYYY");
        payment.collective = collInfo;
        return payment;
    }

    getModifiedPaymentData(data: any): any {

        let modifiedData: any = {};
        modifiedData.bankAccountNumber = data.bankAccNum;
        modifiedData.bankAccNum = data.bankAccNum;
        modifiedData.billingType = data.billingType;
        modifiedData.bpNumber = data.bpNumber;
        modifiedData.caNumber= data.accountNumber;
        modifiedData.cancelPaymentId = data.paymentID;
        modifiedData.maskedBankAccount = data.maskBankAccount;
        modifiedData.newPaymentAmount = data.paymentAmount;
        modifiedData.newPaymentDate = data.modifiedDate;
        modifiedData.nickName = data.nickName;
        modifiedData.oldPaymentAmount = data.paymentAmount;
        modifiedData.oldPaymentDate = data.scheduledCancelDate;
        modifiedData.routingNum = data.routingNum;
        return modifiedData;
    }

    getGMEToPCIData(selecprop: any, payment: any, paymentMethods: any, userCategory: string){
        let pciData: PCIData = new PCIData();
        try{
          pciData.masterBPName = selecprop.masterBPName;
          pciData.propertyName = selecprop.bpName;
          pciData.streetNumber = selecprop.address.streetNum;
          pciData.streetName = selecprop.address.streetName;
          pciData.city = selecprop.address.city;
          pciData.state = selecprop.address.state;
          pciData.zipcode = selecprop.address.zipcode;
          pciData.userCategoty = userCategory;
          pciData.paymentMethodsAvailable = (undefined != paymentMethods && paymentMethods.length > 0)?"Y":"N";
          let billingType = payment.type;
          if(billingType == "C"){
            pciData.collective = payment.collective;
          }
        }catch(err){
            console.log("ERROR====getGMEToPCIData>>>>"+err.message)
        }
        return pciData;
    }

    getSelectedBankDetails(nickName: string, storedBankDtls: any[]): any {
        let selectedBank = storedBankDtls.filter(bank => bank.nickname == nickName);
        return selectedBank.length > 0?Object.assign({},selectedBank[0]):{};
    }

    getBankInfoForStore(bank: any){
        let bankInfo: any = {};
        bankInfo.fromPCI = bank.fromPCI;
        if(bank.fromPCI){
            bankInfo.bankRoutingNumber = bank.routingNumber;
            bankInfo.bankAccountNumber = bank.tokenizedBankNumber;
            bankInfo.nickName = bank.nickName;
            bankInfo.saveBankFlag = bank.saveBankFlag;
            bankInfo.maskBankAccountNumber = "*********-"+bank.tokenizedBankNumber.split("-")[1];
        }else{
            bankInfo.bankRoutingNumber = bank.bankRoutingNum;
            bankInfo.bankAccountNumber = bank.bankAccountNum;
            bankInfo.maskBankAccountNumber = bank.maskedBankAcc;
            bankInfo.nickName = bank.nickname;
        }
        return bankInfo;
    }

    getPaymentHistoryCSVData(paymentHistoryList: any[]): any[]{

        let csvList: any[] = [];
        try{
          if(undefined != paymentHistoryList && paymentHistoryList.length > 0){
              paymentHistoryList.forEach(ph => {
                  csvList.push({receivedBy:ph.receivedBy,
                          accountNumber:ph.accountNumber,
                          paymentDescription:ph.paymentDescription,
                          paymentAmount:ph.paymentAmount,
                          postingDate:ph.postingDate.indexOf("invalid") != -1?"":ph.postingDate,
                          status:ph.status});
              })
          }
        }catch(err){
            console.log("ERROR===getPaymentHistoryCSVData>>>>"+err.message)
        }
        return csvList;
    }

}
