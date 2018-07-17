import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransactionsListComponent, TransactionDetailComponent } from './index';
import { TxnDetailResolve } from '../_resolvers'

const routes: Routes = [
  { path: 'list.htm', component: TransactionsListComponent },
  { path: 'detail.htm',
    component: TransactionDetailComponent,
    resolve: {
        txnDetail: TxnDetailResolve
    }
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class TransactionsRoutingModule { }
