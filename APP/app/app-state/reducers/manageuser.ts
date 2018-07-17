import * as profile from '../actions/profile';

export interface State {
    isLoading: boolean;
    isLoadingSuccess: boolean;
    associates: any;
    userDetails: any;
    userName: any;
}

const initialState: State = {
    isLoading: false,
    isLoadingSuccess: false,
    associates: undefined,
    userName: '',
    userDetails: undefined
};

export function reducer(state= initialState, action: profile.Actions): State {

    switch(action.type) {

        case profile.LIST_ADMIN_ASSOCIATES: return {...state, isLoading: true,isLoadingSuccess: false};
        case profile.LIST_ADMIN_ASSOCIATES_SUCCESS: return {...state, isLoading: false,isLoadingSuccess: true, associates: action.payload};
        case profile.LIST_ADMIN_ASSOCIATES_FAILURE: return {...state, isLoading: false,isLoadingSuccess: true, associates: action.payload};

        case profile.GET_USER_PROFILE_DETAILS: return {...state, userDetails:undefined};
        case profile.GET_USER_PROFILE_DETAILS_SUCCESS: return {...state, userDetails: action.payload};
        case profile.GET_USER_PROFILE_DETAILS_FAILURE: return {...state, userDetails: action.payload};

        case profile.SAVE_USER_NAME_FOR_PROFILE_DETAILS: return {...state,userName:action.payload}

        default: return state
    }
}

export const listAssociates = (state: State) => {
    return {isLoading:state.isLoading, isLoadingSuccess: state.isLoadingSuccess, associates: state.associates}
};
export const getUserProfileDetails = (state: State) => state.userDetails;
export const getUserNameForProfileDetails = (state: State) => state.userName;
