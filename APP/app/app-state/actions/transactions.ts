import { Action } from '@ngrx/store';

export const LIST_TXNS = '[Transactions] list'
export const LIST_TXNS_SUCCESS = '[Transactions] list Success'
export const LIST_TXNS_FAILURE = '[Transactions] list Failure'
export const GET_TXN_DETAILS = '[Transactions] detail'
export const GET_TXN_DETAILS_SUCCESS = '[Transactions] detail Success'
export const GET_TXN_DETAILS_FAILURE = '[Transactions] detail Failure'

export class ListTransactions implements Action {
    readonly type = LIST_TXNS;
    constructor(public payload:any) {}
}

export class ListTransactionsSuccess implements Action {
    readonly type = LIST_TXNS_SUCCESS;
    constructor(public payload:any) {}
}

export class ListTransactionsFilure implements Action {
    readonly type = LIST_TXNS_FAILURE;
    constructor(public payload:any) {}
}

export class GetTxnDetailsSuccess implements Action {
    readonly type = GET_TXN_DETAILS_SUCCESS;
    constructor(public payload:any) {}
}

export class GetTxnDetailsFilure implements Action {
    readonly type = GET_TXN_DETAILS_FAILURE;
    constructor(public payload:any) {}
}

export class GetTxnDetails implements Action {
  readonly type = GET_TXN_DETAILS;
  constructor(public payload:any) {}
}

export type Actions =
   | ListTransactions
   | ListTransactionsSuccess
   | ListTransactionsFilure
   | GetTxnDetails
   | GetTxnDetailsSuccess
   | GetTxnDetailsFilure;
