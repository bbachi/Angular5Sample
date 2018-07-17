import LoggerUtil from './../logs/log';
import Promise = require('tspromise');
import { GetTransactionsRequest } from '../request/transactions.request';
import { GetTxnDetailsRequest } from '../request/gettxndetails.request';
import { Transaction } from '../model/transactions.model';
import { TransactionDtls } from '../model/transactiondtls.model';
import { UserTransactionService } from './../services/usertransaction.service'
import * as cst from './../util/constant';
import {CommonUtil} from './../util/common.util';
import * as moment from 'moment';
import * as _ from "lodash";
import {CommonUtilityHelper} from './commonutility.helper';
import {Unit} from './../model/bmfss.session';
import {VumTransactionDtlDO} from './../model/vumtransactiondtldo';

export class TransactionsHelper {

    private txnService: UserTransactionService;

    constructor(){
        this.txnService = new UserTransactionService();
    }

    public listTransactions(req: any): Promise<any> {

        LoggerUtil.info("getting transactions for the request::::"+JSON.stringify(req.body))
        let inReq = this.populateTxnRequest(req);
        var p = new Promise((resolve, reject) => {
          this.txnService.getUserTransactions(inReq).then(t => {
              resolve(this.populateTxnList(t));
          });
        });
        return p;
    }

    private populateTxnList(res: any): Transaction[] {

        let txnList = new Array<Transaction>();
        try{
          if(null != res &&  res.dataAvailForInput){
            res.transactionDOList.forEach((trans: any) => {
              let txn = new Transaction();
               txn.id = trans.transactionId;
               txn.requestor = trans.requestor;
               txn.submissionDate = _.replace(trans.transactionDate, "at", cst.EMPTY_STR);
               txn.type = _.replace(trans.transactionType, "VUE", "VUM");
               txn.serviceAddress=CommonUtil.isNotBlank(trans.streetAddress)?trans.streetAddress:cst.NA;
               txn.unit = CommonUtil.isNotBlank(trans.unit)?trans.unit:cst.NA;
             if(!((trans.transactionType).includes("Email")) && !((trans.transactionType).includes("Update User")))
                txnList.push(txn);
            });
          }
        }catch(err){
          LoggerUtil.info("ERROR===========>"+err.message);
        }
        return txnList;
    }

    private populateTxnRequest(req: any): GetTransactionsRequest {

        let inReq = new GetTransactionsRequest();
        try{
          inReq.strCompanyCode = cst.GMESS_CC_0270;
          inReq.strLoggedInUserName=  CommonUtil.getLoggedInUserName(req);
          if((undefined != (req.body.startDate) && undefined != (req.body.endDate))){
            inReq.fromDate = req.body.startDate;
            inReq.toDate = req.body.endDate;
          }else{
            let dateFormat: string = "MM/DD/YYYY";
            inReq.fromDate = moment().format(dateFormat);
            inReq.toDate = moment().format(dateFormat);
          }
        }catch(err){
          LoggerUtil.info("ERROR==populateTxnRequest===>"+err.message);
        }
        return inReq;
    }


