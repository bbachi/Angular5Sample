import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BaseService } from './base.service';
import * as URL_CONSTS from './urlconstants'

@Injectable()
export class TransactionsService extends BaseService {

    private listTransactionsUrl = URL_CONSTS.LIST_TRANSACTIONS_URL;
    private detailedTransactionUrl = URL_CONSTS.DETAILED_TRANSACTION_URL;

    listTransactions(startDate: string, endDate: string): Observable<any> {
        return super.callAPI(this.listTransactionsUrl,{startDate,endDate});
    }

    getTransactionDtls(inData: any): Observable<any> {
        return super.callAPI(this.detailedTransactionUrl,inData);
    }

}
