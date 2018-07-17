import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentHistoryComponent } from './index';

const routes: Routes = [
  { path: '', component: PaymentHistoryComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [ RouterModule ]
})

export class PaymentHistoryRoutingModule { }
