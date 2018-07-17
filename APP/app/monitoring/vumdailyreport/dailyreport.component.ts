import { Component, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../app-state/reducers';
import * as vumTypes from '../../app-state/actions/vum'
import 'rxjs/add/operator/publishReplay'
import { Subscription } from "rxjs/Subscription";

@Component({
    templateUrl: './dailyreport.component.html',
    //styleUrls: ['./forms.component.css']
})
export class VacantUnitDailyReportComponent implements OnInit, OnDestroy {

    dailyReportList$: Observable<any>;
    csvName: string = "dailyreport"
    relationshipId: string;
    relationshipIdSubs: Subscription;
    csvHeaders: string[] = ["Date","Address","ESI ID","kWh","Threshold","Consecutive Days on Report","Unit Type"];

    constructor(private store: Store<fromRoot.State>) {
        this.relationshipIdSubs = store.select(fromRoot.getRelationshipId).subscribe(id => this.relationshipId = id)
    }

    onChangeReportDate(inVar){
        this.getVacantDailyReportList(inVar.reportDate);
    }

    getVacantDailyReportList(reportDate: string){
        this.store.dispatch(new vumTypes.GetVacantDailyReport({reportDate,relationshipId:this.relationshipId}));
        this.dailyReportList$ = this.store.select(fromRoot.getVacantDailyReport).publishReplay().refCount();
    }

    ngOnInit() {

    }

    ngOnDestroy(){
        this.relationshipIdSubs.unsubscribe();
    }

}
