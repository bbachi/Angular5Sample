import { Action } from '@ngrx/store';

export const GET_PAYMENT_HISTORY = '[Billing] Payment History API'
export const GET_PAYMENT_HISTORY_SUCCESS = '[Billing] Payment History API Success'
export const GET_PAYMENT_HISTORY_FAILURE = '[Billing] Payment History API Failure'

export const UPDATE_PAYMENT_HISTORY = '[Billing] Update Payment History'

export const CANCEL_PAYMENT = '[Billing] Cancel Payment API'
export const CANCEL_PAYMENT_SUCCESS = '[Billing] Cancel Payment API Success'
export const CANCEL_PAYMENT_FAILURE = '[Billing] Cancel Payment API Failure'

export const GET_DUEDATE_FOR_CA = '[Billing] Get Duedate for ca API'
export const GET_DUEDATE_FOR_CA_SUCCESS = '[Billing] Get Duedate for ca API Success'
export const GET_DUEDATE_FOR_CA_FAILURE = '[Billing] Get Duedate for ca API Failure'

export const SAVE_PAYMENT_INFO_FOR_MODIFY_PAYMENT = '[Billing] Modify Payment Save Payment Info'
export const UPDATE_PAYMENT_DATE_FOR_MODIFY_PAYMENT = '[Billing] Update Payment Date For Modify Payment'
export const UPDATE_PAYMENT_INFO_FOR_MODIFY_PAYMENT = '[Billing] Update Modify Payment Info For Submission'

export const MODIFY_PAYMENT = '[Billing] Modify Payment API'
export const MODIFY_PAYMENT_SUCCESS = '[Billing] Modify Payment Success API'
export const MODIFY_PAYMENT_FAILURE = '[Billing] Modify Payment Failure API'

export class GetPaymentHistory implements Action {
    readonly type = GET_PAYMENT_HISTORY;
    constructor(public payload:any) {}
}

export class GetPaymentHistorySuccess implements Action {
    readonly type = GET_PAYMENT_HISTORY_SUCCESS;
    constructor(public payload:any) {}
}

export class GetPaymentHistoryFailure implements Action {
    readonly type = GET_PAYMENT_HISTORY_FAILURE;
    constructor(public payload:any) {}
}

export class UpdatePaymentHistory implements Action {
    readonly type = UPDATE_PAYMENT_HISTORY;
    constructor(public payload:any) {}
}

export class CancelPayment implements Action {
    readonly type = CANCEL_PAYMENT;
    constructor(public payload:any) {}
}

export class CancelPaymentSuccess implements Action {
    readonly type = CANCEL_PAYMENT_SUCCESS;
    constructor(public payload:any) {}
}

export class CancelPaymentFailure implements Action {
    readonly type = CANCEL_PAYMENT_FAILURE;
    constructor(public payload:any) {}
}

export class GetDuedateForCA implements Action {
    readonly type = GET_DUEDATE_FOR_CA;
    constructor(public payload:any) {}
}

export class GetDuedateForCASuccess implements Action {
    readonly type = GET_DUEDATE_FOR_CA_SUCCESS;
    constructor(public payload:any) {}
}

export class GetDuedateForCAFailure implements Action {
    readonly type = GET_DUEDATE_FOR_CA_FAILURE;
    constructor(public payload:any) {}
}

export class SavePaymentInfoForModifyPayment implements Action {
    readonly type = SAVE_PAYMENT_INFO_FOR_MODIFY_PAYMENT;
    constructor(public payload:any) {}
}

export class UpdatePaymentDateForModifyPayment implements Action {
    readonly type = UPDATE_PAYMENT_DATE_FOR_MODIFY_PAYMENT;
    constructor(public payload:any) {}
}

export class UpdatePaymentInfoForModifyPayment implements Action {
     readonly type = UPDATE_PAYMENT_INFO_FOR_MODIFY_PAYMENT;
     constructor(public payload: any) {}
}

export class ModifyPayment implements Action {
    readonly type = MODIFY_PAYMENT;
    constructor(public payload:any) {}
}

export class ModifyPaymentSuccess implements Action {
    readonly type = MODIFY_PAYMENT_SUCCESS;
    constructor(public payload:any) {}
}

export class ModifyPaymentFailure implements Action {
    readonly type = MODIFY_PAYMENT_FAILURE;
    constructor(public payload:any) {}
}

export type Actions =
   | GetPaymentHistory
   | GetPaymentHistorySuccess
   | GetPaymentHistoryFailure
   | UpdatePaymentHistory
   | CancelPayment
   | CancelPaymentSuccess
   | CancelPaymentFailure
   | GetDuedateForCA
   | GetDuedateForCASuccess
   | GetDuedateForCAFailure
   | SavePaymentInfoForModifyPayment
   | UpdatePaymentDateForModifyPayment
   | UpdatePaymentInfoForModifyPayment
   | ModifyPayment
   | ModifyPaymentSuccess
   | ModifyPaymentFailure
