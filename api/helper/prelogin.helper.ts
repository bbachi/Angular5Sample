import LoggerUtil from './../logs/log';
import Promise = require('tspromise');
import * as cst from './../util/constant';
import { CommonUtil } from './../util/common.util';
import { PreLoginService } from './../services/prelogin.service';
import { Error } from './../model/error';
import {BPHierarchyDtlsResponse} from './../model/bphierarchydtlsresponse';
import {HierarchyDtlsDO} from './../model/bphierarchydtlsresponse';
import {CustomerDetails} from './../model/customerdetails';
import {AccessPrivilegesRequest, GetCustomerContractRequest, BPHierarchyRequest, BPHierarchyDtlsRequest } from './../request/prelogin.request';
import {CustomerContractDO} from './../model/customercontractdo';
import { FirstLogonFlagRequest, UserProfileWithBPHierarchyRequest } from '../request/user.request';
import { FirstLogOnFLag, User } from '../model/user.model'
import { CommonUtilityHelper } from './commonutility.helper';
//import { BMFSSSession } from './../model/bmfss.session';
import { HierarchyDetails, ManagementBP, Region } from '../model/hierarchy.model';
import { Property } from '../model/bmfss.session';

export class PreloginHelper {

    private preloginService: PreLoginService;
    constructor(){
        this.preloginService = new PreLoginService();
    }


     public getFirstLogonFlag(req: any): Promise<any> {

          LoggerUtil.info("GETTING FIRST LOGON FLAG FOR THE USERNAME:::::"+req.body.userName)
          let inReq = this.populateFirstLogonFlagRequest(req.body.userName);
          var p = new Promise((resolve, reject) => {
              this.preloginService.getFirstLogOnFlag(inReq).then(s => {
                let flag = new FirstLogOnFLag();
                flag.userName = req.body.userName;
                if(undefined != s && s.dataAvailForInput) {
                    flag.firstLogonFlag = s.firstLogonFlag;
                    resolve(flag);
                }else{
                    resolve(new Error(0,"no response"))
                }
              })
          });
          return p;
      }

      public setFirstLogonFlag(req: any): Promise<any> {

           LoggerUtil.info("SETTING FIRST LOGON FLAG FOR THE USERNAME:::::"+req.body.userName)
           let inReq = this.populateFirstLogonFlagRequest(req.body.userName);

           var p = new Promise((resolve, reject) => {
               this.preloginService.setFirstLogOnFlag(inReq).then(s => {
                 let flag = new FirstLogOnFLag();
                 flag.userName = req.body.userName;
                 if(undefined != s && s.dataAvailForInput) {
                     resolve(s.dataAvailForInput);
                 }else{
                     resolve(new Error(0,"no response"))
                 }
               })
           });
           return p;
       }

      private populateFirstLogonFlagRequest(userName: string): FirstLogonFlagRequest {

          let inReq = new FirstLogonFlagRequest();
          inReq.strPortal = cst.GMESS_PORTAL;
          inReq.strCompanyCode = cst.GMESS_CC_0270;
          inReq.userName = userName;
          return inReq;
      }

      public getUserProfileDetails(req: any): Promise<any> {

          LoggerUtil.info("GETTING USER PROFILE DETAILS FOR THE USERNAME:::::"+req.body.userName);
          let inReq = new UserProfileWithBPHierarchyRequest();
          inReq.strPortal = cst.GMESS_PORTAL;
          inReq.strCompanyCode = cst.GMESS_CC_0270;
          inReq.strLoggedInUserName = req.body.userName;
          inReq.strUserName = req.body.userName;
          var p = new Promise((resolve, reject) => {
            this.preloginService.getUserProfileWithBPHierarchy(inReq).then(s => {
                let user = new User();
                if(undefined != s && undefined != s.userProfileDO){
                    LoggerUtil.info("USER FOUND FOR THE USERNAME::::"+req.body.userName);
                    resolve(this.processUserDetailsResponse(this.processUserFromResp(s)));
                }else{
                    LoggerUtil.info("NO USER FOUND FOR THE USERNAME::::"+req.body.userName);
                    resolve(new Error(0,"no response"))
                }
              });
          });
          return p;
    }

