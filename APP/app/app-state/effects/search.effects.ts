import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/withLatestFrom';
import { of } from 'rxjs/observable/of';
import { Effect, Actions, toPayload } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AccountService } from '../../_services/account.service';
import * as searchTypes from '../actions/search';

@Injectable()
export class SearchAccountsEffects {

  constructor(private action$: Actions, private accountService: AccountService) { }

  @Effect()
  searchByBPNumberEffects$ = this.action$.ofType(searchTypes.SEARCH_BY_BP_NUMBER)
    .map(toPayload)
    .switchMap((payload) => this.accountService.searchByBpNumber(payload)
    .map((result) => {
        return new searchTypes.SearchByBPNumberSuccess(result)
    }))
    .catch(() => Observable.of(new searchTypes.SearchByBPNumberFailure({})))


  @Effect()
  searchByTaxIdEffects$ = this.action$.ofType(searchTypes.SEARCH_BY_TAX_ID)
    .map(toPayload)
    .switchMap((payload) => this.accountService.searchByFedTaxId(payload)
    .map((result) => {
        return new searchTypes.SearchByTaxIdSuccess(result)
    }))
    .catch(() => Observable.of(new searchTypes.SearchByTaxIdFailure({})))


}
