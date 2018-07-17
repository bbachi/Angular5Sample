import LoggerUtil from './../logs/log';
import Promise = require('tspromise');
import { GetPromoCodeDetailsRequest } from './../request/mfstartservice.request';
import { GetFormFileDetailsForPromoCodeRequest } from '../request/getformfiledetailsforpromocoderequest';
import * as cst from './../util/constant';
import { CommonUtil } from './../util/common.util';
import { FormsService } from '../services/forms.services';
import { StartStopTxnService } from '../services/startstoptxn.service';
import { PromoCodeDO } from '../model/promocodedo';
import { Form } from '../model/form';
import * as _ from "lodash";


export class FormsHelper {

  private formsService: FormsService;
  private startStopService: StartStopTxnService;
  static readonly HB_DEFAULT_PC_VALUE = "GMEHB0000";
	static readonly MF_DEFAULT_PC_VALUE = "GMEMF0000";
	static readonly MF_CSA_DEFAULT_PC_VALUE = "GMEMF0001";
	static readonly MF_NONCSA_DEFAULT_PC_VALUE = "GMEMF0002";

  constructor(){
      this.formsService = new FormsService();
      this.startStopService = new StartStopTxnService();
  }


    public getGMEForms(req: any): Promise<any> {

        LoggerUtil.info("Getting forms for the request::::"+JSON.stringify(req.body))
        let formsList = new Array<Form>();
        let inReq = new GetFormFileDetailsForPromoCodeRequest();
        var p = new Promise((resolve, reject) => {
          this.getPromocodeListForSelectedProperty(req).then((reqResp:any) => {
            inReq.promoCodeList = reqResp;
            LoggerUtil.info("inReq.promoCodeList::::"+inReq.promoCodeList)
            this.formsService.getFormFileDetailsforPromocode(inReq).then(t => {
                  if(null != t && null != t.fileDetailsVOList && t.fileDetailsVOList.length > 0){
                    LoggerUtil.info("Forms found..."+  t.fileDetailsVOList.length);
                    t.fileDetailsVOList.forEach((fileDtl: any) => {
                      let form =  new Form();
                      form.displayName = fileDtl.displayname;
                      form.pid = String(fileDtl.pid);
                      formsList.push(form);
                    })
                    resolve(formsList);
                  }else{
                    LoggerUtil.info("No forms found...");
                    resolve([])
                  }
              });
          });
        });
        return p;
    }


    public getPromocodeListForSelectedProperty(req:any): Promise<any>{
        let promoCodeReq  = new GetPromoCodeDetailsRequest();
        let promoCodeArr = new Array<string>();
        let username = req.body.loggedInUserName
        promoCodeArr = this.getDefaultValuesBasedOnUserTypeAndBPType(promoCodeArr, req);
        LoggerUtil.info("Promocode array is ===="+promoCodeArr)
        let relationshipid = req.body.relationshipId;
        promoCodeReq.strCompanyCode =cst.GMESS_CC_0270;
        promoCodeReq.strLoggedInUserName = username;
        promoCodeReq.strPortal=cst.GMESS_PORTAL;
        promoCodeReq.strRelationshipId = relationshipid;
        LoggerUtil.info("Relationship id = "+relationshipid+" And User Name is =="+username);
        var p = new Promise((resolve, reject) => {
           this.startStopService.getPromocodeDetails(promoCodeReq).then(t => {
              if(null != t && null != t.serviceAreaPromoCodeList && t.serviceAreaPromoCodeList.length > 0){
                 t.serviceAreaPromoCodeList.forEach((promo: any) => {
                    promoCodeArr.push(promo.strPromoCode);
                  });
                   resolve(promoCodeArr)
              }else{
                  LoggerUtil.info("NO PROMO CODES FOUND FOR THE USER::::::::"+ username+":::AND RELATION SHIP ID:::"+relationshipid);
                  resolve(promoCodeArr)
              }
            });
        });
        return p;
    }

    public getPDFsForSelectedForm(req:any): Promise<any> {
       LoggerUtil.info("GETTING THE PDF FORM FOR THE PID::::::::"+req.body.pid);
       var p = new Promise((resolve, reject) => {
          //console.log(":::req.params.pid:::"+req.params.pid)
          this.formsService.getPDFForm({pid:req.params.pid}).then(t => {
           //console.log(t)
           resolve(t.fileDataStr);
         });
       });
       return p;
    }

    private getDefaultValuesBasedOnUserTypeAndBPType(promoCodeList:Array<string>, req:any):Array<string>{

  		if(this.isBuilder(req)){
  			  promoCodeList.push(FormsHelper.HB_DEFAULT_PC_VALUE);
  		}else{
         promoCodeList.push(FormsHelper.MF_DEFAULT_PC_VALUE);
  			 let bpType:string  = req.body.bpType;
  			if (CommonUtil.isNotBlank(bpType)){
  				if(_.isEqual(cst.ACCOUNT_CTGY_CSA,bpType)){
  					  promoCodeList.push(FormsHelper.MF_CSA_DEFAULT_PC_VALUE);
          }else if(_.isEqual(cst.ACCOUNT_CTGY_NCSA,bpType)){
  	          promoCodeList.push(FormsHelper.MF_NONCSA_DEFAULT_PC_VALUE);
  	      }
  			}
  		}
  		return promoCodeList;
	}

  private isBuilder(propertyType: string):boolean{
    return CommonUtil.equalsIgnoreCase(propertyType, cst.CUSTOMERTYPE_HB)?true:false;
  }


}
