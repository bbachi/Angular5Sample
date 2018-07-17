import * as paymentHistory from '../actions/paymenthistory';

export interface State {
    isLoading: boolean;
    isLoadingSuccess: boolean;
    status: any;
}

const initialState: State = {
    isLoading: false,
    isLoadingSuccess: false,
    status: undefined
};

export function reducer(state= initialState, action: paymentHistory.Actions): State {

    switch(action.type) {

        case paymentHistory.CANCEL_PAYMENT: return {...state,isLoading: true,isLoadingSuccess: false,status: undefined};
        case paymentHistory.CANCEL_PAYMENT_SUCCESS: return {...state,isLoading: false,isLoadingSuccess: true,status: action.payload};
        case paymentHistory.CANCEL_PAYMENT_FAILURE: return {...state,isLoading: false,isLoadingSuccess: true,status: action.payload};

        default: return state
    }
}

export const getCancelpaymentStatus = (state: State) => {
    return {isLoading:state.isLoading, isLoadingSuccess: state.isLoadingSuccess, status: state.status}
};
