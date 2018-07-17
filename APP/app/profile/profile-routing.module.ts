import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileOverviewComponent } from './index';
import { UserDetailsResolve, RemoveUserResolve } from '../_resolvers';

const routes: Routes = [
  { path: 'overview.htm', component: ProfileOverviewComponent },
  { path: 'adduser', loadChildren: 'app/profile/adduser/adduser.module#AddUserModule' },
  { path: 'remove', loadChildren: 'app/profile/removeuser/removeuser.module#RemoveUserModule' },
  { path: 'update', loadChildren: 'app/profile/updateuser/updateuser.module#UpdateUserModule' },
  { path: 'ownprofile', loadChildren: 'app/profile/updateown/updateown.module#UpdateOwnProfileModule' }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [ RouterModule ]
})

export class ProfileRoutingModule { }
