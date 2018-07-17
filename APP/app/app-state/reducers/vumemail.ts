import * as vum from '../actions/vum';

export interface State {
    isLoading: boolean;
    isLoadingSuccess: boolean;
    emailStatus: any;
}

const initialState: State = {
    isLoading: false,
    isLoadingSuccess: false,
    emailStatus: undefined,
};

export function reducer(state= initialState, action: vum.Actions): State {

    switch(action.type) {

        case vum.UPDATE_EMAIL_PREFERENCE: return {...state,isLoading: true,isLoadingSuccess: false,emailStatus:undefined};
        case vum.UPDATE_EMAIL_PREFERENCE_SUCCESS: return {...state,isLoading: false,isLoadingSuccess: true,emailStatus: action.payload};
        case vum.UPDATE_EMAIL_PREFERENCE_FAILURE: return {...state,isLoading: false,isLoadingSuccess: true,emailStatus: action.payload};

        default: return state
    }
}

export const getUpdateEmailPreferenceStatus = (state: State) => {
    return {isLoading:state.isLoading, isLoadingSuccess:state.isLoadingSuccess, status:state.emailStatus}
}
