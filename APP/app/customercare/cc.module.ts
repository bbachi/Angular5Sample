import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from "@ngrx/effects";
import { HttpModule } from '@angular/http';
import { FAQsComponent, OverviewComponent, EmailUsComponent, EmailUsConfirmComponent, FAQComponent, HalfLayout } from './index';
import { CustomerCareRoutingModule } from './cc-routing.module'
import { SharedModule } from '../shared/shared.module';
import { CCService } from '../_services/cc.service'
import { CCEffects } from '../app-state/effects'

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        CustomerCareRoutingModule,
        SharedModule,
        EffectsModule.forRoot([CCEffects])
      ],
    declarations: [ FAQsComponent, OverviewComponent, EmailUsComponent, EmailUsConfirmComponent, FAQComponent, HalfLayout ],
    exports: [ FAQsComponent, OverviewComponent, EmailUsComponent, EmailUsConfirmComponent, HalfLayout ],
    providers:[ CCService ]
})
export class CustomerCareModule { }
