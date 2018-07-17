import * as startservice from '../actions/startservice';

export interface State {
    planDetails: any;
}

const initialState: State = {
    planDetails: undefined,
};

export function reducer(state= initialState, action: startservice.Actions): State {

    switch(action.type) {

        case startservice.SAVE_PLAN_DETAILS: return {...state, planDetails: action.payload};

        default: return state
    }
}

export const getPlanDetails = (state: State) => state.planDetails;
