import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { EffectsModule } from "@ngrx/effects";
import { ProfileRoutingModule } from './profile-routing.module'
import { SharedModule } from '../shared/shared.module';
import { ProfileSharedModule } from './shared/shared.module';
import { AddUserModule } from './adduser/adduser.module';
import { UpdateOwnProfileModule } from './updateown/updateown.module'
import { ProfileEffects } from '../app-state/effects/profile.effects'
import { ProfileService } from '../_services/profile.service'
import { UserDetailsResolve, RemoveUserResolve } from '../_resolvers'
import { ProfileOverviewComponent } from './index'


@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        ProfileRoutingModule,
        SharedModule,
        ProfileSharedModule,
        AddUserModule,
        UpdateOwnProfileModule,
        EffectsModule.forRoot([ProfileEffects])
       ],
    declarations: [
      ProfileOverviewComponent
    ],
    exports: [
      ProfileOverviewComponent
    ],
    providers:[ ProfileService, UserDetailsResolve, RemoveUserResolve ]
})
export class ProfileModule { }
