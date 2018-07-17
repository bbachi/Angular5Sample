import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/withLatestFrom';
import { of } from 'rxjs/observable/of';
import { Effect, Actions, toPayload } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TransactionsService } from '../../_services/transactions.service';
import * as transactions from '../actions/transactions';

@Injectable()
export class TransactionEffects {

  constructor(private action$: Actions, private txnService: TransactionsService) { }

  @Effect()
  txnEffects$ = this.action$.ofType(transactions.LIST_TXNS)
    .map(toPayload)
    .switchMap((payload) => this.txnService.listTransactions(payload.startDate, payload.endDate)
    .map((txns) => {
        return new transactions.ListTransactionsSuccess(txns)
    }))
    .catch(() => Observable.of(new transactions.ListTransactionsFilure({})))


  @Effect()
  txnDetailEffects$ = this.action$.ofType(transactions.GET_TXN_DETAILS)
    .map(toPayload)
    .switchMap((payload) => this.txnService.getTransactionDtls(payload)
    .map((txnDtl) => {
        return new transactions.GetTxnDetailsSuccess(txnDtl)
    }))
    .catch(() => Observable.of(new transactions.GetTxnDetailsFilure({})))
}
