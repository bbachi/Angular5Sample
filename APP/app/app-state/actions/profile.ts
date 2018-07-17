import { Action } from '@ngrx/store';

export const ADD_USER_SAVE_INFO = '[Profile] Add User info'
export const ADD_ADMIN_CUSTOMER_LIST = '[Profile] Add Admin Customer List'
export const UPDATE_ADMIN_CUSTOMER_LIST = '[Profile] Update Admin Customer List'

export const VALIDATE_USER_NAME = '[Profile] Validate username API'
export const VALIDATE_USER_NAME_SUCCESS = '[Profile] Validate username API Success'
export const VALIDATE_USER_NAME_FAILURE  = '[Profile] Validate username API Failure'

export const SAVE_USER = '[Profile] Save user API'
export const SAVE_USER_SUCCESS = '[Profile] Save user API Success'
export const SAVE_USER_FAILURE = '[Profile] Save user API Failure'

export const LIST_ADMIN_ASSOCIATES = '[Profile] List Admin Associates API'
export const LIST_ADMIN_ASSOCIATES_SUCCESS = '[Profile] List Admin Associates API Success'
export const LIST_ADMIN_ASSOCIATES_FAILURE = '[Profile] List Admin Associates API Failure'

export const GET_USER_PROFILE_DETAILS = '[Profile] Get User Profile Details API'
export const GET_USER_PROFILE_DETAILS_SUCCESS = '[Profile] Get User Profile Details API Success'
export const GET_USER_PROFILE_DETAILS_FAILURE = '[Profile] Get User Profile Details API Failure'

export const UPDATE_USER = '[Profile] Update User API'
export const UPDATE_USER_SUCCESS = '[Profile] Update User API  Success'
export const UPDATE_USER_FAILURE = '[Profile] Update User API  Failure'

export const SEARCH_USERS_FOR_UPDATE = '[Profile] Search users for update API'
export const SEARCH_USERS_FOR_UPDATE_SUCCESS = '[Profile] Search users for update API  Success'
export const SEARCH_USERS_FOR_UPDATE_FAILURE = '[Profile] Search users for update API  Failure'

export const SAVE_USER_NAME_FOR_PROFILE_DETAILS = '[Profile] Save username for profile details'

export const REMOVE_USER = '[Profile] Remove User API'
export const REMOVE_USER_SUCCESS = '[Profile] Remove User API Success'
export const REMOVE_USER_FAILURE = '[Profile] Remove User API Failure'


export class SaveUserInfo implements Action {
    readonly type = ADD_USER_SAVE_INFO;
    constructor(public payload:any) {}
}

export class AddAdminCustomerList implements Action {
    readonly type = ADD_ADMIN_CUSTOMER_LIST;
    constructor(public payload:any) {}
}

export class UpdateAdminCustomerList implements Action {
    readonly type = UPDATE_ADMIN_CUSTOMER_LIST;
    constructor(public payload:any) {}
}

export class ValidateUserName implements Action {
    readonly type = VALIDATE_USER_NAME;
    constructor(public payload:any) {}
}

export class ValidateUserNameSuccess implements Action {
    readonly type = VALIDATE_USER_NAME_SUCCESS;
    constructor(public payload:any) {}
}

export class ValidateUserNameFailure implements Action {
    readonly type = VALIDATE_USER_NAME_FAILURE;
    constructor(public payload:any) {}
}

export class SaveUser implements Action {
    readonly type = SAVE_USER;
    constructor(public payload:any) {}
}

export class SaveUserSuccess implements Action {
    readonly type = SAVE_USER_SUCCESS;
    constructor(public payload:any) {}
}

export class SaveUserFailure implements Action {
    readonly type = SAVE_USER_FAILURE;
    constructor(public payload:any) {}
}

export class ListAssociates implements Action {
    readonly type = LIST_ADMIN_ASSOCIATES;
    constructor(public payload:any) {}
}

export class ListAssociatesSuccess implements Action {
    readonly type = LIST_ADMIN_ASSOCIATES_SUCCESS;
    constructor(public payload:any) {}
}

export class ListAssociatesFailure implements Action {
    readonly type = LIST_ADMIN_ASSOCIATES_FAILURE;
    constructor(public payload:any) {}
}

export class GetUserProfileDetails implements Action {
    readonly type = GET_USER_PROFILE_DETAILS;
    constructor(public payload:any) {}
}

export class GetUserProfileDetailsSuccess implements Action {
    readonly type = GET_USER_PROFILE_DETAILS_SUCCESS;
    constructor(public payload:any) {}
}

export class GetUserProfileDetailsFailure implements Action {
    readonly type = GET_USER_PROFILE_DETAILS_FAILURE;
    constructor(public payload:any) {}
}

export class UpdateUser implements Action {
    readonly type = UPDATE_USER;
    constructor(public payload:any) {}
}

export class UpdateUserSuccess implements Action {
    readonly type = UPDATE_USER_SUCCESS;
    constructor(public payload:any) {}
}

export class UpdateUserFailure implements Action {
    readonly type = UPDATE_USER_FAILURE;
    constructor(public payload:any) {}
}

export class SearchUsersForUpdate implements Action {
    readonly type = SEARCH_USERS_FOR_UPDATE;
    constructor(public payload:any) {}
}

export class SearchUsersForUpdateSuccess implements Action {
    readonly type = SEARCH_USERS_FOR_UPDATE_SUCCESS;
    constructor(public payload:any) {}
}

export class SearchUsersForUpdateFailure implements Action {
    readonly type = SEARCH_USERS_FOR_UPDATE_FAILURE;
    constructor(public payload:any) {}
}

export class SaveUserNameForProfileDetails implements Action {
    readonly type = SAVE_USER_NAME_FOR_PROFILE_DETAILS;
    constructor(public payload:any) {}
}

export class RemoveUser implements Action {
    readonly type = REMOVE_USER;
    constructor(public payload:any) {}
}

export class RemoveUserSuccess implements Action {
    readonly type = REMOVE_USER_SUCCESS;
    constructor(public payload:any) {}
}

export class RemoveUserFailure implements Action {
    readonly type = REMOVE_USER_FAILURE;
    constructor(public payload:any) {}
}

export type Actions =
   | SaveUserInfo
   | AddAdminCustomerList
   | UpdateAdminCustomerList
   | ValidateUserName
   | ValidateUserNameSuccess
   | ValidateUserNameFailure
   | SaveUser
   | SaveUserSuccess
   | SaveUserFailure
   | ListAssociates
   | ListAssociatesSuccess
   | ListAssociatesFailure
   | GetUserProfileDetails
   | GetUserProfileDetailsSuccess
   | GetUserProfileDetailsFailure
   | UpdateUser
   | UpdateUserSuccess
   | UpdateUserFailure
   | SearchUsersForUpdate
   | SearchUsersForUpdateSuccess
   | SearchUsersForUpdateFailure
   | SaveUserNameForProfileDetails
   | RemoveUser
   | RemoveUserSuccess
   | RemoveUserFailure
