import LoggerUtil from './../logs/log';
import Promise = require('tspromise');
import * as cst from './../util/constant';
import { CommonUtil } from './../util/common.util';
import * as moment from 'moment'
import { BillingService } from '../services'
import { StructuralRequest } from './../request/billingdetails.request'
import { StructuralDO, ContractAccount } from '../model/billing.model'

export class ContractAccountHelper {

    private billingService: BillingService;

    constructor(){
        this.billingService = new BillingService();
    }

    public getStructuralDetails(req: any): Promise<any> {

       let inReq = this.populateStructuralRequest(req);
       var p = new Promise((resolve,reject) => {
           this.billingService.getContractAccountList(inReq).then(s => {
               let indAndCollAccounts = this.divideCollectiveAndIndiAcounts(s);
               resolve(indAndCollAccounts);
           });
       });
       return p;
    }

    private populateStructuralRequest(req: any): StructuralRequest {
       let strucReq = new StructuralRequest();
       strucReq.bpNumberList = req.body.bpNumberList;
       strucReq.strCompanyCode = cst.GMESS_CC_0270;
       strucReq.strLoggedInUserName = CommonUtil.getLoggedInUserName(req);
       strucReq.strPortal = cst.GMESS_PORTAL;
       return strucReq;
    }


    private divideCollectiveAndIndiAcounts(s: any): any {

       let indContractAccountList = new Array<ContractAccount>();
       let collContractAccountList = new Array<ContractAccount>();
       let tempContractAccountList = new Array<string>();
       try{
         if(undefined != s && s.dataAvilableForInput){
             let strcuDOList: StructuralDO[] = this.populateStructuralList(s.structuralDOList);
             strcuDOList.forEach(strucDO => {
                 if(CommonUtil.isNotBlank(strucDO.collContractAct)){
                     if(!CommonUtil.isArrayContains(tempContractAccountList,strucDO.collContractAct)){
                         let ca = new ContractAccount;
                         ca.partnerNumber = strucDO.partnerNumber;
                         ca.address = this.getAddressStringFromObject(strucDO).trim();
                         ca.contractAccountNumber = strucDO.collContractAct;
                         collContractAccountList.push(ca);
                         tempContractAccountList.push(strucDO.collContractAct);
                     }
                 }/*else{
                     let ca = new ContractAccount;
                     ca.partnerNumber = strucDO.partnerNumber;
                     ca.address = this.getAddressStringFromObject(strucDO).trim();
                     ca.contractAccountNumber = strucDO.contractAccount;
                     indContractAccountList.push(ca);
                 }*/
             })
             LoggerUtil.info("INDIVIDUAL CONTRACT ACCOUNT LIST::::::"+indContractAccountList.length);
             LoggerUtil.info("COLLECTIVE CONTRACT ACCOUNT LIST::::::"+collContractAccountList.length);
         }
       }catch(err){
         LoggerUtil.info("ERROR=======divideCollectiveAndIndiAcounts==="+err.message)
       }
       return {collContractAccountList};
       //this is commented because no need to show individual billing for GME.
       //return {collContractAccountList,indContractAccountList};
    }

    private getAddressStringFromObject(struc: StructuralDO): string{
      return struc.streetNum+" "+struc.streetName+((CommonUtil.isNotBlank(struc.unitNumber)?" Unit"+
   				struc.unitNumber:cst.EMPTY_STR)+" "+struc.city+", "+struc.state+" "+struc.zipCode);
   	}

    private populateStructuralList(strucList: any): StructuralDO[] {

       let structuralList = new Array<StructuralDO>();
       try{
           strucList.forEach((strucDO:any) => {
               let struc = new StructuralDO();
               struc.city = strucDO.city;
               struc.collContractAct = strucDO.collContractAct;
               struc.contract = strucDO.contract;
               struc.contractAccount = strucDO.contractAccount;
               struc.esiid = strucDO.esiid;
               struc.fullZipCode = strucDO.fullZipCode;
               struc.houseNo = strucDO.houseNo;
               struc.partnerNumber = strucDO.partnerNumber;
               struc.premiseType = strucDO.premiseType;
               struc.state = strucDO.state;
               struc.streetName = strucDO.streetName;
               struc.streetNum = strucDO.streetNum;
               struc.unitNumber = strucDO.unitNumber;
               struc.zipCode = strucDO.zipCode;
               structuralList.push(struc);
           });
       }catch(err){
         LoggerUtil.info("ERROR======populateStructuralList=====>"+err.message)
       }
       return structuralList;
    }

}
