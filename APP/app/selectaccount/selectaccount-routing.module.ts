import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InternalAccountComponent, ExternalAccountComponent, SelectAccountLayout } from './index';

const routes: Routes = [
  { path: '', component: SelectAccountLayout, children: [
    { path: 'internal.htm', component: InternalAccountComponent },
    { path: 'external.htm', component: ExternalAccountComponent },
  ]}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SelectAccountRoutingModule { }
