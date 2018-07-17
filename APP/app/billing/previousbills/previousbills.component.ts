import { Component, Input, Output, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../app-state/reducers';
import * as previousbillsTypes from '../../app-state/actions/previousbills'
import * as billingTypes from '../../app-state/actions/billing'

@Component({
    templateUrl: './previousbills.component.html',
    styleUrls: ['./previousbills.component.css']
})
export class PreviousBillsComponent implements OnInit  {

    previousbills$: Observable<any>;
    contractAccountList$:Observable<any>;
    contractAccountList: any;
    propertyName$: Observable<any>;

    selectedCANumber: string;


    constructor(private store: Store<fromRoot.State>) {
        store.select(fromRoot.getNONCAARealBPList).subscribe(bpNumberList => {
            this.store.dispatch(new billingTypes.GetContractAccountList({bpNumberList}))
        });
    }

    onApply(inVar){
        let contractAccNumber = inVar.contractAccNumber;
        let accountType = inVar.accountType;
        this.getPreviousBills(contractAccNumber,accountType);
    }

    getPreviousBills(contractAccNumber,accountType){
        this.selectedCANumber = contractAccNumber; 
        this.store.dispatch(new previousbillsTypes.GetPreviousBills({contractAccNumber, accountType}));
        this.previousbills$ = this.store.select(fromRoot.getPreviousBills);
    }

    ngOnInit() {
        this.contractAccountList$ = this.store.select(fromRoot.getContractAccounts);
        this.propertyName$ = this.store.select(fromRoot.getSelectedpropertyName);
    }

}
