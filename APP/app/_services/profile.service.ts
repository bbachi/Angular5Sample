import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BaseService } from './base.service';
import * as URL_CONSTS from './urlconstants'

@Injectable()
export class ProfileService extends BaseService {

    private userDtlsForTxnIdUrl = URL_CONSTS.USER_DETAILS_TXN_ID_URL;
    private validateUserNameUrl = URL_CONSTS.VALIDATE_USER_NAME_URL;
    private saveUserUrl = URL_CONSTS.SAVE_USER_URL;
    private listAssociatesUrl = URL_CONSTS.LIST_ASSOCIATES_URL;
    private getUserProfileDetailsUrl = URL_CONSTS.GET_USER_PROFILE_DETAILS_URL;
    private userUpdateUrl = URL_CONSTS.USER_UPDATE_URL;
    private searchUsersForUpdateUrl = URL_CONSTS.SEARCH_USERS_FOR_UPDATE_URL;
    private firstTimeupdatePasswordUrl = URL_CONSTS.FIRST_TIME_UPDATE_PASSWORD_URL;
    private passwordResetUrl = URL_CONSTS.PASSWORD_RESET_URL;
    private passwordUpdateUrl = URL_CONSTS.PASSWORD_UPDATE_URL;
    private removeUserUrl = URL_CONSTS.REMOVE_USER_URL;

    private removeUserCustomerList: any[];


    getUserDtlsForTxnId(transactionId: string): Observable<any> {
        return super.callAPI(this.userDtlsForTxnIdUrl,{transactionId});
    }

    validateUserName(userName: string): Observable<any> {
        return super.callAPI(this.validateUserNameUrl,{userName});
    }

    saveUser(inData: any): Observable<any> {
        return super.callAPI(this.saveUserUrl,inData);
    }


    listAssociates(inData: any): Observable<any> {
        return super.callAPI(this.listAssociatesUrl,inData);
    }


    getUserProfileDetails(inData: any): Observable<any> {
        return super.callAPI(this.getUserProfileDetailsUrl,inData);
    }


    updateUser(inData: any): Observable<any> {
        if(inData.fieldName == 'password'){
           return super.callAPI(this.passwordUpdateUrl,inData);
        }else{
           return super.callAPI(this.userUpdateUrl,inData);
        }
    }


    searchUsersForUpdate(inData: any): Observable<any> {
        return super.callAPI(this.searchUsersForUpdateUrl,inData);
    }


    updatePassword(inData: any): Observable<any> {
        return super.callAPI(this.firstTimeupdatePasswordUrl,inData);
    }

    resetPassword(inData: any): Observable<any> {
        return super.callAPI(this.passwordResetUrl,inData);
    }

    removeUser(inData: any): Observable<any> {
        return super.callAPI(this.removeUserUrl,inData);
    }

    private getStrBPAddress(address: any): string {
        return address.streetNum+" "+address.streetName+" "+address.city+" "+address.state+", "+address.zipcode;
    }

    setRemoveUserCustomerList(customerList: any[]): void {
        this.removeUserCustomerList = customerList;
    }

    getRemoveUserCustomerList(): any[]{
        return this.removeUserCustomerList;
    }

    public isUserHasAssociations(securityRole: string): boolean {
        if(securityRole == 'I_Admin_OPS_MGR') return false;
        if(securityRole == 'I_Read-Only_IT') return false;
        if(securityRole == 'I_Agent_OPS_REP') return false;
        return true;
    }

    public isBrokerAmdin(securityRole: string): boolean {
        return securityRole == 'E_Broker_BRK_ADM';
    }

    public isBrokerAssociate(securityRole: string): boolean {
        return securityRole == 'E_Broker Associate_BRK_ASC';
    }

    public isAgentEMM(securityRole: string): boolean {
        return securityRole == 'I_Agent_EMM';
    }

    public isAgentEMA(securityRole: string): boolean {
        return securityRole == 'I_Agent_EMA';
    }

    public isCustomerAdmin(securityRole: string): boolean {
        return (securityRole == 'E_Customer Admin_PO' || securityRole == 'E_Customer Admin_PM')
    }

    public isCustomerAssociate(securityRole: string): boolean {
        return securityRole == 'E_Customer Associate_PS';
    }

    public showTableWithAccessPrivileges(securityRole: string): boolean {
        return (this.isBrokerAssociate(securityRole) || this.isBrokerAmdin(securityRole))
    }