    private processUserDetailsResponse(processResp: any){

       try{
          let user = processResp[0];
          LoggerUtil.info("USER SECURITY ROLE::::::"+user.securityRole)
          const isUserHasAssociations = CommonUtil.isUserHasAssociations(user.webSecurityRole);
          if(isUserHasAssociations){
              LoggerUtil.info("USER HAS ASSOCIATIONS:::RENDERING CUSTOMER LIST:::")
              let customerList = processResp[1];
              if(customerList.mngBP || customerList.regionBP || customerList.propertyBP){
                  return {user, customerList,bpDtlsList:processResp[2]};
              }else{
                  LoggerUtil.info("ASSOCIATED USERS HAS NO CUSTOMER LIST:::::RETURNING ERROR OBJECT WITH CODE 2")
                  return {errorCode:2,errorMessage:"ASSOCIATED USER HAS NO CUSTOMER LIST"};
              }
          }else{
              LoggerUtil.info("USER HAS NO ASSOCIATIONS::::RETURNING USER::")
              return {user};
          }
       }catch(err){
          ////console.log("ERROR=====processUserDetailsResponse>>>>>>"+err.message)
          return {errorCode:2,errorMessage:err.message};
       }
    }


    private processUserFromResp(s: any): any {

      let user = new User();
      let hierarchyDtls;
      let customerList;
      try{
          user = this.getUserFromResp(s);
          let isBroker = CommonUtil.isBrokerOrBrokerAssociate(user.webSecurityRole);
          if(CommonUtil.isUserHasAssociations(user.webSecurityRole)){
              customerList = this.populateCustomerList(s,isBroker,user.brokerBPNumber)
              hierarchyDtls = this.getHierarchyDetailsFromManagementList(customerList,undefined,undefined,user);
          }
      }catch(e){
        LoggerUtil.info("Error=======>"+e.message);
      }
      return [user,hierarchyDtls,customerList];
    }


    private getUserFromResp(s: any): User {

      let user = new User();
      try{
          user.firstName = s.userProfileDO.firstName;
          user.lastName = s.userProfileDO.lastName;
          user.userName = s.userProfileDO.userName;
          user.altPhoneNum = s.userProfileDO.altrContactPhone;
          user.altPhoneNumExtn = s.userProfileDO.altContactPhoneExtn;
          user.phoneNum = s.userProfileDO.contactPhone;
          user.phoneNumExtn = s.userProfileDO.contactPhoneExtn;
          user.faxNum = s.userProfileDO.faxNumber;
          user.startStopAce = s.userProfileDO.startStopAce;
          user.billingAce = s.userProfileDO.billingAce;
          user.email = s.userProfileDO.emailId;
          user.securityRole = CommonUtil.getWebSecurityRoleFromDBRoles(s.userProfileDO.webSecurityRole);
          user.securityRoleDisplayName = CommonUtil.getSecurityRoleFromDBRoles(s.userProfileDO.webSecurityRole);
          user.userType = s.userProfileDO.userType;
          user.webSecurityRole = s.userProfileDO.webSecurityRole;
          user.userCategory = s.userProfileDO.userCategory;
          user.brokerBPNumber = s.userProfileDO.brokerBPNumber;
          if(CommonUtil.equalsIgnoreCase(s.userProfileDO.securityRole, cst.SECURITY_ROLE_AGT) ||
            CommonUtil.equalsIgnoreCase(s.userProfileDO.securityRole, cst.SECURITY_ROLE_CUS_ADMIN)){
              user.userTypeDisplayName = s.userProfileDO.userTypeDisplay;
          }else{
              user.userTypeDisplayName = cst.NA;
          }
        }catch(e){
          LoggerUtil.info("Error=======>"+e.message);
        }
        return user;
    }


