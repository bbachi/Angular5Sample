import LoggerUtil from './../logs/log';
import Promise = require('tspromise');
import * as cst from './../util/constant';
import { CommonUtil } from './../util/common.util';
import { MyAccountService } from './../services/myaccount.service';
import { Property, CustomerDetails} from './../model/bmfss.session';
import { Error } from './../model/error';
import { BaseRequest } from './../request/base.request';
import {AccessPrivilegesRequest, GetCustomerContractRequest, BPHierarchyRequest, BPHierarchyDtlsRequest } from './../request/prelogin.request';
import { CommonUtilityHelper } from './../helper/commonutility.helper';
import { Unit, ESIID } from './../model/bmfss.session';
import { PreLoginService } from './../services/prelogin.service';
import { HierarchyDetails, ManagementBP, Region } from '../model/hierarchy.model';
import { EsiidDetailsForMultifamilyRequest, GetTCSEsidDetailsRequest } from '../request/myaccount.request';
import * as _ from 'lodash';

export class MyAccountHelper {

      private preloginService: PreLoginService;
      private myAccountService: MyAccountService;
      private commonUtilityHelper: CommonUtilityHelper;

      constructor(){
          this.preloginService = new PreLoginService();
          this.myAccountService = new MyAccountService();
          this.commonUtilityHelper = new CommonUtilityHelper();
      }

      public getDashBoardData(req: any): Promise<any> {

          LoggerUtil.info("GETTING DASHBOARD DATA FOR THE RELATIONSHIP ID::::::"+req.body.relationshipId)
          let relationshipId = req.body.relationshipId;
          var p = new Promise((resolve, reject) => {
              let selectedPropAndNodeGuidList = this.returnSelectedPropertyFromSession(relationshipId, req);
              let nodeGuidList = selectedPropAndNodeGuidList[1];
              LoggerUtil.info("NODE GUID LIST FOR DASHBOARD DATA::::::"+nodeGuidList)
              if(nodeGuidList.length > 0){
                 LoggerUtil.info("NODE GUID LIST FOUND FOR THE PROPERTY:::::"+req.body.relationshipId)
                 let hierDtlReq = this.populateBpHierarchyDtlsRequest(nodeGuidList,req);
                 let selectedProperty = new Property()
                 this.preloginService.getBPHierarchyDtls(hierDtlReq).then(s => {
                    if(undefined != s && s.dataAvilableForInput){
                        LoggerUtil.info("HIERARCHY DETAILS FOUND:::::")
                        selectedProperty = selectedPropAndNodeGuidList[0];
                        selectedProperty = this.returnSelectedPropertyWithCustomerDtlsFromResponse(s,selectedProperty);
                        let accPrivReq = this.populateAccessPrivilegesRequest(CommonUtil.substringBefore(selectedProperty.relationshipId,":"),req);
                        this.preloginService.getAccessPrivForProperty(accPrivReq).then(accRes => {
                            LoggerUtil.info("FOUND ACCESS PRIVILEGES FOR THE PROPERTY:::::"+JSON.stringify(accPrivReq))
                            selectedProperty = this.returnPropertyWithAccessPrivFromResponse(selectedProperty, accRes);
                            let contractReq = this.populateGetCustomerContractRequest(selectedProperty, req);
                            LoggerUtil.info("GETTING CONTRACT DETAILS FOR THE PROPERTY:::::"+JSON.stringify(contractReq))
                            this.preloginService.getCustomerContractDetails(contractReq).then(conRes => {
                                if(undefined != conRes && conRes.dataAvailForInput){
                                    selectedProperty = this.getSelectedPropertyFromGetCustomerContractResponse(selectedProperty, conRes)
                                }else{
                                    selectedProperty = this.returnSelectedPropertyWithDefaultContractSettings(selectedProperty,cst.START_STOP_RESTRICTION_REASON_ERR);
                                }
                                resolve(selectedProperty);
                            });
                        });
                    }else{
                       resolve({errorCode:4, errorMessage:"NO HIERARCHY DETAILS FOUND"});
                    }
                  })
             }else{
                 resolve({errorCode:2, errorMessage:"NODE GUID LIST EMPTY FOR THE BP NUMBER::"+req.body.relationshipId});
             }
          });
          return p;
      }


