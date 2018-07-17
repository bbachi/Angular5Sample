import * as request from 'request';
import LoggerUtil from './../logs/log';
import Promise = require('tspromise');
import * as cst from './../util/constant';
import { RestUtil } from './../services/rest.util';
import { BaseService } from './base.service';


export class LDAPService extends BaseService {

    constructor(){
        super();
    };

    public updatePassword(postData:any): Promise<any> {
        return this.restUtil.post(cst.UPDATE_PASSWORD_IN_LDAP_URL, postData);
    }

    public isUserValidatedInLDAP(postData: any): Promise<any> {
        return this.restUtil.post(cst.IS_USER_VALIDATED_IN_LDAP_URL, postData);
    }

    public createUserinLDAP(postData:any): Promise<any> {
        return this.restUtil.post(cst.CREATE_USER_IN_LDAP_URL, postData);
    }


}
