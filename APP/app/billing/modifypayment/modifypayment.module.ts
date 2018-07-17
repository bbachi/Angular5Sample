import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { EffectsModule } from "@ngrx/effects";
import { ModifyPaymentComponent, ModifyPaymentVerifyComponent, ModifyPaymentConfirmComponent, RequestDetailsComponent } from './index';
import { ModifyPaymentRoutingModule } from './modifypayment-routing.module'
import { SharedModule } from '../../shared/shared.module';
import { BillingService } from '../../_services/billing.service'
import { BillingShareddModule } from '../shared/shared.module'
import { ModifyPaymentResolve } from '../../_resolvers'

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        ModifyPaymentRoutingModule,
        SharedModule,
        BillingShareddModule
      ],
    declarations: [
        ModifyPaymentComponent,
        ModifyPaymentVerifyComponent,
        ModifyPaymentConfirmComponent,
        RequestDetailsComponent
       ],
    exports: [
        ModifyPaymentComponent,
        ModifyPaymentVerifyComponent,
        ModifyPaymentConfirmComponent
      ],
    providers:[ BillingService, ModifyPaymentResolve ]
})
export class ModifyPaymentModule { }
