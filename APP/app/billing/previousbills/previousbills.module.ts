import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { EffectsModule } from "@ngrx/effects";
import { PreviousBillsComponent, PreviousBillsTableComponent, PreviousBillsSearchComponent } from './index';
import { PreviousBillsRoutingModule } from './previousbills-routing.module';
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
        PreviousBillsRoutingModule,
      ],
    declarations: [
        PreviousBillsComponent,
        PreviousBillsTableComponent,
        PreviousBillsSearchComponent
       ],
    exports: [
        PreviousBillsComponent,
      ],
    providers:[]
})
export class PreviousBillsModule { }