      private returnSelectedPropertyFromSession(relationshipId:string, req:any): any{

          let bpDtlsList = req.body.bpDtlsList;
          let selectedProperty = new Property();
          let strNodeGuidList = new Array<String>();
          try{
            bpDtlsList.forEach((mng:any) => {
                mng.regionList.forEach((rgn:any) => {
                    rgn.propertyList.forEach((prop:any) => {
                        if(CommonUtil.equalsIgnoreCase(relationshipId, prop.relationshipId)){
                            selectedProperty = prop;
                            let nonCAANodeGuid = CommonUtil.substringBefore(prop.MSTRRelationshipId,":");
                            let CAANodeGuid = CommonUtil.substringBefore(prop.MSTRRelationshipId,":");
                            if(undefined != nonCAANodeGuid && CommonUtil.isNotBlank(nonCAANodeGuid)){
                                strNodeGuidList.push(CommonUtil.substringBefore(prop.MSTRRelationshipId,":"));
                            }
                            if(undefined != CAANodeGuid && CommonUtil.isNotBlank(CAANodeGuid)){
                                strNodeGuidList.push(CommonUtil.substringBefore(prop.MSTRCAARelationshipId,":"))
                            }
                        }
                    })
                })
            })
            LoggerUtil.info("NODE GUID LIST FOR THIS PROPERTY::::::"+strNodeGuidList+":::PROPERTY::"+relationshipId)
          }catch(err){
              LoggerUtil.info("ERROR====returnSelectedPropertyFromSession>>>>>>>"+err.message)
          }
          return [selectedProperty,strNodeGuidList]
      }


      private returnSelectedPropertyWithCustomerDtlsFromResponse(s: any, selectedProperty:Property): Property{

          try{
            selectedProperty.masterBP = s.strMasterBP;
            selectedProperty.masterBPName =  s.strMasterBP;
            let hierDtlList = s.hierarchyDtlsList;
            hierDtlList.forEach((hierDO:any) => {
              if(CommonUtil.equalsIgnoreCase(CommonUtil.substringBefore(selectedProperty.MSTRCAARelationshipId,":"),hierDO.parentBP)){
                    selectedProperty = this.populateCommonAreaDetails(hierDO, selectedProperty)
              }else{
                    selectedProperty = this.populateNONCommonAreaDetails(hierDO, selectedProperty);
              }
            })
          }catch(err){
            LoggerUtil.info("ERROR====returnSelectedPropertyWithCustomerDtlsFromResponse>>>"+err.message)
          }
          return selectedProperty;
      }


      private returnPropertyWithAccessPrivFromResponse(selectedProperty:Property, response:any):Property{
          LoggerUtil.info("START::PreLoginHelper::returnPropertyWithAccessPrivFromResponse()>>>>>>");
          try{
        		selectedProperty.startEnabled = CommonUtil.equalsIgnoreCase(response.startServiceAccess, cst.YES);
        		selectedProperty.stopEnabled=(CommonUtil.equalsIgnoreCase(response.stopServiceAccess, cst.YES));
        		selectedProperty.billingEnabled=(CommonUtil.equalsIgnoreCase(response.billingAccess, cst.YES));
        		selectedProperty.startRestrictionReason=(response.startRestrictionReason);
        		selectedProperty.stopRestrictionReason=(response.stopRestrictionReason);
        		selectedProperty.billingRestrictionReason=(response.billingRestrictionReason);
          }catch(err){
            LoggerUtil.info("ERROR============>"+err.message);
          }
      		LoggerUtil.info("END::PreLoginHelper::returnPropertyWithAccessPrivFromResponse()<<<<<<<");
  		    return selectedProperty;
        }

