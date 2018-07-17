import * as billingTypes from '../actions/billing';
import * as _ from 'lodash'

export interface State {
    isLoading: boolean;
    isLoadingSuccess: boolean;
    paymentMethods: any;
    addStatus:any;
    deleteStatus:any;
    deleteBankDtls:any;
    size: number;
}

const initialState: State = {
    isLoading: false,
    isLoadingSuccess: false,
    paymentMethods: undefined,
    addStatus:undefined,
    deleteStatus:undefined,
    deleteBankDtls:undefined,
    size: 0
};

export function reducer(state= initialState, action: billingTypes.Actions): State {

    switch(action.type) {

        case billingTypes.GET_PAYMENT_METHODS: return {...state,isLoading: true,isLoadingSuccess: false,paymentMethods:undefined};
        case billingTypes.GET_PAYMENT_METHODS_SUCCESS: return {...state,isLoading: false,isLoadingSuccess: true,size:action.payload.size,paymentMethods: action.payload.paymentmethods};
        case billingTypes.GET_PAYMENT_METHODS_FAILURE: return {...state,isLoading: false,isLoadingSuccess: true,paymentMethods: action.payload};

        case billingTypes.ADD_PAYMENT_METHOD: return {...state,isLoading: true,isLoadingSuccess: false,addStatus:undefined};
        case billingTypes.ADD_PAYMENT_METHOD_SUCCESS: return {...state,isLoading: true,isLoadingSuccess: false,addStatus: action.payload};
        case billingTypes.ADD_PAYMENT_METHOD_FAILURE: return {...state,isLoading: true,isLoadingSuccess: false,addStatus: action.payload};

        case billingTypes.DELETE_PAYMENT_METHOD: return {...state,deleteBankDtls:action.payload,deleteStatus:undefined};
        case billingTypes.DELETE_PAYMENT_METHOD_SUCCESS:
                let paymentMethods = _.cloneDeep(state.paymentMethods);
                if(action.payload.deleteStatus){
                    paymentMethods = paymentMethods.filter(paymentMethod => paymentMethod.nickname != state.deleteBankDtls.nickname)
                }
                return {...state,isLoading: true,isLoadingSuccess: false,paymentMethods,deleteStatus: action.payload};
        case billingTypes.DELETE_PAYMENT_METHOD_FAILURE: return {...state,isLoading: true,isLoadingSuccess: false,deleteStatus: action.payload};

        default: return state
    }
}

export const getPaymentMethods = (state: State) => {
    return {isLoading: state.isLoading, isLoadingSuccess: state.isLoadingSuccess, size:state.size,paymentMethods: state.paymentMethods}
};

export const isPaymentMethodsExist = (state:State) => state.paymentMethods.length > 0

export const addPaymentMethod = (state: State) => {
    return {isLoading: state.isLoading, isLoadingSuccess: state.isLoadingSuccess, status: state.addStatus}
};

export const deletePaymentMethod = (state: State) => {
    return {isLoading: state.isLoading, isLoadingSuccess: state.isLoadingSuccess, status: state.deleteStatus}
};
