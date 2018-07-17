import { Action } from '@ngrx/store';

export const SAVE_RELATIONSHIP_ID = '[Selected Property] Save relationship id'

export const SAVE_SELECTED_PROPERTY_DTLS = '[Selected Property] Save selected property details'

export const DELETE_SELECTED_PROPERTY_DTLS = '[Selected Property] Delete selected property details'

export const GET_SELECTED_PROPERTY_DTLS = '[Selected Property] Get selected property details API'
export const GET_SELECTED_PROPERTY_DTLS_SUCCESS = '[Selected Property] Get selected property details API Success'
export const GET_SELECTED_PROPERTY_DTLS_FAILURE = '[Selected Property] Get selected property details API Failure'

export class SaveRelationshipId implements Action {
    readonly type = SAVE_RELATIONSHIP_ID;
    constructor(public payload:any) {}
}

export class SaveSelectedPropertyDetails implements Action {
    readonly type = SAVE_SELECTED_PROPERTY_DTLS;
    constructor(public payload:any) {}
}

export class DeleteSelectedPropertyDetails implements Action {
    readonly type = DELETE_SELECTED_PROPERTY_DTLS;
    constructor(public payload:any) {}
}

export class GetSelectedPropertyDetails implements Action {
    readonly type = GET_SELECTED_PROPERTY_DTLS;
    constructor(public payload:any) {}
}

export class GetSelectedPropertyDetailsSuccess implements Action {
    readonly type = GET_SELECTED_PROPERTY_DTLS_SUCCESS;
    constructor(public payload:any) {}
}

export class GetSelectedPropertyDetailsFailure implements Action {
    readonly type = GET_SELECTED_PROPERTY_DTLS_FAILURE;
    constructor(public payload:any) {}
}

export type Actions =
   | SaveRelationshipId
   | SaveSelectedPropertyDetails
   | DeleteSelectedPropertyDetails
   | GetSelectedPropertyDetails
   | GetSelectedPropertyDetailsSuccess
   | GetSelectedPropertyDetailsFailure