    //this method is used for showing admin list while adding user.
    public processLoggedInCustomerListForAddUser(customerList: any): any[]{

        let modifiedList = [];
        try{
          let mngList, regionList, propertyList = [];
          if(customerList.mngBP){
              mngList = customerList.mngBPList
              mngList.forEach(mng => {
                  modifiedList.push({...{bpNumber:mng.bpNumber,bpName:mng.bpName,strBPAddress:mng.strBPAddress},...{hierarchyType:"MGMT"}});
                  mng.regionList.forEach(rgn => {
                      if(rgn.bpNumber != "NO_REGN"){
                          modifiedList.push({...{bpNumber:rgn.bpNumber,mngBpNumber:mng.bpNumber,bpName:rgn.bpName,strBPAddress:rgn.strBPAddress},...{hierarchyType:"REGN"}});
                      }
                      rgn.propertyList.forEach(prop => {
                          modifiedList.push({bpNumber:prop.relationshipId,mngBpNumber:mng.bpNumber,rgnBpNumber:rgn.bpNumber,strBPAddress:this.getStrBPAddress(prop.address),
                            bpName:prop.bpName,hierarchyType:"PROP",startEnabled:prop.startEnabled,billingEnabled:prop.billingEnabled});
                      })
                  })
              })
          }
          if(customerList.regionBP){
              regionList = customerList.regionList
              regionList.forEach(rgn => {
                  if(rgn.bpNumber != "NO_REGN"){
                      modifiedList.push({...{bpNumber:rgn.bpNumber,bpName:rgn.bpName,strBPAddress:rgn.strBPAddress},...{hierarchyType:"REGN"}});
                  }
                  rgn.propertyList.forEach(prop => {
                      modifiedList.push({bpNumber:prop.relationshipId,rgnBpNumber:rgn.bpNumber,strBPAddress:this.getStrBPAddress(prop.address),
                        bpName:prop.bpName,hierarchyType:"PROP",startEnabled:prop.startEnabled,billingEnabled:prop.billingEnabled});
                  })
              })
          }
          if(customerList.propertyBP){
              propertyList = customerList.propertyList
              propertyList.forEach(prop => {
                  modifiedList.push({bpNumber:prop.relationshipId,strBPAddress:this.getStrBPAddress(prop.address),
                    bpName:prop.bpName,hierarchyType:"PROP",startEnabled:prop.startEnabled,billingEnabled:prop.billingEnabled});
              })
          }
        }catch(err){
            //console.log("ERROR====processLoggedInCustomerListForAddUser>>>>>"+err.message)
        }
        return modifiedList;
    }

    //changing broker permissions in the admin customer list table.
    public setBrokerPermissions(event: any, customerList: any[]): any[]{
      try{
        customerList.forEach(cust => {
          if(cust.bpNumber == event.bpNumber){
              if(undefined != event.paybillAccess)cust.billingEnabled = event.paybillAccess;
              if(undefined != event.startStopAccess)cust.startEnabled = event.startStopAccess;
          }
        })
      }catch(err){
          //console.log("ERROR====setBrokerPermissions>>>>>"+err.message)
      }
      return customerList;
    }

    public checkForAccessPrivilegesForUserDetails(securityRole: String){
      return (securityRole == 'E_Customer Admin_PO'
      || securityRole == 'E_Customer Admin_PM' || securityRole == 'E_Customer Associate_PS')
    }

    //function to return values when updating user details
    public getUserWithUpdatedValues(inData: any, inUser: any){
        let user = Object.assign({},inUser);
        if(inData.fieldName == 'name'){
            user.firstName = inData.firstName;
            user.lastName = inData.lastName;
        }else if(inData.fieldName == 'phone'){
            user.phoneNum = inData.phoneNum;
            user.phoneNumExtn = inData.phoneNumExtn;
        }else if(inData.fieldName == 'altphone'){
            user.altPhoneNum = inData.altPhoneNum;
            user.phoneExtnAlt = inData.phoneExtnAlt;
        }else if(inData.fieldName == 'fax'){
            user.faxNum = inData.faxNum;
        }else if(inData.fieldName == 'email'){
            user.email = inData.email;
        }else if(inData.fieldName == 'password'){
            user.password = inData.password;
        }
        return user;
    }

}
