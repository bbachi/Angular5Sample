import * as vum from '../actions/vum';
import { DailyReport } from '../models/vum/vum';

export interface State {
    isLoading: boolean;
    isLoadingSuccess: boolean;
    dailyReportList: DailyReport[];
}

const initialState: State = {
    isLoading: false,
    isLoadingSuccess: false,
    dailyReportList: undefined,
};

export function reducer(state= initialState, action: vum.Actions): State {

    switch(action.type) {

        case vum.GET_VACANT_DAILY_REPORT: return {...state,isLoading: true,isLoadingSuccess: false,dailyReportList:undefined};
        case vum.GET_VACANT_DAILY_REPORT_SUCCESS: return {...state,isLoading: false,isLoadingSuccess: true,dailyReportList: action.payload};
        case vum.GET_VACANT_DAILY_REPORT_FAILURE: return {...state,isLoading: false,isLoadingSuccess: true,dailyReportList: action.payload};

        default: return state
    }
}

export const getDailyReportList = (state: State) => state.dailyReportList;
