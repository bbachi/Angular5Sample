import LoggerUtil from './../logs/log';
import Promise = require('tspromise');
import * as cst from './../util/constant';
import { CommonUtil } from './../util/common.util';
import { CommonUtilityHelper} from '../helper/commonutility.helper';
import * as _ from "lodash";
import { Unit, ESIID} from './../model/bmfss.session';
import { ENVIRONMENT_CONFIG} from './../util/constant';
import { EmailRequest} from './../request/email.request';
import { EmailDO} from './../model/emaildo';
import { EmailService} from './../services/email.service';
import { LDAPHelper} from './../helper/ldap.helper'
import { UpdatePasswordVO} from './../model/updatepasswordvo';
import { IndInvoice } from './../model/billing.model'
import { SubmitPaymentRequest, } from './../request/billingdetails.request'
import { SchedulePaymentEmail, PaymentEmail, PaymentCancelEmail, EmailUsEmail, UpdateUserEmail, ServiceEmail } from '../model/email'

export class EmailHelper {

  private emailService: EmailService;
  private StringBuffer = require("stringbuffer");
  constructor() {
        this.emailService = new EmailService();

  }

  public sendMFStartServiceEmail(req: ServiceEmail):boolean {

    LoggerUtil.info("inside sendMFStartServiceEmail method :----------------------------------------------");
    let emailReq = new EmailRequest();
    let status:boolean = false;
    let subject = ""; //Already set in email template
    let commonUtilityHelper = new CommonUtilityHelper();
    try{
       let meterStartStopInfo = new this.StringBuffer();
       let unitVOSize = req.unitList.length;
       LoggerUtil.info("UnitVosize is==="+unitVOSize);
       let count = 0;
       req.unitList.forEach((unitData:Unit) =>{
           meterStartStopInfo.append("<div class='label'>Unit:<span class='value'>"
               + CommonUtil.defaultIfEmpty(unitData.strUnitNumber, "")
                   + "</span></div><div class='label'>ESI ID:<span class='value'>"
                   + CommonUtil.defaultIfEmpty(unitData.esiid, "")
                       + "</span></div><div class='label'>Effective Date:<span class='value'>"
                       + CommonUtil.defaultIfEmpty(unitData.effectiveDate, "")
                           + "</span></div>");
           count++;
           LoggerUtil.info("count is==="+count);
           if(count<unitVOSize){
             meterStartStopInfo.append("<br/>");
           }
       });
       emailReq.externalId = cst.MF_START_SERVICE_CONFIRMATION_EXTERNAL_ID;
       emailReq.templateType = cst.TEMPLATE_HTML;
       emailReq.toEmailList.push(req.email);
       emailReq.propertyList.push(cst.MF_TRANSACTION_TIME+":"+CommonUtil.defaultIfEmpty(req.transactionDate, cst.NOT_PROVIDED),
                                cst.MF_TRANSACTION_NUM+":"+CommonUtil.defaultIfEmpty(req.transactionId, cst.NOT_PROVIDED),
                                cst.MF_CONTACT_NAME+":"+ req.contactName,
                                cst.MF_CONTACT_PHONE_NUM+":"+req.contactPhoneNumber,
                                cst.MF_CONTACT_FAX_NUM+":"+req.contactFaxNumber,
                                cst.MF_CONTACT_EMAIL_ADDRESS+":"+req.contactEmailAddress,
                                cst.MF_PROPERTY_NAME+":"+req.propertyName,
                                cst.MF_SERVICE_ADDRESS+":"+this.getStartServiceAddress(req.propertyAddress,req.propertyCity,req.propertyZipcode),
                                cst.MF_METER_START_INFO+":"+meterStartStopInfo);

  } catch (e) {
          LoggerUtil.error("Failed to setMFStartServiceEmail request::::::: with exception "+ e.message);

  }
  this.sendEmail(emailReq).then(t =>{
        if(undefined != t)
           LoggerUtil.info("Email Sending response is == " +t.resultdescription);
           status = CommonUtil.equalsIgnoreCase(t.resultdescription,"Success");
    });
  LoggerUtil.info("The Email status for external id:::MF_START_SERVICE_CONFIRMATION_EXTERNAL_ID:::::" + status);

   return status;
 }


 private getStartServiceAddress(propertyAddress: string, propCity: string, propZipcode: string): string {
    try{
      return CommonUtil.defaultIfEmpty(propertyAddress, cst.NOT_PROVIDED)+"<br/>"+CommonUtil.defaultIfEmpty(propCity, cst.NOT_PROVIDED)+", "
      +CommonUtil.defaultIfEmpty("TX", cst.NOT_PROVIDED)+" "+CommonUtil.defaultIfEmpty(propZipcode, cst.NOT_PROVIDED)
    }catch{
        return cst.NOT_PROVIDED
    }

 }


