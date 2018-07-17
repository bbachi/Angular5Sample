import { EnvironmentConfig } from 'env-read'

export const ENVIRONMENT_CONFIG = {
    "baseRestURL":EnvironmentConfig.getEnvConfig().baseRestUrl,
    "baseEmailUrl":EnvironmentConfig.getEnvConfig().baseNRGRestEmailUrl,
    "gmeBMFPasswordSetup":EnvironmentConfig.getEnvConfig().setupPasswordUrl,
    "gmessHostInfo":EnvironmentConfig.getEnvConfig().gmessHostInfo,
    "contentURL":EnvironmentConfig.getEnvConfig().contentUrl,
    "pciLogoutUrl":EnvironmentConfig.getEnvConfig().pciLogoutUrl,
};


const DATAACCESS="/dataaccess";
export const ADD_USER_URL = ENVIRONMENT_CONFIG.baseRestURL+DATAACCESS+"/addusercall";

export const CHG_ADMIN_FOR_ASSOC_USER_URL = ENVIRONMENT_CONFIG.baseRestURL+DATAACCESS+"/chgadminforassouser";
export const DEACTIVATE_USER_URL = ENVIRONMENT_CONFIG.baseRestURL+DATAACCESS+"/deactivateuser";
export const DISASSOC_CUST_FROM_USER_URL = ENVIRONMENT_CONFIG.baseRestURL+DATAACCESS+"/disasscustfromuser";
export const GET_USERS_ASSOC_TO_BP_URL = ENVIRONMENT_CONFIG.baseRestURL+DATAACCESS+"/getusersassotobp";
export const GET_ASSOCIATES_URL = ENVIRONMENT_CONFIG.baseRestURL+DATAACCESS+"/getassociate";
export const SEARCH_BRKR_ADMIN_URL = ENVIRONMENT_CONFIG.baseRestURL+DATAACCESS+"/searchbrokeradmin";
export const SEARCH_CUST_ADMIN_URL = ENVIRONMENT_CONFIG.baseRestURL+DATAACCESS+"/searchcustomeradmin";
export const IS_USER_EXIST_FOR_SAPID_URL = ENVIRONMENT_CONFIG.baseRestURL+DATAACCESS+"/isusrexistforsapid";
export const UPDATE_USER_URL = ENVIRONMENT_CONFIG.baseRestURL+DATAACCESS+"/updateuser";
export const GET_USER_PROFILE_URL = ENVIRONMENT_CONFIG.baseRestURL+DATAACCESS+"/getuserprofile";
export const ASSOCIATE_USER_TO_CUST_URL = ENVIRONMENT_CONFIG.baseRestURL+DATAACCESS+"/associateuser2cust";
export const ADD_USER_TXN_URL = ENVIRONMENT_CONFIG.baseRestURL+DATAACCESS+"/addusertxn";
export const UPD_BRKR_WITH_NEW_PROP_URL = ENVIRONMENT_CONFIG.baseRestURL+DATAACCESS+"/updatebrkrwithnewprop";
export const GET_FIRST_LOGON_URL = ENVIRONMENT_CONFIG.baseRestURL+DATAACCESS+"/getfirstlogon";
export const SET_FIRST_LOGON_URL = ENVIRONMENT_CONFIG.baseRestURL+DATAACCESS+"/setfirstlogon";
export const GET_CUSTOMER_CONTRACT_DTLS_URL = ENVIRONMENT_CONFIG.baseRestURL+DATAACCESS+"/getcustcontractdtls";
export const UPD_BRKR_WITH_NEW_ADDED_PROPS_URL = ENVIRONMENT_CONFIG.baseRestURL+DATAACCESS+"/updatebrkrwithnewprop";
export const ADD_HB_START_SERVICE_URL=ENVIRONMENT_CONFIG.baseRestURL+DATAACCESS+"/addhbstartservdtls";
export const ADD_HB_STOP_SERVICE_URL=ENVIRONMENT_CONFIG.baseRestURL+DATAACCESS+"/addhbstopservdtls";
export const UPDATE_MF_STOP_SERVICE_URL=ENVIRONMENT_CONFIG.baseRestURL+DATAACCESS+"/updatemfstopservice";
export const UPDATE_MF_START_SERVICE_URL=ENVIRONMENT_CONFIG.baseRestURL+DATAACCESS+"/updatemfstartservice";
export const IS_ESIID_PENDING_FOR_BLDR_START=ENVIRONMENT_CONFIG.baseRestURL+DATAACCESS+"/gethbesiidpendingstatus";
export const GET_PROMOCODE_DETAILS_URL=ENVIRONMENT_CONFIG.baseRestURL+DATAACCESS+"/getpromocode";
export const VALIDATE_INVOICE_AND_CA_NUM_URL = ENVIRONMENT_CONFIG.baseRestURL+DATAACCESS+"/validateinvoicedata";
export const GET_FORM_FILE_DTLS_FOR_PROMOCODE_URL = ENVIRONMENT_CONFIG.baseRestURL+DATAACCESS+"/getformfiledtlsforpromo";
export const UPDATE_USER_INFO_URL = ENVIRONMENT_CONFIG.baseRestURL+DATAACCESS+"/updateuser";
export const SEARCH_USERS_FOR_UPDATE_URL = ENVIRONMENT_CONFIG.baseRestURL+DATAACCESS+"/getusersforupdate";
export const ADD_USER_TRANSACTION_URL = ENVIRONMENT_CONFIG.baseRestURL+DATAACCESS+"/addusertxn";
export const GET_USER_DETAILS_FOR_PWD_RESET = ENVIRONMENT_CONFIG.baseRestURL+DATAACCESS+"/getuserdtlsforresetpwd";
export const ADD_FE_EXCEPTION_IN_DB_URL = ENVIRONMENT_CONFIG.baseRestURL+DATAACCESS+"/addssfailtxn";
export const GET_USER_TXNS_URL = ENVIRONMENT_CONFIG.baseRestURL+DATAACCESS+"/getusertxns";
export const GET_USER_TXN_DTLS_URL = ENVIRONMENT_CONFIG.baseRestURL+DATAACCESS+"/getusertxndetails";
export const GET_USERDTLS_FOR_PASSWORD_RESET = ENVIRONMENT_CONFIG.baseRestURL+DATAACCESS+"/getuserdtlsforresetpwd";
export const GET_USERS_FOR_UPDATE_URL = ENVIRONMENT_CONFIG.baseRestURL+DATAACCESS+"/getusersforupdate";
export const INSERT_RESET_PWD_DTLS_URL = ENVIRONMENT_CONFIG.baseRestURL+DATAACCESS+"/insertresetpwddtls";
export const UPDATE_PWD_LINK_EXPIRY_URL = ENVIRONMENT_CONFIG.baseRestURL+DATAACCESS+"/updatepwdexpirystatus";

