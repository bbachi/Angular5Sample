import * as request from 'request';
import LoggerUtil from './../logs/log';
import Promise = require('tspromise');
import * as cst from './../util/constant';
import { RestUtil } from './../services/rest.util';
import { BaseService } from './base.service';


export class ReportsService extends BaseService {

    constructor(){
        super();
    };

    public getVacancyReport(postData:any): Promise<any> {
        return this.restUtil.post(cst.GET_VACANCY_REPORT_URL, postData);
    }

    public getRollInReport(postData:any): Promise<any> {
        return this.restUtil.post(cst.GET_ROLLIN_REPORT_URL, postData);
    }

    public getRollOutReport(postData:any): Promise<any> {
        return this.restUtil.post(cst.GET_ROLLOUT_REPORT_URL, postData);
    }


}