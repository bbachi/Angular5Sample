import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { EffectsModule } from "@ngrx/effects";
import { BillingRoutingModule } from './billing-routing.module'
import { PaymentHistoryModule } from './paymenthistory/paymenthistory.module'
import { PreviousBillsModule } from './previousbills/previousbills.module'
import { ReportsService } from '../_services/reports.service'
import { SharedModule } from '../shared/shared.module';
import { BillingService } from '../_services/billing.service'
import { BillingEffects } from '../app-state/effects/billing.effects'
import { BillingShareddModule } from './shared/shared.module'

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        BillingRoutingModule,
        SharedModule,
        BillingShareddModule,
        PaymentHistoryModule,
        PreviousBillsModule,
        EffectsModule.forRoot([BillingEffects])
      ],
    declarations: [],
    exports: [],
    providers:[ BillingService ]
})
export class BillingModule { }
