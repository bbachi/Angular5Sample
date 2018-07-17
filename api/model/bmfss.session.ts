import { User } from './user.model'

export class BMFSSSession {
    loggedInUser:User;
    bpDtlsList = new Array<ManagementBP>();
    userAgreedTerms:boolean;
    selectedProperty :Property;  //to avoid null pointer exception
    hierarchyDtls:HierarchyDetails;
    searchType:string;
    searchString:string;
    //This is created for modify payment
    tempWalletJson:string;
 }



 export class HierarchyDetails{
	mngBPList =new Array<ManagementBP>();
	regionList = new Array<Region>();
	propertyList = new Array<Property>();
	mngBP:boolean;
	regionBP:boolean;
	propertyBP:boolean;
	onlyProperty:boolean;
	isBroker:boolean;
 }

 export class ManagementBP{
    bpNumber:string;
	relationshipId:string;
	bpName:string;
	regionList = new Array<Region>();
	strBPAddress:string;
	brokerBPNumber:string;
	fedTaxId:string;
	newlyAddedBP:boolean;
	brokerAssigned:boolean;
 }

 export class Region{
	bpNumber:string;
    relationshipId:string;
	bpName:string;
	strBPAddress:string;
	propertyList = new Array<Property>();
	masterBP:string;
	brokerBPNumber:string;
	fedTaxId:string;
	newlyAddedBP:boolean;
	brokerAssigned:boolean;
 }

 export class Property{
	bpNumber:string;
    relationshipId:string;//this is the node bp(generic Bp)
	bpName:string;
    propertyType:string;
    fedTaxId:string;
    address: Address;
	masterBP:string;
	masterBPName:string;
	phoneNum:string;
	ESIIDDetails:ESIIDDetails;
	billInvoices:BillInvoices;
    //for plan details
    tempProductOffer:ProductOfferDetails;
    permProductOffer:ProductOfferDetails;
    planDetialsAvilable:boolean;
    //For Transactions
    txnToDate :string;
    txnFromDate :string;
    customerDtls:CustomerDetails;
    commonAreaDtls: CustomerDetails;
    collCAList:string[];
    indCAList:string[];
    mfPropertyAddrList=new Array<MFPropertyAddress>();
    brokerBPNumber:string;
    MSTRRelationshipId:string;   //this is CSA/NCSA/SITE Master relationship id
    MSTRCAARelationshipId:string; //This is CAA Master relationship id
    strNodeGuidForStartStopTxn:string; //this is node guid for the property to get the bmf id for start stop txns
    siteBPNumberList:string[];
    CAABPList:string[];
    NONCAABPList:string[];
    startEnabled:boolean;
    stopEnabled:boolean;
    billingEnabled:boolean;
    startRestrictionReason:string;
    stopRestrictionReason:string;
    billingRestrictionReason:string;
    newlyAddedBP:boolean;
    vumUnitAlertSetup: VUMUnitAlertSetup;
    bokerAssigned :boolean;
    selectedCADtlList= new Array<IndInvoice>();   //for individual billing
    companyCode:string;
    indvDueDate:string;
 }

 export class Address{
    streetName:string;
    streetNum:string;
    unit:string;
    state:string;
	city:string;
	zipcode:string;
	POBox:string;

 }

 export class ESIIDDetails{

    CCSCAAESIIDList= new Array<ESIID>();     //this unit list contains only CCS
	CCSNONCAAESIIDList= new Array<ESIID>();  //this unit list contains only CCS
    unitList= new Array<Unit>();
	builderStartESIIDList= new Array<ESIID>();
 }

 export class ESIID{
    uniqueIdentifier:string;    //only for BUILDER START
	esiid:string;
	strStreetNum:string;
	strStreetName:string;
	strUnitNumber:string;
	strCity:string;
	strState:string;
	strZipcode:string;
	strServiceArea:string;
	strMeterType:string;
	selected:boolean;
	selectedStartDate:string;
	priorityMoveInEnabled:boolean;
	priorityDateSelected:boolean;
	bpNumber:string;     //this bpnumber is used to submit the start and stop MF transaction.
	active:boolean;
	searchType:string;
	pending:boolean;
	marketHold:boolean;
	priorityMoveInFee:boolean;
	unAvailableDates:string;
	unitID:string;
	effectiveDate:string;
	strMoveInDate:string;
	strMoveOutDate:string;
	strTaxStatus:string;
	strDepositAmount:string;
	startPendingStatusFromCCS:boolean;
	stopPendingStatusFromCCS:boolean;
 }

 export class Unit extends ESIID{
    unitType:string;    //only for VUM
	unitThreshold:string; //only for VUM
	vumEsiidAttrUpd:boolean; //only for VUM
 }

 export class BillInvoices{

    collectiveInvoices=new Array<CollectiveInvoice>();
	individualInvoices=new Array<IndividualInvoice>();
	cmnAreaIndInvList=new Array<IndInvoice>();
	resInvoiceList=new Array<IndInvoice>();
	noArBalanceCollAcountList:string[];
	noArBalanceIndAcountList:string[];
	structuralDetailsFound:boolean;
	arDetailsFound:boolean;
 }

 export class CollectiveInvoice{
    accountType :string;
	dueDate :string;
	currentBalance :string;
	pastDue :string;
	invoiceNumber :string;
	contractAccount :string;
	bpNumber :string;
    ncaStatus :string;
    lastPaymentDate :string;
	cpdbCreationDate :string;
	billingDate :string;
 }

 export class IndividualInvoice{
     accountType :string;
	 currentBalance :string;
	 pastDue :string;
	 contractAccount :string;
 }

 export class IndInvoice{
     premise:string;
	 dueDate:string;
	 invoiceNumber:string;
	 pastDue:string;
	 currentBalance:string;
	 paymentAmount:string;
	 propertyUnit:string;
	 ncaStatus:string;
	 builderAddress:string;
	 finalBill:string;
	 contractAccount:string;
	 bpNumber:string;
	 currentBalanceFlag:boolean;
	 pastDueFlag:boolean;
	 lastPaymentDate:string;
	 paymentSuccessfulOnThisCA = true;
	 selected:boolean;
 }

