import * as request from 'request';
import LoggerUtil from './../logs/log';
import Promise = require('tspromise');
import * as cst from './../util/constant';
import { RestUtil } from './../services/rest.util';
import { BaseService } from './base.service';


export class ContentService extends BaseService {

    constructor(){
        super();
    };

    public getPlanDetails(postData:any): Promise<any> {
      return this.restUtil.post(cst.PLAN_DETAILS_URL, postData);
    }

    public getMessageContentByTitle(postData:any): Promise<any> {
      return this.restUtil.post(cst.MESSAGE_CONTENT_URL, postData);
    }

    public getFAQs(postData:any): Promise<any> {
      return this.restUtil.post(cst.FAQS_URL, postData);
    }
}
