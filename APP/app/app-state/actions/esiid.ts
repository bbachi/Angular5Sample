import { Action } from '@ngrx/store';

export const GET_ESIID_LIST = '[Customer Details] Get ESIID List API'
export const GET_ESIID_LIST_SUCCESS = '[Customer Details] Get ESIID List API Success'
export const GET_ESIID_LIST_FAILURE = '[Customer Details] Get ESIID List API Failure'
export const DELETE_ESIID_LIST = '[Customer Details] Delete ESIID details'


export class GetESIIDList implements Action {
    readonly type = GET_ESIID_LIST;
    constructor(public payload:any) {}
}

export class GetESIIDListSuccess implements Action {
    readonly type = GET_ESIID_LIST_SUCCESS;
    constructor(public payload:any) {}
}

export class GetESIIDListFailure implements Action {
    readonly type = GET_ESIID_LIST_FAILURE;
    constructor(public payload:any) {}
}

export class DeleteESIIDDetails implements Action {
    readonly type = DELETE_ESIID_LIST;
    constructor(public payload:any) {}
}

export type Actions =
   | GetESIIDList
   | GetESIIDListSuccess
   | GetESIIDListFailure
   | DeleteESIIDDetails
