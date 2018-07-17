import LoggerUtil from './../logs/log';
import Promise = require('tspromise');
import { UserDtlsForRstPswdRequest, UpdatePwdExpiryRequest } from '../request/profile.request';
import * as cst from './../util/constant';
import { CommonUtil } from './../util/common.util';
import { ProfileService } from '../services/profile.service';
import { PasswordReset } from '../model/profile.model'
import { User } from '../model/user.model'
import { ResetPwdDtlsRequest, AddUserRequest, GetAssociatesRequest, UpdateUserRequest,
  SearchUsersForUpdateRequest, UserProfileWithBPHierarchyRequest, CreateUsrRequest, DeactivateUserRequest } from '../request/user.request';
import { Address, ManagementBP, Region, Property } from '../model/bmfss.session';
import { AddUserTxnRequest } from './../request/addusertxn.request'
import { EmailHelper } from './../helper/email.helper'
import { PreloginHelper } from '../helper/prelogin.helper'
import { LDAPHelper } from './../helper/ldap.helper'
import { UpdatePasswordVO } from './../model/updatepasswordvo';
import { LDAPService } from './../services/ldap.service'
import { CommonUtilityHelper } from './../helper/commonutility.helper';


export class ProfileHelper {

  private profileService: ProfileService;
  private preloginHelper: PreloginHelper;
  private ldapHelper: LDAPHelper;
  private emailHelper: EmailHelper;
  private ldapService: LDAPService;

  constructor(){
      this.profileService = new ProfileService();
      this.preloginHelper = new PreloginHelper();
      this.ldapHelper = new LDAPHelper();
      this.emailHelper = new EmailHelper();
      this.ldapService = new LDAPService();
  }


    public getUserDtlsForTransactionId(req: any): Promise<any> {

          let inReq = new UserDtlsForRstPswdRequest();
          let id = req.body.transactionId
          inReq.strTransactionId = id;
          inReq.strCompanyCode = cst.GMESS_CC_0270;
          inReq.strPortal = cst.GMESS_PORTAL;
          let passwordReset = new PasswordReset();
          var p = new Promise((resolve, reject) => {
             this.updatePwdExpiryLink(id).then(expiryStatus =>{
                if(expiryStatus){
                  this.profileService.getUserDetailsForResetPassword(inReq).then(s => {
                      if(undefined != s && s.dataAvailForInput){
                        LoggerUtil.info("GOT THE USER DETAILS FOR THE TRANSACTION ID::::::"+id);
                        passwordReset.confirmationNumber = (null != s.resetPasswordDO)?s.resetPasswordDO.transactionId:"";
                        passwordReset.email = (null != s.resetPasswordDO)?s.resetPasswordDO.email:"";
                        passwordReset.firstName = (null != s.resetPasswordDO)?s.resetPasswordDO.greetingName:"";
                        passwordReset.phoneNum = (null != s.resetPasswordDO)?s.resetPasswordDO.phoneNumber:"";
                        passwordReset.userName = (null != s.resetPasswordDO)?s.resetPasswordDO.userName:"";
                        passwordReset.txnId = (null != s.resetPasswordDO)?s.resetPasswordDO.transactionId:"";
                        passwordReset.phoneNumExtn = (null != s.resetPasswordDO)?s.resetPasswordDO.phoneNumberExtn:"";
                      }else{
                        LoggerUtil.info("DID NOT GET ANY USER DETAILS FOR THE TRANSACTION ID::::::"+id);
                      }
                      resolve(passwordReset);
                  })
                }else{
                  resolve(passwordReset);
                }

             });

          })
        return p;

    }

    public getUserProfileDetails(req: any): Promise<any> {

        var p = new Promise((resolve, reject) => {
          this.preloginHelper.getUserProfileDetails(req).then(s => {
              resolve(s);
          })
        })
        return p;
    }

