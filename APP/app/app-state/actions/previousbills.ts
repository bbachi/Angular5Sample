import { Action } from '@ngrx/store';

export const GET_PREVIOUS_BILLS = '[Billing] Previous Bills API'
export const GET_PREVIOUS_BILLS_SUCCESS = '[Billing] Previous Bills API Success'
export const GET_PREVIOUS_BILLS_FAILURE = '[Billing] Previous Bills API Failure'

export class GetPreviousBills implements Action {
    readonly type = GET_PREVIOUS_BILLS;
    constructor(public payload:any) {}
}

export class GetPreviousBillsSuccess implements Action {
    readonly type = GET_PREVIOUS_BILLS_SUCCESS;
    constructor(public payload:any) {}
}

export class GetPreviousBillsFailure implements Action {
    readonly type = GET_PREVIOUS_BILLS_FAILURE;
    constructor(public payload:any) {}
}


export type Actions =
   | GetPreviousBills
   | GetPreviousBillsSuccess
   | GetPreviousBillsFailure
