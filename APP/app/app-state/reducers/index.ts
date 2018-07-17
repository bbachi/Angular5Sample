import {
  ActionReducerMap,
  createSelector,
  createFeatureSelector,
  ActionReducer,
  MetaReducer,
} from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import * as fromRouter from '@ngrx/router-store';
import { RouterStateUrl } from '../shared/utils';

import { environment } from '../../../environments/environment';

/**
 * storeFreeze prevents state from being mutated. When mutation occurs, an
 * exception will be thrown. This is useful during development mode to
 * ensure that none of the reducers accidentally mutates the state.
 */
import { storeFreeze } from 'ngrx-store-freeze';

/**
 * Every reducer module's default export is the reducer function itself. In
 * addition, each module should export a type or interface that describes
 * the state of the reducer plus any selector functions. The `* as`
 * notation packages up all of the exports into a single object.
 */

import * as fromTranactions from './transactions';
import * as fromStartService from './startservice';
import * as fromVUM from './vum';
import * as fromVUMESIID from './vumesiid'
import * as fromVUMEMAIL from './vumemail'
import * as fromPaymentHistory from './paymenthistory'
import * as fromPreviousBills from './previousbills'
import * as fromAddUser from './adduser'
import * as fromLoggedInUser from './loggedinuser'
import * as fromManageUser from './manageuser'
import * as fromUpdateUser from './updateuser'
import * as fromESIID from './esiid'
import * as fromSelectedProperty from './selectedproperty'
import * as fromBilling from './billing'
import * as fromBalance from './balance'
import * as fromCA from './ca'
import * as fromPaymentMethods from './paymentmethod'
import * as fromPlanDetails from './plandetails'
import * as fromRemoveUser from './removeuser'
import * as fromSearchAccounts from './search'
import * as fromReports from './reports'
import * as fromForms from './forms'
import * as fromNear5PM from './near5pm'
import * as fromCC from './cc'
import * as fromFAQs from './faqs'
import * as fromCancelPayment from './cancelpayment'
import * as fromModifyPayment from './modifypayment'

/**
 * As mentioned, we treat each reducer like a table in a database. This means
 * our top level state interface is just a map of keys to inner state types.
 */
export interface State {
    transactions: fromTranactions.State;
    startservice: fromStartService.State;
    vum: fromVUM.State;
    vumesiid: fromVUMESIID.State;
    vumemail: fromVUMEMAIL.State;
    paymenthistory: fromPaymentHistory.State;
    cancelpayment: fromCancelPayment.State;
    modifypayment: fromModifyPayment.State;
    previousbills: fromPreviousBills.State;
    adduser: fromAddUser.State;
    loggedinuser: fromLoggedInUser.State;
    manageuser: fromManageUser.State;
    updateuser: fromUpdateUser.State;
    esiid: fromESIID.State;
    selectedproperty: fromSelectedProperty.State;
    billing: fromBilling.State;
    balance: fromBalance.State;
    ca: fromCA.State;
    paymentmethod: fromPaymentMethods.State;
    plandetails: fromPlanDetails.State;
    removeUser: fromRemoveUser.State;
    searchAccounts: fromSearchAccounts.State;
    forms: fromForms.State;
    reports: fromReports.State;
    near5pm: fromNear5PM.State;
    cc: fromCC.State;
    faqs: fromFAQs.State;
    routerReducer: fromRouter.RouterReducerState<RouterStateUrl>;
}

/**
 * Our state is composed of a map of action reducer functions.
 * These reducer functions are called with each dispatched action
 * and the current or initial state and return a new immutable state.
 */
export const reducers: ActionReducerMap<State> = {
    transactions: fromTranactions.reducer,
    startservice: fromStartService.reducer,
    vum: fromVUM.reducer,
    vumesiid: fromVUMESIID.reducer,
    vumemail: fromVUMEMAIL.reducer,
    paymenthistory: fromPaymentHistory.reducer,
    cancelpayment: fromCancelPayment.reducer,
    modifypayment: fromModifyPayment.reducer,
    previousbills: fromPreviousBills.reducer,
    adduser: fromAddUser.reducer,
    loggedinuser: fromLoggedInUser.reducer,
    manageuser: fromManageUser.reducer,
    updateuser: fromUpdateUser.reducer,
    esiid: fromESIID.reducer,
    selectedproperty: fromSelectedProperty.reducer,
    billing: fromBilling.reducer,
    balance: fromBalance.reducer,
    ca: fromCA.reducer,
    paymentmethod: fromPaymentMethods.reducer,
    plandetails: fromPlanDetails.reducer,
    removeUser: fromRemoveUser.reducer,
    searchAccounts: fromSearchAccounts.reducer,
    forms: fromForms.reducer,
    reports: fromReports.reducer,
    near5pm: fromNear5PM.reducer,
    cc: fromCC.reducer,
    faqs: fromFAQs.reducer,
    routerReducer: fromRouter.routerReducer,
};

