import { Component, Input, Output, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../../app-state/reducers';
import * as billingTypes from '../../../../app-state/actions/billing'
import 'rxjs/add/operator/publishReplay'
import { BillingService } from '../../../../_services'

@Component({
    templateUrl: './storedbank.component.html',
    styleUrls: ['./storedbank.component.css']
})
export class StoredBankComponent implements OnInit {

    storedAccounts: any[];
    propertyName$: Observable<any>;
    collectiveInfo: any;
    relationshipId: string;

    isBankNotSelected: boolean = true;
    showError: boolean = false;
    paymentAmountError: boolean = false;
    errorMessage: string = "Payment Information is required.";
    isDateChanged: boolean = false;
    newBankSelected: boolean = false;

    constructor(private router: Router, private route: ActivatedRoute,
      private store: Store<fromRoot.State>, private billingService: BillingService){}

    onContinue(){
        if(this.paymentAmountError){
            this.showError = true;
        }else{
          if(!this.isBankNotSelected){
             this.showError = false;
             if(this.newBankSelected){
                this.router.navigate(['/protected/customer/billing/paybill/gmetopci.htm'])
             }else{
                this.router.navigate(['/protected/customer/billing/paybill/collective/verify.htm'])
             }
          }else{
              this.showError = true;
              this.errorMessage = "Payment Information is required."
          }
       }
   }

    onBack(){
        this.router.navigate(['/protected/customer/billing/paybill/viewbill.htm']);
    }

    onPaymentInfoChange(paymentInfo){
        if(undefined != paymentInfo.paymentDate){
           this.isDateChanged = true;
        }
        if(undefined != paymentInfo.paymentAmount){
           this.checkForPaymentAmount(paymentInfo.paymentAmount)
        }
        this.store.dispatch(new billingTypes.UpdateCollectivePaymentInfo(paymentInfo))
    }

    checkForPaymentAmount(paymentAmount: string){
        let regexp = /^\d+\.\d{0,2}$/;
        if("" == paymentAmount || parseFloat(paymentAmount) < 1.01){
            this.paymentAmountError = true;
            this.showError = true;
            this.errorMessage = "Payment Amount should be minimum 1.01."
        }else if(!regexp.test(paymentAmount)){
            this.paymentAmountError = true;
            this.showError = true;
            this.errorMessage = "Enter an amount that includes a decimal point in the following format #.##."
        }else{
            this.showError = false;
            this.errorMessage = ""
            this.paymentAmountError = false;
        }
    }

    onSelectedBankAccount(selectedBank: any){
        this.isBankNotSelected = false;
        this.newBankSelected = false;
        this.store.dispatch(new billingTypes.SaveBankInfo(this.billingService.getBankInfoForStore(selectedBank)))
    }

    onNewBankAccount(event: any){
        this.isBankNotSelected = false;
        this.newBankSelected = event.newBank;
    }

    onDeleteBankAccount(toDeleteBank: any){
        let toDelete: any = this.billingService.getSelectedBankDetails(toDeleteBank.nickName, this.storedAccounts);
        toDelete.relationshipId = this.relationshipId;
        this.store.dispatch(new billingTypes.DeletePaymentMethod(toDelete))

        this.store.select(fromRoot.getPaymentMethods).subscribe((result:any) => {
            this.storedAccounts = result.paymentMethods;
            this.redirectToPCIIfNoStoredPaymentMethods(this.storedAccounts, true)
        });
    }

    redirectToPCIIfNoStoredPaymentMethods(storedAccounts: any, fromDelete: boolean){
        if(storedAccounts.length > 0){
            if(!fromDelete){
              this.propertyName$ = this.store.select(fromRoot.getSelectedpropertyName);
              this.store.select(fromRoot.getRelationshipId).subscribe(id => this.relationshipId = id)
              this.store.select(fromRoot.getPaymentInfo).subscribe(data => {
                  this.collectiveInfo = {...data.collective}
              })
            }
        }else{
            this.router.navigate(['/protected/customer/billing/paybill/gmetopci.htm'])
        }
    }

    ngOnInit(){
        this.route.data.subscribe((data:any) => {
          this.storedAccounts = data.paymentMethods;
          this.redirectToPCIIfNoStoredPaymentMethods(this.storedAccounts, false)
        })
    }

}
