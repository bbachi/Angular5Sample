import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent, FullLayout } from './index';
import { DashboardResolve } from '../_resolvers'

const routes: Routes = [
  { path: '', component: FullLayout, children: [
    { path: 'dashboard.htm',
      component: DashboardComponent,
      resolve: {
        dashboard: DashboardResolve
      }
    },
    { path: 'service', loadChildren: 'app/service/multifamily/service.module#MFServiceModule'},
    { path: 'transactions', loadChildren: 'app/transactions/transactions.module#TransactionsModule'},
    { path: 'reports', loadChildren: 'app/reports/reports.module#ReportsModule'},
    { path: 'forms', loadChildren: 'app/forms/forms.module#SSFormsModule'},
    { path: 'vacancy', loadChildren: 'app/monitoring/monitoring.module#MonitoringModule' },
    { path: 'profile', loadChildren: 'app/profile/profile.module#ProfileModule' },
    { path: 'billing', loadChildren: 'app/billing/billing.module#BillingModule' },
    { path: 'cc', loadChildren: 'app/customercare/cc.module#CustomerCareModule' }
  ]}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DashboardRoutingModule { }
