import * as keys from './storagekeys'

export const getThisState = (stateName) => {
    try{
        const serializedState = localStorage.getItem(stateName);
        if(serializedState === null){ return undefined }
        return JSON.parse(serializedState);
    }catch(err){
        return undefined
    }
}

export const getItem = (itemName) => {

    if(itemName == 'loggedinuser' || itemName == 'custlist' || itemName == 'bpdtlslist'){
        let loggedInUserState = getThisState("loggedinuser");
        if(itemName == 'loggedinuser'){
            return undefined != loggedInUserState?loggedInUserState.loggedInUser:undefined;
        }else if(itemName == 'custlist'){
            return undefined != loggedInUserState?loggedInUserState.customerList:undefined;
        }else if(itemName == 'bpdtlslist'){
            return undefined != loggedInUserState?loggedInUserState.bpDtlsList:undefined;
        }
    }else if(itemName == 'selectedproperty'){
        let selectedpropertyState = getThisState("selectedproperty");
        return undefined != selectedpropertyState?selectedpropertyState.selectedProperty:undefined;
    }else if(itemName == 'selectedproprelationid'){
        let selectedpropertyState = getThisState("selectedproperty");
        return undefined != selectedpropertyState?selectedpropertyState.relationshipId:undefined;
    }else if(itemName == keys.SEARCH_BP_DTLS_LIST){
        let searchAccountsState = getThisState("searchAccounts");
        return undefined != searchAccountsState?searchAccountsState.bpDtlsList:undefined;
    }else if(itemName == keys.SEARCH_HIERARCHY_DTLS){
        let searchAccountsState = getThisState("searchAccounts");
        return undefined != searchAccountsState?searchAccountsState.hierarchydtls:undefined;
    }
}

export const saveItem = (key,data) => {
    const serializedState = JSON.stringify(data);
    localStorage.setItem(key,serializedState);
}

export const getItemByKey = (key) => {
    try{
        const serializedState = localStorage.getItem(key);
        if(serializedState === null){ return undefined }
        return JSON.parse(serializedState);
    }catch(err){
        return undefined
    }
}

export const deleteItemByKey = (key) => localStorage.setItem(key,null)

export const emptyLocalStorage = (reducerkeys) => {

    try{
        if(undefined != reducerkeys && reducerkeys.length > 0){
            reducerkeys.forEach(key => {
                localStorage.setItem(key,null);
            })
        }
    }catch(err){
        //console.log("ERROR===emptyLocalStorage==>>>")
    }
}

export const clearStorage = () => localStorage.clear();