    private populateCustomerList(s: any, isBroker:boolean, brokerBPNumber:string) : ManagementBP[]{

          let mngtList = new Array<ManagementBP>();
          try{
              let mngList = undefined != s.managementList?s.managementList:[];
              let rgnList = undefined != s.regionList?s.regionList:[];
              let propList = undefined != s.propertyList?s.propertyList:[];
              mngList.forEach((mng:any) => {
                  let mngBP = new ManagementBP();
                  mngBP.bpNumber = CommonUtil.substringBefore(mng.bpNumber,":")
                  let treeGUID = CommonUtil.substringAfter(mng.bpNumber, ":");
                  mngBP.bpName = mng.bpName;
                  mngBP.strBPAddress = CommonUtil.createBpAddressStrFromObj(mng.bpAdress);
                  mngBP.newlyAddedBP = mng.newlyAddedBP;
                  mngBP.fedTaxId = mng.fedTaxId
                  mngBP.regionList = this.getRegionList(rgnList,propList,mng.bpNumber,isBroker,s.hierarchyType,brokerBPNumber,treeGUID);
                  mngtList.push(mngBP);
              })
          }catch(err){
            LoggerUtil.info("ERROR=======>"+err.message)
          }
          return mngtList;
      }




     private  getStatusForBrokerAssignedOrNot( enteredBrokerNumber:string, brokerList:Array<any>, treeGUID:string):boolean{

         let brokerBPList = (null != brokerList)?brokerList:new Array<string>();
         let isBrokerAssignedOrNot: boolean = false;
         if(CommonUtil.isNotBlank(enteredBrokerNumber)){
             brokerBPList.forEach((brokerBP:string) => {
                 let brokerBPNum = brokerBP.substring(brokerBP.lastIndexOf("!")+1,brokerBP.lastIndexOf(":"));
                 let brokerTreeGuid = brokerBP.split("#").pop();
                 if(CommonUtil.equalsIgnoreCase(brokerBPNum, enteredBrokerNumber) && CommonUtil.equalsIgnoreCase(treeGUID, brokerTreeGuid)){
                      isBrokerAssignedOrNot =  true;
                 }
           });
         }else{
           isBrokerAssignedOrNot = true;
         }
         LoggerUtil.info("CHECKING THE BROKER ASSIGNED OR NOT:::::FOR THE BROKER BP:::"+enteredBrokerNumber+":::IN BROKER LIST:::"+JSON.stringify(brokerList)+":::STATUS:::"+isBrokerAssignedOrNot);
         return isBrokerAssignedOrNot;
   }


    public searchByBpNumber(req: any): Promise<any> {

        var bpList = new Array<string>();
        bpList.push(CommonUtil.leftPadZeros(req.body.bpNumber,10));
        let bpHierReq = new BPHierarchyRequest();
        bpHierReq.bpNumberList = bpList;
        bpHierReq.callType = "";
        bpHierReq.strCompanyCode= cst.GMESS_CC_0270;
        bpHierReq.strPortal =cst.USERTYPE_SP_EXTERNAL_PORTAL;
        bpHierReq.strLoggedInUserName = CommonUtil.getLoggedInUserName(req);
        var p = new Promise((resolve, reject) => {
            this.preloginService.getBPHierarchy(bpHierReq).then(s => {
                let dtls = this.processHierarchyDetails(req,s,bpList[0],cst.EMPTY_STR);
                resolve(dtls);
            });
        });
       return p;
    }

