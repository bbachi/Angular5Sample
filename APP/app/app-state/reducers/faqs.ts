import * as ccTypes from '../actions/cc';

export interface State {
    isLoading: boolean;
    isLoadingSuccess: boolean;
    faqs: any;
}

const initialState: State = {
    isLoading: false,
    isLoadingSuccess: false,
    faqs: undefined,
};

export function reducer(state= initialState, action: ccTypes.Actions): State {

    switch(action.type) {

        case ccTypes.GET_FAQS: return {...state,isLoading: true,isLoadingSuccess: false,faqs:undefined};
        case ccTypes.GET_FAQS_SUCCESS: return {...state,isLoading: false,isLoadingSuccess: true,faqs: action.payload};
        case ccTypes.GET_FAQS_FAILURE: return {...state,isLoading: false,isLoadingSuccess: true,faqs: action.payload};

        default: return state
    }
}

export const getFAQs = (state: State) => {
  return {isLoading:state.isLoading,isLoadingSuccess:state.isLoadingSuccess,faqs:state.faqs}
}
