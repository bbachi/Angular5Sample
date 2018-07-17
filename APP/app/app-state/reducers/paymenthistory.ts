import * as paymentHistory from '../actions/paymenthistory';
import { PaymentHistory } from '../models';
import * as _ from 'lodash'

export interface State {
    isLoading: boolean;
    isLoadingSuccess: boolean;
    paymentHistoryList: any;
}

const initialState: State = {
    isLoading: false,
    isLoadingSuccess: false,
    paymentHistoryList: []
};

export function reducer(state= initialState, action: paymentHistory.Actions): State {

    switch(action.type) {

        case paymentHistory.GET_PAYMENT_HISTORY: return {...state,isLoading: true,isLoadingSuccess: false,paymentHistoryList: []};
        case paymentHistory.GET_PAYMENT_HISTORY_SUCCESS: return {...state,isLoading: false,isLoadingSuccess: true,paymentHistoryList: action.payload};
        case paymentHistory.GET_PAYMENT_HISTORY_FAILURE: return {...state,isLoading: false,isLoadingSuccess: true,paymentHistoryList: action.payload};

        case paymentHistory.UPDATE_PAYMENT_HISTORY:
            let cancelData = action.payload;
            let paymentHistoryList = _.cloneDeep(state.paymentHistoryList);
            paymentHistoryList.forEach(history => {
                if(history.paymentID == cancelData.paymentId){
                    history.status = "CANCELLED";
                    history.scheduledCancelDate = cancelData.cancelDate;
                }
            })
            return {...state,paymentHistoryList}

        default: return state
    }
}

export const getPaymentHistoryList = (state: State) => {
     return {isLoading:state.isLoading, isLoadingSuccess:state.isLoadingSuccess,data:state.paymentHistoryList};
}
