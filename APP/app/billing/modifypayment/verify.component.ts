import { Component, Input, Output, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../app-state/reducers';
import { BillingService } from '../../_services'
import * as paymentHistoryTypes from '../../app-state/actions/paymenthistory'
import 'rxjs/add/operator/takeUntil';
import { Subject } from "rxjs/Subject";

@Component({
    templateUrl: './verify.component.html'
})
export class ModifyPaymentVerifyComponent {

    propertyName$: Observable<any>;
    modifiedData: any;
    relationshipId: string;

    modifyPaymentClicked: boolean;
    modifyDataSub: any;

    email: string;
    bpName: string;

    destroy$: Subject<boolean> = new Subject<boolean>();

    constructor(private store: Store<fromRoot.State>, private router: Router, private billingService: BillingService) {
          store.select(fromRoot.getLoggedInUserEmail).takeUntil(this.destroy$).subscribe(email => this.email = email);
          store.select(fromRoot.getSelectedpropertyName).takeUntil(this.destroy$).subscribe(bpName => this.bpName = bpName);
    }

    onModifyPayment(){
        this.modifyPaymentClicked = true;
        this.modifyDataSub.unsubscribe();
        let modifiedData: any = this.billingService.getModifiedPaymentData(this.modifiedData);
        modifiedData.email = this.email;
        modifiedData.bpName = this.bpName;
        this.store.dispatch(new paymentHistoryTypes.UpdatePaymentInfoForModifyPayment(modifiedData))
        this.router.navigate(["/protected/customer/billing/modify/confirm.htm"])
    }

    onBack(){
        this.router.navigate(["/protected/customer/billing/modify/payment.htm"])
    }

    ngOnInit() {
        this.propertyName$ = this.store.select(fromRoot.getSelectedpropertyName);

        this.modifyDataSub = this.store.select(fromRoot.getModifyPaymentInfo).subscribe(data => {
            this.modifiedData = data;
        })
    }

    ngOnDestroy(){
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }
}
