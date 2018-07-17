import * as request from 'request';
import LoggerUtil from './../logs/log';
import Promise = require('tspromise');
import * as cst from './../util/constant';
import { RestUtil } from './../services/rest.util';
import { BaseService } from './base.service';


export class UserTransactionService extends BaseService {

    constructor(){
        super();
    };

    public addFrontEndExceptionInBMFSSSchema(postData:any): Promise<any> {
        return this.restUtil.post(cst.ADD_FE_EXCEPTION_IN_DB_URL, postData);
    }

    public getUserTransactions(postData:any): Promise<any> {
        return this.restUtil.post(cst.GET_USER_TXNS_URL, postData);
    }

    public getUserTxnDetails(postData:any): Promise<any> {
        return this.restUtil.post(cst.GET_USER_TXN_DTLS_URL, postData);
    }


}