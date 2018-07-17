import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VacancyReportComponent, RollReportComponent } from './index';

const routes: Routes = [
  { path: 'vacancy.htm', component: VacancyReportComponent },
  { path: 'roll.htm', component: RollReportComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ReportsRoutingModule { }
