import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent, AddUserVerifyComponent, AddUserConfirmComponent, } from './index';
import { AddUserConfirmResolve } from '../../_resolvers'

const routes: Routes = [
  { path: 'info.htm', component: AddUserComponent },
  { path: 'verify.htm', component: AddUserVerifyComponent },
  { path: 'confirm.htm',
    component: AddUserConfirmComponent,
    resolve: {
        data: AddUserConfirmResolve
    }
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AddUserRoutingModule { }
