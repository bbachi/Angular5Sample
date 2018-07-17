import * as request from 'request';
import LoggerUtil from './../logs/log';
import Promise = require('tspromise');
import * as cst from './../util/constant';
import { RestUtil } from './../services/rest.util';
import { BaseService } from './base.service';


export class VUMService extends BaseService {

    constructor(){
        super();
    };

    public getVUMAlertSetup(postData:any): Promise<any> {
        return this.restUtil.post(cst.GET_VUM_ALERT_SETUP_URL, postData);
    }

    public updateVUMEmailPreference(postData:any): Promise<any> {
        return this.restUtil.post(cst.UPD_VUM_EMAIL_PREF_URL, postData);
    }

    public updateVUMESIDAttribute(postData:any): Promise<any> {
        return this.restUtil.post(cst.UPD_VUM_ESID_ATTR_URL, postData);
    }

    public getVUEDailyReportList(postData:any): Promise<any> {
        return this.restUtil.post(cst.GET_VUM_DAILY_REPORT_LIST_URL, postData);
    }


}