 public  sendMFStopServiceEmail(req: ServiceEmail):boolean {
   let emailReq = new EmailRequest();
   let status:boolean = false;
   let subject = ""; //Already set in email template
   let commonUtilityHelper = new CommonUtilityHelper();

  try {
      var StringBuffer = require("stringbuffer");
      let meterStartStopInfo = new StringBuffer();
      let unitVOSize = req.unitList.length;
      LoggerUtil.info("UnitVosize is==="+unitVOSize);
      let count = 0;
      req.unitList.forEach((unitData:Unit) =>{

      meterStartStopInfo.append("<div class='label'>Unit:<span class='value'>"
          + CommonUtil.defaultIfEmpty(unitData.strUnitNumber, "")
              + "</span></div><div class='label'>ESI ID:<span class='value'>"
              + CommonUtil.defaultIfEmpty(unitData.esiid, "")
                  + "</span></div><div class='label'>Effective Date:<span class='value'>"
                  + CommonUtil.defaultIfEmpty(unitData.effectiveDate, "")
                      + "</span></div>");
      count++;
      LoggerUtil.info("count is==="+count);
      if(count<unitVOSize){
        meterStartStopInfo.append("<br/>");
      }
    });
    emailReq.externalId = cst.MF_STOP_SERVICE_CONFIRMATION_EXTERNAL_ID;
    emailReq.templateType = cst.TEMPLATE_HTML;
    emailReq.toEmailList.push(req.email);
    emailReq.propertyList.push(cst.MF_TRANSACTION_TIME+":"+CommonUtil.defaultIfEmpty(req.transactionDate, cst.NOT_PROVIDED),
                               cst.MF_TRANSACTION_NUM+":"+CommonUtil.defaultIfEmpty(req.transactionId, cst.NOT_PROVIDED),
                               cst.MF_CONTACT_NAME+":"+ req.contactName,
                               cst.MF_CONTACT_PHONE_NUM+":"+req.contactPhoneNumber,
                               cst.MF_CONTACT_FAX_NUM+":"+req.contactFaxNumber,
                               cst.MF_CONTACT_EMAIL_ADDRESS+":"+req.contactEmailAddress,
                               cst.MF_PROPERTY_NAME+":"+req.propertyName,
                               cst.MF_SERVICE_ADDRESS+":"+this.getStartServiceAddress(req.propertyAddress,req.propertyCity,req.propertyZipcode),
                               cst.MF_METER_STOP_INFO+":"+meterStartStopInfo);

 } catch (e) {
         LoggerUtil.error("Failed to setMFStopServiceEmail reuest::::::: with exception "+ e.message);

 }
 this.sendEmail(emailReq).then(t =>{
       if(undefined != t)
          LoggerUtil.info("Email Sending response is == " +t.resultdescription);
          status = CommonUtil.equalsIgnoreCase(t.resultdescription,"Success");
   });
    LoggerUtil.info("The Email status for external id:::MF_STOP_SERVICE_CONFIRMATION_EXTERNAL_ID:::::" + status);
		return status;
	}


	public emailUsConfirmationEmail(req: EmailUsEmail):boolean{
		LoggerUtil.info("START::EmailHelper::emailUsConfirmationEmail()>>>>>>");
    let emailReq = new EmailRequest();
    let status:boolean = false;
    let subject = ""; //Already set in email template
    let commonUtilityHelper = new CommonUtilityHelper();
		try {

      emailReq.externalId = cst.BMF_CUSTOMER_CARE_CONFIRMATION_EXTERNAL_ID;
      emailReq.templateType = "HTML";
      emailReq.toEmailList.push(req.email);
      emailReq.propertyList.push(cst.BMF_CUSTOMER_NAME+":"+CommonUtil.defaultIfEmpty(req.bpName, ""),
                                 cst.BMF_EMAIL_SENT_TO+":"+CommonUtil.defaultIfEmpty(req.emailSentTo, ""),
                                 cst.BMF_EMAIL_SUBJECT+":"+CommonUtil.defaultIfEmpty(req.subject, ""),
                                 cst.BMF_ENTERED_COMMENTS+":"+CommonUtil.defaultIfEmpty(req.comments, ""));

     }catch(ex){
       	LoggerUtil.error("FAILED TO SEND EMAIL US CONFIRMATION EMAIL::::::::::",ex);
       			let errorMessage:string = "FAILED TO SEND EMAIL US CONFIRMATION EMAIL TO THIS EMAIL:::::"+req.email;
       			//commonUtilityHelper.addExceptionToBMFSSSchema("EMAIL_FAIL_FE",errorMessage, ex, req);
      }
      this.sendEmail(emailReq).then(t =>{
            if(undefined != t)
               LoggerUtil.info("Email Sending response is == " +t.resultdescription);
               status = CommonUtil.equalsIgnoreCase(t.resultdescription,"Success");
        });

		LoggerUtil.info("The CUSTOMER CARE Email status is::::::::" + status);

		return status;
	}



