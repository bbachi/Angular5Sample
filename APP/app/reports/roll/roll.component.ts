import { Component, Input, Output, OnInit, EventEmitter, OnDestroy } from '@angular/core';
import { ReportsService } from '../../_services/reports.service';
import * as moment from 'moment';
import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../app-state/reducers';
import 'rxjs/add/operator/publishReplay'
import 'rxjs/add/operator/takeUntil';
import { Subject } from "rxjs/Subject";

@Component({
    templateUrl: './roll.component.html',
    styleUrls: ['./roll.component.css']
})
export class RollReportComponent implements OnInit, OnDestroy  {

    relationshipId: string;
    reportList$: Observable<any>;
    rollType:string;
    propertyName:string;
    dateFormat: string = "MM/DD/YYYY"
    csvName: string = "rollReport"
    csvHeaders: string[];

    reportExecutionDate: string;
    reportPeriod: string;

    destroy$: Subject<boolean> = new Subject<boolean>();

    constructor(private reportsService: ReportsService, private store: Store<fromRoot.State>) {
        Observable.combineLatest(
            store.select(fromRoot.getRelationshipId),
            store.select(fromRoot.getSelectedpropertyName)
        )
        .takeUntil(this.destroy$)
        .subscribe((result: any) => {
             this.relationshipId = result[0];
             this.propertyName = result[1];
        })
    }

    setCSVHeadersAndName(){
        let data = this.reportsService.getCSVHeadersAndName(this.propertyName, this.rollType);
        this.csvHeaders = data.csvHeaders;
        this.csvName = data.csvName;
    }


    onApply(inVar: any){
        let startDate = moment(inVar.fromDate).format(this.dateFormat);
        let endDate = moment(inVar.toDate).format(this.dateFormat);
        this.reportPeriod = startDate+"-"+endDate;
        this.rollType = inVar.rollType;
        this.setCSVHeadersAndName();
        this.getRollReport(startDate,endDate,this.rollType)
    }

    getRollReport(startDate: string, endDate:string, rollType: string) {
        let inData = {fromDate:startDate,toDate:endDate,reportType:rollType,relationshipId:this.relationshipId}
        this.reportList$ = this.reportsService.getRollReport(inData).publishReplay().refCount();
    }

    ngOnInit(){
        let startDate: string = moment().subtract(7, 'days').format((this.dateFormat))
        let endDate: string = moment().format(this.dateFormat)
        this.reportExecutionDate = endDate;
        this.reportPeriod = startDate+"-"+endDate;
        this.rollType = "rollin";
        this.getRollReport(startDate,endDate,this.rollType)
        this.setCSVHeadersAndName();
    }

    ngOnDestroy(){
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }
}
