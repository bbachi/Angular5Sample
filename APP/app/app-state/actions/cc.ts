import { Action } from '@ngrx/store';

export const EMAIL_US = '[Customer Care] Email Us API'
export const EMAIL_US_SUCCESS = '[Customer Care] Email Us API Success'
export const EMAIL_US_FAILURE = '[Customer Care] Email Us API Failure'
export const GET_FAQS = '[Customer Care] Get Faqs API'
export const GET_FAQS_SUCCESS = '[Customer Care] Get Faqs API Success'
export const GET_FAQS_FAILURE = '[Customer Care] Get Faqs API Failure'

export class EmailUs implements Action {
    readonly type = EMAIL_US;
    constructor(public payload:any) {}
}

export class EmailUsSuccess implements Action {
    readonly type = EMAIL_US_SUCCESS;
    constructor(public payload:any) {}
}

export class EmailUsFailure implements Action {
    readonly type = EMAIL_US_FAILURE;
    constructor(public payload:any) {}
}

export class GetFAQs implements Action {
    readonly type = GET_FAQS;
    constructor(public payload:any) {}
}

export class GetFAQsSuccess implements Action {
    readonly type = GET_FAQS_SUCCESS;
    constructor(public payload:any) {}
}

export class GetFAQsFailure implements Action {
    readonly type = GET_FAQS_FAILURE;
    constructor(public payload:any) {}
}

export type Actions =
   | EmailUs
   | EmailUsSuccess
   | EmailUsFailure
   | GetFAQs
   | GetFAQsSuccess
   | GetFAQsFailure
