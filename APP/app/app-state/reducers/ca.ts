import * as billing from '../actions/billing';
import * as _ from 'lodash'

export interface State {
    isLoading: boolean;
    isLoadingSuccess: boolean;
    contractAccounts: any;
}

const initialState: State = {
    isLoading: false,
    isLoadingSuccess: false,
    contractAccounts: undefined,
};

export function reducer(state= initialState, action: billing.Actions): State {

    let payment;

    switch(action.type) {

        case billing.GET_CONTRACT_ACCOUNT_LIST: return {...state,isLoading: true,isLoadingSuccess: false,contractAccounts: undefined};
        case billing.GET_CONTRACT_ACCOUNT_LIST_SUCCESS: return {...state,isLoading: false,isLoadingSuccess: true,contractAccounts: action.payload};
        case billing.GET_CONTRACT_ACCOUNT_LIST_FAILURE: return {...state,isLoading: false,isLoadingSuccess: false,contractAccounts: action.payload};

        default: return state
    }
}

export const getContractAccounts = (state: State) => state.contractAccounts;
export const getIndContractAccountList = (state: State) => (undefined != state.contractAccounts)?state.contractAccounts.indContractAccountList:[];
export const getCollContractAccountList = (state: State) => (undefined != state.contractAccounts)?state.contractAccounts.collContractAccountList:[];