    public detailTransaction(req: any): Promise<any> {
      let commonUtilityHelper = new CommonUtilityHelper();
      let inReq =  this.populateGetTxnDetailsRequest(req);
      let txnTypeStr = req.body.txnType;
      var p = new Promise((resolve, reject) => {
          this.txnService.getUserTxnDetails(inReq).then(t => {
             if(null !=t && t.transactionsFound){
               let txnDtls =  new TransactionDtls();
               txnDtls.transactionId = req.body.transactionId;
               txnDtls.txnType = txnTypeStr;
               txnDtls.txnDate = req.body.txnDate;
               if(_.isEqual(txnTypeStr, cst.TXN_TYPE_LOGIN)){
                    txnDtls = this.populateTxnDtlForLogin(txnDtls,t);
               }else if(_.isEqual(txnTypeStr, cst.TXN_TYPE_UPDATE_PROFILE) || _.isEqual(txnTypeStr, cst.TXN_TYPE_CREATE_USER) ||
        					_.isEqual(txnTypeStr, cst.TXN_TYPE_DEACTIVATE_USER)){
                    txnDtls = this.populateTxnDtlForUserProfile(txnDtls,t);
        			}else if((txnTypeStr).includes(cst.TXN_TYPE_STOP)){
                    txnDtls = this.populateTxnDtlForStopService(txnDtls,t);
              }else if(txnTypeStr.includes(cst.TXN_TYPE_VUE) || txnTypeStr.includes(cst.TXN_TYPE_VUM)){
                let vumTxnDtlsArr  =  null !=t.vumTxnDtls()?t.vumTxnDtls():new Array<VumTransactionDtlDO>();
            		if(txnTypeStr.includes("opt")){
                  txnDtls.vueEmailOne = (vumTxnDtlsArr.length >0?vumTxnDtlsArr[0].emailOne:cst.NOT_PROVIDED);
              		txnDtls.vueEmailTwo = (vumTxnDtlsArr.length >0?vumTxnDtlsArr[0].emailTwo:cst.NOT_PROVIDED);
              		txnDtls.vueEmailStatus = (txnTypeStr.includes("In"))?"Active":"InActive";
            		}else{
                 let unitList = new Array<Unit>();

                 vumTxnDtlsArr.forEach((vueDO: any) => {
              			let unit = new Unit();
              			unit.strStreetNum = (vueDO.streetAddress);
              			unit.strUnitNumber = (vueDO.unit);
              			unit.unitThreshold = (vueDO.unitThreshold);
              			unit.unitType = (this.getVUMBedroomTxtBasedOnUnitType(vueDO.unitType));
              			unitList.push(unit);
              		});
              		txnDtls.esiidList = unitList;
              		txnDtls.propertName = vumTxnDtlsArr.length>0?vumTxnDtlsArr[0].propertyName:cst.NOT_PROVIDED;
            		}
        			}else if(txnTypeStr.includes(cst.TXN_TYPE_START)){
                  txnDtls = this.populateTxnDtlForStartService(txnDtls,t);
              }else{
                LoggerUtil.info("NO TRANSACTIONS FOUND FOR THIS TRANSACTION ID::::::::"+req.body.transactionId);
              }
              resolve(txnDtls);
          }else{
              resolve({errorCode:2, errorMessage:t.errorMessage})
          }
      });

    });
      return p;
    }

    private populateTxnDtlForLogin(txnDtls: TransactionDtls, t:any): TransactionDtls {

        try{
          txnDtls.txnDate = t.txnDtl.transactionDate;
          txnDtls.firstName = t.txnDtl.firstName;
          txnDtls.lastName = t.txnDtl.lastName;
          txnDtls.userName = t.txnDtl.requestor;
        }catch(err){
            LoggerUtil.info("ERROR====populateTxnDtlForLogin===="+err.message);
        }
        return txnDtls
    }

    private populateTxnDtlForUserProfile(txnDtls: TransactionDtls, t:any): TransactionDtls {
        let commonUtilityHelper = new CommonUtilityHelper();
        try{
          txnDtls.lastName=t.userDetails.lastName;
          txnDtls.userName = t.userDetails.userName;
          txnDtls.contactPhone =CommonUtil.isNotBlank(t.userDetails.contactPhone)?t.userDetails.contactPhone:cst.NOT_PROVIDED;
          txnDtls.contactPhExtn = CommonUtil.isNotBlank(t.userDetails.contactPhoneExtn)?t.userDetails.contactPhoneExtn:cst.NOT_PROVIDED;
          txnDtls.altContactPhExtn=CommonUtil.isNotBlank(t.userDetails.altContactPhoneExtn)?t.userDetails.altContactPhoneExtn:cst.EMPTY_STR;
          txnDtls.faxNumber=CommonUtil.isNotBlank(t.userDetails.faxNumber)?t.userDetails.faxNumber:cst.NOT_PROVIDED;
          txnDtls.billingAce = t.userDetails.billingAce;
          txnDtls.startStopAce = t.userDetails.startStopAce;
          txnDtls.email = t.userDetails.emailId;
          txnDtls.securityRole = commonUtilityHelper.getSecurityRoleAndUserTypeFromWebSecurityRole(t.userDetails.webSecurityRole,"SR");
          txnDtls.userType = commonUtilityHelper.getSecurityRoleAndUserTypeFromWebSecurityRole(t.userDetails.webSecurityRole,"UT");
        }catch(err){
            LoggerUtil.info("ERROR====populateTxnDtlForLogin===="+err.message);
        }
        return txnDtls
    }

