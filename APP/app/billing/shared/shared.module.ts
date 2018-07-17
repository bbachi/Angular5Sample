import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PropertyNameComponent, InvoiceLinkComponent } from './index';
import { FormatContractAccountPipe } from '../../_pipes'

@NgModule({
    imports: [ CommonModule, HttpModule, FormsModule, ReactiveFormsModule ],
    declarations: [
      PropertyNameComponent,
      FormatContractAccountPipe,
      InvoiceLinkComponent
    ],
    exports: [
      FormatContractAccountPipe,
      PropertyNameComponent,
      InvoiceLinkComponent
    ],
    providers:[]
})
export class BillingShareddModule { }
