import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/withLatestFrom';
import { of } from 'rxjs/observable/of';
import { Effect, Actions, toPayload } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AccountService } from '../../_services/account.service';
import * as esiid from '../actions/esiid';

@Injectable()
export class ESIIDEffects {

  constructor(private action$: Actions, private accountService: AccountService) { }

  @Effect()
  listESIIDEffects$ = this.action$.ofType(esiid.GET_ESIID_LIST)
    .map(toPayload)
    .switchMap((payload) => this.accountService.listESIIDs(payload)
    .map((esiidList) => {
        return new esiid.GetESIIDListSuccess(esiidList)
    }))
    .catch(() => Observable.of(new esiid.GetESIIDListFailure({})))

}