    //TAX_ID
    public searchByFedTaxId(req: any): Promise<any> {

        let bpHierReq = new BPHierarchyRequest();
        bpHierReq.federalTaxIdList = this.getFederalTaxIdList(req.body.fedTaxId);
        bpHierReq.callType = cst.HIERARCHY_CALL_TYPE_TAX_ID;
        bpHierReq.strCompanyCode= cst.GMESS_CC_0270;
        bpHierReq.strPortal =cst.USERTYPE_SP_EXTERNAL_PORTAL;
        bpHierReq.strLoggedInUserName = CommonUtil.getLoggedInUserName(req);
        var p = new Promise((resolve, reject) => {
            this.preloginService.getBPHierarchy(bpHierReq).then(s => {
                let dtls = this.processHierarchyDetails(req,s,cst.EMPTY_STR,cst.HIERARCHY_CALL_TYPE_TAX_ID);
                resolve(dtls);
            });
        });
       return p;
    }

    public getFederalTaxIdList(federalTaxId: string): string[] {

		    let federalTaxIdList = new Array<string>();
    		if(CommonUtil.isStringContains(federalTaxId, "-")){
    			   federalTaxId = federalTaxId.replace("-", cst.EMPTY_STR);
    		}
  		  federalTaxIdList.push(federalTaxId);
  		  federalTaxIdList.push(this.getFederalTaxIdWithDash(federalTaxId));
  		  return federalTaxIdList;
	  }

    private getFederalTaxIdWithDash(federalTaxId: string): string {
      return federalTaxId.substring(0, 2)+"-"+federalTaxId.substring(2, federalTaxId.length);
    }

   private processHierarchyDetails(req: any,s: any, enteredBpNumber: string, callType: string): any {

      let dtls = new HierarchyDetails();
      let mngtList = new Array<ManagementBP>();
      try{
        if(undefined != s && s.dataAvilableForInput){
            dtls.found = true;
            s.managementList.forEach((mng: any) => {
                if(CommonUtil.isNotBlank(mng.bpNumber)){
                    let mngmt = new ManagementBP();
                    mngmt.bpNumber = CommonUtil.substringBefore(mng.bpNumber,":");
                    mngmt.strBPAddress = CommonUtilityHelper.createBpAddressStrFromObj(mng.bpAdress);
                    mngmt.bpName = mng.bpName;
                    mngmt.fedTaxId = mng.fedTaxId;
                    let treeGUID: string = CommonUtil.substringAfter(mng.bpNumber, ":");
                    mngmt.regionList = this.getRegionList(s.regionList,s.propertyList,mng.bpNumber,false,s.hierarchyType,enteredBpNumber,treeGUID);
                    mngtList.push(mngmt);
                }
            })
            if(callType == cst.HIERARCHY_CALL_TYPE_TAX_ID){
                LoggerUtil.info("SEARCHING FOR FEDERAL TAX ID LIST:::::")
                dtls = this.getHierarchyDetailsForInternalUserSearchForBroker(dtls,mngtList);
            }else{
                let bpList = new Array<string>();
                bpList.push(enteredBpNumber);
                LoggerUtil.info("SEARCHING FOR BP NUMBER LIST:::::"+bpList)
                dtls = this.getHierarchyDetailsForInternalUserSearchForNonBroker(dtls,mngtList,bpList);
            }
        }
      }catch(err){
          LoggerUtil.info("ERROR===processHierarchyDetails==>>>>>>"+err.message)
      }
      return {dtls,bpDtlsList:mngtList};
   }