/*localstorage setup for the store
  Provide state (reducer) keys to sync with local storage. Returns a meta-reducer.
*/

const reducerKeys = ['loggedinuser','selectedproperty','searchAccounts','billing'];
export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({keys: reducerKeys})(reducer);
}

// //console.log all actions
export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return function(state: State, action: any): State {
    console.log('state', state);
    console.log('action', action);
    return reducer(state, action);
  };
}

/**
 * By default, @ngrx/store uses combineReducers with the reducer map to compose
 * the root meta-reducer. To add more meta-reducers, provide an array of meta-reducers
 * that will be composed to form the root meta-reducer.
 */

export const metaReducers: MetaReducer<State>[] = environment.production?[localStorageSyncReducer]:[logger, storeFreeze,localStorageSyncReducer];

/* Transactions State start */
export const getTransactionState = createFeatureSelector<fromTranactions.State>('transactions');

export const listTransactions = createSelector(
  getTransactionState,
  fromTranactions.getTransactions
);

export const getDetailTransaction = createSelector(
  getTransactionState,
  fromTranactions.getDetailTransaction
);

/* Transactions State end */

/* Search Accounts State start */
export const getSearchAccountsState = createFeatureSelector<fromSearchAccounts.State>('searchAccounts');

export const getHierarchyDetails = createSelector(
  getSearchAccountsState,
  fromSearchAccounts.getHierarchyDetails
);

export const getStoredHierarchyDetails = createSelector(
  getSearchAccountsState,
  fromSearchAccounts.getStoredHierarchyDetails
);

export const getBPDetailsList = createSelector(
  getSearchAccountsState,
  fromSearchAccounts.getBPDetailsList
)
/* Search Accounts State end */

/* Customer Care start  */
export const getCCState = createFeatureSelector<fromCC.State>('cc');

export const getEmailUsConfirmation = createSelector(
  getCCState,
  fromCC.getEmailUsConfirmation
)
/* Customer Care end  */

/* Customer Care FAQs  start  */
export const getFAQsState = createFeatureSelector<fromFAQs.State>('faqs');

export const getFAQs = createSelector(
  getFAQsState,
  fromFAQs.getFAQs
)
/* Customer Care FAQs end  */

/* Get Forms State start */
export const getFormsState = createFeatureSelector<fromForms.State>('forms');

export const getFormsList = createSelector(
  getFormsState,
  fromForms.getFormsList
);
/* Get Forms State end */

/* Get Near 5PM State start */
export const getNear5PMState = createFeatureSelector<fromNear5PM.State>('near5pm');

export const getNearto5PMflag = createSelector(
  getNear5PMState,
  fromNear5PM.getNearto5PMflag
);
/* Get Near 5PM State end */

/* Get Reports State start */
export const getReportsState = createFeatureSelector<fromReports.State>('reports');

export const getVacancyReport = createSelector(
  getReportsState,
  fromReports.getVacancyReport
);

export const getStoredVacancyReport = createSelector(
  getReportsState,
  fromReports.getStoredVacancyReport
)

export const getRollReport = createSelector(
  getReportsState,
  fromReports.getRollReport
);
/* Get Reports State end */

/* Start Service State start */
export const getStartServiceState = createFeatureSelector<fromStartService.State>('startservice');

export const listPorpertyAddress = createSelector(
   getStartServiceState,
   fromStartService.getPropertyAddressList
)

export const getSelectedServiceProperty = createSelector(
    getStartServiceState,
    fromStartService.getSelectedProperty
)

export const getSelectedUnits = createSelector(
    getStartServiceState,
    fromStartService.getSelectedUnits
)

export const getSelectedSrvcAddrDetails = createSelector(
    getStartServiceState,
    fromStartService.getSelectedServiceAddrDetails
)

export const getStartServiceConfirmation = createSelector(
    getStartServiceState,
    fromStartService.getStartConfirmation
)

/* Calendar unavailable dates and near to5pm (same day enrollemnt) flag*/
export const getUnavailableDates = createSelector(
    getStartServiceState,
    fromStartService.getUnavailableDates
)

/* Start Service State end */

/* Plan Details Start */
export const getPlanDetailsState = createFeatureSelector<fromPlanDetails.State>('plandetails');

export const getPlanDetails = createSelector(
    getPlanDetailsState,
    fromPlanDetails.getPlanDetails
)
/* Plan Details End */

/* VUM start */
export const getVUMState = createFeatureSelector<fromVUM.State>('vum');

export const getVacantDailyReport = createSelector(
   getVUMState,
   fromVUM.getDailyReportList
)
/* VUM end */

/* VUM ESIID Update start */
export const getVUMESIIDState = createFeatureSelector<fromVUMESIID.State>('vumesiid');