    private populateUserDetails(s: any): User {

        let user = new User();
        try{
          user.firstName = s.userProfileDO.firstName;
          user.lastName = s.userProfileDO.lastName;
          user.altPhoneNumExtn = s.userProfileDO.altContactPhoneExtn;
          user.altPhoneNum = s.userProfileDO.altrContactPhone;
          user.billingAce = s.userProfileDO.billingAce;
          user.email = s.userProfileDO.emailId;
          user.faxNum = s.userProfileDO.faxNumber;
          user.phoneNum = s.userProfileDO.contactPhone;
          user.phoneNumExtn = s.userProfileDO.contactPhoneExtn;
          user.securityRole = s.userProfileDO.securityRole;
          user.securityRoleDisplayName = s.userProfileDO.userTypeDisplay;
          user.startStopAce = s.userProfileDO.startStopAce;
          user.userName = s.userProfileDO.userName;
          user.userCategory = s.userProfileDO.userCategory;
          user.userType = s.userProfileDO.userType;
          user.webSecurityRole = s.userProfileDO.webSecurityRole;
          user.brokerBPNumber = s.userProfileDO.brokerBPNumber;
          user.sapid = s.userProfileDO.sapId;
        }catch(err){
          LoggerUtil.info("ERROR=======>"+err.message)
        }
        return user;
    }


    public saveUser(req:any): Promise<any> {

      let userInfoVO = req.body.user;
      let createLdapReq = this.getCreateUserInLDAPReq(req);
      var p = new Promise((resolve, reject) => {
          this.ldapService.createUserinLDAP(createLdapReq).then(s => {
              if(null != s && s.bSuccessFlag){
                  LoggerUtil.info("THE USERNAME::::"+req.body.user.userName+"::HAS BEEN VALIDATED AND CREATED IN LDAP:");
                  let addUserReq = this.populateAddUserRequest(req);
                  this.profileService.addUser(addUserReq).then(t => {
                    if(null != t && t.dataAvailForInput){
                         LoggerUtil.info("The User has been Added in DB and transactionId is :::::"+t.transactionId + " and txnDate is==="+t.transactionDateTime);
                         addUserReq.linkTxnId=t.transactionId;
                         let emailStatus:boolean = this.sendAddUserEmail(addUserReq, req);
                        resolve({error:false,transactionNumber:t.transactionId,transDateAndTime:t.transactionDateTime});
                   }else{
                        resolve({error:true,errmsg:"Error Adding user to the DB"});
                   }
                  });
              }else{
                LoggerUtil.info("The User has not been Created in DB for the user name:::::"+req.body.user.userName);
                resolve({error:true,errmsg:"Error adding to LDAP"});
              }
          });
      });
      return p;
    }


  private  populateAddUserRequest(req:any):AddUserRequest{
    let addUserReq = new AddUserRequest();
    let commonUtilityHelper =  new CommonUtilityHelper();
    let securityRole = req.body.securityRole
		try{
    		addUserReq.strCompanyCode = (cst.GMESS_CC_0270);
    		addUserReq.firstName = (req.body.user.firstName);
    		addUserReq.lastName= (req.body.user.lastName);
    		addUserReq.userName=(req.body.user.userName);
    		addUserReq.emailId = (req.body.user.emailAddress);
    		addUserReq.sapId =("NA");
    		addUserReq.strPortal = (cst.GMESS_PORTAL);
        addUserReq.strLoggedInUserName = CommonUtil.getLoggedInUserName(req);
  			addUserReq.associatedAdminUsername = CommonUtil.getLoggedInUserName(req);
        addUserReq.contactPhone = req.body.user.phoneNumber;
    		addUserReq.contactPhoneExtn = req.body.user.phoneExtNumber;
    		addUserReq.faxNumber = req.body.user.faxNumber;
    		addUserReq.altrContactPhone = req.body.user.altPhoneNumber;
    		addUserReq.altrContactPhoneExtn = req.body.user.altPhoneExtNumber;
        if(CommonUtil.equalsIgnoreCase(securityRole, cst.USERTYPE_SP_EXT_BROKER)){
            addUserReq.webSecurityRole = (cst.USERTYPE_SP_EXT_BRK_ASC);
            addUserReq.billingAce =("NA");
            addUserReq.startStopAce = ("NA");
    		}else if(CommonUtil.equalsIgnoreCase(securityRole, cst.USERTYPE_SP_EXT_CA_PO) || CommonUtil.equalsIgnoreCase(securityRole, cst.USERTYPE_SP_EXT_CA_PM)){
            addUserReq.webSecurityRole = (cst.USERTYPE_SP_EXT_CUS_ASC);
            addUserReq.billingAce = (req.body.user.payBillAccess?"Y":"N");
            addUserReq.startStopAce= (req.body.user.startStopAccess?"Y":"N");
    		}
      	addUserReq = this.populateAddUserRequestWithBPDetails(addUserReq, req);
    }catch(e){
      LoggerUtil.error("Error in populateAddUserRequest()::::"+e.message)
    }
    return addUserReq;
  }

