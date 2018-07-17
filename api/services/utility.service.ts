import * as request from 'request';
import LoggerUtil from './../logs/log';
import Promise = require('tspromise');
import * as cst from './../util/constant';
import { RestUtil } from './../services/rest.util';
import { BaseService } from './base.service';


export class UtilityService extends BaseService {

    constructor(){
        super();
    };

    public logTransaction(xmlRequest:string): Promise<any> {
        return this.restUtil.post(cst.LOG_TRANSACTION_URL, xmlRequest);
    }

    public sendGMESSEmail(postData:any): Promise<any> {
        return this.restUtil.post(cst.SEND_GMESS_EMAIL_URL, postData);
    }

    public logTransactionWithEndPoint(postData:any): Promise<any> {
        return this.restUtil.post(cst.LOG_TRANSACTION_ENDPOINT_URL,postData);
    }


}