export  class ProductOfferDetails{
     strProductName:string;
	 strProductTagLine:string;
	 strLegalEase:string;
	 authText:string;
	 strPriority:string;
	 strPlanType:string;
	 strCancelFee:string;
	 strElfId:string;
	 strOfferCode:string;
	 strPlanName:string;
	 strPlanDesc:string;
	 strTOSDocID:string;
	 strYRAACDocID:string;
	 avgPrice:string;
	 energyCharge:string;
	 tdspCharge:string;
	 demandCharge:string;
	 baseCharge:string;
	 contractTerm:string;
	 nonDemandMeter:string;
	 demandMeter:string;

 }

 export class CustomerDetails{

     customerName:string;
	 relationshipId:string;
	/*	@bpNumber
	 *  This is used for
	 *   	a) submit HB Start service request.
	 *   	b) Get the Stop service address if Addresses are not present in session object
	 *   	c) to get the ESID Details for VUM
	 */
	 bpNumber:string;
	 bpType:string;
	 customerType:string;
	 mailingAddress: Address;
	 contactAddress: Address;
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

 export class MFPropertyAddress{
     unitList = new Array<Unit>();
	 streetAddress:string;
	 city:string;
	 zipcode:string;
	 state:string;
	 selected:boolean;
	 transactionId:string;
	 transactionDate:string;

 }

 export class VUMUnitAlertSetup{
    unitList = new Array<Unit>();
    vueEmail:VUMEmail;
 }

 class VUMEmail{

     email1:string;
	 email2:string;
	 vueEmailStatus:boolean;
 }
