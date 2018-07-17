
import * as startservice from '../actions/startservice';
import { MFPropertyAddress } from '../models/service/startservice.model';
import * as _ from 'lodash';

export interface State {
    isLoading: boolean;
    isLoadingSuccess: boolean;
    propertyAddrList: any;
    selectedproperty: any;
    selectedUnits: any;
    confirmation: any;
    unavailableDates: any;
}

const initialState: State = {
    isLoading: false,
    isLoadingSuccess: false,
    propertyAddrList: undefined,
    selectedproperty: {},
    selectedUnits: [],
    confirmation:{},
    unavailableDates:{}
};

export function reducer(state= initialState, action: startservice.Actions): State {

    switch(action.type) {

        case startservice.LIST_PROPERTY_ADDRESS: return {...state,isLoading: true,isLoadingSuccess: false};
        case startservice.LIST_PROPERTY_ADDRESS_SUCCESS: return {...state,isLoading: false,isLoadingSuccess: true,propertyAddrList: action.payload};
        case startservice.LIST_PROPERTY_ADDRESS_FAILURE:  return {...state,isLoading: false,isLoadingSuccess: true,propertyAddrList: action.payload};

        case startservice.SAVE_SELECTED_PROPERTY:
            return {...state,isLoading: true,isLoadingSuccess: false,propertyAddrList:state.propertyAddrList, selectedproperty:action.payload };

        case startservice.SAVE_SELECTED_UNITS:
            let selectedProp = _.cloneDeep(state.selectedproperty);
            let selectedPropertyUnitList = selectedProp.unitList;
            selectedPropertyUnitList = selectedPropertyUnitList.map((unit) => {
                if(unit.strUnitNumber == action.payload.unitNumber){
                    unit.selected = action.payload.checked;
                    unit.effectiveDate = action.payload.effectiveDate;
                    unit.isPrioritySelected = action.payload.isPrioritySelected;
                    unit.isCurrentDaySelected = action.payload.isCurrentDaySelected;
                    unit.effectiveDate = action.payload.effectiveDate;
                }
                return unit;
            })
            selectedProp.unitList = selectedPropertyUnitList
            return {...state, selectedproperty:selectedProp }

        case startservice.SUBMIT_START_SERVICE: return {...state,isLoading:true, isLoadingSuccess:false,propertyAddrList:undefined, confirmation:{}}
        case startservice.SUBMIT_START_SERVICE_SUCCESS: return {...state, isLoading:false, isLoadingSuccess:true,confirmation:action.payload}
        case startservice.SUBMIT_START_SERVICE_FAILURE: return {...state, isLoading:false, isLoadingSuccess:true,confirmation:action.payload }

        case startservice.SUBMIT_STOP_SERVICE: return {...state, propertyAddrList:undefined,confirmation:{}}
        case startservice.SUBMIT_STOP_SERVICE_SUCCESS: return {...state, isLoading:false, isLoadingSuccess:true,confirmation:action.payload}
        case startservice.SUBMIT_STOP_SERVICE_FAILURE: return {...state, isLoading:false, isLoadingSuccess:true,confirmation:action.payload}

        case startservice.GET_UNAVAILABLE_DATES: return {...state, isLoading:true, isLoadingSuccess: false, unavailableDates:{}}
        case startservice.GET_UNAVAILABLE_DATES_SUCCESS: return {...state, isLoading:false, isLoadingSuccess: true, unavailableDates:action.payload}
        case startservice.GET_UNAVAILABLE_DATES_FAILURE: return {...state}

        default: return state
    }
}

export const getPropertyAddressList = (state: State) => {
  return {
    isLoading: state.isLoading,
    isLoadingSuccess: state.isLoadingSuccess,
    addressList: state.propertyAddrList
  }
}

export const getSelectedProperty = (state: State) => state.selectedproperty;

export const getSelectedUnits = (state: State) => {
    let unitList = state.selectedproperty.unitList.filter((unit) => unit.selected);
    return {isLoadingSuccess:true, unitList};
}

export const getSelectedServiceAddrDetails = (state: State) => {
    let selProp = state.selectedproperty;
    return {streetAddress: selProp.streetAddress, city: selProp.city, state:selProp.state,zipcode:selProp.zipcode}
}

export const getStartConfirmation = (state:State) => {
    return {isLoading:state.isLoading, isLoadingSuccess: state.isLoadingSuccess, confirmation: state.confirmation }
};

export const getUnavailableDates = (state:State) => {
    return {isLoading:state.isLoading, isLoadingSuccess:state.isLoadingSuccess,unavailableDates:state.unavailableDates}
}
