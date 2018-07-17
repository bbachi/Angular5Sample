import { Component, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import * as fromRoot from '../../app-state/reducers';
import * as paymentHistoryTypes from '../../app-state/actions/paymenthistory'
import * as billingTypes from '../../app-state/actions/billing'
import { ModalService, BillingService } from '../../_services'
import * as moment from 'moment';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/publishReplay'
import 'rxjs/add/operator/takeUntil'
import { Subject } from "rxjs/Subject";
import { Observable } from 'rxjs/Rx';

@Component({
    templateUrl: './paymenthistory.component.html',
    styleUrls: ['./paymenthistory.component.css']
})
export class PaymentHistoryComponent implements OnInit, OnDestroy  {

    paymentHistory$: Observable<any>;
    propertyName$: Observable<any>;
    contractAccountList$:Observable<any>;
    cancelPaymentInfo: any;
    loggedInUserEmail: string;
    propertyName: string;

    fromDate: string = moment().subtract(1, 'months').format("MM/DD/YYYY");
    toDate: string = moment().format("MM/DD/YYYY");

    destroy$: Subject<boolean> = new Subject<boolean>();

    constructor(private store: Store<fromRoot.State>,private modalService: ModalService,private router: Router) {
        store.select(fromRoot.getNONCAARealBPList).takeUntil(this.destroy$).subscribe(bpNumberList => {
            this.store.dispatch(new billingTypes.GetContractAccountList({bpNumberList}))
        });

        store.select(fromRoot.getLoggedInUserEmail).takeUntil(this.destroy$).subscribe(loggedInUserEmail => {
            this.loggedInUserEmail = loggedInUserEmail;
        });

        store.select(fromRoot.getSelectedpropertyName).takeUntil(this.destroy$).subscribe(propertyName => {
            this.propertyName = propertyName;
        });
    }

    onCancelPayment(inData) {
        this.cancelPaymentInfo = inData;
        this.modalService.open("cancel-payment")
    }

    onCancelPaymentEvent(cancelData){
        let cancelPayObj:any = {bankAccountNum:cancelData.bankAccNum,paymentId:cancelData.paymentID,paymentAmount:cancelData.paymentAmount,bpName:this.propertyName,
          caNumber:cancelData.accountNumber,cancelDate:cancelData.scheduledCancelDate,maskBankAccountNumber:cancelData.maskBankAccount,email:this.loggedInUserEmail}
        this.store.dispatch(new paymentHistoryTypes.CancelPayment(cancelPayObj))

        this.store.select(fromRoot.getCancelpaymentStatus).takeUntil(this.destroy$).subscribe(data => {
            if(data.isLoadingSuccess){
                if(data.status.status == "Y"){
                    let updateObj = {...cancelPayObj};
                    this.store.dispatch(new paymentHistoryTypes.UpdatePaymentHistory(updateObj))
                }
            }
        })
    }

    onModifyPayment(inData){
        this.store.dispatch(new paymentHistoryTypes.GetDuedateForCA({caNumber:inData.accountNumber}))
        this.store.dispatch(new paymentHistoryTypes.SavePaymentInfoForModifyPayment(inData))
        this.router.navigate(['/protected/customer/billing/modify/payment.htm'])
    }

    onApply(inVar){
        let startDate = moment(inVar.fromDate).format("MM/DD/YYYY");
        let endDate = moment(inVar.toDate).format("MM/DD/YYYY");
        this.getPaymentHistory(inVar.contractAccountNumber,inVar.bpNumber,startDate,endDate);
    }

    getPaymentHistory(contractAccNumber,bpNumber,startDate,endDate){
        this.store.dispatch(new paymentHistoryTypes.GetPaymentHistory({contractAccNumber,bpNumber,startDate,endDate}));
        this.paymentHistory$ = this.store.select(fromRoot.getPaymentHistoryList).publishReplay().refCount();
    }

    ngOnInit() {
        this.contractAccountList$ = this.store.select(fromRoot.getContractAccounts).publishReplay().refCount();
        this.propertyName$ = this.store.select(fromRoot.getSelectedpropertyName);
    }

    ngOnDestroy(){
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }

}
