import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvoicesComponent, GMEToPCIComponent, PCIToGMEComponent } from './index';

const routes: Routes = [
  { path: 'viewbill.htm', component: InvoicesComponent },
  { path: 'gmetopci.htm', component: GMEToPCIComponent },
  { path: 'pcitogme.htm', component: PCIToGMEComponent },
  { path: 'collective', loadChildren: 'app/billing/paybill/collective/collective.module#PayBillCollectiveModule'},
  //{ path: 'individual', loadChildren: 'app/billing/paybill/individual/individual.module#PayBillIndividualModule'}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [ RouterModule ]
})

export class PayBillRoutingModule { }
