import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/withLatestFrom';
import { of } from 'rxjs/observable/of';
import { Effect, Actions, toPayload } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AccountService } from '../../_services/account.service';
import * as selectedproperty from '../actions/selectedproperty';

@Injectable()
export class SelectedPropertyEffects {

  constructor(private action$: Actions, private accountService: AccountService) { }

  @Effect()
  getSelectedpropertyEffects$ = this.action$.ofType(selectedproperty.GET_SELECTED_PROPERTY_DTLS)
    .map(toPayload)
    .switchMap((payload) => this.accountService.getCustomerDetails(payload)
    .map((dtls) => {
        return new selectedproperty.GetSelectedPropertyDetailsSuccess(dtls)
    }))
    .catch(() => Observable.of(new selectedproperty.GetSelectedPropertyDetailsFailure({})))

}