const EMAIL = "/emails/send";
export const SEND_EMAIL_URL = ENVIRONMENT_CONFIG.baseEmailUrl+EMAIL;

const BMFSS="/bmfss";
export const GET_BP_DTLS_FOR_AGENT_URL = ENVIRONMENT_CONFIG.baseRestURL+BMFSS+"/getbpdtlsforagent";
export const GET_USER_PROFILE_WITH_BP_HIER_URL = ENVIRONMENT_CONFIG.baseRestURL+BMFSS+"/userprofilebphierarchy";
export const GET_ACCESS_PRIVILEGES_FOR_PROP_URL = ENVIRONMENT_CONFIG.baseRestURL+BMFSS+"/getaccessprivilegesforprop";
export const GET_SERVICE_ADDRESS_FOR_START_STOP_TXN_URL= ENVIRONMENT_CONFIG.baseRestURL+BMFSS+"/getserviceaddrforstartstop";
export const GET_BILLING_DETAILS_URL= ENVIRONMENT_CONFIG.baseRestURL+BMFSS+"/getbillingdetails";
export const GET_VUM_ALERT_SETUP_URL= ENVIRONMENT_CONFIG.baseRestURL+BMFSS+"/getvumalertsetup";
export const GET_VUM_DAILY_REPORT_LIST_URL= ENVIRONMENT_CONFIG.baseRestURL+BMFSS+"/getvumdailyreport";

