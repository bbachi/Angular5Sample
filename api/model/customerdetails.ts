import { Address } from './../model/bmfss.session';

export class CustomerDetails{

    customerName:string;
	 relationshipId:string;
	//	@bpNumber
	// This is used for
	//   	a) submit HB Start service request.
	//   	b) Get the Stop service address if Addresses are not present in session object
	//    	c) to get the ESID Details for VUM  
	
	 bpNumber:string;   
	 bpType:string;				
	 customerType:string;
	 mailingAddress:Address;
	 contactAddress:Address;
	 phoneNum:string;
	 depositAmount:string;
	 terms:string;
	 contractExpDate:string;
	 customerStatus:string;
	 fedtaxID:string;
     correspondenceLang:string;
     CAAFlag:boolean;
     NONCAAFlag:boolean;
	
}