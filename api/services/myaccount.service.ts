import * as request from 'request';
import LoggerUtil from './../logs/log';
import Promise = require('tspromise');
import * as cst from './../util/constant';
import { RestUtil } from './../services/rest.util';
import { BaseService } from './base.service';


export class MyAccountService extends BaseService {

    constructor(){
        super();
    };

    public getESIDDetailsFromTCS(postData:any): Promise<any> {
        return this.restUtil.post(cst.GET_ESIID_DETAILS_FROM_TCS_URL, postData);
    }

    public getESIDDetailsForBuilderFromCCS(postData:any): Promise<any> {
        return this.restUtil.post(cst.GET_ESIID_DTLS_BLDR_FROM_CCS_URL, postData);
    }

    public getESIDDetailsForMultifamilyFromCCS(postData:any): Promise<any> {
        return this.restUtil.post(cst.GET_ESIID_DTLS_MF_FROM_CCS_URL, postData);
    }
    
    public getTDSPFromESID(postData:any): Promise<any> {
        return this.restUtil.post(cst.GET_TDSP_FROM_ESIID_URL, postData);
    }

    public getTdspSpecificCalendarDates(postData:any): Promise<any> {
        return this.restUtil.post(cst.GET_TDSP_CALENDAR_DATES_URL, postData);
    }


}