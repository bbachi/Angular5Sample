import * as billing from '../actions/billing';
import { Payment } from '../models'
import * as _ from 'lodash'
import * as storage from '../state/storage'

export interface State {
    isLoading: boolean;
    isLoadingSuccess: boolean;
    invoices: any;
    payment: Payment;
    selectedInvoiceList: any;
    paymentConfirm: any;
}

const initialState: State = {
    isLoading: false,
    isLoadingSuccess: false,
    invoices: undefined != storage.getItemByKey('billing')?storage.getItemByKey('billing').invoices:undefined,
    payment: undefined != storage.getItemByKey('billing')?storage.getItemByKey('billing').payment:undefined,
    selectedInvoiceList: undefined,
    paymentConfirm: undefined,
};

export function reducer(state= initialState, action: billing.Actions): State {

    let payment;

    switch(action.type) {

        case billing.GET_BILLING_INVOICE_LIST: return {...state,isLoading: true,isLoadingSuccess: false,invoices: undefined};
        case billing.GET_BILLING_INVOICE_LIST_SUCCESS:
          return {...state,isLoading: false,isLoadingSuccess: true, invoices: action.payload};
        case billing.GET_BILLING_INVOICE_LIST_FAILURE: return {...state,isLoading: false,isLoadingSuccess: true,invoices: action.payload};

        case billing.SET_INDIVIDUAL_INVOICE_LIST:
            let accountType = action.payload.accountType;
            let invoiceList = [];
            if(accountType == "01"){
                invoiceList = (undefined != state.invoices)?state.invoices.resInvoiceList:[];
            }else if(accountType == "02"){
                invoiceList = (undefined != state.invoices)?state.invoices.cmnAreaIndInvList:[];
            }
            return {...state, selectedInvoiceList:invoiceList}

        case billing.SAVE_COLLECTIVE_PAYMENT_INFO: return {...state, payment:action.payload}

        case billing.SAVE_INDIVIDUAL_PAYMENT_INFO: return {...state, payment:action.payload}

        case billing.UPDATE_COLLECTIVE_PAYMENT_INFO:
                payment = _.cloneDeep(state.payment)
                let paymentInfo = action.payload;
                if(undefined != paymentInfo.paymentAmount)payment.collective.paymentAmount = paymentInfo.paymentAmount;
                if(undefined != paymentInfo.paymentDate)payment.collective.paymentDate = paymentInfo.paymentDate;
                return {...state, payment}

        case billing.SAVE_BANK_INFO:
                payment = undefined != state.payment?_.cloneDeep(state.payment):{};
                payment.bank = action.payload;
                return {...state, payment}

        case billing.SUBMIT_PAYMENT: return {...state,isLoading: true,isLoadingSuccess: false};
        case billing.SUBMIT_PAYMENT_SUCCESS: return {...state,isLoading: false,isLoadingSuccess: true,paymentConfirm: action.payload};
        case billing.SUBMIT_PAYMENT_FAILURE: return {...state,isLoading: false,isLoadingSuccess: true,paymentConfirm: action.payload};

        default: return state
    }
}

export const getBillingInvoices = (state: State) =>
  {
    return{
        invoices: state.invoices,
        isLoading: state.isLoading,
        isLoadingSuccess: state.isLoadingSuccess
    }
  }

export const getPaymentInfo = (state: State) => state.payment
export const getInvoiceList = (state: State) => state.selectedInvoiceList
export const getPaymentConfirmation = (state: State) => {
    return {
        confirm: state.paymentConfirm,
        isLoading: state.isLoading,
        isLoadingSuccess: state.isLoadingSuccess
    }
}
