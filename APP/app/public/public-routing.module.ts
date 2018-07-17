import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PasswordComponent, PublicLayout } from './index';
import { PasswordResetResolve } from '../_resolvers'

const routes: Routes = [
  { path: '', component: PublicLayout, children: [
    { path: 'passwordsetup.htm/:id',
      component: PasswordComponent,
      resolve: {
        passwordReset: PasswordResetResolve
      }
     },
  ]}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PublicRoutingModule { }
