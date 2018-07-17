import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/withLatestFrom';
import { of } from 'rxjs/observable/of';
import { Effect, Actions, toPayload } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { VUMService } from '../../_services/vum.service';
import * as vum from '../actions/vum';

@Injectable()
export class VUMEffects {

  constructor(private action$: Actions, private vumService: VUMService) { }

  @Effect()
  vacantDailyReportEffects$ = this.action$.ofType(vum.GET_VACANT_DAILY_REPORT)
    .map(toPayload)
    .switchMap((payload) => this.vumService.getVacantDailyReport(payload)
    .map((dailyReport) => {
        return new vum.GetVacantDailyReportSuccess(dailyReport)
    }))
    .catch(() => Observable.of(new vum.GetVacantDailyReportFailure({})))


  @Effect()
  vumESIIDUpdateEffects$ = this.action$.ofType(vum.UPDATE_ESIID_ATTRIBUTE)
    .map(toPayload)
    .switchMap((payload) => this.vumService.updateESIIDAttribute(payload)
    .map((dailyReport) => {
        return new vum.UpdateESIIDAttributeSuccess(dailyReport)
    }))
    .catch(() => Observable.of(new vum.UpdateESIIDAttributeFailure({})))


  @Effect()
  vumEmailPreferenceEffects$ = this.action$.ofType(vum.UPDATE_EMAIL_PREFERENCE)
    .map(toPayload)
    .switchMap((payload) => this.vumService.updateEmailPreference(payload)
    .map((result) => {
        return new vum.UpdateEmailPreferenceSuccess(result)
    }))
    .catch(() => Observable.of(new vum.UpdateEmailPreferenceFailure({})))

}