 public sendEmail(req: any): Promise<any> {
    LoggerUtil.info('Calling sendEmail service with the request::::'+JSON.stringify(req));
    let emailReq = new EmailRequest();
    let emailResp = new EmailDO();
    emailReq.companyCode = cst.GMESS_CC_0270;
    emailReq.externalId = req.externalId;
    emailReq.toEmailList = req.toEmailList;
    emailReq.subject = "";
    emailReq.propertyList = req.propertyList;
    emailReq.templateType = req.templateType;
    emailReq.languageCode = "EN";
    emailReq.brandName = cst.GME_BRAND_NAME;
      var p = new Promise((resolve, reject) => {

          this.emailService.sendEmail(emailReq).then(t =>{
                if(undefined != t && (t.resultcode == 0 || t.resultdescription == "Success")){
                    emailResp.resultcode = t.resultcode;
                    emailResp.resultdescription = t.resultdescription;
                    emailResp.errorcode = t.resultcode;
                    emailResp.errordescription =t.errordescription;
                }else{
                  LoggerUtil.error("Error sending email:::"+JSON.stringify(t));
                }
          });
           resolve(emailResp);
      });

      return p;
  }

/*  public  sendVUMOptInAndOptOutNotificationEmail(emailAddress1:string, emailAddress2:string, optInOrOut:string, req:any) :boolean {
		LoggerUtil.info("START::EmailHelper::sendVUMOptInAndOptOutNotificationEmail()>>>>>>");

    let emailReq = new EmailRequest();
    let statusFlag:boolean = false;
    let subject = ""; //Already set in email template
    let commonUtilityHelper = new CommonUtilityHelper();
    try{
    emailReq.externalId = cst.VUM_OPT_INOUT_EXTERNAL_ID;
    emailReq.templateType = cst.TEMPLATE_HTML;
    emailReq.toEmailList.push(emailAddress1);
    emailReq.toEmailList.push(emailAddress2);
    emailReq.propertyList.push(cst.VUM_OPT_INOUT_BUSINESS_NAME+":"+commonUtilityHelper.getSelectedPropertyBPName(req),
                               cst.VUM_OPT_INOUT_COMMENT_PARTNER+":"+commonUtilityHelper.getSelectedPropertyRelationshipId(req),
                               cst.VUM_OPT_INOUT_COMMENT_CHANGER_FULLNAME+":"+commonUtilityHelper.getLoggedInUserFullName(req),
                               cst.VUM_OPT_INOUT_ON_OFF+":"+optInOrOut);

   }catch(ex){
         LoggerUtil.error("FAILED TO SEND VUM OPT IN AND OPT OUT EMAIL CONFIRMATION EMAIL::::::::::",ex);
          let errorMessage:string = "FAILED TO SEND VUM OPT IN AND OPT OUT EMAIL CONFIRMATION EMAIL::::"+emailAddress1 + " and "+emailAddress2;
          commonUtilityHelper.addExceptionToBMFSSSchema("EMAIL_FAIL_FE",errorMessage, ex, req);
    }
    this.sendEmail(emailReq).then(t =>{
          if(undefined != t)
             LoggerUtil.info("Email Sending response is == " +t.resultdescription);
             statusFlag = CommonUtil.equalsIgnoreCase(t.resultdescription,"Success");
      });

  LoggerUtil.info("The sendVUMOptInAndOptOutNotificationEmail status is::::::::" + status);

  return statusFlag;

	}
  */


