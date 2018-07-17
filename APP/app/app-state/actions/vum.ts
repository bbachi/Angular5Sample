import { Action } from '@ngrx/store';

export const GET_VACANT_DAILY_REPORT = '[VUM] Vacant Daily Report API'
export const GET_VACANT_DAILY_REPORT_SUCCESS = '[VUM] Vacant Daily Report API Success'
export const GET_VACANT_DAILY_REPORT_FAILURE = '[VUM] Vacant Daily Report API Failure'

export const UPDATE_ESIID_ATTRIBUTE = '[VUM] Update ESIID Attribute API'
export const UPDATE_ESIID_ATTRIBUTE_SUCCESS = '[VUM] Update ESIID Attribute API Success'
export const UPDATE_ESIID_ATTRIBUTE_FAILURE = '[VUM] Update ESIID Attribute API Failure'

export const UPDATE_EMAIL_PREFERENCE = '[VUM] Update Email Preference API'
export const UPDATE_EMAIL_PREFERENCE_SUCCESS = '[VUM] Update Email Preference API Success'
export const UPDATE_EMAIL_PREFERENCE_FAILURE = '[VUM] Update Email Preference API Failure'

export class GetVacantDailyReport implements Action {
    readonly type = GET_VACANT_DAILY_REPORT;
    constructor(public payload:any) {}
}

export class GetVacantDailyReportSuccess implements Action {
    readonly type = GET_VACANT_DAILY_REPORT_SUCCESS;
    constructor(public payload:any) {}
}

export class GetVacantDailyReportFailure implements Action {
    readonly type = GET_VACANT_DAILY_REPORT_FAILURE;
    constructor(public payload:any) {}
}

export class UpdateESIIDAttribute implements Action {
    readonly type = UPDATE_ESIID_ATTRIBUTE;
    constructor(public payload:any) {}
}

export class UpdateESIIDAttributeSuccess implements Action {
    readonly type = UPDATE_ESIID_ATTRIBUTE_SUCCESS;
    constructor(public payload:any) {}
}

export class UpdateESIIDAttributeFailure implements Action {
    readonly type = UPDATE_ESIID_ATTRIBUTE_FAILURE;
    constructor(public payload:any) {}
}

export class UpdateEmailPreference implements Action {
    readonly type = UPDATE_EMAIL_PREFERENCE;
    constructor(public payload:any) {}
}

export class UpdateEmailPreferenceSuccess implements Action {
    readonly type = UPDATE_EMAIL_PREFERENCE_SUCCESS;
    constructor(public payload:any) {}
}

export class UpdateEmailPreferenceFailure implements Action {
    readonly type = UPDATE_EMAIL_PREFERENCE_FAILURE;
    constructor(public payload:any) {}
}


export type Actions =
   | GetVacantDailyReport
   | GetVacantDailyReportSuccess
   | GetVacantDailyReportFailure
   | UpdateESIIDAttribute
   | UpdateESIIDAttributeSuccess
   | UpdateESIIDAttributeFailure
   | UpdateEmailPreference
   | UpdateEmailPreferenceSuccess
   | UpdateEmailPreferenceFailure
