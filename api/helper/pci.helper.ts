import LoggerUtil from './../logs/log';
import { CommonUtil } from './../util/common.util';
import * as cst from './../util/constant';

export class PCIHelper {


  public getURLBasedOnModule(module: string, ...rest: any[]): string {

      if(module == "dashboard"){
          return '/gmeSSApp/protected/customer/dashboard.htm';
      }else if(module == "startservice"){
          return '/gmeSSApp/protected/customer/service/start/selectproperty.htm'
      }else if(module == "stopservice"){
          return '/gmeSSApp/protected/customer/service/stop/businessinfo.htm'
      }else if(module == "viewbill"){
          return '/gmeSSApp/protected/customer/billing/paybill/viewbill.htm'
      }else if(module == "paymenthistory"){
          return '/gmeSSApp/protected/customer/billing/paymenthistory.htm'
      }else if(module == "previousbills"){
          return '/gmeSSApp/protected/customer/billing/previousbills.htm'
      }else if(module == "alertsetup"){
          return '/gmeSSApp/protected/customer/vacancy/alertsetup.htm'
      }else if(module == "dailyreport"){
          return '/gmeSSApp/protected/customer/vacancy/dailyreport.htm'
      }else if(module == "forms"){
          return '/gmeSSApp/protected/customer/forms/list.htm'
      }else if(module == "transactions"){
          return '/gmeSSApp/protected/customer/transactions/list.htm'
      }else if(module == "vacancy"){
          return '/gmeSSApp/protected/customer/reports/vacancy.htm'
      }else if(module == "roll"){
          return '/gmeSSApp/protected/customer/reports/roll.htm'
      }else if(module == "overview"){
          return '/gmeSSApp/protected/customer/profile/overview.htm'
      }else if(module == "adduser"){
          return '/gmeSSApp/protected/customer/profile/adduser/info.htm'
      }else if(module == "updateuser"){
          return '/gmeSSApp/protected/customer/profile/update/user.htm'
      }else if(module == "updatemyprofile"){
          return '/gmeSSApp/protected/customer/profile/ownprofile/update.htm'
      }else if(module == "removeuser"){
          return '/gmeSSApp/protected/customer/profile/remove/search.htm'
      }else if(module == "ccoverview"){
          return '/gmeSSApp/protected/customer/cc/overview.htm'
      }else if(module == "emailus"){
          return '/gmeSSApp/protected/customer/cc/emailus.htm'
      }else if(module == "faqs"){
          return '/gmeSSApp/protected/customer/cc/faqs.htm'
      }else if(module == 'pciback'){
          if(rest[0] == 'Y'){
              return '/gmeSSApp/protected/customer/billing/paybill/collective/paymentmethod.htm'
          }else{
              return '/gmeSSApp/protected/customer/billing/paybill/viewbill.htm'
          }
      }else if(module == 'logout'){
          return cst.PCI_LOG_OUT_URL
      }else if(module == 'changeproperty'){
          return '/gmeSSApp/protected/customer/dashboard.htm'
      }
  }

}
