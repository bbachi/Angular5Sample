import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FAQsComponent, OverviewComponent, EmailUsComponent, EmailUsConfirmComponent, HalfLayout } from './index';

const routes:Routes = [
  //{ path: 'faqs.htm', component: HalfLayout, children: [{path: '', component: FAQsComponent},]},
  { path: 'faqs.htm', component: FAQsComponent },
  { path: 'overview.htm', component: OverviewComponent },
  { path: 'emailus.htm', component: EmailUsComponent },
  { path: 'emailconfirm.htm', component: EmailUsConfirmComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CustomerCareRoutingModule { }
