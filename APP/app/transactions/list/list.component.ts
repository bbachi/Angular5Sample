import { Component, Input, Output,OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TransactionsService } from '../../_services/transactions.service';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/publishReplay'
import * as fromRoot from '../../app-state/reducers';
import * as transactionTypes from '../../app-state/actions/transactions'

@Component({
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class TransactionsListComponent implements OnInit {

    txnList$: Observable<any>;
    csvName: string = "transactions"
    dateFormat: string = "MM/DD/YYYY"
    csvHeaders: string[] = ["Transaction ID","Requester","Request Submission Date","Activity Type","Service Address","Unit"];

    constructor(private txnService: TransactionsService, private router: Router, private store: Store<fromRoot.State>) {
        let startDate: string = moment().format(this.dateFormat)
        let endDate: string = moment().format(this.dateFormat)
        this.getTransactionList(startDate,endDate)
    }

    onApply(inVar: any){
        let startDate = moment(inVar.fromDate).format(this.dateFormat);
        let endDate = moment(inVar.toDate).format(this.dateFormat);
        this.getTransactionList(startDate,endDate)
    }

    onTransactionDetailId(txnDtlObj){
        this.store.dispatch(new transactionTypes.GetTxnDetails(txnDtlObj))
        this.router.navigate(['/protected/customer/transactions/detail.htm']);
    }

    getTransactionList(startDate: string, endDate:string) {
        this.store.dispatch(new transactionTypes.ListTransactions({startDate,endDate}));
    }

    ngOnInit(){
        this.txnList$ = this.store.select(fromRoot.listTransactions).publishReplay().refCount();
    }

}