   private getRegionList(rgnList: any[], propList: any[], mngBpNumber:string, isBroker:boolean, hierarchyType: string, enteredBPNumber: string, treeGUID: string): Region[]{

       let regList = new Array<Region>();
       rgnList.forEach(rgnHrchy => {
         if(CommonUtil.equalsIgnoreCase(rgnHrchy.parentBpNumber, mngBpNumber)){
              let reg = new Region();
              reg.bpNumber = CommonUtil.substringBefore(rgnHrchy.bpNumber,":");
              reg.bpName = rgnHrchy.bpName;
              reg.fedTaxId = rgnHrchy.fedTaxId;
              if(isBroker){
                 LoggerUtil.info("CHECKING THE BORKER ASSIGNED OR NOT FOR THE REGION BP NAME::::::"+reg.bpName);
                 reg.bokerAssigned = this.getStatusForBrokerAssignedOrNot(enteredBPNumber,rgnHrchy.brokerList,treeGUID);
                 reg.newlyAddedBP = rgnHrchy.newlyAddedBP;
              }
              reg.strBPAddress = CommonUtilityHelper.createBpAddressStrFromObj(rgnHrchy.bpAdress);
              reg.propertyList = this.getPropertyList(propList,rgnHrchy.bpNumber,isBroker,reg.bokerAssigned,enteredBPNumber,hierarchyType,treeGUID);
              regList.push(reg);
          }
       });
       LoggerUtil.info("RETURNING REGION LIST OF SIZE FOR THE MANAGEMENT BP NUMBER:::::::"+mngBpNumber+"::::SIZE:::"+regList.length);
       return regList;
   }


   private getPropertyList(propList: any[], regBpNumber: string, isBroker:boolean, brokerAssignedAtRegLevel:boolean, enteredBPNumber:string, hierarchyType: string, treeGUID: string){

       let propertyList = new Array<Property>();
       try{
         propList.forEach(propHrchy => {
            if(CommonUtil.equalsIgnoreCase(propHrchy.parentBpNumber, regBpNumber) && CommonUtil.equalsIgnoreCase(treeGUID, propHrchy.treeGuid)){
                let prop = new Property();
                prop.relationshipId = CommonUtil.substringBefore(propHrchy.bpNumber, ":");
                prop.phoneNum = ""; //TODO:not coming in the hierarchy read call
                prop.bpName = propHrchy.bpName;
                prop.MSTRCAARelationshipId = propHrchy.masterBPForCAA;
                prop.MSTRRelationshipId = propHrchy.masterBPForCSAorNCSAorSITE;
                prop.strNodeGuidForStartStopTxn = this.getNodeGuidFromNONCAAorSITEBPnumberListForStartStopTXN(propHrchy.csabpnumberList,propHrchy.ncsabpnumberList,propHrchy.sitebpnumberList);
                prop.siteBPNumberList = this.subStringBPNumberFromNodeGuid(propHrchy.sitebpnumberList);
                prop.CAABPList = this.subStringBPNumberFromNodeGuid(propHrchy.caabpnumberList);
                prop.NONCAABPList = this.subStringBpNumberAndCreateNONCAAList(propHrchy.csabpnumberList,propHrchy.ncsabpnumberList);
                prop.fedTaxId = propHrchy.fedTaxId;
                LoggerUtil.info("FEDERAL TAX ID FOR THE PROPERTY:::::"+prop.fedTaxId+":::PROPERTY::::"+prop.bpName);
                prop.address = CommonUtilityHelper.mapAddressFromServiceLayerToAddressInFE(propHrchy.bpAdress);
                prop.propertyType = hierarchyType;
                prop.startEnabled = CommonUtil.equalsIgnoreCase(propHrchy.startStopAce, cst.YES);
                prop.billingEnabled = CommonUtil.equalsIgnoreCase(propHrchy.billingAce, cst.YES);
                if(isBroker){
                    prop.bokerAssigned = brokerAssignedAtRegLevel?brokerAssignedAtRegLevel:this.getStatusForBrokerAssignedOrNot(enteredBPNumber,propHrchy.brokerList,treeGUID)
                    if(prop.bokerAssigned){
                      propertyList.push(prop);
                    }
                }else{
                    propertyList.push(prop);
                }
            }
         });
       }catch(e){
         ////console.log("ERROR==========>"+e);
       }
       LoggerUtil.info("RETURNING PROPERTY LIST OF SIZE FOR THE REGION BP NUMBER:::::::"+regBpNumber+"::::SIZE:::"+propertyList.length);
       return propertyList;
   }



