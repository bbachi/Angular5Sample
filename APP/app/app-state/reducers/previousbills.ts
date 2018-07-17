import * as previousBills from '../actions/previousbills';
import { PreviousBill } from '../../_models';

export interface State {
    isLoading: boolean;
    isLoadingSuccess: boolean;
    previousBills: PreviousBill[];
}

const initialState: State = {
    isLoading: false,
    isLoadingSuccess: false,
    previousBills: undefined
};

export function reducer(state= initialState, action: previousBills.Actions): State {

    switch(action.type) {

        case previousBills.GET_PREVIOUS_BILLS: return {...state,isLoading: true,isLoadingSuccess: false};
        case previousBills.GET_PREVIOUS_BILLS_SUCCESS: return {...state,isLoading: false,isLoadingSuccess: true,previousBills: action.payload};
        case previousBills.GET_PREVIOUS_BILLS_FAILURE: return {...state,isLoading: false,isLoadingSuccess: true,previousBills: action.payload};

        default: return state
    }
}

export const getPreviousBills = (state: State) => {
      return {isLoading:state.isLoading,isLoadingSuccess:state.isLoadingSuccess,previousBills:state.previousBills}
}
