import * as selectedproperty from '../actions/selectedproperty';
import * as storage from '../state/storage'

export interface State {
    relationshipId: string;
    selectedProperty: any;
}

const initialState: State = {
    relationshipId: storage.getItem('selectedproprelationid'),
    selectedProperty: storage.getItem('selectedproperty'),
};

export function reducer(state= initialState, action: selectedproperty.Actions): State {

    switch(action.type) {

        case selectedproperty.SAVE_RELATIONSHIP_ID: return {...state, selectedProperty:undefined,relationshipId:action.payload};

        case selectedproperty.SAVE_SELECTED_PROPERTY_DTLS: return {...state, selectedProperty:action.payload};

        case selectedproperty.DELETE_SELECTED_PROPERTY_DTLS: return {...state, selectedProperty: undefined};

        case selectedproperty.GET_SELECTED_PROPERTY_DTLS: return {...state};
        case selectedproperty.GET_SELECTED_PROPERTY_DTLS_SUCCESS: return {...state, selectedProperty:action.payload};
        case selectedproperty.GET_SELECTED_PROPERTY_DTLS_SUCCESS: return {...state, selectedProperty:action.payload};

        default: return state
    }
}

export const getRelationshipId = (state: State) => state.relationshipId;

export const getSelectedProperty = (state: State) => state.selectedProperty;

export const getNONCAARealBPList = (state: State) => (undefined != state.selectedProperty)?state.selectedProperty.NONCAABPList:[]

export const getCustomerDetails = (state: State) => (undefined != state.selectedProperty && undefined != state.selectedProperty.customerDtls)?state.selectedProperty.customerDtls:{};

export const getSelectedPropertyBPType = (state: State) => (undefined != state.selectedProperty)?state.selectedProperty.customerDtls.bpType:""

export const getSelectedpropertyName = (state: State) => (undefined != state.selectedProperty)?state.selectedProperty.bpName:"";

export const getRelationshipIdForStartStopTxn = (state: State) => (undefined != state.selectedProperty)?state.selectedProperty.customerDtls.relationshipId:"";

export const getStrNodeGuidForStartStopTxn = (state: State) => (undefined != state.selectedProperty)?state.selectedProperty.strNodeGuidForStartStopTxn:"";

export const getAccessPrivForSelectedProperty = (state: State) => {
    if(undefined != state.selectedProperty)
      return {startEnabled:state.selectedProperty.startEnabled,
              stopEnabled: state.selectedProperty.stopEnabled,
              startRestrictionReason:state.selectedProperty.startRestrictionReason,
              stopRestrictionReason:state.selectedProperty.stopRestrictionReason,
              billingEnabled:state.selectedProperty.billingEnabled,
              billingRestrictionReason: state.selectedProperty.billingRestrictionReason}
    else
      return {startEnabled:false, stopEnabled:false}
  };

export const getSelectedPropertyMasterBPName = (state:State) => (undefined != state.selectedProperty)?state.selectedProperty.masterBPName:"";

export const getSelectedpropDtls = (state: State) => {
    if(undefined != state.selectedProperty && undefined != state.selectedProperty.customerDtls){
        let contactAddress = state.selectedProperty.customerDtls.contactAddress;
        return {streetName:contactAddress.streetName, streetNum: contactAddress.streetNum, city:contactAddress.city,state:contactAddress.state,bpName:state.selectedProperty.bpName,
          zipcode: contactAddress.zipcode,phoneNumber:state.selectedProperty.customerDtls.phoneNum, masterBPName:state.selectedProperty.masterBPName}
    }else{
        return undefined;
    }
}

export const isPropertySelected = (state: State) => (undefined != state.selectedProperty && undefined != state.selectedProperty.customerDtls)