  private  populateAddUserRequestWithBPDetails(addUserReq:AddUserRequest, req:any):AddUserRequest{

		try{
    		let bpNumList = new Array<string>();
    		let bpNameList = new Array<string>();
    		let bpAddrList = new Array<string>();
    		let startStopAceList = new Array<string>();
    		let billingAceList = new Array<string>();
    	  let hierarchyLevelList = new Array<string>();
        let securityRole = req.body.securityRole;
        let commonUtilityHelper = new CommonUtilityHelper();
    		if(CommonUtil.equalsIgnoreCase(securityRole, cst.USERTYPE_SP_EXT_BROKER)){
    			LoggerUtil.info("ADDING BROKER ASSOCIATE:::::SO SETTING THE PROPERTY LEBVEL ACCESSPRIVILEGES::::::");
    			let mngList:Array<ManagementBP> = new Array<ManagementBP>();
          if(undefined != req.body.customerList && req.body.customerList.length > 0){
              req.body.customerList.forEach((cust:any) => {
                if(CommonUtil.equalsIgnoreCase(cust.hierarchyType, cst.HEIRARCHY_PROPERTY)){
                    bpNumList.push(cust.bpNumber);
                    bpNameList.push(cust.bpName);
                    bpAddrList.push(cust.strBPAddress);
                    startStopAceList.push(cust.startEnabled?"Y":"N");
                    billingAceList.push(cust.billingEnabled?"Y":"N");
                    hierarchyLevelList.push(cust.hierarchyType);
                }else{
                    bpNumList.push(cust.bpNumber);
                    bpNameList.push(cust.bpName);
                    bpAddrList.push(cust.strBPAddress);
                    startStopAceList.push("NA");
                    billingAceList.push("NA");
                    hierarchyLevelList.push(cust.hierarchyType);
                }
            });
          }
    		}else{
          if(undefined != req.body.customerList && req.body.customerList.length > 0){
            req.body.customerList.forEach((cust:any) => {
              bpNumList.push(cust.bpNumber);
              bpNameList.push(cust.bpName);
              bpAddrList.push(cust.strBPAddress);
              startStopAceList.push("NA");
              billingAceList.push("NA");
              hierarchyLevelList.push(cust.hierarchyType);
            });
          }
        }
    			addUserReq.bpNumberList = bpNumList;
    			addUserReq.bpNameList = bpNameList;
    			addUserReq.bpAddressList = bpAddrList;
    			addUserReq.startStopAceList = startStopAceList;
    			addUserReq.billingAceList = billingAceList;
    			addUserReq.hierarchyLevelList = hierarchyLevelList;
    			LoggerUtil.info("TOTAL NUMBER OF CUSTOMERS ASSOCIATING FOR THIS USER::::::::::"+bpNumList.length);
        }catch(e){
          LoggerUtil.error("Error in populateAddUserRequestWithBPDetails():::"+e.message)
        }

			return addUserReq;
	}


    private getCreateUserInLDAPReq(req: any): CreateUsrRequest {

      let createLdapReq = new CreateUsrRequest();
      var userInfo = req.body.user;
      createLdapReq.strFirstName = userInfo.firstName;
      createLdapReq.strCompanyCode = cst.GMESS_CC_0270;
      createLdapReq.strEmailId=userInfo.emailAddress;
      createLdapReq.strLDAPOrg=cst.GMESS_LDAP_ORG;
      createLdapReq.strLastName = userInfo.lastName;
      createLdapReq.strPassword ="";
      createLdapReq.strUserName = userInfo.userName;
      createLdapReq.strSSOUserType=cst.GME_SSO_TYPE;
      createLdapReq.strReliantUserType = "";
      createLdapReq.strBpId="";
      createLdapReq.strCAType ="";
      return createLdapReq;
  }

