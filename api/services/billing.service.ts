import * as request from 'request';
import LoggerUtil from './../logs/log';
import Promise = require('tspromise');
import * as cst from './../util/constant';
import { RestUtil } from './../services/rest.util';
import { BaseService } from './base.service';


export class BillingService extends BaseService {

    constructor(){
        super();
    };

    public getPaymentHistory(postData:any): Promise<any> {

        return this.restUtil.post(cst.GET_PAYMENT_HISTORY_URL, postData);
    }

    public getPreviousBills(postData:any): Promise<any> {
        return this.restUtil.post(cst.GET_PREVIOUS_BILLS_URL, postData);
    }

    public getContractAccountList(postData:any): Promise<any> {

        return this.restUtil.post(cst.GET_CONTRACT_ACCOUNT_LIST_URL, postData);
    }

    public getBillingDetails(postData:any): Promise<any> {
        return this.restUtil.post(cst.GET_BILLING_DETAILS_URL, postData);
    }

    public submitPayment(postData:any): Promise<any> {
        return this.restUtil.post(cst.SUBMIT_PAYMENT_URL, postData);
    }

    public getBankDetails(postData:any): Promise<any> {
        return this.restUtil.post(cst.GET_BANK_DETAILS_URL, postData);
    }

    public deleteBankDetails(postData:any): Promise<any> {
        return this.restUtil.post(cst.DELETE_BANK_DETAILS_URL, postData);
    }

    public cancelPayment(postData:any): Promise<any> {
        return this.restUtil.post(cst.CANCEL_PAYMENT_URL, postData);
    }

    public modifyPayment(postData:any): Promise<any> {
        return this.restUtil.post(cst.MODIFY_PAYMENT_URL, postData);
    }

    public getDueDateForCA(caNumber: string): Promise<any> {
        return this.restUtil.get(cst.GET_DUEDATE_FOR_CA_URL+caNumber);
    }


}