export const getUpdateESIIDAttributeSatatus = createSelector(
   getVUMESIIDState,
   fromVUMESIID.getUpdateESIIDAttributeSatatus
)
/* VUM ESIID Update end */

/* VUM EMAIL preference start */
export const getVUMEMAILState = createFeatureSelector<fromVUMEMAIL.State>('vumemail');

export const getUpdateEmailPreferenceStatus = createSelector(
   getVUMEMAILState,
   fromVUMEMAIL.getUpdateEmailPreferenceStatus
)
/* VUM EMAIL preference end */

/* Previous Bills start */
export const getPreviousBillsState = createFeatureSelector<fromPreviousBills.State>('previousbills');

export const getPreviousBills = createSelector(
   getPreviousBillsState,
   fromPreviousBills.getPreviousBills
)
/* Previous Bills end */

/* Payment History start */
export const getPaymentHistoryState = createFeatureSelector<fromPaymentHistory.State>('paymenthistory');

export const getPaymentHistoryList = createSelector(
   getPaymentHistoryState,
   fromPaymentHistory.getPaymentHistoryList
)
/*  Payment History end */

/* Cancel Payment start */
export const getCancelPaymentState = createFeatureSelector<fromCancelPayment.State>('cancelpayment');

export const getCancelpaymentStatus = createSelector(
   getCancelPaymentState,
   fromCancelPayment.getCancelpaymentStatus
)
/*  Cancel Payment end */

/* Modify Payment start */
export const getModifyPaymentState = createFeatureSelector<fromModifyPayment.State>('modifypayment');

export const getModifyPaymentInfo = createSelector(
   getModifyPaymentState,
   fromModifyPayment.getModifyPaymentInfo
)

export const getDueDateForCA = createSelector(
    getModifyPaymentState,
    fromModifyPayment.getDueDateForCA
)


export const getModifyPaymentStatus = createSelector(
   getModifyPaymentState,
   fromModifyPayment.getModifyPaymentStatus
)
/*  Modify Payment end */

/* Billing start */
export const getBillingState = createFeatureSelector<fromBilling.State>('billing');

export const getBillingInvoices = createSelector(
   getBillingState,
   fromBilling.getBillingInvoices
)

export const getPaymentInfo = createSelector(
   getBillingState,
   fromBilling.getPaymentInfo
)

export const getInvoiceList = createSelector(
   getBillingState,
   fromBilling.getInvoiceList
)

export const getPaymentConfirmation = createSelector(
   getBillingState,
   fromBilling.getPaymentConfirmation
)

/*  Billing end */

/* Balance start */
export const getBalanceState = createFeatureSelector<fromBalance.State>('balance');

export const getDashboardPaymentDetails = createSelector(
   getBalanceState,
   fromBalance.getDashboardPaymentDetails
)
/* Balance end */

/* Contract account list  start */
export const getCAState = createFeatureSelector<fromCA.State>('ca');

export const getContractAccounts = createSelector(
   getCAState,
   fromCA.getContractAccounts
)

export const getIndContractAccountList = createSelector(
   getCAState,
   fromCA.getIndContractAccountList
)

export const getCollContractAccountList = createSelector(
   getCAState,
   fromCA.getCollContractAccountList
)
/* Contract Account list end */

/* Payment Methods start */
export const getPaymentMethodsState = createFeatureSelector<fromPaymentMethods.State>('paymentmethod');

export const getPaymentMethods = createSelector(
   getPaymentMethodsState,
   fromPaymentMethods.getPaymentMethods
)

export const addPaymentMethod = createSelector(
   getPaymentMethodsState,
   fromPaymentMethods.addPaymentMethod
)

export const deletePaymentMethod = createSelector(
   getPaymentMethodsState,
   fromPaymentMethods.deletePaymentMethod
)

/* payment Methods end */

/* Profile Add user start */
export const getAddUserState = createFeatureSelector<fromAddUser.State>('adduser');

export const getSavedUserInfo = createSelector(
   getAddUserState,
   fromAddUser.getSavedUserInfo
)

export const isUserValidated = createSelector(
   getAddUserState,
   fromAddUser.isUserValidated
)

export const getSaveUserConfirmation = createSelector(
   getAddUserState,
   fromAddUser.getSaveUserConfirmation
)

export const getAdminCustomerList = createSelector(
   getAddUserState,
   fromAddUser.getAdminCustomerList
)

/*  Profile Add user end */

/* Profile Manage user start */
export const getManageUserState = createFeatureSelector<fromManageUser.State>('manageuser');

export const getAssociates = createSelector(
  getManageUserState,
  fromManageUser.listAssociates
)

export const getUserProfileDetails = createSelector(
  getManageUserState,
  fromManageUser.getUserProfileDetails
)

