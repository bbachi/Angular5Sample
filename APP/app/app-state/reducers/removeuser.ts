import * as profile from '../actions/profile';

export interface State {
    removeUserDtls: any;
}

const initialState: State = {
    removeUserDtls: {},
};

export function reducer(state= initialState, action: profile.Actions): State {

    switch(action.type) {

        case profile.REMOVE_USER: return {...state, removeUserDtls: {}};
        case profile.REMOVE_USER_SUCCESS: return {...state, removeUserDtls: action.payload};
        case profile.REMOVE_USER_FAILURE: return {...state, removeUserDtls: action.payload};

        default: return state
    }
}

export const getRemoveUserDetails = (state: State) => state.removeUserDtls;
