import * as request from 'request';
import LoggerUtil from './../logs/log';
import Promise = require('tspromise');
import * as cst from './../util/constant';
import { RestUtil } from './../services/rest.util';
import { BaseService } from './base.service';


export class ProfileManagementService extends BaseService {

    constructor(){
        super();
    };

    public addUser(postData:any): Promise<any> {
        return this.restUtil.post(cst.ADD_USER_URL, postData);
    }

    public updateUserInfo(postData:any): Promise<any> {
        return this.restUtil.post(cst.UPDATE_USER_INFO_URL, postData);
    }

    public searchUsersForUpdate(postData:any): Promise<any> {
        return this.restUtil.post(cst.SEARCH_USERS_FOR_UPDATE_URL, postData);
    }

    public deactivateUser(postData:any): Promise<any> {
        return this.restUtil.post(cst.DEACTIVATE_USER_URL, postData);
    }

    public getUserProfile(postData:any): Promise<any> {
        return this.restUtil.post(cst.GET_USER_PROFILE_URL, postData);
    }

    public getAssociates(postData:any): Promise<any> {
        return this.restUtil.post(cst.GET_ASSOCIATES_URL, postData);
    }

    public addUserTransaction(postData:any): Promise<any> {
        return this.restUtil.post(cst.ADD_USER_TRANSACTION_URL, postData);
    }

    public getUserDetailsForResetPassword(postData:any): Promise<any> {
        return this.restUtil.post(cst.GET_USER_DETAILS_FOR_PWD_RESET, postData);
    }


}