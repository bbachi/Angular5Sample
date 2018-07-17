import { Component, Input, Output, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { BillingService } from '../../../_services'
import * as fromRoot from '../../../app-state/reducers';
import * as billingTypes from '../../../app-state/actions/billing'
import 'rxjs/add/operator/publishReplay'

@Component({
    templateUrl: './invoices.component.html',
    styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit  {


    invoices$: Observable<any>;
    propertyName$: Observable<any>;

    constructor(private router: Router, private store: Store<fromRoot.State>, private billingService: BillingService) {
        this.store.select(fromRoot.getNONCAARealBPList).subscribe(nonCAABPList => {
            this.store.dispatch(new billingTypes.GetBillingInvoiceList({nonCAABPList}));
        })
    }

    onPayBill(invoice,invoiceType){

        if(invoiceType == 'C'){
            this.store.dispatch(new billingTypes.SaveCollectivePaymentInfo(this.billingService.getCollectivePaymentInfo(invoice)))
            this.router.navigate(['/protected/customer/billing/paybill/collective/paymentmethod.htm'])
        }else{
            this.store.dispatch(new billingTypes.SetIndividualInvoiceList({accountType:invoice.accountType}))
            this.router.navigate(['/protected/customer/billing/paybill/individual/invoicelist.htm'])
        }
    }

    ngOnInit(){
        this.invoices$ = this.store.select(fromRoot.getBillingInvoices).publishReplay().refCount();
        this.propertyName$ = this.store.select(fromRoot.getSelectedpropertyName);
    }
}
