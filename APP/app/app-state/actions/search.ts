import { Action } from '@ngrx/store';

export const SEARCH_BY_BP_NUMBER = '[Search] Search By BPnumber API'
export const SEARCH_BY_BP_NUMBER_SUCCESS = '[Search] Search By BPnumber API Success'
export const SEARCH_BY_BP_NUMBER_FAILURE = '[Search] Search By BPnumber API Failure'

export const SEARCH_BY_TAX_ID = '[Search] Search By Tax ID API'
export const SEARCH_BY_TAX_ID_SUCCESS = '[Search] Search By Tax ID API Success'
export const SEARCH_BY_TAX_ID_FAILURE = '[Search] Search By Tax ID API Failure'

export class SearchByBPNumber implements Action {
    readonly type = SEARCH_BY_BP_NUMBER;
    constructor(public payload:any) {}
}

export class SearchByBPNumberSuccess implements Action {
    readonly type = SEARCH_BY_BP_NUMBER_SUCCESS;
    constructor(public payload:any) {}
}

export class SearchByBPNumberFailure implements Action {
    readonly type = SEARCH_BY_BP_NUMBER_FAILURE;
    constructor(public payload:any) {}
}

export class SearchByTaxId implements Action {
    readonly type = SEARCH_BY_TAX_ID;
    constructor(public payload:any) {}
}

export class SearchByTaxIdSuccess implements Action {
    readonly type = SEARCH_BY_TAX_ID_SUCCESS;
    constructor(public payload:any) {}
}

export class SearchByTaxIdFailure implements Action {
    readonly type = SEARCH_BY_TAX_ID_FAILURE;
    constructor(public payload:any) {}
}


export type Actions =
   | SearchByBPNumber
   | SearchByBPNumberSuccess
   | SearchByBPNumberFailure
   | SearchByTaxId
   | SearchByTaxIdSuccess
   | SearchByTaxIdFailure
