import { Component, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../app-state/reducers';
import { BillingService } from '../../_services'
import * as paymentHistoryTypes from '../../app-state/actions/paymenthistory'

@Component({
    templateUrl: './confirm.component.html'
})
export class ModifyPaymentConfirmComponent implements OnInit, OnDestroy {

    propertyName$: Observable<any>;
    confirmData: any;
    email$: Observable<any>;
    modifiedData: any;

    modifiedDataSub: any;
    routeDataSub: any;

    constructor(private store: Store<fromRoot.State>, private route: ActivatedRoute, private billingService: BillingService) {}

    ngOnInit() {
        this.propertyName$ = this.store.select(fromRoot.getSelectedpropertyName);
        this.email$ = this.store.select(fromRoot.getLoggedInUserEmail);

        this.modifiedDataSub = this.store.select(fromRoot.getModifyPaymentInfo).subscribe(data => {
            this.modifiedData = data;
        })

        this.routeDataSub = this.route.data.subscribe(data => {
          console.log(data);
          this.confirmData = data.modifyPayment;
        });
    }

    ngOnDestroy(){
        this.modifiedDataSub.unsubscribe();
        this.routeDataSub.unsubscribe();
    }

}
