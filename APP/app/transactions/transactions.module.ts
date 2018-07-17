import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { EffectsModule } from "@ngrx/effects";
import { TransactionsListComponent, TransactionDetailComponent, SearchComponent, TxnTableComponent,
  BusinessInfoComponent, RequestDetailsComponent, StartServiceComponent, LoginComponent, StopServiceComponent } from './index';
import { TransactionsRoutingModule } from './transactions-routing.module'
import { TransactionsService } from '../_services/transactions.service'
import { SharedModule } from '../shared/shared.module';
import { TransactionEffects } from '../app-state/effects/txn.effects'
import { TxnDetailResolve } from '../_resolvers'

@NgModule({
    imports: [ CommonModule,
               HttpModule,
               FormsModule,
               ReactiveFormsModule,
               TransactionsRoutingModule,
               SharedModule,
               EffectsModule.forRoot([TransactionEffects])
             ],
    declarations: [
        TransactionsListComponent,
        TransactionDetailComponent,
        SearchComponent,
        TxnTableComponent,
        BusinessInfoComponent,
        RequestDetailsComponent,
        StartServiceComponent,
        StopServiceComponent,
        LoginComponent],
    exports: [ TransactionsListComponent, TransactionDetailComponent ],
    providers:[ TransactionsService, TxnDetailResolve ]
})
export class TransactionsModule { }
