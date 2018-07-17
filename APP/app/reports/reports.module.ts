import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { EffectsModule } from "@ngrx/effects";
import { VacancyReportComponent, RollReportComponent, SearchComponent, RollInfoComponent, RollTableComponent, VacancySearchComponent, VacancyTableComponent } from './index';
import { ReportsRoutingModule } from './reports-routing.module'
import { ReportsService } from '../_services/reports.service'
import { SharedModule } from '../shared/shared.module';
import { ReportsEffects } from '../app-state/effects'

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        ReportsRoutingModule,
        SharedModule,
        EffectsModule.forRoot([ReportsEffects])
       ],
    declarations: [
      VacancyReportComponent,
      RollReportComponent,
      SearchComponent,
      RollTableComponent,
      VacancySearchComponent,
      VacancyTableComponent,
      RollInfoComponent
    ],
    exports: [ VacancyReportComponent, RollReportComponent ],
    providers:[ReportsService]
})
export class ReportsModule { }