    public listAssociates(req: any): Promise<any> {

        let inReq = new GetAssociatesRequest();
        inReq.strPortal = cst.GMESS_PORTAL;
        inReq.strCompanyCode = cst.GMESS_CC_0270;
        inReq.strLoggedInUserName = CommonUtil.getLoggedInUserName(req);
        inReq.bcadminUserName = req.body.userName;
        var p = new Promise((resolve, reject) => {
            this.profileService.getAssociates(inReq).then(s => {
                var userList = new Array<User>();
                if(undefined != s && s.dataAvailForInput){
                    let asscList = s.associatedUserList;
                    asscList.forEach((assc:any) => {
                        let user = new User();
                        user.firstName = assc.firstName;
                        user.lastName = assc.lastName;
                        user.userName = assc.userName;
                        user.startStopAce = assc.startstopAce;
                        user.billingAce = assc.billingAce;
                        userList.push(user);
                    })
                }
                resolve(userList)
            })
        })
        return p;
    }

    public validateUserName(req: any): Promise<any> {

        var p = new Promise((resolve, reject) => {
            resolve({});
        })
        return p;
    }

    public updateUser(req: any): Promise<any> {

        LoggerUtil.info('updating user in helper::::'+JSON.stringify(req.body));
        let inReq = this.populateUpdateUserRequest(req);
        var p = new Promise((resolve, reject) => {
            this.profileService.updateUser(inReq).then(s => {
                if(undefined != s && s.dataAvailForInput){
                  if(req.body.fieldName != "brokerprivileges"){
                    this.emailHelper.updateUserConfirmEmail(this.emailHelper.getUpdateUserEmail(req));
                  }
                  LoggerUtil.info("THE EMAIL HAS BEEN SENT ABOUT UPDATE INFORMATION:::::"+req.body.user.email);
                  resolve({userUpdated:true, user:req.body.user, fieldName:req.body.fieldName})
                }else{
                  resolve({userUpdated:false, user:req.body.user})
                }
            });
        });
        return p;
    }

    public removeUser(req: any): Promise<any> {

        LoggerUtil.info('removing user in helper::::'+JSON.stringify(req.body));
        let request = new DeactivateUserRequest();
        request.strCompanyCode = cst.GMESS_CC_0270;
        request.strPortal = cst.ADMIN_TOOL;
        request.strUserName = req.body.userName;
        request.strLoggedInUserName = CommonUtil.getLoggedInUserName(req);
        var p = new Promise((resolve, reject) => {
          this.profileService.deactivateUser(request).then (s => {
            if(null != s && undefined != s && s.dataAvailForInput){
              LoggerUtil.info("SUCCESSFULLY REMOVED USER:::::" + req.body.userName);
              this.emailHelper.deactivateUserConfirmationEmail(req);
              resolve({error:false,transactionNumber:s.transactionId,transDateAndTime:s.transactionDate});
            }else{
              LoggerUtil.info("FAILED to REMOVE THE USER::::::" +req.body.userName);
              resolve({error:true,errorMsg:"FAILED to REMOVE THE USER"});
            }
           });
        });
        return p;
    }

