import * as request from 'request';
import LoggerUtil from './../logs/log';
import Promise = require('tspromise');
import * as cst from './../util/constant';
import { RestUtil } from './../services/rest.util';
import { BaseService } from './base.service';


export class PreLoginService extends BaseService {

    constructor(){
        super();
    };

    public getFirstLogOnFlag(postData:any): Promise<any> {
        return this.restUtil.post(cst.GET_FIRST_LOGON_URL, postData);
    }

    public setFirstLogOnFlag(postData:any): Promise<any> {
        return this.restUtil.post(cst.SET_FIRST_LOGON_URL, postData);
    }
     
    public getUserProfile(postData:any): Promise<any> {
        return this.restUtil.post(cst.GET_USER_PROFILE_URL, postData);
    }

    public getCustomerContractDetails(postData:any): Promise<any> {
        return this.restUtil.post(cst.GET_CUSTOMER_CONTRACT_DTLS_URL, postData);
    }

    public getBPHierarchy(postData:any): Promise<any> {
        return this.restUtil.post(cst.GET_BP_HIERARCHY_URL, postData);
    }

    public getUserProfileWithBPHierarchy(postData:any): Promise<any> {
        return this.restUtil.post(cst.GET_USER_PROFILE_WITH_BP_HIER_URL, postData);
    }
    
    public getBPHierarchyDtls(postData:any): Promise<any> {
        return this.restUtil.post(cst.GET_BP_HIERARCHY_DTLS_URL, postData);
    }

    public getAccessPrivForProperty(postData:any): Promise<any> {
        return this.restUtil.post(cst.GET_ACCESS_PRIVILEGES_FOR_PROP_URL, postData);
    }
  
    public updateBrokerWithNewlyAddedProperties(postData:any): Promise<any> {
        return this.restUtil.post(cst.UPD_BRKR_WITH_NEW_ADDED_PROPS_URL, postData);
    }

    
}