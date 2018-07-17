import { NgModule } from '@angular/core';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PreLoginComponent } from './prelogin/prelogin.component';
import { TermsOfUseComponent, TermsOfUseLayout } from './termsofuse/index';
import { InActiveUserComponent } from './inactiveuser/inactiveuser.component';
import { ExceptionComponent } from './exception/exception.component'

export const routes: Routes = [
  { path: 'protected/home.htm', component: HomeComponent},
  { path: 'protected/prelogin.htm/:userName', component: PreLoginComponent},
  { path: 'protected/termsofuse.htm', component: TermsOfUseLayout, children: [{path: ':userName', component: TermsOfUseComponent},]},
  { path: 'protected/inactiveuser.htm', component: TermsOfUseLayout, children: [{path: '', component: InActiveUserComponent},]},
  { path: 'protected/error.htm/:errorCode', component: TermsOfUseLayout, children: [{path: '', component: ExceptionComponent},]},
  { path: 'protected/selectaccount', loadChildren: 'app/selectaccount/selectaccount.module#SelectAccountModule' },
  { path: 'protected/customer', loadChildren: 'app/dashboard/dashboard.module#DashboardModule' },
  { path: 'public', loadChildren: 'app/public/public.module#PublicModule' },
  { path: '',  redirectTo: '/home.htm', pathMatch: 'full' },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