     public  updatePasswordConfirmationEmail(updatePasswordVO:UpdatePasswordVO):boolean{

    		let status = false;
    		let emailAddress = updatePasswordVO.emailAddress;
        let emailReq = new EmailRequest();
        let subject = ""; //Already set in email template
        let commonUtilityHelper = new CommonUtilityHelper();
        try{
          emailReq.externalId = cst.UPDATE_PASSWORD_CONFIRMATION_EXTERNAL_ID;
          emailReq.templateType = cst.TEMPLATE_HTML;
          emailReq.toEmailList.push(emailAddress);
          let telPhoneNum:string = CommonUtil.formatPhoneNumberForEmail(updatePasswordVO.telPhNum,updatePasswordVO.phoneExtnNumber)

          emailReq.propertyList.push(cst.PM_CONFIRMATION_NUM+":"+updatePasswordVO.confirmationNumber,
                                     cst.PM_EMAIL_ADDRESS+":"+updatePasswordVO.emailAddress,
                                     cst.PM_GREETING_NAME+":"+updatePasswordVO.greetingName,
                                     cst.PM_USER_NAME+":"+updatePasswordVO.userName,
                                     cst.PM_TELEPHONE_NUM+":"+telPhoneNum);

       }catch(ex){
             LoggerUtil.error("FAILED TO SEND UPDATE PASSWORD CONFIRMATION EMAIL::::::::::",ex);
              let errorMessage:string = "FAILED TO SEND UPDATE PASSWORD CONFIRMATION EMAIL TO THIS EMAIL:::::"+emailAddress;
              //commonUtilityHelper.addExceptionToBMFSSSchema("EMAIL_FAIL_FE",errorMessage, ex, req);
        }
        this.sendEmail(emailReq).then(t =>{
              if(undefined != t)
                 LoggerUtil.info("Email Sending response is == " +t.resultdescription);
                 status = CommonUtil.equalsIgnoreCase(t.resultdescription,"Success");
          });

      LoggerUtil.info("The updatePasswordConfirmationEmail status is::::::::" + status);

      return status;
    }

    public  deactivateUserConfirmationEmail(req:any):boolean {
    		LoggerUtil.info("START::EmailHelper::deactivateUserConfirmationEmail()>>>>>>");
    		let status:boolean = false;
        let emailReq = new EmailRequest();
        let subject = ""; //Already set in email template
        let commonUtilityHelper = new CommonUtilityHelper();
        try {
          let emailAddress = req.body.email;
          emailReq.externalId = cst.REMOVE_USER_CONFIRMATION_EXTERNAL_ID;
          emailReq.templateType = cst.TEMPLATE_HTML;
          emailReq.toEmailList.push(emailAddress);
          emailReq.propertyList.push(cst.PM_USER_FULLNAME+":"+req.body.firstName+" "+req.body.lastName);
    		  this.sendEmail(emailReq).then(t =>{
              if(undefined != t)
                 LoggerUtil.info("Email Sending response is == " +t.resultdescription);
                 status = CommonUtil.equalsIgnoreCase(t.resultdescription,"Success");
          });
        } catch (ex) {
          LoggerUtil.error("FAILED TO SEND REMOVE USER EMAIL CONFIRMATION EMAIL::::::::::",ex);
        }

    		LoggerUtil.info("The Email status for external id:::REMOVE_USER_CONFIRMATION_EXTERNAL_ID:::::" + status);
    		return status;
   }

    public sendModifyPaymentConfirmEmail(req:any,  confirmationNum:string) : void {
        this.sendScheduledPaymentConfirmEmail(this.getSchedulePaymentEmail(req,confirmationNum,true));
        this.sendPaymentCancelEmail(this.getPaymentCancelEmail(req,true));
	  }

  public addUserConfirmEmail( req:any, response:any) {
     LoggerUtil.info("Sending Email for :::ADD_USER_CONFIRMATION::::::::");
 		let status = false;
 		let subject:string;
    let emailReq = new EmailRequest();
    try {
 		let emailAddress = req.body.user.emailAddress;

 		let logonLink = cst.BMF_FIRST_TIME_SET_PASSWORD+"/"+response.transactionId;
     LoggerUtil.info("Sending Email to :::emailAddress ::::::::"+emailAddress);

       emailReq.externalId = cst.ADD_USER_CONFIRMATION_EXTERNAL_ID;
       emailReq.templateType = cst.TEMPLATE_HTML;
       emailReq.toEmailList.push(emailAddress);
       emailReq.propertyList.push("LOGIN_LINK"+":"+logonLink);

     } catch (e) {
       LoggerUtil.error("Failed to send addUserConfirmEmail::::::: with exception + "+ e.message);
     }

       this.sendEmail(emailReq).then(t =>{
         if(undefined != t)
            LoggerUtil.info("Email Sending response is == " +t);
       });

 	}


