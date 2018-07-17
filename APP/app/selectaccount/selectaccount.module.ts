import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { EffectsModule } from "@ngrx/effects";
import { InternalAccountComponent, ExternalAccountComponent, ManagementComponent, PropertyComponent, RegionComponent, SelectAccountLayout } from './index';
import { SelectAccountRoutingModule } from './selectaccount-routing.module';
import { AccountService } from '../_services';
import { SharedModule } from '../shared/shared.module';

import { SelectedPropertyEffects, SearchAccountsEffects } from '../app-state/effects'


@NgModule({
    imports: [
      CommonModule,
      HttpModule,
      FormsModule,
      ReactiveFormsModule,
      SharedModule,
      SelectAccountRoutingModule,
      EffectsModule.forRoot([SelectedPropertyEffects,SearchAccountsEffects])],
    declarations: [
      InternalAccountComponent,
      ExternalAccountComponent,
      ManagementComponent,
      PropertyComponent,
      RegionComponent,
      SelectAccountLayout],
    exports: [InternalAccountComponent, ExternalAccountComponent ],
    providers:[ AccountService ]
})
export class SelectAccountModule { }
