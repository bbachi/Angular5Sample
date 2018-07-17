import * as transactions from '../actions/transactions';
import { Transaction } from '../models/transactions/transaction';

export interface State {
    isLoading: boolean;
    isLoadingSuccess: boolean;
    transactions: Transaction[];
    detailTxn: any;
}

const initialState: State = {
    isLoading: false,
    isLoadingSuccess: false,
    transactions: [],
    detailTxn: {}
};

export function reducer(state= initialState, action: transactions.Actions): State {

    switch(action.type) {

        case transactions.LIST_TXNS: return {...state,isLoading: true,isLoadingSuccess: false,transactions: undefined};
        case transactions.LIST_TXNS_SUCCESS: return {...state,isLoading: false,isLoadingSuccess: true,transactions: action.payload};
        case transactions.LIST_TXNS_FAILURE: return {...state,isLoading: false,isLoadingSuccess: true,transactions: action.payload};

        case transactions.GET_TXN_DETAILS: return {...state,isLoading: true,isLoadingSuccess: false,detailTxn: {},};
        case transactions.GET_TXN_DETAILS_SUCCESS: return {...state,isLoading: false,isLoadingSuccess: true,detailTxn: action.payload};
        case transactions.GET_TXN_DETAILS_FAILURE: return {...state,isLoading: false,isLoadingSuccess: true,detailTxn: action.payload};

        default: return state
    }
}

export const getTransactions = (state: State) => {
    return {isLoading:state.isLoading, isLoadingSuccess:state.isLoadingSuccess, transactions:state.transactions}
};
export const getDetailTransaction = (state: State) => {
    return {isLoading:state.isLoading, isLoadingSuccess:state.isLoadingSuccess, data:state.detailTxn}
};