const CCS="/ccs";
export const GET_BP_HIERARCHY_DTLS_URL = ENVIRONMENT_CONFIG.baseRestURL+CCS+"/getbphierarchydtls";
export const GET_BP_HIERARCHY_URL = ENVIRONMENT_CONFIG.baseRestURL+CCS+"/getbphierarchy";
export const GET_ESIID_DTLS_BLDR_FROM_CCS_URL = ENVIRONMENT_CONFIG.baseRestURL+CCS+"/getesiddtlsforbldr";
export const GET_ESIID_DTLS_MF_FROM_CCS_URL = ENVIRONMENT_CONFIG.baseRestURL+CCS+"/getesiddtlsformf";
export const GET_CONTRACT_ACCOUNT_LIST_URL = ENVIRONMENT_CONFIG.baseRestURL+CCS+"/getstructuraldetails";
export const UPD_VUM_EMAIL_PREF_URL = ENVIRONMENT_CONFIG.baseRestURL+CCS+"/updatevumemailprefs";
export const UPD_VUM_ESID_ATTR_URL = ENVIRONMENT_CONFIG.baseRestURL+CCS+"/updatevumesidattr";
export const GET_TDSP_FROM_ESIID_URL = ENVIRONMENT_CONFIG.baseRestURL+CCS+"/gettdspfromesid";
export const GET_TDSP_CALENDAR_DATES_URL = ENVIRONMENT_CONFIG.baseRestURL+CCS+"/gettdspspecificcalendardates";
export const LOG_TRANSACTION_URL = ENVIRONMENT_CONFIG.baseRestURL+CCS+"/logtransaction";
export const SEND_GMESS_EMAIL_URL = ENVIRONMENT_CONFIG.baseRestURL+CCS+"/sendreliantemail";
export const LOG_TRANSACTION_ENDPOINT_URL = ENVIRONMENT_CONFIG.baseRestURL+CCS+"/loggingtransaction";


const XI="/xi"
export const GET_ESIID_DETAILS_FROM_TCS_URL = ENVIRONMENT_CONFIG.baseRestURL+XI+"/gettcsesiiddtls";

const PAYMENT="/payment"
export const GET_PAYMENT_HISTORY_URL = ENVIRONMENT_CONFIG.baseRestURL+PAYMENT+"/getpayhistory";
export const GET_PREVIOUS_BILLS_URL = ENVIRONMENT_CONFIG.baseRestURL+PAYMENT+"/getpreviousbills";
export const SUBMIT_PAYMENT_URL = ENVIRONMENT_CONFIG.baseRestURL+PAYMENT+"/submitpayment";
export const GET_BANK_DETAILS_URL = ENVIRONMENT_CONFIG.baseRestURL+PAYMENT+"/getbankdetails";
export const DELETE_BANK_DETAILS_URL = ENVIRONMENT_CONFIG.baseRestURL+PAYMENT+"/updatebankdetails";
export const CANCEL_PAYMENT_URL = ENVIRONMENT_CONFIG.baseRestURL+PAYMENT+"/cancel";
export const MODIFY_PAYMENT_URL = ENVIRONMENT_CONFIG.baseRestURL+PAYMENT+"/modify";
export const GET_DUEDATE_FOR_CA_URL = ENVIRONMENT_CONFIG.baseRestURL+PAYMENT+"/duedate/";

const REPORT="/reports"
export const GET_VACANCY_REPORT_URL = ENVIRONMENT_CONFIG.baseRestURL+REPORT+"/vacancy";
export const GET_ROLLIN_REPORT_URL = ENVIRONMENT_CONFIG.baseRestURL+REPORT+"/rollin";
export const GET_ROLLOUT_REPORT_URL = ENVIRONMENT_CONFIG.baseRestURL+REPORT+"/rollout";

//logout url
export const PCI_LOG_OUT_URL = ENVIRONMENT_CONFIG.pciLogoutUrl;

const FORM="/form"
export const GET_PDF_FORMS_URL = ENVIRONMENT_CONFIG.baseRestURL+FORM+"/getpdf";


//export const GET_PDF_FORMS_REL_URL = "https://stg1-www.reliant.com/bmfSSApp/protected/protected/pdfforms.htm";

const LDAP="/ldap";
export const CREATE_USER_IN_LDAP_URL = ENVIRONMENT_CONFIG.baseRestURL+LDAP+"/createuser";
export const IS_USER_VALIDATED_IN_LDAP_URL = ENVIRONMENT_CONFIG.baseRestURL+LDAP+"/validateusername";
export const UPDATE_PASSWORD_IN_LDAP_URL = ENVIRONMENT_CONFIG.baseRestURL+LDAP+"/updatepassword";

/* Content related urls Start */
export const PLAN_DETAILS_URL = ENVIRONMENT_CONFIG.contentURL+"/sdl/listoffer";
export const MESSAGE_CONTENT_URL = ENVIRONMENT_CONFIG.contentURL+"/sdl/messagecontent";
export const FAQS_URL = ENVIRONMENT_CONFIG.contentURL+"/sdl/faqs";
/* Content related urls end */