   public addUserConfirmAdminEmail(req:any, firstName: string, lastName: string) {

    let status = false;
 		let subject:string = "";
 		let emailAddress: string;
    let commonUtilityHelper = new CommonUtilityHelper();
    let emailReq = new EmailRequest();
 	  try {
   		 emailAddress = req.body.loggedInUser.email;
       emailReq.externalId = cst.ADD_USER_CONFIRMATION_ADMIN_EXTERNAL_ID;
       emailReq.templateType = cst.TEMPLATE_HTML;
       emailReq.toEmailList.push(emailAddress);
       emailReq.propertyList.push(cst.PM_CUSTOMER_FULLNAME+":"+firstName+" "+lastName);

         this.sendEmail(emailReq).then(t =>{
           if(undefined != t)
              LoggerUtil.info("Email Sending response is == " +t);
         });
 		} catch (e) {
 			LoggerUtil.error("Failed to send addUserConfirmAdminEmail::::::: with exception + "+ e.message);
 		}

 	}

 	public updateUserConfirmEmail(req: UpdateUserEmail) {

     let status = false;
     let subject:string = "";
     let emailReq = new EmailRequest();
     try {
     		let name = req.firstName+" "+req.lastName;
     		let phNumberExt = req.phoneNumberExtn;
     		let altNumberExt = req.altPhoneNumExt;
     		let phNumber = CommonUtil.formatPhoneNumberForEmail(req.phoneNumber,phNumberExt);
     		let altPhoneNumber = CommonUtil.formatPhoneNumberForEmail(req.altPhoneNumber,altNumberExt);
     		let faxNumber = CommonUtil.formatPhoneNumberForEmail(req.faxNumber,undefined);
     		let emailId = req.email;
     		let sapId =  req.sapId;
        let sapIdClassHide = "display:none"
        let sapIdClassShow = "display:block"

     		if(CommonUtil.equalsIgnoreCase(req.fieldName,'name'))
     			  name = "<b>"+name+"</b>";
     		else if(CommonUtil.equalsIgnoreCase(req.fieldName,'email'))
     			  emailId= "<b>"+emailId+"</b>";
     		else if(CommonUtil.equalsIgnoreCase(req.fieldName,'phone'))
       			phNumber = "<b>"+(CommonUtil.isNotBlank(phNumber)?phNumber:cst.NOT_PROVIDED)+"</b>";
     		else if(CommonUtil.equalsIgnoreCase(req.fieldName,'altphone'))
       			altPhoneNumber = "<b>"+(CommonUtil.isNotBlank(altPhoneNumber)?altPhoneNumber:cst.NOT_PROVIDED)+"</b>";
     		else if(CommonUtil.equalsIgnoreCase(req.fieldName,'fax'))
     			  faxNumber =  "<b>"+faxNumber+"</b>";
     		else if(CommonUtil.equalsIgnoreCase(req.fieldName,'sapid')){
     		    sapId =  "<b>"+(CommonUtil.isNotBlank(sapId)?sapId:"NA")+"</b>";
     		}

        let accessPrivStr = this.getAccessPrivInfo(req);
         emailReq.externalId = cst.UPDATE_USER_CONFIRMATION_EXTERNAL_ID;
         emailReq.templateType = cst.TEMPLATE_HTML;
         emailReq.toEmailList.push(emailId);
         emailReq.propertyList.push(cst.PM_CUSTOMER_FULLNAME+":"+name,
                                    cst.PM_UPDATE_NAME+":"+name ,
                                    cst.PM_UPDATE_PHNUM+":"+phNumber,
                                    cst.PM_UPDATE_ALTPHNUM+":"+altPhoneNumber,
                                    cst.PM_UPDATE_FAXNUM+":"+faxNumber,
                                    cst.PM_UPDATE_EMAIL+":"+emailId,
                                    cst.PM_UPDATE_USERNAME+":"+req.userName,
                                    cst.PM_SAPID_HIDE+":"+CommonUtil.isNotBlank(req.sapId)?sapIdClassShow:sapIdClassHide,
                                    cst.PM_UPDATE_SAP_ID+":"+sapId,
                                    cst.PM_ACCESSPRIV_INFO+":"+accessPrivStr);


           this.sendEmail(emailReq).then(t =>{
             if(undefined != t)
                LoggerUtil.info("Email Sending response is == " +t);
           });
   		} catch (e) {
   			 LoggerUtil.error("Failed to send updateUserConfirmEmail::::::: with exception + "+ e.message);
   		}
   }

