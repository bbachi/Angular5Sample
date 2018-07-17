import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/withLatestFrom';
import { of } from 'rxjs/observable/of';
import { Effect, Actions, toPayload } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { FormsService } from '../../_services/forms.service';
import * as formTypes from '../actions/forms';

@Injectable()
export class FormsEffects {

  constructor(private action$: Actions, private formsService: FormsService) { }

  @Effect()
  vacantDailyReportEffects$ = this.action$.ofType(formTypes.GET_FORMS)
    .map(toPayload)
    .switchMap((payload) => this.formsService.listForms(payload)
    .map((result) => {
        return new formTypes.GetFormsSuccess(result)
    }))
    .catch(() => Observable.of(new formTypes.GetFormsFailure({})))

}
