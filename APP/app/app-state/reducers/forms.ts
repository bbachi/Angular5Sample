import * as formTypes from '../actions/forms';

export interface State {
    isLoading: boolean;
    isLoadingSuccess: boolean;
    formsList: any;
}

const initialState: State = {
    isLoading: false,
    isLoadingSuccess: false,
    formsList: undefined,
};

export function reducer(state= initialState, action: formTypes.Actions): State {

    switch(action.type) {

        case formTypes.GET_FORMS: return {...state,isLoading: true,isLoadingSuccess: false,formsList:undefined};
        case formTypes.GET_FORMS_SUCCESS: return {...state,isLoading: false,isLoadingSuccess: true,formsList: action.payload};
        case formTypes.GET_FORMS_FAILURE: return {...state,isLoading: false,isLoadingSuccess: true,formsList: action.payload};

        default: return state
    }
}

export const getFormsList = (state: State) => {
    return {isLoading:state.isLoading, isLoadingSuccess:state.isLoadingSuccess, formsList:state.formsList}
}