    private populateUpdateUserRequest(req: any): UpdateUserRequest {

        let inReq = new UpdateUserRequest();
        let fieldIndicator: string = "";
        let fieldValue1 = cst.NA;
        let fieldValue2 = cst.NA;
        let fieldToUpdate = req.body.fieldName
        let user = req.body.user
        LoggerUtil.info("UPDATING:::"+fieldToUpdate+":::FOR THE USER:::"+user.userName)
        try{
            if(CommonUtil.equalsIgnoreCase(fieldToUpdate,'name')){
                fieldIndicator = "N";
                fieldValue1 = user.firstName;
                fieldValue2 = user.lastName;
            }else if(CommonUtil.equalsIgnoreCase(fieldToUpdate,'email')){
                fieldIndicator = "E";
                fieldValue1 = user.email;
            }else if(CommonUtil.equalsIgnoreCase(fieldToUpdate,'phone')){
                fieldIndicator = "P";
                fieldValue1 = CommonUtil.getFormattedPhoneNumber(user.phoneNum);
                fieldValue2 = user.phoneNumExtn;
            }else if(CommonUtil.equalsIgnoreCase(fieldToUpdate,'altphone')){
                fieldIndicator = "A";
                fieldValue1 = CommonUtil.getFormattedPhoneNumber(user.altPhoneNum);
                fieldValue2 = user.phoneExtnAlt;
            }else if(CommonUtil.equalsIgnoreCase(fieldToUpdate,'fax')){
                fieldIndicator = "F";
                fieldValue1 = CommonUtil.getFormattedPhoneNumber(user.faxNum);
            }else if(CommonUtil.equalsIgnoreCase(fieldToUpdate,'sapid')){
                fieldIndicator = "SAP";
                fieldValue1 = user.sapId;
            }else if(CommonUtil.equalsIgnoreCase(fieldToUpdate,'privileges')){
                fieldIndicator = "S";
                fieldValue1 = user.billingAce;
                fieldValue2 = user.startStopAce;
            }else if(CommonUtil.equalsIgnoreCase(fieldToUpdate,'brokerprivileges')){
                fieldIndicator = "B";
                fieldValue1 = req.body.billingAce;
                fieldValue2 = req.body.startStopAce;
            }

            inReq.strCompanyCode = cst.GMESS_CC_0270;
            inReq.strLoggedInUserName = CommonUtil.getLoggedInUserName(req);
            inReq.fieldValue1 = fieldValue1;
            inReq.fieldValue2 = fieldValue2;
            inReq.fieldIndicator = fieldIndicator;
            inReq.bpNumber = CommonUtil.isNotBlank(req.body.bpNumber)?req.body.bpNumber:''
            inReq.strPortal = cst.ADMIN_TOOL;
            inReq.portal = cst.ADMIN_TOOL;
            inReq.userName = user.userName;
        }catch(err){
          LoggerUtil.info("ERROR=====populateUpdateUserRequest======>"+err.message)
        }
        return inReq;
    }


    public searchUsersForUpdate(req: any): Promise<any> {

        let inReq = new SearchUsersForUpdateRequest();
        inReq.strCompanyCode = cst.GMESS_CC_0270;
        inReq.strLoggedInUserName = CommonUtil.getLoggedInUserName(req);
        inReq.strPortal = "ADMIN_TOOL";
        inReq.searchString = req.body.searchString;
        inReq.searchCriteria = req.body.searchType;
        inReq.userCategory = (req.body.userCategory != undefined)?req.body.userCategory.split(":")[1]:'ALL';
        if(req.body.searchType == cst.SEARCH_CRITERIA_CBP || req.body.searchType == cst.SEARCH_CRITERIA_BBP){
            inReq.userType = "NA";
        }else{
            inReq.userType = req.body.userCategory.split(":")[0];
        }
        inReq.webSecurityRole = "I_Admin_OPS_MGR";
        let loggedInUserName = CommonUtil.getLoggedInUserName(req);
        var p = new Promise((resolve, reject) => {
            this.profileService.searchUsersForUpdate(inReq).then(s => {
                if(null != s && null != s.updateUserSet && s.updateUserSet.length > 0){
                  LoggerUtil.info("FOUND USERS FOR THE SEARCH CRITERIA")
                    let userAry: any[] = s.updateUserSet;
                    let userList = new Array<User>();
                    userAry.forEach(u => {
                        var user = new User();
                        user.firstName = u.firstName;
                        user.lastName = u.lastName;
                        user.userName = u.userName;
                        user.securityRole = u.securityRole;
                        user.email = u.email;
                        if(u.securityRole == 'Agent' || u.securityRole == 'Customer Admin'){
                            user.securityRoleDisplayName = u.userTypeDisplay;
                        }else{
                            user.securityRoleDisplayName = "NA";
                        }
                        if(u.userName != loggedInUserName){
                            userList.push(user);
                        }
                        if(this.isUpdatingOwnprofile(req.body.userCategory)){
                            userList.push(user);
                        }
                    });
                    resolve(userList);
                }else{
                   LoggerUtil.info("NO BROKERS FOUND FOR THE SEARCH CRITERIA::")
                   resolve([]);
                }
            })
        });
        return p;
      }

      private isUpdatingOwnprofile(searchCategory: string): boolean {

        let isOwnprofile = (searchCategory != undefined)?searchCategory.split(":")[0]:'';
        if(isOwnprofile == "OWN"){return true;}
        return false;
    }

