import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VacantUnitAlertSetupComponent, VacantUnitDailyReportComponent } from './index';

const routes: Routes = [
  { path: 'alertsetup.htm', component: VacantUnitAlertSetupComponent },
  { path: 'dailyreport.htm', component: VacantUnitDailyReportComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [ RouterModule ]
})

export class MonitoringRoutingModule { }