    private populateTxnDtlForStartService(txnDtls: TransactionDtls, t:any): TransactionDtls {

        let esiidListArr = new Array<Unit>();
        try{
          txnDtls.serviceAddress =  t.txnDtls[0].streetNumber+cst.EMPTY_SPACE+ t.txnDtls[0].streetName+
              cst.EMPTY_SPACE+ t.txnDtls[0].city+" ,"+ t.txnDtls[0].state+cst.EMPTY_SPACE+ t.txnDtls[0].zipcode;

          t.txnDtls.forEach((tranDtl: any) => {
            let esiid = new Unit();
            esiid.esiid=(tranDtl.esiId);
            esiid.strUnitNumber=(tranDtl.unitNumber);
            esiid.selectedStartDate=moment(tranDtl.installStartDate).format("MM/DD/YYYY");
            esiid.priorityDateSelected = tranDtl.priority;
            esiidListArr.push(esiid);
          });
          txnDtls.esiidList = esiidListArr;
        }catch(err){
          LoggerUtil.info("ERROR====populateTxnDtlForStartService===="+err.message);
        }
        return txnDtls;
    }

    private populateTxnDtlForStopService(txnDtls: TransactionDtls, t:any): TransactionDtls {

        let esiidListArr = new Array<Unit>();
        try{
          txnDtls.serviceAddress =  t.txnDtls[0].streetNumber+cst.EMPTY_SPACE+ t.txnDtls[0].streetName+
                 cst.EMPTY_SPACE+ t.txnDtls[0].city+" ,"+ t.txnDtls[0].state+cst.EMPTY_SPACE+ t.txnDtls[0].zipcode;
          t.txnDtls.forEach((tranDtl: any) => {
             let esiid = new Unit();
             esiid.esiid=(tranDtl.esiId);
             esiid.strUnitNumber=(tranDtl.unitNumber);
             esiid.selectedStartDate= moment(tranDtl.removeStopDate).format("MM/DD/YYYY");
             esiidListArr.push(esiid);
           });
          txnDtls.esiidList = esiidListArr;
        }catch(err){
          LoggerUtil.info("ERROR====populateTxnDtlForStartService===="+err.message);
        }
        return txnDtls;
    }



    private populateGetTxnDetailsRequest(req: any): GetTxnDetailsRequest {

        let inReq = new GetTxnDetailsRequest();
        try{
          inReq.strCompanyCode = cst.GMESS_CC_0270;
          inReq.strLoggedInUserName = CommonUtil.getLoggedInUserName(req);
          inReq.transactionId = req.body.transactionId;
          let txnTypeStr = req.body.txnType;
          if((txnTypeStr).includes(cst.TXN_TYPE_SERVICE)){
    			     inReq.transactionType = cst.TXN_TYPE_SERVICE_FOR_REQUEST;
      		}else if(((txnTypeStr).includes(cst.TXN_TYPE_VUE)) || ((txnTypeStr).includes(cst.TXN_TYPE_VUM))){
      			   inReq.transactionType = cst.TXN_TYPE_VUE_FOR_REQUEST;
      		}else{
    			     inReq.transactionType = cst.TXN_TYPE_SERVICE_FOR_NONSS;
    		  }
        }catch(err){
          LoggerUtil.info("ERROR==populateTxnRequest===>"+err.message);
        }
        return inReq;
    }


    private  getVUMBedroomTxtBasedOnUnitType(unitType:string):string{

		if(_.isEqual(unitType, "1")){
			return cst.UNIT_TYPE_1BEDROOM;
		}else if(_.isEqual(unitType, "2")){
			return cst.UNIT_TYPE_2BEDROOM;
		}else if(_.isEqual(unitType, "3")){
			return cst.UNIT_TYPE_3BEDROOM;
		}else{
			return cst.UNIT_TYPE_OTHERS;
		}

	}
}
