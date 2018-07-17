import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RemoveUserComponent, RemoveUserVerifyComponent, RemoveUserConfirmComponent } from './index';
import { UserDetailsResolve, RemoveUserResolve } from '../../_resolvers';

const routes: Routes = [
  { path: 'search.htm', component: RemoveUserComponent },
  { path: 'userverify.htm',
    component: RemoveUserVerifyComponent,
    resolve: {
      userDetails: UserDetailsResolve
    }
  },
  { path: 'userconfirm.htm', component: RemoveUserConfirmComponent,
      resolve: {
          removeUserConfirm: RemoveUserResolve
      }
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class RemoveUserRoutingModule { }
