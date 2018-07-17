import * as loggedInUser from '../actions/loggedinuser';
import * as storage from '../state/storage'

export interface State {
    loggedInUser: any;
    customerList: any;
    bpDtlsList: any;
    hierarchyDetails: any;
}

const initialState: State = {
    loggedInUser: storage.getItem('loggedinuser'),
    customerList: storage.getItem('custlist'),
    bpDtlsList: storage.getItem('bpdtlslist'),
    hierarchyDetails: undefined
};

export function reducer(state= initialState, action: loggedInUser.Actions): State {

    switch(action.type) {

        case loggedInUser.SAVE_LOGGED_IN_USER: return {...state, loggedInUser: action.payload.user, customerList:action.payload.customerList,bpDtlsList:action.payload.bpDtlsList};
        case loggedInUser.SAVE_LOGGED_IN_USER_HIERARCHY_DTLS: return {...state, hierarchyDetails: action.payload};
        case loggedInUser.UPDATE_LOGGED_IN_USER: return {...state, loggedInUser:{...state.loggedInUser,...action.payload}};

        default: return state
    }
}

export const getLoggedInUser = (state: State) => state.loggedInUser;
export const getLoggedInUserUserCategory = (state: State) => state.loggedInUser.userCategory
export const getLoggedInUserEmail = (state: State) => (undefined != state.loggedInUser)?state.loggedInUser.email:""
export const getLoggedInUserCustomerList = (state: State) => state.customerList;
export const getLoggedInUserHierarchyDtls = (state: State) => state.bpDtlsList;
export const getLoggedInBPDtlsList = (state: State) => state.bpDtlsList;
export const getLoggedInUserSecurityRole = (state: State) => (undefined != state.loggedInUser)?state.loggedInUser.webSecurityRole:""
export const getLoggedInUserSecurityRoleDisplayName = (state: State) => state.loggedInUser.securityRoleDisplayName
