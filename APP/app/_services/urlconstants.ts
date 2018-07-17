/* Account service start */
export const SEARCH_BY_BP_NUMBER_URL = "/prelogin/search/bpnumber"
export const SEARCH_BY_FED_TAX_ID_URL = "/prelogin/search/taxid"
export const CUSTOMER_DETAILS_URL = "/dashboard/custdtls"
export const LIST_ESIID_URL = "/multifamily/noncaa/esiid/list"
/* Account service end */

/* Billing Service start */
export const GET_PAYMENT_HISTORY_URL = "/billing/paymenthistory/list"
export const GET_PREVIOUS_BILLS_URL = "/billing/previousbills/list"
export const GET_CONTRACT_ACCOUNT_LIST_URL = "/billing/contractaccount/list"
export const GET_INVOICE_LIST_URL = "/billing/invoices/list"
export const GET_PAYMENT_METHODS_URL = "/billing/paymentmethods/list"
export const DELETE_PAYMENT_METHOD_URL = "/billing/paymentmethod/delete"
export const CANCEL_PAYMENT_URL = "/billing/payment/cancel"
export const MODIFY_PAYMENT_URL = "/billing/payment/modify"
export const SUBMIT_PAYMENT_URL = "/billing/payment/submit"
export const GET_BILLING_DTLS_FOR_DASHBOARD = "/billing/dashboard/paydetails"
export const GET_DUEDATE_FOR_CA_URL = "/billing/duedateforca"
/* Billing Service end */

/* Customer care start */
export const CC_EMAIL_US_URL = "/cc/emailus"
export const CC_FAQS_URL = "/content/faqs"
/* Customer care end */

/* Forms service start */
export const LIST_FORMS_URL = "/forms/list"
export const GET_PDF_URL = "/forms/pdf"
/* Forms Service end */

/* Profile service start */
export const USER_DETAILS_TXN_ID_URL = "/userdetails/txnid"
export const VALIDATE_USER_NAME_URL = "/profile/user/username/validate"
export const SAVE_USER_URL = "/profile/user/save"
export const LIST_ASSOCIATES_URL = "/profile/user/associates/list"
export const GET_USER_PROFILE_DETAILS_URL = "/profile/user/details"
export const USER_UPDATE_URL = "/profile/user/update"
export const SEARCH_USERS_FOR_UPDATE_URL = "/profile/user/search"
export const FIRST_TIME_UPDATE_PASSWORD_URL = "/profile/user/firsttime/updpassword"
export const PASSWORD_RESET_URL = "/profile/user/password/reset"
export const PASSWORD_UPDATE_URL = "/profile/user/password/update"
export const REMOVE_USER_URL = "/profile/user/remove"
/* Profile Service end */

/* Reports Service url */
export const VACANCY_REPORT_URL = "/reports/vacancy"
export const ROLL_REPORT_URL = "/reports/roll"
/* Reports Service url */

/* Service Start start */
export const LIST_PROPERTY_ADDR_URL = "/service/start/addresses/list"
export const START_SERVICE_SUBMIT_URL = "/service/start/submit"
export const PLAN_DETAILS_URL = "/content/plan/details"
export const LIST_PROMO_CODE_URL = "/service/start/promocode/list"
export const GET_UNAVILABLE_DATES_URL = "/service/unavailableDates"
export const SELECT_UNITS_GET_NEAR_TO5PM_FLAG_URL = "/service/selectunitsGetNearTo5pm"
export const VERIFY_GET_NEAR_TO_5PM_FLAG_URL = "/service/verifyGetNearTo5pm"
/* Service Start end */

/* Service Stop start */
export const LIST_PROPERTY_ADDR_STOP_URL = "/service/stop/addresses/list"
export const STOP_SERVICE_SUBMIT_URL = "/service/stop/submit"
/* Service Stop end */

/* Transactions start */
export const LIST_TRANSACTIONS_URL = "/transactions/list"
export const DETAILED_TRANSACTION_URL = "/transactions/detail"
/* Transactions end */

/* User Service start */
export const GET_FIRST_LOGIN_FLAG_URL = "/prelogin/firstlogin/get"
export const SET_FIRST_LOGIN_FLAG_URL = "/prelogin/firstlogin/set"
export const USER_DETAILS_URL = "/prelogin/user/details"
/* User Service end */

/* VUM Service start */
export const GET_VACANT_DAILY_REPORT_URL = "/vum/vacant/dailyreport"
export const GET_VACANT_VUM_DATA_URL = "/vum/vacant/data"
export const UPDATE_EMAIL_PREFERENCE_URL = "/vum/emailpref/update"
export const UPDATE_ESIID_ATTRIBUTE_URL = "/vum/esiidattr/update"
/* VUM Service end */