    /**
   * This ajax call to update the password for the first time user link OR update password on own profile page
   * based on transactionType
   *
   */
   public updatePassword(req:any):Promise<any> {
       LoggerUtil.info("START::ProfileHelper::updatePassword()>>>>>>");
       let sendEmailSts:string = "N";
       //console.log("Update password req body :::"+JSON.stringify(req.body))
       let userName = req.body.user.userName;
       let password = req.body.user.password;
       var p = new Promise((resolve, reject) => {
        this.addTransactionIdForPasswordReset(req,userName,"UP").then(txnId => {
           if(CommonUtil.isNotBlank(txnId)){
              let email = undefined != req.body.user.email?req.body.user.email:"";
              if(undefined == email || !CommonUtil.isNotBlank(email)){
                 resolve("E"); //Email Not Available for this user
              }
              this.updatePasswordInLDAPAndSendEmail(req.body.user,txnId).then(s => {
                //console.log(s)
                  resolve(s);
              })
           }else{
              LoggerUtil.info("ADDING UPDATE OR RESET PASSWORD TRANSACTION to DB FAILED::::::");
              resolve(false);
           }
         });
       });
       LoggerUtil.info("END::ProfileHelper::updatePassword()>>>>>>");
       return p;
  }


  public setupPasswordFirstTime(req: any): Promise<any> {
      LoggerUtil.info("START::ProfileHelper::setupPasswordFirstTime()>>>>>>");
     req.body.user.password = req.body.password;
      var p = new Promise((resolve, reject) => {
         this.updatePassword(req).then(s=>{
           resolve(s);
         })
      });
      LoggerUtil.info("END::ProfileHelper::setupPasswordFirstTime()>>>>>>");
      return p;
  }

  private updatePasswordInLDAPAndSendEmail(user: any,txnId: string): Promise<any>{

      var p = new Promise((resolve, reject) => {
        this.ldapHelper.updatePassword(user.userName, user.password).then(updSts => {
          LoggerUtil.info("UPDATE PASSWORD STATUS FROM THE LDAP:::"+updSts)
          if(updSts){
            let updPassVO:UpdatePasswordVO = this.getUpdatePasswordVO(user,txnId);
            this.emailHelper.updatePasswordConfirmationEmail(updPassVO);
            resolve(true);
          }else{
            resolve(false);
          }
        });
      });
      return p;
  }

  private populateAddUserTxnRequest(userName:string):AddUserTxnRequest{

     let request = new AddUserTxnRequest();
     try{
   		 request.strCompanyCode = cst.GMESS_CC_0270;
   		 request.strPortal = cst.GMESS_PORTAL;
   		 request.strLoggedInUserName = userName;
   		 request.strTransactionType = 'RP';  //RP = sending the password link to the user UP= updating the own password
   		 request.strUsername = userName;
     }catch(e){
       LoggerUtil.error("Error in ProfileHelper:populateAddUserTxnRequest()::: "+e.message);
     }
     	 return request;
  }

  private getUpdatePasswordVO(user: any,transactionId: string): UpdatePasswordVO {

      let updatePasswordVO = new UpdatePasswordVO();
      try{
      updatePasswordVO.userName = user.userName;
      updatePasswordVO.password = user.password;
      updatePasswordVO.emailAddress = user.email;
      updatePasswordVO.greetingName = user.firstName;
      updatePasswordVO.telPhNum = user.phoneNum;
      updatePasswordVO.phoneExtnNumber = user.phoneNumExtn;
      updatePasswordVO.confirmationNumber = transactionId;
    }catch(e){
      LoggerUtil.error("Error in getUpdatePasswordVO::: "+e)
    }
      return updatePasswordVO;
  }

