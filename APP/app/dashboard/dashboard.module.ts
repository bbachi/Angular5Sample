import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { EffectsModule } from "@ngrx/effects";
import { DashboardComponent, FullLayout, SelectedPropertyComponent, AccountComponent, ViewMetersComponent, BalanceInfoComponent,
    CustomerDtlsComponent, CorrespondenceComponent, ESIIDMetersTableComponent, FieldNameComponent } from './index';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { AccountService, BillingService } from '../_services';
import { DashboardResolve } from '../_resolvers'
import { SharedModule } from '../shared/shared.module';
import { ESIIDEffects, SelectedPropertyEffects, BalanceEffects } from '../app-state/effects'


@NgModule({
    imports: [
      CommonModule,
      HttpModule,
      FormsModule,
      ReactiveFormsModule,
      SharedModule,
      DashboardRoutingModule,
      EffectsModule.forRoot([ESIIDEffects, SelectedPropertyEffects, BalanceEffects])
     ],
    declarations: [
      DashboardComponent,
      FullLayout,
      SelectedPropertyComponent,
      AccountComponent,
      ViewMetersComponent,
      BalanceInfoComponent,
      CustomerDtlsComponent,
      CorrespondenceComponent,
      ESIIDMetersTableComponent,
      FieldNameComponent
     ],
    exports: [ DashboardComponent, SelectedPropertyComponent ],
    providers:[ AccountService, DashboardResolve, BillingService ]
})
export class DashboardModule { }
