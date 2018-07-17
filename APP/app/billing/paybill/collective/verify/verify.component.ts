import { Component, Input, Output, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../../app-state/reducers';
import * as billingTypes from '../../../../app-state/actions/billing'

@Component({
    templateUrl: './verify.component.html',
    styleUrls: ['./verify.component.css']
})
export class VerifyPayComponent implements OnInit {

  propertyName$: Observable<any>;
  paymentAmount: string;
  paymentDate: string;

  submitPaymentClicked: boolean;

  maskedBankNumber: string;
  nickName: string;
  routingNumber: string;
  fromPCI: boolean;

  caNumber: string;

  constructor(private router: Router, private store: Store<fromRoot.State>){}

  onContinue(){
      this.submitPaymentClicked = true;
      this.router.navigate(['/protected/customer/billing/paybill/collective/confirm.htm'])
  }

  onChangeBankInfo(){
      this.router.navigate(['/protected/customer/billing/paybill/collective/paymentmethod.htm'])
  }

  onBack(){
      if(this.fromPCI){
         this.router.navigate(['/protected/customer/billing/paybill/gmetopci.htm'])
      }else{
         this.router.navigate(['/protected/customer/billing/paybill/collective/paymentmethod.htm'])
      }
  }

  ngOnInit(){
      this.propertyName$ = this.store.select(fromRoot.getSelectedpropertyName);

      this.store.select(fromRoot.getPaymentInfo).subscribe(paymentInfo => {
          if(undefined != paymentInfo && undefined != paymentInfo.collective){
              this.paymentAmount = paymentInfo.collective.paymentAmount;
              this.paymentDate = paymentInfo.collective.paymentDate;
              this.caNumber = paymentInfo.collective.caNumber;
          }
          if(undefined != paymentInfo && undefined != paymentInfo.bank){
              this.nickName = paymentInfo.bank.nickName;
              this.routingNumber = paymentInfo.bank.bankRoutingNumber;
              this.fromPCI = paymentInfo.bank.fromPCI;
              this.maskedBankNumber = paymentInfo.bank.maskBankAccountNumber;
          }
      })
  }

}
