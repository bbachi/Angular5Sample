import { Address } from './../model/bmfss.session';
import { AddressDO } from './../model/addressdo';
import * as cst from './../util/constant';
import { isString } from 'lodash';
import { trim } from 'lodash';
import { replace } from 'lodash';
import { BMFSSSession } from './../model/bmfss.session';
import { HierarchyDetails, ManagementBP, Region } from '../model/hierarchy.model';
import LoggerUtil from './../logs/log';
import  * as moment  from 'moment';

export class CommonUtil {

    public static isJSONString(val: string): boolean{
        try{
            JSON.parse(val);
            return true;
        }catch(err){
            return false;
        }
    }

    public static isNotBlank(val: string): boolean {

        if(isString(val) && trim(val).length > 0 && undefined != val && "null" != val && null != val){
            return true;
        }
        return false;
    }

    public static toUpperCase(val: string): string {
        return val.toUpperCase();
    }

    public static isArrayContains(arry:any[], val: string): boolean {
        return (arry.indexOf(val) > -1);
    }

    public static defaultIfEmpty(val1:string, val2:string):string{
      if(isString(val1) && trim(val1).length > 0 ){
          if(undefined != val1 && null != val1 && val1 != "" && "null" != val1){
              return val1;
          }else{
              return val2;
          }

      }
      return val2;
     }


    public static equalsIgnoreCase(val1: string, val2:string): boolean {

                if(isString(val1) && isString(val2) && trim(val1).length > 0 && trim(val2).length > 0){
                    if(val1.toUpperCase() === val2.toUpperCase()){
                        return true;
                    }else{
                        return false;
                    }

                }
                return false;
            }

    public static maskNumber(val:string, digitDisplayed:number):string {
        return "********-"+val.split("-")[1];
    }

    public static substringBefore(val:string, delimiter:string):string {
        var str :string;
        if(isString(val) && trim(val).length > 0){
           str = val.split(delimiter)[0];
        }
        return str;
    }

    public static substringAfter(val:string, delimiter:string):string {
        var str :string;
        if(isString(val) && trim(val).length > 0){
           str = val.split(delimiter)[1];
        }
    return str;

    }

    public static formatPhoneNumberForEmail(number: string, extn: string): string {

        let formatStr: string = cst.NOT_PROVIDED;
        if(this.isNotBlank(number) && this.isNotBlank(extn)){
            formatStr = this.getFormattedPhoneNumber(number)+" ext "+extn
        }else if(this.isNotBlank(number)){
            formatStr = this.getFormattedPhoneNumber(number);
        }
        return formatStr;
    }


