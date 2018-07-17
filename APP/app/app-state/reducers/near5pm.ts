import * as startservice from '../actions/startservice';
import { DailyReport } from '../models/vum/vum';

export interface State {
    nearTo5pmFlag: any;
}

const initialState: State = {
    nearTo5pmFlag: undefined
};

export function reducer(state= initialState, action: startservice.Actions): State {

    switch(action.type) {

        case startservice.GET_NEAR_TO_5PM_FLAG: return {...state, nearTo5pmFlag:undefined}
        case startservice.GET_NEAR_TO_5PM_FLAG_SUCCESS: return {...state, nearTo5pmFlag:action.payload}
        case startservice.GET_NEAR_TO_5PM_FLAG_FAILURE: return {...state}

        default: return state
    }
}

export const getNearto5PMflag = (state:State) => state.nearTo5pmFlag;
