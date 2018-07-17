import { Action } from '@ngrx/store';

export const GET_CONTRACT_ACCOUNT_LIST = '[Billing] Get Contract Account List API'
export const GET_CONTRACT_ACCOUNT_LIST_SUCCESS = '[Billing] Get Contract Account List API Success'
export const GET_CONTRACT_ACCOUNT_LIST_FAILURE = '[Billing] Get Contract Account List API Failure'

export const GET_DASHBOARD_PAYMENT_DETAILS = '[Billing] Get Dashboard Payment Details API'
export const GET_DASHBOARD_PAYMENT_DETAILS_SUCCESS = '[Billing] Get Dashboard Payment Details API Success'
export const GET_DASHBOARD_PAYMENT_DETAILS_FAILURE = '[Billing] Get Dashboard Payment Details API Failure'

export const GET_BILLING_INVOICE_LIST = '[Billing] Get Billing Invoice List API'
export const GET_BILLING_INVOICE_LIST_SUCCESS = '[Billing] Get Billing Invoice List API Success'
export const GET_BILLING_INVOICE_LIST_FAILURE = '[Billing] Get Billing Invoice List API Failure'

export const SET_INDIVIDUAL_INVOICE_LIST = '[Billing] Set Individual Invoice List'

export const GET_PAYMENT_METHODS = '[Billing] Get Payment Methods API'
export const GET_PAYMENT_METHODS_SUCCESS = '[Billing] Get Payment Methods API Success'
export const GET_PAYMENT_METHODS_FAILURE = '[Billing] Get Payment Methods API Failure'

export const ADD_PAYMENT_METHOD = '[Billing] Add Payment Method API'
export const ADD_PAYMENT_METHOD_SUCCESS = '[Billing] Add Payment Method API Success'
export const ADD_PAYMENT_METHOD_FAILURE = '[Billing] Add Payment Method API Failure'

export const DELETE_PAYMENT_METHOD = '[Billing] Delete Payment Method API'
export const DELETE_PAYMENT_METHOD_SUCCESS = '[Billing] Delete Payment Method API Success'
export const DELETE_PAYMENT_METHOD_FAILURE = '[Billing] Delete Payment Method API Failure'

export const SUBMIT_PAYMENT = '[Billing] Submit Payment API'
export const SUBMIT_PAYMENT_SUCCESS = '[Billing] Submit Payment API Success'
export const SUBMIT_PAYMENT_FAILURE = '[Billing] Submit Payment API Failure'

export const SAVE_COLLECTIVE_PAYMENT_INFO = '[Billing] Save Collective Payment Info'
export const SAVE_INDIVIDUAL_PAYMENT_INFO = '[Billing] Save Individual Payment Info'
export const UPDATE_COLLECTIVE_PAYMENT_INFO = '[Billing] Update Collective Payment Info'
export const SAVE_BANK_INFO = '[Billing] Save Bank Info'
export const UPDATE_BANK_INFO = '[Billing] Update Bank Info'

export class GetContractAccountList implements Action {
    readonly type = GET_CONTRACT_ACCOUNT_LIST;
    constructor(public payload:any) {}
}

export class GetContractAccountListSuccess implements Action {
    readonly type = GET_CONTRACT_ACCOUNT_LIST_SUCCESS;
    constructor(public payload:any) {}
}

export class GetContractAccountListFailure implements Action {
    readonly type = GET_CONTRACT_ACCOUNT_LIST_FAILURE;
    constructor(public payload:any) {}
}

export class GetDashboardPaymentDtls implements Action {
    readonly type = GET_DASHBOARD_PAYMENT_DETAILS;
    constructor(public payload:any) {}
}

export class GetDashboardPaymentDtlsSuccess implements Action {
    readonly type = GET_DASHBOARD_PAYMENT_DETAILS_SUCCESS;
    constructor(public payload:any) {}
}

export class GetDashboardPaymentDtlsFailure implements Action {
    readonly type = GET_DASHBOARD_PAYMENT_DETAILS_FAILURE;
    constructor(public payload:any) {}
}

export class GetBillingInvoiceList implements Action {
    readonly type = GET_BILLING_INVOICE_LIST;
    constructor(public payload:any) {}
}

