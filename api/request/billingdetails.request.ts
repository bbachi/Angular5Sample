import { BaseRequest } from './base.request';
import * as cst from './../util/constant';
import {SubmitPaymentRequestDO} from './../model/billing.model'

export class BillingDetailsRequest extends BaseRequest {

        constructor(){
            super();
        }
       bpNumberList:string[];
       strCompanycode:string;

}

export class PreviousBillsRequest{
   strBppNumber:string;
	 strContractAccNumber:string;
	 strFromDateyhymhyd:string;
	 strToDateyhymhyd:string;
	 accountType:string;			//Collective /Individual
	 strLoggedInUserName:string;
   strCompanycode:string;
   strPortal:string;
}

export class PaymentHistoryRequest{
   strBppNumber:string;
	 strContractAccNumber:string;
	 strFromDateyhymhyd:string;
	 strToDateyhymhyd:string;
	 strLoggedInUserName:string;
   strCompanycode:string;
   strPortal:string;
}

export class ModifyPaymentRequest{
  bpNumber:string;
  caNumber:string;
  oldPaymentAmount:string;
  oldPaymentDate:string;
  bankAccountNumber :string;
  routingNumber:string;
  nickName:string;
  newPaymentAmount:string;
  newPaymentDate:string;
  cancelPaymentId:string;
  relationshipId:string;
  loggedInUserName:string;
  maskedBankAccount:string;
  billingType:string;
}

export class CancelPaymentRequest
{
  paymentId:string;
  caNumber:string;
}

export class StructuralRequest extends BaseRequest {
    bpNumberList: string[];
}

export class SubmitPaymentRequest{
   submitPaymentRequestDOList = new Array<SubmitPaymentRequestDO>();
	 strRelationshipId:string;
	 strLoggedInUserName:string;
	 strBankAccNumber:string;
	 strRoutingNumber:string;
	 strNickName:string;
	 addBankDetailsFlag:string;    //Y or N
	 billingType:string;    // C or I
	 dueDate:string;
   strCompanycode:string;
	 strPortal:string;

}

export class BankDetailsRequest{
  strLoggedInUserName:string;
  strRelationshipId:string;
  strCompanycode:string;
	strPortal:string;

}

export class UpdateBankDetailsRequest {

    strRelationshipId:string;
    strLoggedInUserName:string;
    strAction:string; // D or A
    strBankAccNumber:string;
    strNickName:string;
    strRoutingNumber:string;
}
