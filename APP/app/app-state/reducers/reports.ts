import * as reportsTypes from '../actions/reports';

export interface State {
    isLoading: boolean;
    isLoadingSuccess: boolean;
    vacancyReportList: any;
    rollReportList: any;
}

const initialState: State = {
    isLoading: false,
    isLoadingSuccess: false,
    vacancyReportList: undefined,
    rollReportList: undefined
};

export function reducer(state= initialState, action: reportsTypes.Actions): State {

    switch(action.type) {

        case reportsTypes.GET_VACANT_REPORT: return {...state,isLoading: true,isLoadingSuccess: false,vacancyReportList:undefined};
        case reportsTypes.GET_VACANT_REPORT_SUCCESS: return {...state,isLoading: false,isLoadingSuccess: true,vacancyReportList: action.payload};
        case reportsTypes.GET_VACANT_REPORT_FAILURE: return {...state,isLoading: false,isLoadingSuccess: true,vacancyReportList: action.payload};

        case reportsTypes.GET_ROLL_REPORT: return {...state,isLoading: true,isLoadingSuccess: false,rollReportList:undefined};
        case reportsTypes.GET_ROLL_REPORT_SUCCESS: return {...state,isLoading: false,isLoadingSuccess: true,rollReportList: action.payload};
        case reportsTypes.GET_ROLL_REPORT_FAILURE: return {...state,isLoading: false,isLoadingSuccess: true,rollReportList: action.payload};

        default: return state
    }
}

export const getVacancyReport = (state: State) => {
    return {isLoading:state.isLoading, isLoadingSuccess:state.isLoadingSuccess, vacancyReportList:state.vacancyReportList}
}

export const getStoredVacancyReport = (state: State) => state.vacancyReportList

export const getRollReport = (state: State) => {
    return {isLoading:state.isLoading, isLoadingSuccess:state.isLoadingSuccess, rollReportList:state.rollReportList}
}
