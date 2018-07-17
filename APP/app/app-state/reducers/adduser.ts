import * as profile from '../actions/profile';

export interface State {
    isLoading: boolean;
    isLoadingSuccess: boolean;
    user: any;
    isUserNameValidedInLDAP: boolean;
    adminCustomerList: any;
    confirmation: any;
}

const initialState: State = {
    isLoading: false,
    isLoadingSuccess: false,
    user: {},
    isUserNameValidedInLDAP: false,
    adminCustomerList:undefined,
    confirmation: undefined,
};

export function reducer(state= initialState, action: profile.Actions): State {

    switch(action.type) {

        case profile.ADD_USER_SAVE_INFO: return {...state,isLoading: true,isLoadingSuccess: false, user: action.payload};

        case profile.ADD_ADMIN_CUSTOMER_LIST: return {...state,adminCustomerList:action.payload};

        case profile.UPDATE_ADMIN_CUSTOMER_LIST: return {...state,adminCustomerList:action.payload};

        case profile.VALIDATE_USER_NAME: return {...state };
        case profile.VALIDATE_USER_NAME_SUCCESS: return {...state, isUserNameValidedInLDAP: action.payload};
        case profile.VALIDATE_USER_NAME_FAILURE: return {...state, isUserNameValidedInLDAP: action.payload};

        case profile.SAVE_USER: return {...state, isLoading:true, isLoadingSuccess: false};
        case profile.SAVE_USER_SUCCESS: return {...state, isLoading:false, isLoadingSuccess:true, confirmation: action.payload};
        case profile.SAVE_USER_FAILURE: return {...state, isLoading:false, isLoadingSuccess:true, confirmation: action.payload};

        default: return state
    }
}

export const getSavedUserInfo = (state: State) => state.user;
export const isUserValidated = (state: State) => state.isUserNameValidedInLDAP
export const getAdminCustomerList = (state: State) => state.adminCustomerList
export const getSaveUserConfirmation = (state: State) => {
    return {isLoading:state.isLoading, isLoadingSuccess:state.isLoadingSuccess,data:state.confirmation}
}
