import * as request from 'request';
import LoggerUtil from './../logs/log';
import Promise = require('tspromise');
import * as cst from './../util/constant';
import { RestUtil } from './../services/rest.util';
import { BaseService } from './base.service';


export class EmailService extends BaseService {

   constructor(){
        super();
    }

    public sendEmail(postData:any): Promise<any> {
        return this.restUtil.post(cst.SEND_EMAIL_URL, postData);
    }
}
