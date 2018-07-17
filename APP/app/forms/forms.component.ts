import { Component, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import * as fromRoot from '../app-state/reducers';
import * as formTypes from '../app-state/actions/forms';
import { FormsService, AppConfigService } from '../_services';

@Component({
    templateUrl: './forms.component.html',
    styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit, OnDestroy {

    forms$: Observable<any>;
    relationshipId: string;
    bpType: string;

    initSubs: any;
    downloadRestUrl: string;

    constructor(private store: Store<fromRoot.State>, private formsService: FormsService, private appConfig: AppConfigService) {

        this.initSubs = Observable.combineLatest(
            store.select(fromRoot.getRelationshipIdForStartStopTxn),
            store.select(fromRoot.getSelectedPropertyBPType)
        ).subscribe((result: any) => {
            this.relationshipId = result[0];
            this.bpType = result[1];
        })

        this.downloadRestUrl = this.appConfig.readEnvironment('downloadRestUrl');
    }

    getPDF(pid: string){
       window.open(this.downloadRestUrl+pid)
    }


    ngOnInit() {
        this.store.dispatch(new formTypes.GetForms({relationshipId:this.relationshipId, bpType:this.bpType}))
        this.forms$ = this.store.select(fromRoot.getFormsList);
    }

    ngOnDestroy() {
        this.initSubs.unsubscribe();
    }

}