export const FETCH_BILL_INVOICE_PDF_URL = "";
export const GET_TDSP_SPECIFIC_CALENDAR_DATES_URL = "";
export const GET_TDSP_FROM_ESIID = "";

export const BMF_FIRST_TIME_SET_PASSWORD = ENVIRONMENT_CONFIG.gmeBMFPasswordSetup;

export const GMESS_PORTAL = "EXTERNAL_PORTAL";
export const GMESS_CC_0270 = "0270";
export const ADMIN_TOOL = "ADMIN_TOOL";
export const STATUS_N_FLAG = "N";
export const USER_STATUS_I = "I";
export const USER_STATUS_F = "F";
export const USER_STATUS_A = "A";
export const STATUS_S_FLAG = "S";
export const EMPTY_SPACE = " ";
export const GME_BRAND_NAME ="GME";
export const SEARCH_CRITERIA_LN = "LN";
export const SEARCH_CRITERIA_BP = "BP";
export const SEARCH_CRITERIA_BBP = "BBP";
export const SEARCH_CRITERIA_CBP = "CBP";

export const USERTYPE_SP_EXTERNAL_PORTAL="EXTERNAL_PORTAL";
export const USERTYPE_SP_ADMIN_TOOL="ADMIN_TOOL";
export const USERTYPE_SP_INT_ADMIN="I_Admin_OPS_MGR";
export const USERTYPE_SP_INT_AGT_EMM="I_Agent_EMM";
export const USERTYPE_SP_INT_AGT_EMA="I_Agent_EMA";
export const USERTYPE_SP_INT_AGT_OPREP="I_Agent_OPS_REP";
export const USERTYPE_SP_INT_READ_ONLY="I_Read-Only_IT";
export const USERTYPE_SP_EXT_BROKER="E_Broker_BRK_ADM";
export const USERTYPE_SP_EXT_BRK_ASC="E_Broker Associate_BRK_ASC";
export const USERTYPE_SP_EXT_CA_PO="E_Customer Admin_PO";
export const USERTYPE_SP_EXT_CA_PM="E_Customer Admin_PM";
export const USERTYPE_SP_EXT_CUS_ASC="E_Customer Associate_PS";
export const USERTYPE_SP_EXT_READ_ONLY="E_Read-Only_OA";
export const HIERARCHY_CALL_TYPE_TAX_ID = "TAX_ID";

export const USERTYPE_EXTERNAL="External";
export const USERTYPE_INTERNAL="Internal";
export const USERTYPE_INT_ADMIN= "INT_ADMIN";
export const USERTYPE_INT_AGT_EMM= "INT_AGT_EMM";
export const USERTYPE_INT_AGT_EMA= "INT_AGT_EMA";
export const USERTYPE_INT_AGT_OPREP= "INT_AGT_OPREP";
export const  USERTYPE_INT_READ_ONLY= "INT_READ_ONLY";
export const USERTYPE_EXT_BROKER= "EXT_BROKER";
export const USERTYPE_EXT_BRK_ASC= "EXT_BRK_ASC";
export const USERTYPE_EXT_CA_PO= "EXT_CA_PO";
export const USERTYPE_EXT_CA_PM= "EXT_CA_PM";
export const USERTYPE_EXT_CUS_ASC= "EXT_CUS_ASC";
export const USERTYPE_EXT_READ_ONLY="EXT_READ_ONLY";

export const SECURITY_ROLE_ADMIN = "Admin";
export const SECURITY_ROLE_READ_ONLY = "Read-Only";
export const SECURITY_ROLE_EXT_READ_ONLY = "External Read-Only";
export const SECURITY_ROLE_AGT = "Agent";
export const SECURITY_ROLE_BROKER= "Broker";
export const SECURITY_ROLE_CUS_ADMIN= "Customer Admin";
export const SECURITY_ROLE_CUS_ASC =  "Customer Associate";
export const SECURITY_ROLE_BROKER_ASC = "Broker Associate";
export const PROPERTY_MANAGER = "Property Manager";
export const PROPERTY_OWNER = "Property Owner";
export const PROPERTY_SUPERVISOR= "Admin";
export const EMM = "EMM";
export const EMA = "EMA";
export const OPS_REP= "Operations Representative";
export const NA = "NA";


