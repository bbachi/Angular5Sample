import LoggerUtil from './../logs/log';
import Promise = require('tspromise');
import * as cst from './../util/constant';
import { CommonUtil } from './../util/common.util';
import {CommonUtilityHelper} from '../helper/commonutility.helper';
import {LDAPService} from './../services/ldap.service'
import {ChangePwdRequest} from './../request/changepwd.request'
import * as _ from "lodash";

export class LDAPHelper {

  private ldapService: LDAPService;

  constructor(){
      this.ldapService = new LDAPService();
  }

  public  updatePassword( userName:string , password:string): Promise<any>{
      LoggerUtil.info("START::LDAPHelper::updatePassword()>>>>>>");
      let commonUtilityHelper = new CommonUtilityHelper();
      let pwRequest:ChangePwdRequest = this.populateChangePwdRequest(userName,password);
      let changePassword:boolean = false;
      var p = new Promise((resolve, reject) => {
        this.ldapService.updatePassword(pwRequest).then(t => {
          if(t.bSuccessFlag){
            LoggerUtil.info("THE PASSWORD HAS BEEN UPDATED FOR THE USER NAME:::::"+t.strUserName);
            changePassword = true;
          }else{
            LoggerUtil.info("THE PASSWORD HAS BEEN FAILED FOR THE USER NAME:::::"+userName+":::PASSWORD::::"+password);
            let errorMessage = "EXCEPTION OCCURED WHILE UPDATING THE PASSWORD FOR THE USERNAME:::"+userName;
            //commonUtilityHelper.addExceptionToBMFSSSchema("LDAP_FE",errorMessage, errorMessage,req);
          }
          resolve(changePassword);
        });
      });
      LoggerUtil.info("END::LDAPHelper::updatePassword()<<<<<<<<");
      return p;
}


private  populateChangePwdRequest(userName:string , password:string):ChangePwdRequest{
    LoggerUtil.info("START::LDAPHelper::populateChangePwdRequest()>>>>>>");
    let pwRequest = new ChangePwdRequest();
    try{
        pwRequest.strCompanyCode = cst.GMESS_CC_0270;
        pwRequest.strNewPassword = password;
        pwRequest.strUserName = userName;
        pwRequest.strLDAPOrg = cst.GMESS_LDAP_ORG;
        pwRequest.strSSOUserType = cst.GME_SSO_TYPE;
    }catch(e){
      LoggerUtil.info("Error in LDAPHelper::populateChangePwdRequest()>:::"+e.message);
    }
    LoggerUtil.info("END::LDAPHelper::populateChangePwdRequest()<<<<<<<<");
    return pwRequest;
}


}
