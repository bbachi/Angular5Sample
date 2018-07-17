import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreviousBillsComponent } from './index';

const routes: Routes = [
  { path: '', component: PreviousBillsComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [ RouterModule ]
})

export class PreviousBillsRoutingModule { }
