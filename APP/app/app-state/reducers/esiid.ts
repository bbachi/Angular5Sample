import * as esiid from '../actions/esiid';

export interface State {
    esiidList: any;
    isLoading: boolean;
    isLoadingSuccess: boolean;
}

const initialState: State = {
    esiidList: undefined,
    isLoading: false,
    isLoadingSuccess: false,
};

export function reducer(state= initialState, action: esiid.Actions): State {

    switch(action.type) {

        case esiid.GET_ESIID_LIST: return {...state,isLoading: true,isLoadingSuccess: false,esiidList:undefined};
        case esiid.GET_ESIID_LIST_SUCCESS: return {...state, isLoading: false,isLoadingSuccess: true,esiidList:action.payload};
        case esiid.GET_ESIID_LIST_FAILURE: return {...state, isLoading: false,isLoadingSuccess: true,esiidList:action.payload};
        case esiid.DELETE_ESIID_LIST: return {...state, esiidList:undefined};
        default: return state
    }
}

export const getESIIDList = (state: State) => {
  return {isLoading:state.isLoading, isLoadingSuccess:state.isLoadingSuccess, esiidList:state.esiidList}
}

export const getESIIDListFromStorage = (state: State) => state.esiidList
