import { Component, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../app-state/reducers';
import * as paymentHistoryTypes from '../../app-state/actions/paymenthistory'
import 'rxjs/add/operator/takeUntil'
import { Subject } from "rxjs/Subject";
import * as moment from 'moment'

@Component({
    templateUrl: './modifypay.component.html'
})
export class ModifyPaymentComponent implements OnInit, OnDestroy {

    propertyName$: Observable<any>;

    maskedBankAccountNum: string;
    paymentAmount: string;
    paymentDate: string;
    modifiedDate: string;
    dueDate: string;

    showError: boolean;
    errorMessage: string;

    paymentDateErr: boolean;

    destroy$: Subject<boolean> = new Subject<boolean>();


    constructor(private store: Store<fromRoot.State>, private router: Router) {}

    onContinue(){
        this.showError = false;
        if(undefined != this.modifiedDate && "" != this.modifiedDate){
            this.store.dispatch(new paymentHistoryTypes.UpdatePaymentDateForModifyPayment(this.modifiedDate))
            this.router.navigate(["/protected/customer/billing/modify/verify.htm"])
        }else{
            this.showError = true;
            this.errorMessage = "Please select payment date."
        }
    }

    onDateChange(date){
        if(moment(date, "MM/DD/YYYY").diff(moment(this.dueDate,"MM/DD/YYYY"), "days") > 0){
            this.paymentDateErr = true;
            this.errorMessage = "You have chosen a date that is after the payment due date. You may be charged a late fee or service may be disconnected.";
        }else{
            this.paymentDateErr = false;
            this.errorMessage = "";
        }
        this.modifiedDate = date;
    }

    onBack(){
      this.router.navigate(["/protected/customer/billing/paymenthistory.htm"])
    }

    ngOnInit() {
        this.propertyName$ = this.store.select(fromRoot.getSelectedpropertyName);
        this.store.select(fromRoot.getModifyPaymentInfo).takeUntil(this.destroy$).subscribe(data => {
            this.maskedBankAccountNum = data.maskBankAccount;
            this.paymentDate = data.scheduledCancelDate;
            this.paymentAmount = data.paymentAmount;
        })

        this.store.select(fromRoot.getDueDateForCA).takeUntil(this.destroy$).subscribe(data => {
            if(data.isLoadingSuccess){
              this.dueDate = data.dueDateForCA;
            }
        });
    }

    ngOnDestroy(){
        this.destroy$.next(false);
        this.destroy$.unsubscribe();
    }

}