  public static mapAddressFromServiceLayerToAddressInFE(address:AddressDO):Address{

   let addr = new Address();
    if(null != address){
        addr.city= (null != address.city?(address.city).toUpperCase():cst.EMPTY_STR);
        addr.POBox=(null != address.poBox?address.poBox:cst.EMPTY_STR);
        addr.state=(null != address.state?address.state:cst.EMPTY_STR);
        addr.streetName= (null != address.streetName?(address.streetName).toUpperCase():cst.EMPTY_STR);
        addr.streetNum= (null != address.streetNumber?address.streetNumber:cst.EMPTY_STR);
        addr.zipcode= (null != address.zipCode?address.zipCode:cst.EMPTY_STR);
    }
    return addr;

}

public static getFormatedPhonenumber(strPhone:string):string {


      /*  if(CommonUtil.isNotBlank(strPhone)){
        strPhone = CommonUtil.getRawPhoneNumberFromFormatedPhone(strPhone);
        longPhone = Long.parseLong(strPhone);
        // get a 12 digits String, filling with left '0' (on the prefix)
        DecimalFormat phoneDecimalFmt = new DecimalFormat("0000000000");
        String phoneRawString = phoneDecimalFmt.format(longPhone);

        java.text.MessageFormat phoneMsgFmt = new java.text.MessageFormat(
                "{0}-{1}-{2}");
        // suposing a grouping of 3-3-4
        String[] phoneNumArray = { phoneRawString.substring(0, 3),
                phoneRawString.substring(3, 6), phoneRawString.substring(6) };

        return phoneMsgFmt.format(phoneNumArray);
        }*/
        return strPhone;
    }


//* Method will take String phone number in (XXX)-XXX-XXXX format and return
//* sting phone number in XXXXXXXXXX format
// * @param formatedPhone
//* @return string

public static getRawPhoneNumberFromFormatedPhone(formatedPhone:string):string {
	var phoneNumber ="";
	if (null != formatedPhone && CommonUtil.isNotBlank(formatedPhone)) {
		phoneNumber = formatedPhone.replace("(", "");
		phoneNumber = phoneNumber.replace(")", "");
		phoneNumber = phoneNumber.replace(" ", "");
//		phoneNumber = phoneNumber.replaceAll("-", EMPTY);
		phoneNumber = replace(phoneNumber, "-", "");
	}

	return phoneNumber;
}

public static leftPadZeros(s:string, size:number): string {
    while (s.length < size) s = "0" + s;
    return s;
}

public static getBMFSSSession(s:any): BMFSSSession {
    return s.session.bmfSSSession;
}

public static getLoggedInUserName(req:any): string {

    let userName =""
    try{
        userName = req.body.loggedInUserName;
    }catch(err){
      //console.log("ERROR=======>"+err.message)
    }
    return userName;
}

public static getWebSecurityRoleFromDBRoles(securityRole: string): string {

    if(this.isNotBlank(securityRole)){
      if(this.equalsIgnoreCase(securityRole, cst.USERTYPE_SP_EXT_BROKER))
        return cst.USERTYPE_EXT_BROKER;
      else if(this.equalsIgnoreCase(securityRole, cst.USERTYPE_SP_EXT_BRK_ASC))
        return cst.USERTYPE_EXT_BRK_ASC;
      else if(this.equalsIgnoreCase(securityRole, cst.USERTYPE_SP_EXT_CA_PO))
        return cst.USERTYPE_EXT_CA_PO;
      else if(this.equalsIgnoreCase(securityRole, cst.USERTYPE_SP_EXT_CA_PM))
        return cst.USERTYPE_EXT_CA_PM;
      else if(this.equalsIgnoreCase(securityRole, cst.USERTYPE_SP_EXT_CUS_ASC))
        return cst.USERTYPE_EXT_CUS_ASC;
      else if(this.equalsIgnoreCase(securityRole, cst.USERTYPE_SP_INT_ADMIN))
        return cst.USERTYPE_INT_ADMIN;
      else if(this.equalsIgnoreCase(securityRole, cst.USERTYPE_SP_INT_AGT_EMM))
        return cst.USERTYPE_INT_AGT_EMM;
      else if(this.equalsIgnoreCase(securityRole, cst.USERTYPE_SP_INT_AGT_EMA))
        return cst.USERTYPE_INT_AGT_EMA;
      else if(this.equalsIgnoreCase(securityRole, cst.USERTYPE_SP_INT_AGT_OPREP))
        return cst.USERTYPE_INT_AGT_OPREP;
      else if(this.equalsIgnoreCase(securityRole, cst.USERTYPE_SP_INT_READ_ONLY))
        return cst.USERTYPE_INT_READ_ONLY;
      else if(this.equalsIgnoreCase(securityRole, cst.USERTYPE_SP_EXT_READ_ONLY))
        return cst.USERTYPE_EXT_READ_ONLY;
      }
    return securityRole;
}


public static getSecurityRoleFromDBRoles(securityRole: string): string {

		if(this.isNotBlank(securityRole)){
			if(this.equalsIgnoreCase(securityRole, cst.USERTYPE_SP_EXT_BROKER))
				return cst.SECURITY_ROLE_BROKER;
			else if(this.equalsIgnoreCase(securityRole, cst.USERTYPE_SP_EXT_BRK_ASC))
				return cst.SECURITY_ROLE_BROKER_ASC;
			else if(this.equalsIgnoreCase(securityRole, cst.USERTYPE_SP_EXT_CA_PO))
				return cst.SECURITY_ROLE_CUS_ADMIN;
			else if(this.equalsIgnoreCase(securityRole, cst.USERTYPE_SP_EXT_CA_PM))
				return cst.SECURITY_ROLE_CUS_ADMIN;
			else if(this.equalsIgnoreCase(securityRole, cst.USERTYPE_SP_EXT_CUS_ASC))
				return cst.SECURITY_ROLE_CUS_ASC;
			else if(this.equalsIgnoreCase(securityRole, cst.USERTYPE_SP_INT_ADMIN))
				return cst.SECURITY_ROLE_ADMIN;
			else if(this.equalsIgnoreCase(securityRole, cst.USERTYPE_SP_INT_AGT_EMM))
				return cst.SECURITY_ROLE_AGT;
			else if(this.equalsIgnoreCase(securityRole, cst.USERTYPE_SP_INT_AGT_EMA))
				return cst.SECURITY_ROLE_AGT;
			else if(this.equalsIgnoreCase(securityRole, cst.USERTYPE_SP_INT_AGT_OPREP))
				return cst.SECURITY_ROLE_AGT;
			else if(this.equalsIgnoreCase(securityRole, cst.USERTYPE_SP_INT_READ_ONLY))
				return cst.SECURITY_ROLE_READ_ONLY;
			else if(this.equalsIgnoreCase(securityRole, cst.USERTYPE_SP_EXT_READ_ONLY))
				return cst.SECURITY_ROLE_EXT_READ_ONLY;
      }
		  return securityRole;

	}

  public static isBrokerOrBrokerAssociate(securityRole: string): boolean {

      if(this.equalsIgnoreCase(securityRole, cst.USERTYPE_SP_EXT_BROKER) ||
        this.equalsIgnoreCase(securityRole, cst.USERTYPE_SP_EXT_BRK_ASC)){
          return true;
      }
      return false;
  }

