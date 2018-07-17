export class PreviousBill {

    invoiceDate: string;
    startBillPeriod: string;
    endBillPeriod: string;
    billType: string;
    dueDate: string;
    invoiceAmount: string;
    invoiceNumber: string;
}

export class PaymentHistory {

    receivedBy: string;
    accountNumber: string;
    paymentDescription: string;
    paymentAmount: string;
    postingDate: string;
    status: string;
    scheduledCancelDate: string;
  	bankAccNum:string;
  	creationDate:string;
  	creationTime:string;
  	routingNum:string;
  	bpNumber:string;
  	paymentDocNum:string;
  	paymentLot:string;
  	confirmNum:string;
  	streetName:string;
  	streetNo:string;
  	unitNo:string;
  	city:string;
  	state:string;
  	zipCode:string;
  	isCollective:string;
  	paymentID:string;
  	maskBankAccount:string;
}

export class PaymentHistoryDO {

     receivedBy :string;
     bankAccNum :string;
     paymentDescription :string;
     paymentAmount :string;
     postingDate :string;
     status :string;
     creationDate :string;
     scheduledCancelDate :string;
     creationTime :string;
     routingNum :string;
     contractAccountNum :string;
     bpNumber :string;
     paymentDocNum :string;
     paymentLot :string;
     confirmNum :string;
     streetName :string;
     streetNo :string;
     unitNo :string;
     city :string;
     state :string;
     zipCode :string;
     isCollective :string;
     paymentID :string;
}

export class StructuralDO {

    city: string;
    collContractAct: string;
    contract: string;
    contractAccount: string;
    esiid: string;
    houseNo: string;
    partnerNumber: string;
    premiseType: string;
    state: string;
    streetName: string;
    streetNum: string;
    unitNumber: string;
    zipCode: string;
    fullZipCode: string;
}

export class ContractAccount {

    contractAccountNumber: string;
    address: string;
    partnerNumber: string;
}

export class CollectiveInvoice {

    accountType: string;
    dueDate: string;
    currentBalance: string;
    pastDue: string;
    invoiceNumber: string;
    contractAccount: string;
    bpNumber: string;
    ncaStatus: string;
    lastPaymentDate: string;
    cpdbCreationDate: string;
    billingDate:string;
}

export class IndividualInvoice {

    accountType: string;
    currentBalance: string;
    pastDue: string;
    contractAccount: string;
}

export class IndInvoice {

    premise: string;
    dueDate: string;
    invoiceNumber: string;
    pastDue: string;
    currentBalance: string;
    paymentAmount: string;
    propertyUnit: string;
    ncaStatus: string;
    builderAddress: string;
    finalBill: string;
    contractAccount: string;
    bpNumber: string;
    currentBalanceFlag: boolean;
    pastDueFlag: boolean;
    lastPaymentDate: string;
    paymentSuccessfulOnThisCA: boolean = true;
    selected: boolean;
      billingDate:string;
}

export class BillInvoices {

    collectiveInvoices: CollectiveInvoice[];
    individualInvoices: IndividualInvoice[];
    cmnAreaIndInvList: IndInvoice[];
    resInvoiceList: IndInvoice[];
    noArBalanceCollAcountList: string[];
    noArBalanceIndAcountList: string[];
    structuralDetailsFound: boolean = false;
    arDetailsFound: boolean = false;
}

export class Payment{

    partnerNumber:string;
  	contractAccountNumber :string;
  	paymentAmount :string;
  	paymentDate :string;
  	bankAccountNumber :string;
  	routingNumber :string;
  	nickName :string;
  	currStatus :string;
  	invoiceNumber :string;
  	paymentID :string;
  	confirmNum :string;
  	status:boolean = false;
  	message :string;
  	bpNumber :string;

}

export class SubmitPaymentRequestDO {

	 strBpNumber:string;
	 strConractAccNum:string;
	 strPaymentAmount:string;
	 strPaymentDate:string;
	 strBankAccountNum:string;
	 strRoutingNum:string;
	 strNickName:string;
	 strCurrentSts:string;

}

export class SubmitPayment {

	 confirmationNumber:string;
	 contractAccount:string;
	 message:string;
	 partner:string;
	 status:string;

}

export class BankAccount{
   bpnumber:string;
   bankAccountNum:string;
   bankRoutingNum:string;
   nickname:string;
   selected:boolean;
   maskedBankAcc:string;
   storedDate:string;

}

export class BankDetailsDO{
   bankAccNumber:string;
	 routingNumber:string;
	 nickName:string;
	 validFrom:string;
	 validTo:string;
	 bpNumber:string;
	 lastUsed:string;

}
