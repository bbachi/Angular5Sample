import * as billing from '../actions/billing';
import * as _ from 'lodash'

export interface State {
    isLoading: boolean;
    isLoadingSuccess: boolean;
    dashboardData: any;
}

const initialState: State = {
    isLoading: false,
    isLoadingSuccess: false,
    dashboardData: undefined,
};

export function reducer(state= initialState, action: billing.Actions): State {

    let payment;

    switch(action.type) {

        case billing.GET_DASHBOARD_PAYMENT_DETAILS: return {...state,isLoading: true,isLoadingSuccess: false, dashboardData: undefined};
        case billing.GET_DASHBOARD_PAYMENT_DETAILS_SUCCESS: return {...state, isLoading: false, isLoadingSuccess: true, dashboardData: action.payload};
        case billing.GET_DASHBOARD_PAYMENT_DETAILS_FAILURE: return {...state, isLoading: false, isLoadingSuccess: true, dashboardData: action.payload};

        default: return state
    }
}

export const getDashboardPaymentDetails = (state: State) => {
    return {
        data: state.dashboardData,
        isLoading: state.isLoading,
        isLoadingSuccess: state.isLoadingSuccess
    }
}
