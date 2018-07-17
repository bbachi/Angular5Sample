import * as ccTypes from '../actions/cc';

export interface State {
    isLoading: boolean;
    isLoadingSuccess: boolean;
    confirmation: any;
}

const initialState: State = {
    isLoading: false,
    isLoadingSuccess: false,
    confirmation: undefined,
};

export function reducer(state= initialState, action: ccTypes.Actions): State {

    switch(action.type) {

        case ccTypes.EMAIL_US: return {...state,isLoading: true,isLoadingSuccess: false,confirmation:undefined};
        case ccTypes.EMAIL_US_SUCCESS: return {...state,isLoading: true,isLoadingSuccess: false,confirmation: action.payload};
        case ccTypes.EMAIL_US_FAILURE: return {...state,isLoading: true,isLoadingSuccess: false,confirmation: action.payload};

        default: return state
    }
}

export const getEmailUsConfirmation = (state: State) => state.confirmation;
