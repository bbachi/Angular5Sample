import * as vum from '../actions/vum';

export interface State {
    isLoading: boolean;
    isLoadingSuccess: boolean;
    esiidStatus: any;
}

const initialState: State = {
    isLoading: false,
    isLoadingSuccess: false,
    esiidStatus: undefined,
};

export function reducer(state= initialState, action: vum.Actions): State {

    switch(action.type) {

        case vum.UPDATE_ESIID_ATTRIBUTE: return {...state,isLoading: true,isLoadingSuccess: false,esiidStatus:undefined};
        case vum.UPDATE_ESIID_ATTRIBUTE_SUCCESS: return {...state,isLoading: false,isLoadingSuccess: true,esiidStatus: action.payload};
        case vum.UPDATE_ESIID_ATTRIBUTE_FAILURE: return {...state,isLoading: false,isLoadingSuccess: true,esiidStatus: action.payload};

        default: return state
    }
}

export const getUpdateESIIDAttributeSatatus = (state: State) => {
  return {isLoading:state.isLoading, isLoadingSuccess:state.isLoadingSuccess, status:state.esiidStatus}
}
