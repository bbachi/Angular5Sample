import { Component, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { ReportsService } from '../../_services/reports.service';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../app-state/reducers';
import * as reportsTypes from '../../app-state/actions/reports';
import { Observable } from 'rxjs/Observable';
import * as moment from 'moment';
import 'rxjs/add/operator/takeUntil';
import { Subject } from "rxjs/Subject";

@Component({
    templateUrl: './vacancy.component.html',
    styleUrls: ['./vacancy.component.css']
})
export class VacancyReportComponent implements OnInit, OnDestroy {


    relationshipId: string;
    isLoading: boolean = false;
    isLoadingSuccess: boolean = false;
    isLoadingFailure: boolean = false;
    type: string ="All";
    reportList: any[];
    //reportlistCsv:any[];
    dateFormat: string = "MM/DD/YYYY"
    propertyName: string;
    csvName: string;

    destroy$: Subject<boolean> = new Subject<boolean>();

    csvHeaders: string[] = ["Service Address","Unit","Change Date","Days in Current State","State of Unit"];

    constructor(private reportsService: ReportsService, private store: Store<fromRoot.State>) {

        Observable.combineLatest(
            store.select(fromRoot.getRelationshipId),
            store.select(fromRoot.getSelectedpropertyName)
        )
        .takeUntil(this.destroy$)
        .subscribe((result: any) => {
            this.relationshipId = result[0];
            this.store.dispatch(new reportsTypes.GetVacantReport({relationshipId:this.relationshipId}))
            this.propertyName = result[1];
        });
   }

    onApply(inVar: any){
        this.isLoading = true;
        this.isLoadingSuccess = false;
        this.store.select(fromRoot.getStoredVacancyReport).takeUntil(this.destroy$).subscribe(data => {
            let vacantData = this.reportsService.processVacantDataOnApply(data,inVar);
            this.reportList = vacantData.reportList;
            this.isLoadingSuccess = vacantData.isLoadingSuccess;
            this.isLoading = vacantData.isLoading;
            this.isLoadingFailure = vacantData.isLoadingFailure;
        })
    }

    getVacancyReport(stateType: string) {
        this.store.select(fromRoot.getVacancyReport).takeUntil(this.destroy$).subscribe(resp => {
            this.isLoading = resp.isLoading;
            this.isLoadingSuccess = resp.isLoadingSuccess;
            this.reportList = resp.vacancyReportList;
            this.isLoadingFailure = (undefined != resp.vacancyReportList && !(resp.vacancyReportList.length > 0));
        })
    }

    ngOnInit(){
        this.getVacancyReport(this.type)
        this.csvName = this.propertyName+"_"+moment().format(this.dateFormat)+"__VacancyReport"
    }

    ngOnDestroy(){
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }
}
