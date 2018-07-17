import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { EffectsModule } from "@ngrx/effects";
import { PaymentHistoryComponent, PaymentHistoryTableComponent, SearchComponent, CancelPaymentModalComponent } from './index';
import { PaymentHistoryRoutingModule } from './paymenthistory-routing.module';
import { BillingShareddModule } from '../shared/shared.module'
import { SharedModule } from '../../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        SharedModule,
        ReactiveFormsModule,
        BillingShareddModule,
        PaymentHistoryRoutingModule,
      ],
    declarations: [
        PaymentHistoryComponent,
        PaymentHistoryTableComponent,
        SearchComponent,
        CancelPaymentModalComponent
       ],
    exports: [
        PaymentHistoryComponent,
      ],
    providers:[]
})
export class PaymentHistoryModule { }