   private getNodeGuidFromNONCAAorSITEBPnumberListForStartStopTXN(CSABPNumberAry: string[], NCSABPNumberAry: string[], siteBPNumAry: string[]): string{

       let nodeGuid: string = cst.EMPTY_STR;
       if(undefined != siteBPNumAry && siteBPNumAry.length >0){
         nodeGuid = CommonUtil.substringAfter(siteBPNumAry[0], cst.COLON);
       }else{
         if(undefined != CSABPNumberAry && CSABPNumberAry.length >0){
           nodeGuid = CommonUtil.substringAfter(CSABPNumberAry[0], cst.COLON);
         }else if(undefined != NCSABPNumberAry && NCSABPNumberAry.length >0){
           nodeGuid = CommonUtil.substringAfter(NCSABPNumberAry[0], cst.COLON);
         }
       }
       LoggerUtil.info("NODE GUID FOR THE START/STOP TRANSACTION:::::::::"+nodeGuid);
       return nodeGuid;
  }


  private subStringBPNumberFromNodeGuid(bpNumberAry: string[]): string[]{

  		let bpNumberList = new Array<string>();
  		if(undefined != bpNumberAry && bpNumberAry.length > 0){
        bpNumberAry.forEach(bpNumber => {
            bpNumberList.push(CommonUtil.substringBefore(bpNumber, ":"));
        });
  		}
  		return bpNumberList;
	}

  private subStringBpNumberAndCreateNONCAAList(csaBPNumAry: string[], ncsaBPNumAry: string[]): string[] {

  		let bpNumberList = new Array<string>();
  		if(undefined != csaBPNumAry){
        csaBPNumAry.forEach(bpNumber => {
            bpNumberList.push(CommonUtil.substringBefore(bpNumber, ":"));
        });
  		}
  		if(undefined != ncsaBPNumAry){
        ncsaBPNumAry.forEach(bpNumber => {
            bpNumberList.push(CommonUtil.substringBefore(bpNumber, ":"));
        });
  		}
  		return bpNumberList;
	}


   private getHierarchyDetailsForInternalUserSearchForNonBroker(hierarchyDtls: HierarchyDetails,managementBPList: ManagementBP[], bpList: string[]): HierarchyDetails{

  		let mngmtList = new Array<ManagementBP>();
  		let regionList = new Array<Region>();
  		let propertyList = new Array<Property>();
      managementBPList.forEach(mngBP => {
          if(CommonUtil.isArrayContains(bpList,CommonUtil.substringBefore(mngBP.bpNumber, ":")) || CommonUtil.isArrayContains(bpList,CommonUtil.substringBefore(mngBP.brokerBPNumber, ":"))){
            hierarchyDtls.mngBP = true;
            mngmtList.push(mngBP);
          }
          mngBP.regionList.forEach(rgn => {
              if(CommonUtil.isArrayContains(bpList,CommonUtil.substringBefore(rgn.bpNumber, ":")) || CommonUtil.isArrayContains(bpList,CommonUtil.substringBefore(rgn.brokerBPNumber, ":"))){
                  hierarchyDtls.regionBP = true;
                  regionList.push(rgn);
              }
              rgn.propertyList.forEach(prop => {
                  ////console.log(CommonUtil.isArrayContains(bpList,CommonUtil.substringBefore(prop.relationshipId, ":")))
                  if(CommonUtil.isArrayContains(bpList,CommonUtil.substringBefore(prop.relationshipId, ":")) || CommonUtil.isArrayContains(bpList,CommonUtil.substringBefore(prop.brokerBPNumber, ":"))){
                      hierarchyDtls.propertyBP = true;
                      propertyList.push(prop);
                  }
              });
            });
          });
          LoggerUtil.info("THE MANAGEMENT LIST:::::::::"+mngmtList.length);
      		LoggerUtil.info("THE REGION LIST:::::::::"+regionList.length);
      		LoggerUtil.info("THE PROPERTY LIST:::::::::"+propertyList.length);
      		hierarchyDtls.mngBPList = mngmtList;
      		hierarchyDtls.regionList = regionList;
      		hierarchyDtls.propertyList = propertyList;
      		return hierarchyDtls;
    }

