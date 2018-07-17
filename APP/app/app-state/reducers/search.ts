import * as searchTypes from '../actions/search';
import * as storage from '../state/storage';
import * as keys from '../state/storagekeys'

export interface State {
    isLoading: boolean;
    isLoadingSuccess: boolean;
    hierarchydtls: any;
    bpDtlsList: any;
}

const initialState: State = {
    isLoading: false,
    isLoadingSuccess: false,
    hierarchydtls: storage.getItem(keys.SEARCH_HIERARCHY_DTLS),
    bpDtlsList: storage.getItem(keys.SEARCH_BP_DTLS_LIST)
};

export function reducer(state= initialState, action: searchTypes.Actions): State {

    switch(action.type) {

        case searchTypes.SEARCH_BY_BP_NUMBER: return {...state,isLoading: true,isLoadingSuccess: false,hierarchydtls:undefined};
        case searchTypes.SEARCH_BY_BP_NUMBER_SUCCESS: return {...state,isLoading: false,isLoadingSuccess: true,hierarchydtls: action.payload.dtls, bpDtlsList:action.payload.bpDtlsList};
        case searchTypes.SEARCH_BY_BP_NUMBER_FAILURE: return {...state,isLoading: false,isLoadingSuccess: true,hierarchydtls: action.payload};

        case searchTypes.SEARCH_BY_TAX_ID: return {...state,isLoading: true,isLoadingSuccess: false,hierarchydtls:undefined};
        case searchTypes.SEARCH_BY_TAX_ID_SUCCESS: return {...state,isLoading: false,isLoadingSuccess: true,hierarchydtls: action.payload.dtls, bpDtlsList:action.payload.bpDtlsList};
        case searchTypes.SEARCH_BY_TAX_ID_FAILURE: return {...state,isLoading: false,isLoadingSuccess: true,hierarchydtls: action.payload};

        default: return state
    }
}

export const getHierarchyDetails = (state: State) => {
    return {isLoading:state.isLoading, isLoadingSuccess:state.isLoadingSuccess, hierarchydtls:state.hierarchydtls}
}

export const getStoredHierarchyDetails = (state: State) => state.hierarchydtls

export const getBPDetailsList = (state: State) => state.bpDtlsList
