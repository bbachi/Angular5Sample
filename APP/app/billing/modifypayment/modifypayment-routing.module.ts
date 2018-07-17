import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModifyPaymentComponent, ModifyPaymentVerifyComponent, ModifyPaymentConfirmComponent } from './index';
import { ModifyPaymentResolve } from '../../_resolvers'

const routes: Routes = [
  { path: 'payment.htm', component: ModifyPaymentComponent },
  { path: 'verify.htm', component: ModifyPaymentVerifyComponent },
  { path: 'confirm.htm',
    component: ModifyPaymentConfirmComponent,
    resolve: {
      modifyPayment: ModifyPaymentResolve
    }
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [ RouterModule ]
})

export class ModifyPaymentRoutingModule { }