  private  sendAddUserEmail(addUserRequest:AddUserRequest, req:any):boolean{
  LoggerUtil.info("START::ProfileHelper::sendAddUserEmail()>>>>>>");

  let emailStatus:boolean = false;
  try {
    let addUsrTxnReq = this.populateAddUserTxnRequest(req.body.user.userName);
    this.profileService.addUserTransaction(addUsrTxnReq).then(s => {
      if(undefined != s && s.dataAvailForInput && CommonUtil.isNotBlank(s.transactionId)){
         let isInsertResetPwd:boolean = false;
         let resetPwdDtlsReq = new ResetPwdDtlsRequest();
         resetPwdDtlsReq.txnId = s.transactionId;
         resetPwdDtlsReq.userName = addUserRequest.userName;
         resetPwdDtlsReq.expirationDate = "3";
         this.profileService.insertResetPasswordDtls(resetPwdDtlsReq).then(t =>{
            if(t){
              LoggerUtil.info("insertResetPasswordDtls resp is=="+t);
                isInsertResetPwd = true;
            }
            if(isInsertResetPwd){
              LoggerUtil.info("Start Sending Email...");
              try{
                addUserRequest.linkTxnId = (s.transactionId);
                let emailHelperVal = new EmailHelper();
                emailHelperVal.addUserConfirmEmail(req,s);
                emailHelperVal.addUserConfirmAdminEmail(req,addUserRequest.firstName,addUserRequest.lastName);
              }catch(e){
                  LoggerUtil.error("Exception when sending email..."+e.message);

              }
            }else{
            LoggerUtil.info("ADD USER TRANSACTION FOR RESETING PASSWORD FAILS::::");
          }
        });
      }
   });

}catch (e) {
    LoggerUtil.error("Error occured while sending user email:::", e.message);
    return false;
  }

  LoggerUtil.info("End::AddUserHelper::sendAddUserEmail()>>>>>>");
  return emailStatus;
}

public resetPassword(req:any): Promise<any> {

    let message: string = "E";
    let isInsertResetPwd = false;
    let emailHelper = new EmailHelper();
    let userName = req.body.userName
    let email = req.body.email
    let resetPasswordStatus = "N";
    var p = new Promise((resolve, reject) => {
        this.addTransactionIdForPasswordReset(req,userName, "RP").then(txnId => {
            LoggerUtil.info("TRANSACTION ID:::::"+txnId)
            if(CommonUtil.isNotBlank(txnId)){
                let resetPwdDtlsReq = new ResetPwdDtlsRequest();
                resetPwdDtlsReq.txnId = txnId;
                resetPwdDtlsReq.userName = userName;
                resetPwdDtlsReq.expirationDate = "3";
                this.profileService.insertResetPasswordDtls(resetPwdDtlsReq).then(insertSuccess =>{
                    LoggerUtil.info("PASSWORD RESET INSERTING INTO THE CPDB DATABASE STATUS=="+insertSuccess);
                    if(insertSuccess){
                        this.emailHelper.sendPasswordResetLinkEmail(email, txnId);
                        LoggerUtil.info("SENDING THE RESET PASSWORD LINK FOR THE USERNAME:::"+userName+":::EMAIL::"+email);
                        resetPasswordStatus = "Y"
                    }else{
                        LoggerUtil.info("RESET PASSWORD LINK FOR THE USERNAME NOT SENT:::"+userName+":::CPDB INSERTION FAILED");
                    }
                    resolve(resetPasswordStatus);
                });
            }else{
              resolve(resetPasswordStatus);
            }
        })
      });
      return p;
}

public updatePwdExpiryLink(transactionId:string): Promise<any> {

    let reqst =  new UpdatePwdExpiryRequest();
    reqst.txnId = transactionId;
    var p = new Promise((resolve, reject) => {
                this.profileService.updatePwdExpiryLink(reqst).then(updateSuccess =>{
                    LoggerUtil.info("Update PASSWORD expiry Link INTO THE CPDB DATABASE STATUS=="+updateSuccess);

                  resolve(updateSuccess);
                });

      });
      return p;
}

private addTransactionIdForPasswordReset(req:any, userName: string,transactionType: string): Promise<any> {

    LoggerUtil.info("UPDATING or RESETTING THE PASSWORD FOR TRANSACTION TYPE:::::::"+transactionType)
    let inReq = new AddUserTxnRequest();
    inReq.strCompanyCode = cst.GMESS_CC_0270;
    inReq.strPortal = cst.ADMIN_TOOL;
    inReq.strLoggedInUserName = CommonUtil.getLoggedInUserName(req);
    inReq.strTransactionType = transactionType;  //RP = sending the password link to the user UP= updating the own password
    inReq.strUsername = userName;
    LoggerUtil.info(JSON.stringify(inReq))
    var p = new Promise((resolve, reject) => {
      this.profileService.addUserTransaction(inReq).then(s => {
         if(undefined != s && s.dataAvailForInput){
             resolve(s.transactionId)
         }else{
             resolve("")
         }
       });
    });
    return p;
}


}