    //this method can be used for both broker and TAX ID search for internal users
    private getHierarchyDetailsForInternalUserSearchForBroker(hierarchyDtls: HierarchyDetails,managementBPList: ManagementBP[]): HierarchyDetails{

     		let mngmtList = new Array<ManagementBP>();
     		let regionList = new Array<Region>();
     		let propertyList = new Array<Property>();
         managementBPList.forEach(mngBP => {hierarchyDtls.mngBP = true;mngmtList.push(mngBP);
           mngBP.regionList.forEach(rgn => {hierarchyDtls.regionBP = true;regionList.push(rgn);
               rgn.propertyList.forEach(prop => {hierarchyDtls.propertyBP = true;propertyList.push(prop);
               });
            });
        });
        LoggerUtil.info("THE MANAGEMENT LIST:::::::::"+mngmtList.length);
     		LoggerUtil.info("THE REGION LIST:::::::::"+regionList.length);
     		LoggerUtil.info("THE PROPERTY LIST:::::::::"+propertyList.length);
     		hierarchyDtls.mngBPList = mngmtList;
     		hierarchyDtls.regionList = regionList;
     		hierarchyDtls.propertyList = propertyList;
     		return hierarchyDtls;
     }



     private getHierarchyDetailsForInternalUsersForNonBroker(managementBPList: ManagementBP[], bpList: string[]): HierarchyDetails {

          let mngmtList = new Array<ManagementBP>();
          let regionList = new Array<Region>();
          let propertyList = new Array<Property>();
          let hierarchyDtls = new HierarchyDetails();
          try{
              managementBPList.forEach(mngBP => {
                   if(CommonUtil.isArrayContains(bpList,CommonUtil.substringBefore(mngBP.bpNumber, ":")) || CommonUtil.isArrayContains(bpList,CommonUtil.substringBefore(mngBP.brokerBPNumber, ":"))){
                     hierarchyDtls.mngBP = true;
                     mngmtList.push(mngBP);
                   }
                   mngBP.regionList.forEach(rgn => {
                       if(CommonUtil.isArrayContains(bpList,CommonUtil.substringBefore(rgn.bpNumber, ":")) || CommonUtil.isArrayContains(bpList,CommonUtil.substringBefore(rgn.brokerBPNumber, ":"))){
                           hierarchyDtls.regionBP = true;
                           regionList.push(rgn);
                       }
                       rgn.propertyList.forEach(prop => {
                           ////console.log(CommonUtil.isArrayContains(bpList,CommonUtil.substringBefore(prop.relationshipId, ":")))
                           if(CommonUtil.isArrayContains(bpList,CommonUtil.substringBefore(prop.relationshipId, ":")) || CommonUtil.isArrayContains(bpList,CommonUtil.substringBefore(prop.brokerBPNumber, ":"))){
                               hierarchyDtls.propertyBP = true;
                               propertyList.push(prop);
                           }
                       });
                     });
                   });
                  LoggerUtil.info("THE MANAGEMENT LIST:::::::::"+mngmtList.length);
                  LoggerUtil.info("THE REGION LIST:::::::::"+regionList.length);
                  LoggerUtil.info("THE PROPERTY LIST:::::::::"+propertyList.length);
                  hierarchyDtls.mngBPList = mngmtList;
                  hierarchyDtls.regionList = regionList;
                  hierarchyDtls.propertyList = propertyList;
              }catch(err){
                  LoggerUtil.info("ERROR getHierarchyDetailsForInternalUsersForNonBroker=================>"+err.message)
              }
            return hierarchyDtls;
        }