  public static isUserHasAssociations(securityRole: string): boolean {

      if(this.equalsIgnoreCase(securityRole, cst.USERTYPE_SP_INT_ADMIN) ||
        this.equalsIgnoreCase(securityRole, cst.USERTYPE_SP_INT_AGT_OPREP) || this.equalsIgnoreCase(securityRole, cst.USERTYPE_SP_INT_READ_ONLY)){
          return false;
      }
      return true;
  }

  public static createBpAddressStrFromObj(address: any): string {

  		 if(null != address && this.isNotBlank(address.streetNumber) && this.isNotBlank(address.streetName)){
  			   return address.streetNumber+cst.EMPTY_SPACE+this.toUpperCase(address.streetName)+cst.EMPTY_SPACE+this.toUpperCase(address.city)
  					   +cst.EMPTY_SPACE+address.state+","+cst.EMPTY_SPACE+address.zipCode;
  		   }else{
  			   return cst.NOT_PROVIDED;
  		   }
    }

    public static isStringContains(str: string, val: string){
        if(undefined == str){
          return false;
        }else{
            return str.indexOf(val) != -1
        }
    }

    public static isManagementListContainsDummyNodes(managementBPList: ManagementBP[]){

          let status: boolean = false;
          try{
              managementBPList.forEach(mng => {
                  if(this.isStringContains(mng.bpNumber,"NO_MGMT")){
                      if(mng.regionList.length > 0){
                        status = true;
                        LoggerUtil.info("MANAGEMENT CONTAINS DUMMY NODES AND RETURNING::::::::::"+status);
                        return status;
                      }
                  }
                  mng.regionList.forEach(rgn => {
                      if(this.isStringContains(rgn.bpNumber,"NO_REGN")){
                          if(rgn.propertyList.length > 0){
                            status = true;
                            LoggerUtil.info("UNDER MANAGEMENT::::REGION LIST CONTAINS DUMMY NODES:::SO RETURNING::::::::::"+status);
                            return status;
                          }
                      }
                  })
              })
            }catch(err){
              LoggerUtil.info("ERROR===isManagementListContainsDummyNodes::::"+err.mesage)
            }
            LoggerUtil.info("CHECKING IF THE MANAGEMENT CONTAINS DUMMY NODES::::::::::"+status);
          return status;
    }


    public static isManagementListContainsAtleastOneRealNode(managementBPList: ManagementBP[]): boolean {

        let mngCounter =0;
        managementBPList.forEach(mng => {
            if(!this.isStringContains(mng.bpNumber, "NO_MGMT")){
                mngCounter++;
            }
        });
        LoggerUtil.info("CHECKING MANAGEMENT CONTAINS ATLEAST ONE REAL NODE:::"+mngCounter)
        return mngCounter > 0;
    }

    public static returnRegionListWithRealNode(rgnList: Region[]): Region[]{
        LoggerUtil.info("returnRegionListWithRealNode:::start")
        let regionList = new Array<Region>();
        rgnList.forEach(reg => {
            if(!this.isStringContains(reg.bpNumber, "NO_REGN")){
                regionList.push(reg);
            }
        });
        LoggerUtil.info("returnRegionListWithRealNode:::end:::"+regionList.length)
        return regionList;
    }

    public static checkManagementListOrRegionListHasOnlyOneProperty(managementBPList: ManagementBP[], rgnList: Region[]): boolean{

        LoggerUtil.info("CHECKING IF MANAGEMENT LIST OR REGION LIST HAS ONLY ONE PROPERTY:::>>>>>>STARTED");
        let status: boolean = false;
        try{
            if(undefined != managementBPList && managementBPList.length == 1){
                if(undefined != managementBPList[0].regionList && managementBPList[0].regionList.length == 1){
                    if(undefined != managementBPList[0].regionList[0].propertyList &&
                    managementBPList[0].regionList[0].propertyList.length == 1){
                      status = true;
                    }
                }
            }

            if(undefined != rgnList && rgnList.length == 1){
                if(undefined != rgnList[0].propertyList && rgnList[0].propertyList.length == 1){
                    status = true;
                }
            }
          }catch(err){
             LoggerUtil.info("ERROR==checkManagementListOrRegionListHasOnlyOneProperty==>"+err.message);
          }
          LoggerUtil.info("CHECKING IF MANAGEMENT LIST OR REGION LIST HAS ONLY ONE PROPERTY:::>>>>>>END:::::"+status);
          return status;
    }

    public static getFormattedPhoneNumber(phone: string): string {

      if(this.isNotBlank(phone) && phone.length == 10){
          return phone.substring(0,3)+"-"+phone.substring(3,6)+"-"+phone.substring(6)
      }
      return phone;
    }

   public static getSoonestDueDate( dateList:Array<Date>): any{
        var earliest = dateList.reduce(function (pre, cur) {
            return (pre) > (cur) ? cur : pre;
        });
    //console.log(earliest);
  }

}
