import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { EffectsModule } from "@ngrx/effects";
import { InvoicesComponent, CollectiveInvoiceComponent, NoBalanceComponent, GMEToPCIComponent, PCIToGMEComponent } from './index';
import { PayBillRoutingModule } from './paybill-routing.module'
import { SharedModule } from '../../shared/shared.module';
import { BillingService } from '../../_services/billing.service'
import { PremiseTypePipe } from '../../_pipes'
//import { FormatContractAccountPipe } from '../../_pipes'
import { PastDueDirective } from '../../_directives'
import { BillingShareddModule } from '../shared/shared.module'
import { SubmitPaymentResolve } from '../../_resolvers'
import { CookieService } from 'ngx-cookie-service';

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        PayBillRoutingModule,
        SharedModule,
        BillingShareddModule
      ],
    declarations: [
        InvoicesComponent,
        CollectiveInvoiceComponent,
        NoBalanceComponent,
        GMEToPCIComponent,
        PCIToGMEComponent,
        PremiseTypePipe,
        //FormatContractAccountPipe,
        PastDueDirective
    ],
    exports: [ InvoicesComponent, GMEToPCIComponent, PCIToGMEComponent ],
    providers:[ BillingService, SubmitPaymentResolve, CookieService ]
})
export class PayBillModule { }
