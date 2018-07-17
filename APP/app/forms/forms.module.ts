import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { EffectsModule } from "@ngrx/effects";
import { FormsComponent } from './index';
import { FormsRoutingModule } from './forms-routing.module'
import { ReportsService } from '../_services/reports.service'
import { SharedModule } from '../shared/shared.module';
import { FormsService } from '../_services/forms.service'
import { FormsEffects } from '../app-state/effects'

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        FormsRoutingModule,
        EffectsModule.forRoot([FormsEffects])
       ],
    declarations: [ FormsComponent ],
    exports: [ FormsComponent ],
    providers:[ FormsService ]
})
export class SSFormsModule { }