   private getAccessPrivInfo(manageUserVO:any):string {
		LoggerUtil.info("WEB SECURITY ROLE:::::::"+manageUserVO.webSecurityRole);
     var StringBuffer = require("stringbuffer");
		 let accessPrivInfo = new StringBuffer();
		 let webSecurityRole = manageUserVO.webSecurityRole;
		accessPrivInfo.append("<tr><td valign='top' width='15%'>Access privileges:</td><td width='60%'><table><tr><td>");
		if(_.isEqual(webSecurityRole, cst.USERTYPE_SP_EXT_CA_PO) || _.isEqual(webSecurityRole, cst.USERTYPE_SP_EXT_CA_PM)){
			accessPrivInfo.append("Transactional access"
					+ "</td></tr><tr><td>");
			accessPrivInfo.append("&nbsp;&nbsp;"+"-able to request start and stop"
					+ "</td></tr><tr><td>");
			accessPrivInfo.append("&nbsp;&nbsp;"+"-able to pay bills"
					+ "</td></tr></table></td></tr>");
		}else if(_.isEqual(webSecurityRole, cst.USERTYPE_SP_EXT_CUS_ASC)){
			accessPrivInfo.append("Transactional access"
					+ "</td></tr><tr><td>");
			accessPrivInfo.append("&nbsp;&nbsp;"+"-Can start/stop: <b>"+(_.isEqual(manageUserVO.startStopAce, cst.YES)?cst.YES_TXT:cst.NO_TXT)
						+ "</b></td></tr><tr><td>");
			accessPrivInfo.append("&nbsp;&nbsp;"+"-Can pay bills: <b>"+(_.isEqual(manageUserVO.billingAce, cst.YES)?cst.YES_TXT:cst.NO_TXT)
							+ "</b></td></tr></table></td></tr>");
		}else if(_.isEqual(webSecurityRole, cst.USERTYPE_SP_EXT_BROKER) || _.isEqual(webSecurityRole, cst.USERTYPE_SP_EXT_BRK_ASC)){
			let logonLink = cst.GMESS_HOST_INFO;
			LoggerUtil.info("getting the link::::::"+logonLink);
			accessPrivInfo.append("<a href='"+logonLink+"'>Log in</a>"+" to SimpleSource to view permissions for each property."
					+ "</td></tr></table></td></tr>");
		}else{
			accessPrivInfo.append("Administrative Access"
					+ "</b></td></tr></table></td></tr><b>");
		}
		return accessPrivInfo.toString();

	}

  public sendPasswordResetLinkEmail(emailAddress:string, txnId:string):string {

       let status :string;
       let subject:string = "";
       let emailReq = new EmailRequest();
      try {
     		let logonLink = cst.BMF_FIRST_TIME_SET_PASSWORD+"/"+txnId;

         emailReq.externalId = cst.RESET_PASSWORD_EXTERNAL_ID;
         emailReq.templateType = cst.TEMPLATE_HTML;
         emailReq.toEmailList.push(emailAddress);
         emailReq.propertyList.push(cst.PM_LOGIN_LINK+":"+"<p><a href='"+logonLink+"'>"+logonLink+"</a></p>");
         this.sendEmail(emailReq).then(t =>{
           if(undefined != t)
              LoggerUtil.info("Email Sending response is == " +t);
              status = t.resultdescription;
         });
       } catch (e) {
         LoggerUtil.error("Failed to send Reset Password:::::::  with exception + "+ e.message);
       }
      return status;
   	}


    public sendPaymentConfirmEmail(req: PaymentEmail): void {
      let status = false;
      let commonUtilityHelper = new CommonUtilityHelper();
      let emailAddress = req.email;
      let emailReq = new EmailRequest();
      let subject = ""; //Already set in email template
  		try {
          emailReq.externalId = cst.BILLPAY_PAY_CONFIRMATION_EXTERNAL_ID;
          emailReq.templateType = cst.TEMPLATE_HTML;
          emailReq.toEmailList.push(emailAddress);
          emailReq.propertyList.push(cst.MF_PROPERTY_NAME+":"+req.bpName,
                                     cst.BILL_CONTRACT_ACCT_NUM+":"+this.appendCA(req.caNumber),
                                     cst.BILL_PAYMENT_DATE+":"+req.paymentDate,
                                     cst.BILL_PAYMENT_AMOUNT+":"+"$"+req.paymentAmount,
                                     cst.BILL_BANK_ACCT_NUM+":"+req.maskBankAccountNumber
                                   );

            this.sendEmail(emailReq).then(t =>{
              if(undefined != t)
                 LoggerUtil.info("Email Sending response is == " +t);
            });
      }catch (e) {
        LoggerUtil.error("Failed to send sendPaymentConfirmEmail::::::: with exception + "+ e.message);
        let errorMessage = "FAILED TO SEND PAYMENT CONFIRMATION EMAIL TO THIS EMAIL:::::"+emailAddress;
      }

  	}