      private populateBpHierarchyDtlsRequest(strNodeGuidList: string[], req:any): BPHierarchyDtlsRequest {

           let hierDtlReq = new BPHierarchyDtlsRequest();
           try{
             hierDtlReq.strPortal = cst.GMESS_PORTAL;
             hierDtlReq.strCompanyCode = cst.GMESS_CC_0270;
             hierDtlReq.propNodeGuidList = strNodeGuidList;
             hierDtlReq.strLoggedInUserName = CommonUtil.getLoggedInUserName(req);
           }catch(err){
              LoggerUtil.info("ERROR===populateBpHierarchyDtlsRequest>>>"+err.message)
           }
           return hierDtlReq
      }

      private populateAccessPrivilegesRequest(relationshipId: string, req:any): AccessPrivilegesRequest {

           let accessReq = new AccessPrivilegesRequest();
           accessReq.strRelationshipId = relationshipId;
           accessReq.strPortal = cst.GMESS_PORTAL;
           accessReq.strCompanycode = cst.GMESS_CC_0270;
           accessReq.strLoggedInUserName = CommonUtil.getLoggedInUserName(req);
           return accessReq;
      }

      private populateGetCustomerContractRequest(selectedProperty: Property, req:any): GetCustomerContractRequest{

          let request = new GetCustomerContractRequest();
          try{
            request.strNONCAAMSTRBP = (undefined != selectedProperty.customerDtls)?selectedProperty.customerDtls.relationshipId:"";
            request.strCAAMSTRBP = (undefined != selectedProperty.commonAreaDtls)?selectedProperty.commonAreaDtls.relationshipId:"";
            request.strCompanyCode = cst.GMESS_CC_0270;
            request.strLoggedInUserName = CommonUtil.getLoggedInUserName(req);
          }catch(err){
            LoggerUtil.info("ERROR=====populateGetCustomerContractRequest===========>"+err.message)
          }
          return request;
      }

      private populateCommonAreaDetails(hierDO: any, selectedProperty: Property){

            let custDtls = new CustomerDetails();
            custDtls.contactAddress = (CommonUtil.mapAddressFromServiceLayerToAddressInFE(hierDO.billingAddress));
            custDtls.relationshipId=hierDO.bpNumber;
            custDtls.bpNumber=hierDO.bpNumber;
            custDtls.customerName=hierDO.bpName;
            custDtls.customerType=cst.ACCOUNT_CTGY_CAA;
            custDtls.mailingAddress=(CommonUtil.mapAddressFromServiceLayerToAddressInFE(hierDO.mailingAddress));
            custDtls.phoneNum=CommonUtil.isNotBlank(hierDO.primaryContactPhone)?CommonUtil.getFormatedPhonenumber(hierDO.primaryContactPhone):cst.NOT_PROVIDED;
            custDtls.correspondenceLang=CommonUtil.isNotBlank(hierDO.language)?hierDO.language:"English";
            custDtls.CAAFlag=(true);
            selectedProperty.commonAreaDtls = (custDtls);
            LoggerUtil.info("End::PreLoginHelper::returnSelectedPropertyWithCommonAreaDtls()>>>>>>");
            return selectedProperty;
      }


      private populateNONCommonAreaDetails(hierDO: any, selectedProperty: Property){

            let custDtls = new CustomerDetails();
            custDtls.contactAddress= CommonUtil.mapAddressFromServiceLayerToAddressInFE(hierDO.billingAddress);
            custDtls.relationshipId=hierDO.bpNumber;
            custDtls.bpNumber=hierDO.bpNumber;
            custDtls.customerName=hierDO.bpName;
            custDtls.customerType = (CommonUtil.substringAfter(selectedProperty.MSTRRelationshipId, "!"));
            custDtls.correspondenceLang=CommonUtil.isNotBlank(hierDO.language)?hierDO.language:"English";
            custDtls.bpType=(custDtls.customerType);
            selectedProperty.propertyType=(CommonUtil.equalsIgnoreCase(custDtls.customerType, cst.ACCOUNT_CTGY_SITE)?cst.CUSTOMERTYPE_HB:cst.CUSTOMERTYPE_PM);
            custDtls.mailingAddress=(CommonUtil.mapAddressFromServiceLayerToAddressInFE(hierDO.mailingAddress));
            custDtls.phoneNum = CommonUtil.isNotBlank(hierDO.primaryContactPhone)?CommonUtil.getFormatedPhonenumber(hierDO.primaryContactPhone):cst.NOT_PROVIDED;
            custDtls.NONCAAFlag=true;
            selectedProperty.customerDtls= (custDtls);
            LoggerUtil.info("End::PreLoginHelper::returnSelectedPropertyWithNONCommonAreaDtls()>>>>>>");
            return selectedProperty;
      }


