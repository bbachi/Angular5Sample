
import { Unit } from './../model/bmfss.session';
export class TransactionDtls {

     transactionId:string;
     txnType: string;
  	 txnDate:string;
  	 esiidList:Array<Unit>;

  	//user details for create user and update profile
  	 firstName:string;
  	 lastName:string;
  	 userName:string;
  	 contactPhone:string;
  	 contactPhExtn:string;
  	 altContactPhone:string;
  	 altContactPhExtn:string;
  	 faxNumber:string;
  	 email:string;
  	 startStopAce:string;
  	 billingAce:string;
  	 activityType:string;
  	 securityRole:string;
  	 userType:string;
     serviceAddress:string;

  	//VUM txn Details
  	 vueEmailOne:string;
  	 vueEmailTwo:string;
  	 vueEmailStatus:string;
     propertName:string;
}
