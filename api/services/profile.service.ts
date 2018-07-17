import * as request from 'request';
import LoggerUtil from './../logs/log';
import Promise = require('tspromise');
import * as cst from './../util/constant';
import { RestUtil } from './../services/rest.util';
import { BaseService } from './base.service';


export class ProfileService extends BaseService {

    constructor(){
        super();
    };

    public getUserDetailsForResetPassword(postData:any): Promise<any> {
        return this.restUtil.post(cst.GET_USERDTLS_FOR_PASSWORD_RESET, postData);
    }

    public getAssociates(postData:any): Promise<any> {
      return this.restUtil.post(cst.GET_ASSOCIATES_URL, postData);
    }

    public addUser(postData:any): Promise<any> {
        return this.restUtil.post(cst.ADD_USER_URL, postData);
    }

    public getUserProfile(postData:any): Promise<any> {
        return this.restUtil.post(cst.GET_USER_PROFILE_URL, postData);
    }

    public getUserProfileWithBPHierarchy(postData:any): Promise<any> {
        return this.restUtil.post(cst.GET_USER_PROFILE_WITH_BP_HIER_URL, postData);
    }

    public updateUser(postData:any): Promise<any> {
        return this.restUtil.post(cst.UPDATE_USER_URL, postData);
    }

    public deactivateUser(postData:any): Promise<any> {
        return this.restUtil.post(cst.DEACTIVATE_USER_URL, postData);
    }

    public searchUsersForUpdate(postData:any): Promise<any> {
      return this.restUtil.post(cst.GET_USERS_FOR_UPDATE_URL, postData);
    }

    public addUserTransaction(postData:any): Promise<any> {
      return this.restUtil.post(cst.ADD_USER_TXN_URL, postData);
    }

    public insertResetPasswordDtls(postData:any): Promise<any> {
          return this.restUtil.post(cst.INSERT_RESET_PWD_DTLS_URL, postData);
      }

    public updatePwdExpiryLink(postData:any): Promise<any> {
            return this.restUtil.post(cst.UPDATE_PWD_LINK_EXPIRY_URL, postData);
        }


}