//SEARCH TYPES
export const SEARCH_TYPE_BP = "BP";
export const SEARCH_TYPE_AN = "AN";
export const SEARCH_TYPE_CAN = "CAN";
export const SEARCH_TYPE_PN = "PN";
export const SEARCH_TYPE_TID = "TID";
export const SEARCH_TYPE_MANAGEMENT = "M";
export const SEARCH_TYPE_REGION = "R";
export const SEARCH_TYPE_PROPERTY = "P";

export const EMPTY_STR = "";
export const NOT_PROVIDED = "Not Provided";
export const COLON = ":";


//Hierarchy Levels
export const HEIRARCHY_MANAGEMENT="MGMT";
export const HEIRARCHY_REGION="REGN";
export const HEIRARCHY_PROPERTY="PROP";
export const HIERARCHY_NO_REGN = "NO_REGN";
export const HIERARCHY_NO_MGMT = "NO_MGMT";
export const HIERARCHY_NO_PROP = "NO_PROP";
export const ACCOUNT_CTGY_CSA = "CSA";
export const ACCOUNT_CTGY_NCSA = "NCSA";
export const ACCOUNT_CTGY_CAA = "CAA";
export const ACCOUNT_CTGY_NONCAA = "NONCAA";
export const ACCOUNT_CTGY_BUILDER = "BLDR";
export const ACCOUNT_CTGY_MULTIFAMILY = "MFAM";
export const HEIRARCHY_BROKER = "Broker";
export const ACCOUNT_CTGY_SITE = "SITE";
export const SERVICE_TYPE_STOP = "STOP";
export const SERVICE_TYPE_START = "START";
export const SEARCH_TYPE_ESIID = "ESIID";
export const SEARCH_TYPE_ADDR = "ADDR";


export const CUSTOMERTYPE_HB = "HB";
export const CUSTOMERTYPE_PM = "PM";

export const PM_MIXED_PREMISE_TYPE = "Vacant Units and Common Areas";
export const PM_VU_PREMISE_TYPE = "Vacant Units";
export const HB_PREMISE_PREMISE_TYPE = "Premises";
export const HB_MIXED_PREMISE_TYPE = "Premises and Common Areas";
export const BMF_CMN_PREMISE_TYPE = "Common Areas";
export const COMMON_AREA_02 = "02"; //Small Non Residential(interpreted as Common Area) is 02 returned from CCS Structural call RFC
export const VU_OR_PREMISE_01 = "01"; //Residential(Interpreted as Premise or Vacant Unit) is 01 returned from CCS Structural call RFC
export const DEFAULT_AMOUNT = "0.00";
export const INDIVIDUAL = "individual";
export const STATUS_X_FLAG = "X";
export const STATUS_Y_FLAG = "Y";
export const AMOUNT_FORMAT = "$#0.00";
export const AMOUNT_FORMAT_NC = "#0.00";
export const BILLPAY_DATE_FORMAT = "MM/dd/yyyy";
export const BILLPAY_OUTPUT_DATE = "yyyy-MM-dd";
export const BILLPAY_FULL_DATE = "MMMMM d, yyyy h:mm a z";
export const STRING_ZERO = "0";
export const NEW_PAYMENT_STATUS = "POSTED";
export const CANCEL_PAYMENT_STATUS = "CANCELLED";
export const DELETE_ACTION = "D";
export const INSERT_ACTION = "I";
export const PAYMENT_SCHEDULED = "Scheduled";
export const PAYMENT_POSTED = "Posted";

export const RESIDENTIAL_PREMISE_TYPE = "01";
export const NON_RESIDENTIAL_PREMISE_TYPE = "02";
export const MIXED_PREMISE_TYPE = "MIXED";

export const BILLING_INDIVIDUAL = "I";
export const BILLING_COLLECTIVE = "C";

export const FINAL_BILL = "Y";
export const NCA_EXISTS = "X";
export const INVOICE_FINAL = "\n(final)";


export const YES = "Y";
export const NO = "N";
export const YES_TXT = "Yes";
export const NO_TXT = "No";
export const  START_STOP_RESTRICTION_REASON_EN_OR_DISABLE = "Contract is disabled on this property. Please contact your admin to enable it";
export const  START_STOP_RESTRICTION_REASON_ERR = "We are unable to process your request. Please contact your administrator";
export const  START_STOP_RESTRICTION_REASON = "There is no contract available for this property. Please contact your admin to create a contract on this property";