    public sendScheduledPaymentConfirmEmail(req:SchedulePaymentEmail): void {
      let status = false;
      let commonUtilityHelper = new CommonUtilityHelper();
      let emailAddress = req.email;
      let emailReq = new EmailRequest();
      let subject = "";
  		try {
          emailReq.externalId = cst.BMF_SS_SCHEDULED_PAYMENT_INFO_EXTERNAL_ID;
          emailReq.templateType = cst.TEMPLATE_HTML;
          emailReq.toEmailList.push(emailAddress);
          emailReq.propertyList.push(cst.MF_PROPERTY_NAME+":"+req.bpName,
                                     cst.BILL_PAYMENT_AMOUNT+":"+"$"+req.paymentAmount,
                                     cst.BILL_SCHEDULE_PAYMENT_DATE+":"+req.paymentDate,
                                     cst.PAYMENT_METHOD+":"+req.nickName+", "+req.maskBankAccountNumber,
                                     cst.CONFIRMATION_NUMBER+":"+req.confirmationNumber
                                   );

            this.sendEmail(emailReq).then(t =>{
              if(undefined != t)
                 LoggerUtil.info("Email Sending response is == " +t);
            });
      }catch (e) {
        LoggerUtil.error("Failed to send sendScheduledPaymentConfirmEmail::::::: with exception + "+ e.message);
        let errorMessage = "FAILED TO SEND PAYMENT CONFIRMATION EMAIL TO THIS EMAIL:::::"+emailAddress;
      }
   }


  private appendCA( contractAccount:string):string{

		if(CommonUtil.isNotBlank(contractAccount)){
			return "CA #"+contractAccount;
		}else{
			return "";
		}

	}


  public sendPaymentCancelEmail(req: PaymentCancelEmail) {
		LoggerUtil.info("START::EmailHelper::sendPaymentCancelEmail()>>>>>>");
		let status:boolean = false;
    let emailReq = new EmailRequest();
		let subject:string = "";
    try {
      let emailAddress = req.email;
      emailReq.externalId = cst.BILLPAY_PAY_CANCELLATION_EXTERNAL_ID;
      emailReq.templateType = cst.TEMPLATE_HTML;
      emailReq.toEmailList.push(emailAddress);
      emailReq.propertyList.push(cst.EMAIL_CUSTOMER_NAME+":"+req.bpName,
                                 cst.BILL_CONTRACT_ACCT_NUM+":"+this.appendCA(req.caNumber),
                                 cst.BILL_PAYMENT_DATE+":"+req.cancellationDate,
                                 cst.BILL_PAYMENT_AMOUNT+":"+"$"+req.paymentAmount,
                                 cst.BILL_BANK_ACCT_NUM+":"+req.maskBankAccountNumber
                               );
      this.sendEmail(emailReq).then(t =>{
          if(undefined != t)
             LoggerUtil.info("Email Sending response is == " +t);
      });
    }catch(e){
      LoggerUtil.error("Error in sendPaymentCancelEmail:::"+e)
    }
    return status;
	}


  public getSchedulePaymentEmail(req: any, confirmNum: string, forModify: boolean): SchedulePaymentEmail {
      let schedulePayment = new SchedulePaymentEmail();
      try{
        schedulePayment.bpName = req.body.bpName;
        schedulePayment.confirmationNumber = confirmNum;
        schedulePayment.email = req.body.email;
        schedulePayment.maskBankAccountNumber = (forModify)?req.body.maskedBankAccount:req.body.payment.bank.maskBankAccountNumber;
        schedulePayment.nickName = "Bank Account";
        schedulePayment.paymentAmount = (forModify)?req.body.newPaymentAmount:req.body.payment.collective.paymentAmount;
        schedulePayment.paymentDate = (forModify)?req.body.newPaymentDate:req.body.payment.collective.paymentDate;
      }catch(err){
         LoggerUtil.info("ERROR====getSchedulePaymentEmail>>>>>"+err.message)
      }
      return schedulePayment;
  }

