import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsComponent } from './index';
//import { FormsResolve } from '../_resolvers/forms.resolve'

const routes: Routes = [
  { path: 'list.htm', component: FormsComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class FormsRoutingModule { }
