import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { EffectsModule } from "@ngrx/effects";
import { MonitoringRoutingModule } from './monitoring-routing.module'
import { SharedModule } from '../shared/shared.module';
import { VUMService } from '../_services/vum.service'
import { VacantUnitDailyReportComponent, VacantUnitAlertSetupComponent, SingleEditModalComponent, FindUnitsComponent, ManageThresholdComponent, DailyReportTableComponent, EmailSetupComponent, EmailComponent, SetThresholdComponent } from './index'
import { VUMEffects } from '../app-state/effects/vum.effects'

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        SharedModule,
        ReactiveFormsModule,
        MonitoringRoutingModule,
        EffectsModule.forRoot([VUMEffects])
      ],
    declarations: [
            VacantUnitDailyReportComponent,
            VacantUnitAlertSetupComponent,
            FindUnitsComponent,
            EmailComponent,
            DailyReportTableComponent,
            EmailSetupComponent,
            SetThresholdComponent,
            SingleEditModalComponent,
            ManageThresholdComponent ],
    exports: [ VacantUnitDailyReportComponent, VacantUnitAlertSetupComponent ],
    providers:[ VUMService ]
})
export class MonitoringModule { }
