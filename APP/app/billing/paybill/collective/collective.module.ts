import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { EffectsModule } from "@ngrx/effects";
import { ConfirmPayComponent, VerifyPayComponent, StoredBankComponent, CollectiveInfoComponent } from './index';
import { PayBillCollectiveRoutingModule } from './collective-routing.module'
import { SharedModule } from '../../../shared/shared.module';
import { BillingService } from '../../../_services/billing.service'
import { PayBillShareddModule } from '../shared/shared.module';
import { PaymentMethodsResolve } from '../../../_resolvers'
import { BillingShareddModule } from '../../shared/shared.module'


@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        PayBillCollectiveRoutingModule,
        SharedModule,
        PayBillShareddModule,
        BillingShareddModule,
      ],
    declarations: [
        ConfirmPayComponent,
        VerifyPayComponent,
        StoredBankComponent,
        CollectiveInfoComponent,
        ],
    exports: [ ConfirmPayComponent, VerifyPayComponent, StoredBankComponent ],
    providers:[ BillingService, PaymentMethodsResolve ]
})
export class PayBillCollectiveModule { }
