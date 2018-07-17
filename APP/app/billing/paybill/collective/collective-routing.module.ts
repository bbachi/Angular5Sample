import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfirmPayComponent, VerifyPayComponent, StoredBankComponent } from './index';
import { PaymentMethodsResolve, SubmitPaymentResolve } from '../../../_resolvers'

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'paymentmethod.htm',
      component: StoredBankComponent,
      resolve: {
        paymentMethods: PaymentMethodsResolve
      }
    },
    { path: 'verify.htm', component: VerifyPayComponent },
    { path: 'confirm.htm',
      component: ConfirmPayComponent,
      resolve: {
        paymentConfirm: SubmitPaymentResolve
      }
    },
  ])],
  exports: [ RouterModule ]
})

export class PayBillCollectiveRoutingModule { }
