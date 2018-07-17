import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'paymenthistory.htm', loadChildren: 'app/billing/paymenthistory/paymenthistory.module#PaymentHistoryModule' },
  { path: 'previousbills.htm', loadChildren: 'app/billing/previousbills/previousbills.module#PreviousBillsModule' },
  { path: 'modify', loadChildren: 'app/billing/modifypayment/modifypayment.module#ModifyPaymentModule' },
  { path: 'paybill', loadChildren: 'app/billing/paybill/paybill.module#PayBillModule'}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [ RouterModule ]
})

export class BillingRoutingModule { }