      private  getSelectedPropertyFromGetCustomerContractResponse(selectedProperty:Property, response:any):Property{
  		    LoggerUtil.info("START::PreLoginHelper::getSelectedPropertyFromGetCustomerContractResponse()>>>>>>");
          try{
              response.custContractList.forEach((contract:any) => {
                  if(CommonUtil.equalsIgnoreCase(contract.relationshipId, selectedProperty.customerDtls.relationshipId)){
                    selectedProperty.customerDtls.contractExpDate=contract.contractExpDate;
                    selectedProperty.customerDtls.customerStatus=contract.customerStatus;
                    selectedProperty.startEnabled = (selectedProperty.startEnabled?CommonUtil.equalsIgnoreCase(contract.customerStatus, "Active"):false);
                    selectedProperty.stopEnabled = (selectedProperty.stopEnabled?CommonUtil.equalsIgnoreCase(contract.customerStatus, "Active"):false);
                    if(!CommonUtil.equalsIgnoreCase(contract.customerStatus, "Active")){
                      selectedProperty.startRestrictionReason = cst.START_STOP_RESTRICTION_REASON_EN_OR_DISABLE;
                      selectedProperty.stopRestrictionReason = cst.START_STOP_RESTRICTION_REASON_EN_OR_DISABLE;
                    }
                    selectedProperty.customerDtls.terms= contract.terms;
                  }else{
                    selectedProperty.commonAreaDtls.contractExpDate=contract.contractExpDate;
                    selectedProperty.commonAreaDtls.customerStatus=contract.customerStatus;
                    selectedProperty.commonAreaDtls.terms= contract.terms;
                  }
              });
            }catch(err){
                LoggerUtil.info("ERROR=================>"+err.message)
            }
            LoggerUtil.info("END::PreLoginHelper::getSelectedPropertyFromGetCustomerContractResponse()<<<<<<<");
  		      return selectedProperty;
      }


      private  returnSelectedPropertyWithDefaultContractSettings(selectedProperty:Property, restrictionReason:string):Property{
      		LoggerUtil.info("START::PreLoginHelper::returnSelectedPropertyWithDefaultContractSettings()>>>>>>");
      		selectedProperty.startEnabled = (false);
      		selectedProperty.stopEnabled = (false);
      		selectedProperty.startRestrictionReason = (restrictionReason);
      		selectedProperty.stopRestrictionReason = (restrictionReason);
      		LoggerUtil.info("END::PreLoginHelper::returnSelectedPropertyWithDefaultContractSettings()<<<<<<<");
  		    return selectedProperty;
  	  }


      public getMFESIIDListForNONCAABPList(req:any): Promise<any>{

          let esiidList = new Array<ESIID>();
          var p = new Promise((resolve,reject) => {
              this.commonUtilityHelper.getESIDDetailsForMultifamilyFromCCS(req).then(s => {
                  LoggerUtil.info("ESIID LIST FROM CCS::::::"+s.length);
                  let esiidStrList = this.getESIIDNumberList(s);
                  let esiidReq = this.populateGetTCSEsidDetailsRequest(esiidStrList);
                  this.myAccountService.getESIDDetailsFromTCS(esiidReq).then(res => {
                      let unitList = this.populateESIIDResponseFromTCS(res,s);
                      LoggerUtil.info("ESIID LIST FROM TCS::::::"+unitList.length);
                      resolve(unitList);
                  })
              });
          });
          return p;
      }





