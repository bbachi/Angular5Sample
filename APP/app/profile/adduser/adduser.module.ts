import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { EffectsModule } from "@ngrx/effects";
import { AddUserComponent, AddUserVerifyComponent, AddUserConfirmComponent,
  ConfirmationInfoComponent, RequestDetailsComponent } from './index';
import { AddUserRoutingModule } from './adduser-routing.module';
import { ProfileSharedModule } from '../shared/shared.module';
import { SharedModule } from '../../shared/shared.module';
import { AddUserConfirmResolve } from '../../_resolvers'

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        ProfileSharedModule,
        SharedModule,
        AddUserRoutingModule,
        //EffectsModule.forRoot([FormsEffects])
       ],
    declarations: [
        AddUserComponent,
        AddUserVerifyComponent,
        AddUserConfirmComponent,
        ConfirmationInfoComponent,
        RequestDetailsComponent,
      ],
    exports: [ AddUserComponent,AddUserVerifyComponent, AddUserConfirmComponent ],
    providers:[ AddUserConfirmResolve ]
})
export class AddUserModule { }
