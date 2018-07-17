import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/withLatestFrom';
import { of } from 'rxjs/observable/of';
import { Effect, Actions, toPayload } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BillingService } from '../../_services/billing.service';
import * as paymenthistory from '../actions/paymenthistory';
import * as previousbills from '../actions/previousbills';
import * as billing from '../actions/billing';

@Injectable()
export class BillingEffects {

  constructor(private action$: Actions, private billingService: BillingService) { }

  @Effect()
  getPaymentHistoryEffects$ = this.action$.ofType(paymenthistory.GET_PAYMENT_HISTORY)
    .map(toPayload)
    .switchMap((payload) => this.billingService.getPaymentHistory(payload)
    .map((dailyReport) => {
        return new paymenthistory.GetPaymentHistorySuccess(dailyReport)
    }))
    .catch(() => Observable.of(new paymenthistory.GetPaymentHistoryFailure({})))


  @Effect()
  getPreviousBillsEffects$ = this.action$.ofType(previousbills.GET_PREVIOUS_BILLS)
    .map(toPayload)
    .switchMap((payload) => this.billingService.getPreviousBills(payload)
    .map((dailyReport) => {
        return new previousbills.GetPreviousBillsSuccess(dailyReport)
    }))
    .catch(() => Observable.of(new previousbills.GetPreviousBillsFailure({})))


  @Effect()
  getContractAccountListEffects$ = this.action$.ofType(billing.GET_CONTRACT_ACCOUNT_LIST)
    .map(toPayload)
    .switchMap((payload) => this.billingService.getContractAccountList(payload)
    .map((response) => {
        return new billing.GetContractAccountListSuccess(response)
    }))
    .catch(() => Observable.of(new billing.GetContractAccountListFailure({})))

  @Effect()
  getDashboardPaymentDtlsEffects$ = this.action$.ofType(billing.GET_DASHBOARD_PAYMENT_DETAILS)
    .map(toPayload)
    .switchMap((payload) => {
      console.log("----in effects---")

      return this.billingService.getDashboardPaymentDtls(payload)

    .map((response) => {
        return new billing.GetDashboardPaymentDtlsSuccess(response)
    })
  })
    .catch(() => Observable.of(new billing.GetDashboardPaymentDtlsFailure({})))


  @Effect()
  getBillingInvoiceListEffects$ = this.action$.ofType(billing.GET_BILLING_INVOICE_LIST)
    .map(toPayload)
    .switchMap((payload) => this.billingService.getBillingInvoiceList(payload)
    .map((response) => {
        return new billing.GetBillingInvoiceListSuccess(response)
    }))
    .catch(() => Observable.of(new billing.GetBillingInvoiceListFailure({})))


  @Effect()
  getPaymentmethodsEffects$ = this.action$.ofType(billing.GET_PAYMENT_METHODS)
    .map(toPayload)
    .switchMap((payload) => this.billingService.getPaymentMethods(payload)
    .map((response) => {
        return new billing.GetPaymentMethodsSuccess(response)
    }))
    .catch(() => Observable.of(new billing.GetPaymentMethodsFailure({})))


  @Effect()
  addPaymentMethodEffects$ = this.action$.ofType(billing.ADD_PAYMENT_METHOD)
    .map(toPayload)
    .switchMap((payload) => this.billingService.addPaymentMethod(payload)
    .map((response) => {
        return new billing.AddPaymentMethodSuccess(response)
    }))
    .catch(() => Observable.of(new billing.AddPaymentMethodFailure({})))


  @Effect()
  deletePaymentPaymentEffects$ = this.action$.ofType(billing.DELETE_PAYMENT_METHOD)
    .map(toPayload)
    .switchMap((payload) => this.billingService.deletePaymentMethod(payload)
    .map((response) => {
        return new billing.DeletePaymentMethodSuccess(response)
    }))
    .catch(() => Observable.of(new billing.DeletePaymentMethodFailure({})))


  @Effect()
  submitPaymentEffects$ = this.action$.ofType(billing.SUBMIT_PAYMENT)
    .map(toPayload)
    .switchMap((payload) => this.billingService.submitPayment(payload)
    .map((response) => {
        return new billing.SubmitPaymentSuccess(response)
    }))
    .catch(() => Observable.of(new billing.SubmitPaymentFailure({})))


  @Effect()
  cancelPaymentEffects$ = this.action$.ofType(paymenthistory.CANCEL_PAYMENT)
    .map(toPayload)
    .switchMap((payload) => this.billingService.cancelPayment(payload)
    .map((response) => {
        return new paymenthistory.CancelPaymentSuccess(response)
    }))
    .catch(() => Observable.of(new paymenthistory.CancelPaymentFailure({})))

  @Effect()
  duedateForCAEffects$ = this.action$.ofType(paymenthistory.GET_DUEDATE_FOR_CA)
    .map(toPayload)
    .switchMap((payload) => this.billingService.getDueDateForCA(payload)
    .map((response) => {
        return new paymenthistory.GetDuedateForCASuccess(response)
    }))
    .catch(() => Observable.of(new paymenthistory.GetDuedateForCAFailure({})))


  @Effect()
  modifyPaymentEffects$ = this.action$.ofType(paymenthistory.MODIFY_PAYMENT)
    .map(toPayload)
    .switchMap((payload) => this.billingService.modifyPayment(payload)
    .map((response) => {
        return new paymenthistory.ModifyPaymentSuccess(response)
    }))
    .catch(() => Observable.of(new paymenthistory.ModifyPaymentFailure({})))


}
