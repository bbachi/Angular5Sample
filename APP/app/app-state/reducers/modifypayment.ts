import * as paymentHistory from '../actions/paymenthistory';
import * as _ from 'lodash'

export interface State {
    isLoading: boolean;
    isLoadingSuccess: boolean;
    paymentInfo: any;
    modifyStatus: any;
    dueDateForCA: any;
}

const initialState: State = {
    isLoading: false,
    isLoadingSuccess: false,
    paymentInfo: undefined,
    modifyStatus: undefined,
    dueDateForCA: undefined,
};

export function reducer(state= initialState, action: paymentHistory.Actions): State {

    switch(action.type) {

        case paymentHistory.SAVE_PAYMENT_INFO_FOR_MODIFY_PAYMENT: return {...state, paymentInfo:action.payload};

        case paymentHistory.GET_DUEDATE_FOR_CA: return {...state,isLoading: true,isLoadingSuccess: false, dueDateForCA:undefined};
        case paymentHistory.GET_DUEDATE_FOR_CA_SUCCESS: return {...state,isLoading: false,isLoadingSuccess: true,dueDateForCA: action.payload};
        case paymentHistory.GET_DUEDATE_FOR_CA_FAILURE: return {...state,isLoading: false,isLoadingSuccess: true,dueDateForCA: action.payload};

        case paymentHistory.UPDATE_PAYMENT_DATE_FOR_MODIFY_PAYMENT:
            let paymentInfo = _.cloneDeep(state.paymentInfo);
            paymentInfo.modifiedDate = action.payload;
            return {...state, paymentInfo};

        case paymentHistory.UPDATE_PAYMENT_INFO_FOR_MODIFY_PAYMENT: return {...state, paymentInfo: action.payload }

        case paymentHistory.MODIFY_PAYMENT: return {...state,isLoading: true,isLoadingSuccess: false};
        case paymentHistory.MODIFY_PAYMENT_SUCCESS: return {...state,isLoading: false,isLoadingSuccess: true,modifyStatus: action.payload};
        case paymentHistory.MODIFY_PAYMENT_FAILURE: return {...state,isLoading: false,isLoadingSuccess: true,modifyStatus: action.payload};

        default: return state
    }
}

export const getModifyPaymentInfo = (state: State) => state.paymentInfo;

export const getModifyPaymentStatus = (state: State) => {
    return {isLoading: state.isLoading, isLoadingSuccess: state.isLoadingSuccess, status: state.modifyStatus }
}

export const getDueDateForCA = (state: State) => {
    let dueDate = undefined != state.dueDateForCA?state.dueDateForCA.dueDate:"";
    return  {isLoading: state.isLoading, isLoadingSuccess: state.isLoadingSuccess, dueDateForCA: dueDate}
}
