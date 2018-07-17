import { Component, Input, Output, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../../app-state/reducers';
import * as billingTypes from '../../../../app-state/actions/billing'
import 'rxjs/add/operator/publishReplay'

@Component({
    templateUrl: './confirm.component.html',
    styleUrls: ['./confirm.component.css']
})
export class ConfirmPayComponent implements OnInit {

    confirmation$: Observable<any>;

    constructor(private store: Store<fromRoot.State>, private route: ActivatedRoute){}

    ngOnInit(){

      this.confirmation$ = Observable.combineLatest(
              this.store.select(fromRoot.getSelectedpropertyName),
              this.store.select(fromRoot.getPaymentInfo),
              this.store.select(fromRoot.getLoggedInUserEmail),
              this.route.data,
            (selectedpropName,paymentInfo,email,confirm) => {
                return{
                    paymentAmount: paymentInfo.collective.paymentAmount,
                    paymentDate: paymentInfo.collective.paymentDate,
                    caNumber: paymentInfo.collective.caNumber,
                    maskedBankNumber: paymentInfo.bank.maskBankAccountNumber,
                    nickName: paymentInfo.bank.nickName,
                    fromPCI: paymentInfo.bank.fromPCI,
                    routingNumber: paymentInfo.bank.bankRoutingNumber,
                    propertyName: selectedpropName,
                    confirmationNumber: confirm.paymentConfirm.confirmationNumber,
                    submissionDate: confirm.paymentConfirm.submissionDate,
                    paymentSuccess: confirm.paymentConfirm.paymentSuccess,
                    email,
               }
            }).publishReplay().refCount();

    }
}