//TAX VALUES
export const TAX_STATUS_P0 = "P0";
export const TAX_STATUS_P1 = "P1";
export const TAX_STATUS_P3 = "P3";
export const TAX_STATUS_PE = "PE";
export const TAX_STATUS_PH = "PH";
export const TAX_STATUS_P0_TXT = "Exempt from all taxes"; //(All Taxes) State, County, City and Special";
export const TAX_STATUS_P1_TXT = "Taxable (All Taxes)";//State, County, City and Special";
export const TAX_STATUS_P3_TXT = "Taxable for City Tax";
export const TAX_STATUS_PE_TXT = "Taxable"; //for State, County and Special";
export const TAX_STATUS_PH_TXT = "Taxable";// With Certificate-Includes Partial ex";
export const NOT_AVAILABLE = "Not Available";

//Transaction types
	export const TXN_TYPE_START = "Start";
	export const TXN_TYPE_STOP = "Stop";
	export const TXN_TYPE_VUE = "VUE";
	export const TXN_TYPE_VUM = "VUM";
	export const TXN_TYPE_VUE_FOR_REQUEST = "VUM";
	export const TXN_TYPE_CREATE_USER = "User Created";
	export const TXN_TYPE_DEACTIVATE_USER = "User Deactivated";
	export const TXN_TYPE_LOGIN = "Login";
	export const TXN_TYPE_UPDATE_PROFILE = "Profile Update";
	export const TXN_TYPE_VUM_OPT_OUT = "VUM Opt Out";
	export const TXN_TYPE_VUM_OPT_IN = "VUM Opt In";
	export const TXN_TYPE_VUM_UPDATE = "VUM Update";
	export const TXN_TYPE_SERVICE = "Service";
	export const TXN_TYPE_SERVICE_FOR_REQUEST = "SS";
	export const TXN_TYPE_SERVICE_FOR_NONSS = "NON_SS";


  export const UNIT_TYPE_OTHERS = "Others";
	export const UNIT_TYPE_1BEDROOM = "1 Bedroom";
	export const UNIT_TYPE_2BEDROOM = "2 Bedroom";
	export const UNIT_TYPE_3BEDROOM = "3 Bedroom";

	export const VUM_UNIT_TYPE_CLASS_OTHERS = "otherbdrm";
	export const ONE_BED_ROOM = "1";
	export const TWO_BED_ROOM = "2";
	export const THREE_BED_ROOM = "3";
	export const OTHERS_BED_ROOM = "99";

 export const EXCLAIMATIONSEPARATOR = "!:";
 export const COMMA =",";

 //Multifamily Email Constants
	export const MF_CUSTOMER_NAME = "CUSTOMER_NAME";

	export const MF_METER_START_INFO = "METER_START_INFO";
	export const MF_METER_STOP_INFO = "METER_STOP_INFO";
	export const MF_TRANSACTION_TIME = "TRANSACTION_TIME";
	export const MF_TRANSACTION_NUM = "TRANSACTION_NUM";
	export const MF_CONTACT_NAME = "CONTACT_NAME";
	export const MF_CONTACT_PHONE_NUM = "CONTACT_PHNUM";
	export const MF_CONTACT_FAX_NUM = "CONTACT_FAXNUM";
	export const MF_CONTACT_EMAIL_ADDRESS = "CONTACT_EMAIL";
	export const MF_PROPERTY_NAME = "PROPERTY_NAME";
	export const MF_SERVICE_STREET_NUM = "SERVICE_STREET_NUM";
	export const MF_SERVICE_STREET_NAME = "SERVICE_STREET_NAME";
  export const MF_SERVICE_ADDRESS = "SERVICE_ADDRESS"
	export const MF_SERVICE_CITY = "SERVICE_CITY";
	export const MF_SERVICE_STATE = "SERVICE_STATE";
	export const MF_SERVICE_ZIP = "SERVICE_ZIP";
	export const MF_START_SERVICE_CONFIRMATION_EXTERNAL_ID = "GME.BMF.PM.CHANGE.SERVICE.START.NEW.EN_US";
	export const MF_STOP_SERVICE_CONFIRMATION_EXTERNAL_ID="GME.BMF.PM.CHANGE.SERVICE.STOP.NEW.EN_US";

  export const TEMPLATE_HTML ="HTML";

  export const TOTAL_PAYMENT = "TOTAL_PAYMENT";
	export const PAYMENT_INFORMATION = "PAYMENT_INFORMATION";
  export const BILL_CONTRACT_ACCT_NUM = "CONTRACT_ACCOUNT_NUMBER";
  export const BILL_PAYMENT_DATE = "PAYMENT_DATE";
  export const BILL_SCHEDULE_PAYMENT_DATE = "SCHEDULED_PAYMENT_DATE";
  export const BILL_PAYMENT_AMOUNT = "PAYMENT_AMOUNT";
  export const BILL_BANK_ACCT_NUM = "BANK_ACCOUNT_NUMBER";
	export const BILL_PAY_EMAIL_BODY = "BILL_PAY_EMAIL_BODY";//BILL_PAY_EMAIL_BODY
	export const EMAIL_CUSTOMER_NAME = "CUSTOMER_NAME";
	export const ERROR_MESSAGE = "ERROR_MESSAGE";
	export const BILLPAY_PAY_CONFIRMATION_EXTERNAL_ID = "GME.BMF.BILLPAY.PAY.CONFIRMATION.EN_US";
	export const BILLPAY_PAY_CANCELLATION_EXTERNAL_ID = "GME.BMF.BILLPAY.PAY.CANCELLATION.EN_US";
	export const HB_STOP_SERVICE_CONFIRMATION_EXTERNAL_ID = "GME.BMF.CHANGE.SERVICE.STOP.SERVICE.EN_US";
	export const HB_START_SERVICE_CONFIRMATION_EXTERNAL_ID = "GME.BMF.CHANGE.SERVICE.START.SERVICE.EN_US";
	export const ADD_USER_CONFIRMATION_EXTERNAL_ID = "GME.BMF.SS.ADD.USER.USEREMAIL.CONFIRM.EN_US";
	export const ADD_USER_CONFIRMATION_ADMIN_EXTERNAL_ID = "GME.BMF.SS.ADD.USER.ADMINMAIL.EN_US";
	export const REMOVE_USER_CONFIRMATION_EXTERNAL_ID = "GME.BMF.PM.REMOVE.USER.CONF.EN_US";
	export const UPDATE_USER_CONFIRMATION_EXTERNAL_ID = "GME.BMF.SS.UPDATE.USER.INFO.EN_US";
	export const UPDATE_PASSWORD_CONFIRMATION_EXTERNAL_ID = "GME.BMF.PM.UPDATE.PASSWORD.CONF.EN_US";
	export const RESET_PASSWORD_EXTERNAL_ID="GME.BMF.SS.RESET.PASSWORD.CONF.EN_US";
	export const BMF_SS_SCHEDULED_PAYMENT_INFO_EXTERNAL_ID = "GME.BMF.SS.SCHEDULED.PAYMENT.INFO.EN_US";


	//stop and start service email constants
	export const HB_CUSTOMER_NAME = "CUSTOMER_NAME";
	export const HB_TRANSACTION_TIME = "TRANSACTION_TIME";
	export const HB_TRANSACTION_NUM = "TRANSACTION_NUM";
	export const HB_CONTACT_NAME = "CONTACT_NAME";
	export const HB_CONTACT_PHNUM = "CONTACT_PHNUM";
	export const HB_CONTACT_FAXNUM = "CONTACT_FAXNUM";
	export const HB_CONTACT_EMAIL = "CONTACT_EMAIL";
	export const HB_METER_INFO = "METER_STOP_INFO";

	export const CUSTOMER = "Customer";
	export const REQUEST_DETAILS = "requestDetails";
	export const REQUEST_CONTACT_INFO = "requestContactInfo/userInfo";
	export const PM_METER_STS_INFO = "meterStartServInfo";
	//export const PM_REQUESTCONTACTINFO_OR_USERINFO = "requestContactInfo/userInfo";
	export const PM_NAME = "Name";
	export const PM_PHONENO = "phoneNo";
	export const PM_ALTPHNUM = "altPhoneNumber";
	export const PM_FAXVALUE = "faxValue";
	export const PM_EMAILADDRESS = "emailAddress";
	export const PM_USERNAME = "userName";

	//Profile Management Email Constants
	export const PM_CUSTOMER_NAME = "CUSTOMER_NAME";
	export const PM_UPDATE_NAME = "UPDATE_NAME";
	export const PM_UPDATE_PHNUM = "UPDATE_PHNUM";
	export const PM_UPDATE_ALTPHNUM = "UPDATE_ALTPHNUM";
	export const PM_UPDATE_FAXNUM = "UPDATE_FAXNUM";
	export const PM_UPDATE_EMAIL = "UPDATE_EMAIL";
	export const PM_UPDATE_USERNAME = "UPDATE_USERNAME";
  export const PM_UPDATE_SAP_ID = "SAP_ID";
	export const PM_ACCESSPRIV_INFO = "ACCESSPRIV_INFO";
	export const PM_BUSINESS_NAME = "BUSINESS_NAME";
	export const PM_CHANGED_NAME="CHANGED_NAME";
	export const PM_CHANGED_VALUE = "CHANGED_VALUE";
	export const PM_USER_FULLNAME = "USER_FULLNAME";
	export const PM_USER_NAME = "USER_NAME";
	export const PM_LOGIN_LINK = "LOGIN_LINK";
	export const PM_CUSTOMER_FULLNAME = "CUSTOMER_FULLNAME";
	export const PM_CONFIRMATION_NUM = "CONFIRMATION_NUM";
	export const PM_EMAIL_ADDRESS = "EMAIL_ADDRESS";
	export const PM_GREETING_NAME = "GREETING_NAME";
	export const PM_TELEPHONE_NUM = "TELEPHONE_NUM";
  export const PM_UPDATE_SAPID = "UPDATE_SAPID";
  export const PM_SAPID_HIDE = "SAPID_HIDE";
  export const PM_SAPID_CLASS = "SAPID_CLASS";
	export const PAYMENT_DATE = "PAYMENT_DATE";
  export const PAYMENT_METHOD = "PAYMENT_METHOD";
	export const BANK_ACC_NUM = "BANK_ACC_NUM";

	export const CONTRACT_ACC = "CONTRACT_ACC";
	export const PAYMENT_AMOUNT = "PAYMENT_AMOUNT";


	//Customer Care
	export const BMF_CUSTOMER_CARE_SUBJECT = "";
	export const BMF_METER_INFO = "METER_STOP_INFO";
	export const BMF_CUSTOMER_CARE_CONFIRMATION_EXTERNAL_ID = "GME.BMF.CUSTOMER.CARE.EN_US";
	export const BMF_EMAIL_STATUS = "EMAIL_STATUS";
	export const BMF_EMAILADDRESS = "ENTERED_EMAIL_ADDRESS";
	export const BMF_CUSTOMER_NAME = "CUSTOMER_NAME";
	export const BMF_ENTERED_COMMENTS = "COMMENTS";
	export const BMF_EMAIL_SUBJECT = "SUBJECT";
	export const BMF_EMAIL_SENT_TO = "EMAIL_SENT_TO";


	//VUM Daily Usage Email Alert
	export const VUM_DAILY_USAGE_BUSINESS_NAME = "BUSINESS_NAME";
	export const VUM_DAILY_USAGE_BODY="VUE_ALERT_USAGE_BODY";
	export const VUM_DAILY_USAGE_EXTERNAL_ID="BMF.MF.VUE.ALERT.EN_US";
	export const VUM_DAILY_USAGE_EMAIL_SUBJECT = "";
	export const VUM_DAILY_USAGE_COMMENT_PARTNER="PARTNER";
	export const VUM_DAILY_USAGE_COMMENT_CA_NUM="CONTRACT_ACCOUNT_NUMBER";

	//VUM Opt In/Out Notification
	export const VUM_OPT_INOUT_BUSINESS_NAME = "BUSINESS_NAME";
	export const VUM_OPT_INOUT_COMMENT_PARTNER="PARTNER";
	export const VUM_OPT_INOUT_COMMENT_CHANGER_FULLNAME="FULL_NAME";
	export const VUM_OPT_INOUT_ON_OFF = "ON_OFF";
	export const VUM_OPT_INOUT_EXTERNAL_ID="BMF.PM.VUM.OPT.IN.OUT.NOTIFY.EN_US";
	export const VUM_OPT_INOUT_EMAIL_SUBJECT = "";

	//Modify Payment - Scheduled Payment
	export const PROPERTY_NAME = "PROPERTY_NAME";
	export const PAYMENT_SUBMISSION_DATE = "PAYMENT_SUBMISSION_DATE";
	export const BANK_ACCOUNT_NUMBER = "BANK_ACCOUNT_NUMBER";
	export const CONFIRMATION_NUMBER = "CONFIRMATION_NUMBER";
	export const PAYMENT_AMOUNT_VAL = "PAYMENT_AMOUNT";


export const GMESS_LDAP_ORG ="greenmountain.com"; //o=greenmountain.com
export const GME_SSO_TYPE = "gmebmf";//ou=gmebmf
export const LDAP_BMF_GME_USERTYPE="GMESS";

export const GMESS_HOST_INFO = ENVIRONMENT_CONFIG.gmessHostInfo;