        private getHierarchyDetailsFromManagementList(managementBPList: ManagementBP[], bpList: string[],callType:string, user:User): HierarchyDetails {

              let hierarchyDtls = new HierarchyDetails();
              let regionListWithNoMng = new Array<Region>();
              try{
                if(undefined != managementBPList && managementBPList.length > 0){
                    if(!CommonUtil.isUserHasAssociations(user.webSecurityRole) && !CommonUtil.equalsIgnoreCase(callType,cst.HIERARCHY_CALL_TYPE_TAX_ID)){

                    }else{
                        if(managementBPList.length > 0){
                            if(CommonUtil.isManagementListContainsDummyNodes(managementBPList)){
                                LoggerUtil.info("MANAGEMENT LIST CONTAINS DUMMY NODES:::"+managementBPList.length)
                                hierarchyDtls.mngBP = CommonUtil.isManagementListContainsAtleastOneRealNode(managementBPList);
                                hierarchyDtls.mngBPList = managementBPList.filter(mng => mng.bpNumber != "NO_MGMT");
                                hierarchyDtls = this.checkForNoManagementRegionsAndPopulateHirarchyDtls(managementBPList,hierarchyDtls);
                                hierarchyDtls = this.checkForNoRegionPropertiesAndPopulateHirarchyDtls(managementBPList,hierarchyDtls);
                            }else{
                                LoggerUtil.info("THIS USER HAS ALL MANAGEMENT NODES WITHOUT DUMMY NODES::::::::::");
                                hierarchyDtls.mngBP = true;
                                hierarchyDtls.mngBPList = managementBPList;
                                hierarchyDtls.onlyProperty = CommonUtil.checkManagementListOrRegionListHasOnlyOneProperty(managementBPList,undefined);
                            }
                         }
                      }
                }else{
                    LoggerUtil.info("NO HIERARCHY DETAILS FOUND FOR THE SEARCH CRIETERIA:::");
                    hierarchyDtls.mngBP = false;
                }
              }catch(err){
                LoggerUtil.info("ERROR==getHierarchyDetailsFromManagementList=====>"+err.message)
              }
              return hierarchyDtls;
        }

        private checkForNoManagementRegionsAndPopulateHirarchyDtls(managementBPList: ManagementBP[], hierarchyDtls: HierarchyDetails): HierarchyDetails{

            let regionWithNoMgmtList = new Array<Region>();
            try{
              let noMngtList = managementBPList.filter(mng => mng.bpNumber == "NO_MGMT");
              noMngtList.forEach(mng => {
                let returnrgnList = mng.regionList.filter(region => region.bpNumber != "NO_REGN")
                regionWithNoMgmtList.push(...returnrgnList);
              });
              hierarchyDtls.regionList = regionWithNoMgmtList;
              hierarchyDtls.regionBP = regionWithNoMgmtList.length > 0;
            }catch(err){
                LoggerUtil.info("ERROR===checkForNoManagementRegionsAndPopulateHirarchyDtls>>>>>>"+err.message)
            }
            return hierarchyDtls;
        }

        private checkForNoRegionPropertiesAndPopulateHirarchyDtls(managementBPList: ManagementBP[], hierarchyDtls: HierarchyDetails): HierarchyDetails {

            let propertyWithNoMngtList = new Array<Property>();
            try{
              let noMngtList = managementBPList.filter(mng => mng.bpNumber == "NO_MGMT");
              noMngtList.forEach(mng => {
                let noRegionList = mng.regionList.filter(region => region.bpNumber == "NO_REGN")
                noRegionList.forEach(region => propertyWithNoMngtList.push(...region.propertyList))
              });
              hierarchyDtls.propertyList = propertyWithNoMngtList;
              hierarchyDtls.propertyBP = hierarchyDtls.propertyList.length >0;
              hierarchyDtls.onlyProperty = hierarchyDtls.propertyList.length == 1;
            }catch(err){
                LoggerUtil.info("ERROR===>>>>>"+err.message)
            }
            return hierarchyDtls;
        }


}
