import { Action } from '@ngrx/store';

export const SAVE_LOGGED_IN_USER = '[Logged In User] Save User Info'
export const SAVE_LOGGED_IN_USER_HIERARCHY_DTLS = '[Logged In User] Save User Hierarchy Dtls'
export const UPDATE_LOGGED_IN_USER = '[Logged In User] Update User Info'


export class SaveLoggedInUser implements Action {
    readonly type = SAVE_LOGGED_IN_USER;
    constructor(public payload:any) {}
}

export class UpdateLoggedInUser implements Action {
    readonly type = UPDATE_LOGGED_IN_USER;
    constructor(public payload:any) {}
}

export class SaveLoggedInUserHierarchyDetails implements Action {
    readonly type = SAVE_LOGGED_IN_USER_HIERARCHY_DTLS;
    constructor(public payload:any) {}
}

export type Actions =
   | SaveLoggedInUser
   | UpdateLoggedInUser
   | SaveLoggedInUserHierarchyDetails