export class GetBillingInvoiceListSuccess implements Action {
    readonly type = GET_BILLING_INVOICE_LIST_SUCCESS;
    constructor(public payload:any) {}
}

export class GetBillingInvoiceListFailure implements Action {
    readonly type = GET_BILLING_INVOICE_LIST_FAILURE;
    constructor(public payload:any) {}
}

export class SetIndividualInvoiceList implements Action {
    readonly type = SET_INDIVIDUAL_INVOICE_LIST;
    constructor(public payload:any) {}
}

export class AddPaymentMethod implements Action {
    readonly type = ADD_PAYMENT_METHOD;
    constructor(public payload:any) {}
}

export class AddPaymentMethodSuccess implements Action {
    readonly type = ADD_PAYMENT_METHOD_SUCCESS;
    constructor(public payload:any) {}
}

export class AddPaymentMethodFailure implements Action {
    readonly type = ADD_PAYMENT_METHOD_FAILURE;
    constructor(public payload:any) {}
}

export class DeletePaymentMethod implements Action {
    readonly type = DELETE_PAYMENT_METHOD;
    constructor(public payload:any) {}
}

export class DeletePaymentMethodSuccess implements Action {
    readonly type = DELETE_PAYMENT_METHOD_SUCCESS;
    constructor(public payload:any) {}
}

export class DeletePaymentMethodFailure implements Action {
    readonly type = DELETE_PAYMENT_METHOD_FAILURE;
    constructor(public payload:any) {}
}

export class GetPaymentMethods implements Action {
    readonly type = GET_PAYMENT_METHODS;
    constructor(public payload:any) {}
}

export class GetPaymentMethodsSuccess implements Action {
    readonly type = GET_PAYMENT_METHODS_SUCCESS;
    constructor(public payload:any) {}
}

export class GetPaymentMethodsFailure implements Action {
    readonly type = GET_PAYMENT_METHODS_FAILURE;
    constructor(public payload:any) {}
}

export class SubmitPayment implements Action {
    readonly type = SUBMIT_PAYMENT;
    constructor(public payload:any) {}
}

export class SubmitPaymentSuccess implements Action {
    readonly type = SUBMIT_PAYMENT_SUCCESS;
    constructor(public payload:any) {}
}

export class SubmitPaymentFailure implements Action {
    readonly type = SUBMIT_PAYMENT_FAILURE;
    constructor(public payload:any) {}
}

export class SaveCollectivePaymentInfo implements Action {
    readonly type = SAVE_COLLECTIVE_PAYMENT_INFO;
    constructor(public payload:any) {}
}

export class SaveIndividualPaymentInfo implements Action {
   readonly type = SAVE_INDIVIDUAL_PAYMENT_INFO;
   constructor(public payload:any) {}
}

export class UpdateCollectivePaymentInfo implements Action {
   readonly type = UPDATE_COLLECTIVE_PAYMENT_INFO;
   constructor(public payload:any) {}
}

export class SaveBankInfo implements Action {
   readonly type = SAVE_BANK_INFO;
   constructor(public payload:any) {}
}

export class UpdateBankInfo implements Action {
   readonly type = UPDATE_BANK_INFO;
   constructor(public payload:any) {}
}


export type Actions =
   | GetContractAccountList
   | GetContractAccountListSuccess
   | GetContractAccountListFailure
   | GetDashboardPaymentDtls
   | GetDashboardPaymentDtlsSuccess
   | GetDashboardPaymentDtlsFailure
   | GetBillingInvoiceList
   | GetBillingInvoiceListSuccess
   | GetBillingInvoiceListFailure
   | SetIndividualInvoiceList
   | GetPaymentMethods
   | GetPaymentMethodsSuccess
   | GetPaymentMethodsFailure
   | AddPaymentMethod
   | AddPaymentMethodSuccess
   | AddPaymentMethodFailure
   | DeletePaymentMethod
   | DeletePaymentMethodSuccess
   | DeletePaymentMethodFailure
   | SubmitPayment
   | SubmitPaymentSuccess
   | SubmitPaymentFailure
   | SaveCollectivePaymentInfo
   | SaveIndividualPaymentInfo
   | UpdateCollectivePaymentInfo
   | SaveBankInfo
   | UpdateBankInfo
