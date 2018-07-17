import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/withLatestFrom';
import { of } from 'rxjs/observable/of';
import { Effect, Actions, toPayload } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ReportsService } from '../../_services/reports.service';
import * as reportsTypes from '../actions/reports';

@Injectable()
export class ReportsEffects {

  constructor(private action$: Actions, private reportsService: ReportsService) { }

  @Effect()
  vacancyReportEffects$ = this.action$.ofType(reportsTypes.GET_VACANT_REPORT)
    .map(toPayload)
    .switchMap((payload) => this.reportsService.getVacancyReport(payload)
    .map((result) => {
        return new reportsTypes.GetVacantReportSuccess(result)
    }))
    .catch(() => Observable.of(new reportsTypes.GetVacantReportFailure({})))

  @Effect()
  rollReportEffects$ = this.action$.ofType(reportsTypes.GET_ROLL_REPORT)
    .map(toPayload)
    .switchMap((payload) => this.reportsService.getRollReport(payload)
    .map((result) => {
        return new reportsTypes.GetRollReportSuccess(result)
    }))
    .catch(() => Observable.of(new reportsTypes.GetRollReportFailure({})))

}
