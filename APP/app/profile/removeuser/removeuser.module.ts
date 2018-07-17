import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { EffectsModule } from "@ngrx/effects";
import { RemoveUserRoutingModule } from './removeuser-routing.module';
import { ProfileSharedModule } from '../shared/shared.module';
import { SharedModule } from '../../shared/shared.module';
import { PhoneFormatAddExtnPipe } from '../../_pipes/commonutils.pipe'
import {
    RemoveUserComponent,
    RemoveUserVerifyComponent,
    RemoveUserConfirmComponent,
    FieldNameComponent,
    AccessprivlegesComponent
  } from './index';

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        ProfileSharedModule,
        SharedModule,
        RemoveUserRoutingModule,
       ],
    declarations: [
        RemoveUserComponent,
        RemoveUserVerifyComponent,
        RemoveUserConfirmComponent,
        FieldNameComponent,
        AccessprivlegesComponent,
        PhoneFormatAddExtnPipe
      ],
    exports: [ RemoveUserComponent, RemoveUserVerifyComponent, RemoveUserConfirmComponent ],
    providers:[]
})
export class RemoveUserModule { }
