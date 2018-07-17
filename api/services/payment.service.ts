import * as request from 'request';
import LoggerUtil from './../logs/log';
import Promise = require('tspromise');
import * as cst from './../util/constant';
import { RestUtil } from './../services/rest.util';
import { BaseService } from './base.service';


export class PaymentService extends BaseService {

    constructor(){
        super();
    };

    public modifyPayment(postData:any): Promise<any> {
        return this.restUtil.post(cst.MODIFY_PAYMENT_URL, postData);
    }


}