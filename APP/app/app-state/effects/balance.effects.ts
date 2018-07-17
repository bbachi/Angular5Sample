import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { of } from 'rxjs/observable/of';
import { Effect, Actions, toPayload } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BillingService } from '../../_services/billing.service';
import * as billing from '../actions/billing';

@Injectable()
export class BalanceEffects {

  constructor(private action$: Actions, private billingService: BillingService) { }

  @Effect()
  getDashboardPaymentDtlsEffects$ = this.action$.ofType(billing.GET_DASHBOARD_PAYMENT_DETAILS)
    .map(toPayload)
    .switchMap((payload) => this.billingService.getDashboardPaymentDtls(payload)
    .map((response) => {
        return new billing.GetDashboardPaymentDtlsSuccess(response)
    }))
    .catch(() => Observable.of(new billing.GetDashboardPaymentDtlsFailure({})))

}
