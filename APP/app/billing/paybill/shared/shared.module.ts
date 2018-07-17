import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoredBankHolderComponent, PaymentInfoInputComponent, DeletePaymentProfileModalComponent, BankInformationComponent } from './index';
import { SharedModule } from '../../../shared/shared.module';
//import { FormatContractAccountPipe } from '../../../_pipes'
import { TwoDecimalPipe } from '../../../_pipes'

@NgModule({
    imports: [ CommonModule, HttpModule, FormsModule, SharedModule, ReactiveFormsModule ],
    declarations: [
      StoredBankHolderComponent,
      PaymentInfoInputComponent,
      DeletePaymentProfileModalComponent,
      BankInformationComponent,
      TwoDecimalPipe
      //FormatContractAccountPipe,
    ],
    exports: [
      StoredBankHolderComponent,
      PaymentInfoInputComponent,
      DeletePaymentProfileModalComponent,
      BankInformationComponent,
      TwoDecimalPipe
      //FormatContractAccountPipe
    ],
    providers:[]
})
export class PayBillShareddModule { }
