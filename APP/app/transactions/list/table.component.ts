import { Component, Input, Output,OnInit, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../app-state/reducers';
import * as transactionTypes from '../../app-state/actions/transactions'
import { SortService } from '../../_services'

@Component({
    selector: 'txn-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css']
})

export class TxnTableComponent implements OnInit {

    constructor(private router: Router, private store: Store<fromRoot.State>, private sortService: SortService) {}

    @Input() txnList: any[];
    @Output() txnDetailEvent = new EventEmitter<any>();

    //for pagination
    allItems: any[];
    totalSize: any;

    onTransactionId(txn: any){
        let Obj = {transactionId:txn.id,txnType:txn.type,txnDate:txn.submissionDate}
        this.txnDetailEvent.emit(Obj)
    }

    onPagination(pagerObj: any){
        this.txnList = this.allItems.slice(pagerObj.rangeStart-1, pagerObj.rangeEnd+1);
    }

    onSorted(event: any){
       this.sortService.sort(this.txnList,event.sortColumn,event.sortDirection);
    }

    ngOnInit(){
        this.allItems = this.txnList;
        this.totalSize = this.allItems.length;
        this.txnList = this.allItems.slice(0, 25);
    }


}
