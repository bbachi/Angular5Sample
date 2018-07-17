import { Action } from '@ngrx/store';

export const GET_VACANT_REPORT = '[REPORTS] Vacant Report API'
export const GET_VACANT_REPORT_SUCCESS = '[REPORTS] Vacant Report API Success'
export const GET_VACANT_REPORT_FAILURE = '[REPORTS] Vacant Report API Failure'
export const GET_ROLL_REPORT = '[REPORTS] Roll Report API'
export const GET_ROLL_REPORT_SUCCESS = '[REPORTS] Roll Report API Success'
export const GET_ROLL_REPORT_FAILURE = '[REPORTS] Roll Report API Failure'

export class GetVacantReport implements Action {
    readonly type = GET_VACANT_REPORT;
    constructor(public payload:any) {}
}

export class GetVacantReportSuccess implements Action {
    readonly type = GET_VACANT_REPORT_SUCCESS;
    constructor(public payload:any) {}
}

export class GetVacantReportFailure implements Action {
    readonly type = GET_VACANT_REPORT_FAILURE;
    constructor(public payload:any) {}
}

export class GetRollReport implements Action {
    readonly type = GET_ROLL_REPORT;
    constructor(public payload:any) {}
}

export class GetRollReportSuccess implements Action {
    readonly type = GET_ROLL_REPORT_SUCCESS;
    constructor(public payload:any) {}
}

export class GetRollReportFailure implements Action {
    readonly type = GET_ROLL_REPORT_FAILURE;
    constructor(public payload:any) {}
}


export type Actions =
   | GetVacantReport
   | GetVacantReportSuccess
   | GetVacantReportFailure
   | GetRollReport
   | GetRollReportSuccess
   | GetRollReportFailure