  public getPaymentConfirmEmail(req: any): PaymentEmail {
      let paymentEmamil = new PaymentEmail();
      try{
         paymentEmamil.bpName = req.body.bpName;
         paymentEmamil.caNumber = req.body.payment.collective.caNumber;
         paymentEmamil.email = req.body.email;
         paymentEmamil.maskBankAccountNumber = req.body.payment.bank.maskBankAccountNumber;
         paymentEmamil.paymentAmount = req.body.payment.collective.paymentAmount;
         paymentEmamil.paymentDate = req.body.payment.collective.paymentDate;
      }catch(err){
         LoggerUtil.info("ERROR====getPaymentConfirmEmail>>>>>>"+err.message)
      }
      return paymentEmamil;
  }

  public getPaymentCancelEmail(req: any,forModify: boolean): PaymentCancelEmail {
      let paymentCancelEmail = new PaymentCancelEmail();
      try{
         paymentCancelEmail.bpName = req.body.bpName;
         paymentCancelEmail.caNumber = req.body.caNumber;
         paymentCancelEmail.cancellationDate = (forModify)?req.body.oldPaymentDate:req.body.cancelDate;
         paymentCancelEmail.email = req.body.email;
         paymentCancelEmail.maskBankAccountNumber = (forModify)?req.body.maskedBankAccount:req.body.maskBankAccountNumber;
         paymentCancelEmail.paymentAmount = (forModify)?req.body.newPaymentAmount:req.body.paymentAmount;
      }catch(err){
         LoggerUtil.info("ERROR====getPaymentCancelEmail>>>>>>"+err.message)
      }
      return paymentCancelEmail;
  }

  public getEmailUsEmail(req: any, toEmail: string): EmailUsEmail {
      let emailUsEmail = new EmailUsEmail();
      try{
         emailUsEmail.bpName = req.body.bpName;
         emailUsEmail.email = toEmail;
         emailUsEmail.comments = req.body.comments;
         emailUsEmail.emailSentTo = req.body.email;
         emailUsEmail.subject = req.body.subject;
      }catch(err){
         LoggerUtil.info("ERROR====getEmailUsEmail>>>>>>"+err.message)
      }
      return emailUsEmail;
  }

  public getUpdateUserEmail(req: any): UpdateUserEmail {
      let updateUserEmail = new UpdateUserEmail();
      try{
          updateUserEmail.firstName = req.body.user.firstName;
          updateUserEmail.lastName = req.body.user.lastName;
          updateUserEmail.userName = req.body.user.userName;
          updateUserEmail.phoneNumber = req.body.user.phoneNum;
          updateUserEmail.phoneNumberExtn = req.body.user.phoneNumExtn;
          updateUserEmail.altPhoneNumber = req.body.user.altPhoneNum;
          updateUserEmail.altPhoneNumExt = req.body.user.phoneExtnAlt;
          updateUserEmail.billingAce = req.body.user.billingAce;
          updateUserEmail.startStopAce = req.body.user.startStopAce;
          updateUserEmail.email = req.body.user.email;
          updateUserEmail.faxNumber = req.body.user.faxNum;
          updateUserEmail.fieldName = req.body.fieldName;
          updateUserEmail.sapId = req.body.user.sapId;
          updateUserEmail.securityRole = req.body.user.securityRole;
      }catch(err){
          LoggerUtil.info("ERROR====getUpdateUserEmail>>>>>>"+err.message)
      }
      return updateUserEmail;
  }


  public getStartServiceEmail(unitList:Array<Unit>,txnID:string,txnDate:string,propertyAddress:string,propCity:string,propZipcode:string, req:any): ServiceEmail {
      let serviceEmail = new ServiceEmail();
      let commonUtilityHelper = new CommonUtilityHelper();
      try{
          serviceEmail.contactEmailAddress = commonUtilityHelper.getLoggedInUserEmail(req);
          serviceEmail.contactFaxNumber = commonUtilityHelper.getLoggedInUserFaxnumber(req);
          serviceEmail.contactName = commonUtilityHelper.getLoggedInUserFullName(req);
          serviceEmail.contactPhoneNumber = commonUtilityHelper.getLoggedInUserPhonenumber(req);
          serviceEmail.email = commonUtilityHelper.getLoggedInUserEmail(req);
          serviceEmail.propertyAddress = propertyAddress;
          serviceEmail.propertyCity = propCity;
          serviceEmail.propertyName = req.body.selectedpropName;
          serviceEmail.propertyZipcode = propZipcode;
          serviceEmail.transactionDate = txnDate;
          serviceEmail.transactionId = txnID;
          serviceEmail.unitList = unitList;
      }catch(err){
          LoggerUtil.info("ERROR====getStartServiceEmail>>>>>>"+err.message)
      }
      return serviceEmail;
  }

}