      private populateESIIDResponseFromTCS(s: any, esiidListFromCCS: ESIID[]): ESIID[] {

        let unitList = new Array<Unit>();
        try{
            if(undefined != s && s.dataAvailForInput){
                let tcsList = s.tcsEsiidDetailsDOList;
                LoggerUtil.info("GOT THE ESIID DETAILS FROM TCS:::::"+tcsList.length);
                esiidListFromCCS.forEach(esiid => {
                    tcsList.forEach((tcsEsiid:any) => {
                      if(CommonUtil.equalsIgnoreCase(esiid.esiid, tcsEsiid.esiid)){
                          let unit = new Unit();
                          unit.esiid = tcsEsiid.esiid;
                          unit.priorityMoveInEnabled = tcsEsiid.priorityMoveinEnabled;
                          unit.priorityMoveInFee = tcsEsiid.priorityMoveinFee;
                          unit.strStreetNum = tcsEsiid.streetNum;
                          unit.strStreetName = tcsEsiid.streetName;
                          unit.strCity = tcsEsiid.city;
                          unit.strState = tcsEsiid.state;
                          unit.strUnitNumber = tcsEsiid.unitNum;
                          unit.strZipcode = tcsEsiid.zipcode;
                          unit.strMeterType = tcsEsiid.MeterType;
                          unit.strServiceArea = tcsEsiid.ServiceArea;
                          unit.pending = tcsEsiid.EsidPending;
                          unit.startPendingStatusFromCCS = esiid.startPendingStatusFromCCS;
                          unit.stopPendingStatusFromCCS = esiid.stopPendingStatusFromCCS;
                          unit.marketHold = tcsEsiid.MarketHold;
                          unit.bpNumber = tcsEsiid.bpNumber;
                          unit.active = tcsEsiid.EsidActive;
                          unit.strMoveInDate = esiid.strMoveInDate;
                          unit.strMoveOutDate = esiid.strMoveOutDate;
                          unit.strTaxStatus = esiid.strTaxStatus;
                          unit.strDepositAmount = esiid.strDepositAmount;
                          unit.bpNumber = esiid.bpNumber;
                          unitList.push(unit);
                      }
                    })
                })
            }else{
              LoggerUtil.info("no response from populateESIIDResponseFromTCS")
            }
          }catch(err){
              LoggerUtil.info("ERROR====populateESIIDResponse=====>"+err.message);
          }
          return unitList;
      }

      private getESIIDNumberList(esiidList: ESIID[]): string[]{

            let esiidNumberList = new Array<string>();
            try{
                esiidList.forEach(esiid => {
                    esiidNumberList.push(esiid.esiid);
                })
            }catch(err){
              LoggerUtil.info("ERROR======getESIIDNumberList=====>"+err.message)
            }
            return esiidNumberList;
      }

      private getTaxStatusTextBasedOnValue(taxStatus: string): string{

      		if(CommonUtil.equalsIgnoreCase(taxStatus, cst.TAX_STATUS_P0)){
      			return cst.TAX_STATUS_P0_TXT;
      		}else if(CommonUtil.equalsIgnoreCase(taxStatus, cst.TAX_STATUS_P1)){
      			return cst.TAX_STATUS_P1_TXT;
      		}else if(CommonUtil.equalsIgnoreCase(taxStatus, cst.TAX_STATUS_PE)){
      			return cst.TAX_STATUS_PE_TXT;
      		}else if(CommonUtil.equalsIgnoreCase(taxStatus, cst.TAX_STATUS_P3)){
      			return cst.TAX_STATUS_P3_TXT;
      		}else if(CommonUtil.equalsIgnoreCase(taxStatus, cst.TAX_STATUS_PH)){
      			return cst.TAX_STATUS_PH_TXT;
      		}else{
      			return taxStatus;
      		}
	    }

      private populateGetTCSEsidDetailsRequest(esiidStrList: string[]): GetTCSEsidDetailsRequest {
          let inReq = new GetTCSEsidDetailsRequest();
          inReq.esidList = esiidStrList;
          return inReq;
      }

}
