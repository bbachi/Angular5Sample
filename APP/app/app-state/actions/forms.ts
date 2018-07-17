import { Action } from '@ngrx/store';

export const GET_FORMS = '[FORMS] Get Forms API'
export const GET_FORMS_SUCCESS = '[FORMS] Get Forms API Success'
export const GET_FORMS_FAILURE = '[FORMS] Get Forms API Failure'

export class GetForms implements Action {
    readonly type = GET_FORMS;
    constructor(public payload:any) {}
}

export class GetFormsSuccess implements Action {
    readonly type = GET_FORMS_SUCCESS;
    constructor(public payload:any) {}
}

export class GetFormsFailure implements Action {
    readonly type = GET_FORMS_FAILURE;
    constructor(public payload:any) {}
}

export type Actions =
   | GetForms
   | GetFormsSuccess
   | GetFormsFailure