export const getUserNameForProfileDetails = createSelector(
  getManageUserState,
  fromManageUser.getUserNameForProfileDetails
)
/*  Profile Manage user end */

/* Profile Update user start */
export const getUpdateUserState = createFeatureSelector<fromUpdateUser.State>('updateuser');

export const getUserUpdatedDtls = createSelector(
  getUpdateUserState,
  fromUpdateUser.getUserUpdatedDtls
)

export const getUsersForUpdate = createSelector(
  getUpdateUserState,
  fromUpdateUser.getUsersForUpdate
)
/*  Profile Update user end */

/* Profile Remove user start */
export const getRemoveUserState = createFeatureSelector<fromRemoveUser.State>('removeuser');

export const getRemoveUserDetails = createSelector(
  getRemoveUserState,
  fromRemoveUser.getRemoveUserDetails
)
/* Profile Remove user end */

/* Loggedin user start */
export const getLoggedInUserState = createFeatureSelector<fromLoggedInUser.State>('loggedinuser');

export const getLoggedInUser = createSelector(
   getLoggedInUserState,
   fromLoggedInUser.getLoggedInUser
)

export const getLoggedInUserEmail = createSelector(
   getLoggedInUserState,
   fromLoggedInUser.getLoggedInUserEmail
)

export const getLoggedInUserUserCategory = createSelector(
    getLoggedInUserState,
    fromLoggedInUser.getLoggedInUserUserCategory
)

export const getLoggedInUserHierarchyDtls = createSelector(
   getLoggedInUserState,
   fromLoggedInUser.getLoggedInUserHierarchyDtls
)

export const getLoggedInUserCustomerList = createSelector(
   getLoggedInUserState,
   fromLoggedInUser.getLoggedInUserCustomerList
)

export const getLoggedInUserSecurityRole = createSelector(
   getLoggedInUserState,
   fromLoggedInUser.getLoggedInUserSecurityRole
)

export const getLoggedInBPDtlsList = createSelector(
  getLoggedInUserState,
  fromLoggedInUser.getLoggedInBPDtlsList
)

export const getLoggedInUserSecurityRoleDisplayName = createSelector(
   getLoggedInUserState,
   fromLoggedInUser.getLoggedInUserSecurityRoleDisplayName
)


/* Loggedin User end */


/* ESIID calls start */

export const getESIIDState = createFeatureSelector<fromESIID.State>('esiid');

export const getESIIDList = createSelector(
   getESIIDState,
   fromESIID.getESIIDList
)

export const getESIIDListFromStorage = createSelector(
   getESIIDState,
   fromESIID.getESIIDListFromStorage
)
/* ESIID calls end */

/* Selected Property calls start */

export const getSelectedpropertyState = createFeatureSelector<fromSelectedProperty.State>('selectedproperty');

export const getRelationshipId = createSelector(
   getSelectedpropertyState,
   fromSelectedProperty.getRelationshipId
)

export const getSelectedProperty = createSelector(
   getSelectedpropertyState,
   fromSelectedProperty.getSelectedProperty
)

export const getNONCAARealBPList = createSelector(
   getSelectedpropertyState,
   fromSelectedProperty.getNONCAARealBPList
)

export const getCustomerDetails = createSelector(
   getSelectedpropertyState,
   fromSelectedProperty.getCustomerDetails
)

export const getSelectedpropertyName = createSelector(
   getSelectedpropertyState,
   fromSelectedProperty.getSelectedpropertyName
)

export const getSelectedPropertyBPType = createSelector(
   getSelectedpropertyState,
   fromSelectedProperty.getSelectedPropertyBPType
)

export const getRelationshipIdForStartStopTxn = createSelector(
   getSelectedpropertyState,
   fromSelectedProperty.getRelationshipIdForStartStopTxn
)

export const getStrNodeGuidForStartStopTxn = createSelector(
   getSelectedpropertyState,
   fromSelectedProperty.getStrNodeGuidForStartStopTxn
)

export const getAccessPrivForSelectedProperty = createSelector(
    getSelectedpropertyState,
    fromSelectedProperty.getAccessPrivForSelectedProperty
)

export const getSelectedPropertyMasterBPName = createSelector(
    getSelectedpropertyState,
    fromSelectedProperty.getSelectedPropertyMasterBPName
)

export const getSelectedpropDtls = createSelector(
    getSelectedpropertyState,
    fromSelectedProperty.getSelectedpropDtls
)

export const isPropertySelected = createSelector(
    getSelectedpropertyState,
    fromSelectedProperty.isPropertySelected
)

/* Selected Property calls end */

/* setting state null to make it null start*/

export const setStateNull = createSelector(
    getSelectedpropertyState,
    fromSelectedProperty.getSelectedPropertyMasterBPName
)

/* setting state null to make it null start*/
