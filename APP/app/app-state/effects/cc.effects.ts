import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/withLatestFrom';
import { of } from 'rxjs/observable/of';
import { Effect, Actions, toPayload } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CCService } from '../../_services';
import * as ccTypes from '../actions/cc';

@Injectable()
export class CCEffects {

  constructor(private action$: Actions, private ccService: CCService) { }

  @Effect()
  emailUsEffects$ = this.action$.ofType(ccTypes.EMAIL_US)
    .map(toPayload)
    .switchMap((payload) => this.ccService.emailUs(payload)
    .map((result) => {
        return new ccTypes.EmailUsSuccess(result)
    }))
    .catch(() => Observable.of(new ccTypes.EmailUsFailure({})))

  @Effect()
  FAQsEffects$ = this.action$.ofType(ccTypes.GET_FAQS)
    .map(toPayload)
    .switchMap((payload) => this.ccService.getFaqs(payload)
    .map((result) => {
        return new ccTypes.GetFAQsSuccess(result)
    }))
    .catch(() => Observable.of(new ccTypes.GetFAQsFailure({})))

}
