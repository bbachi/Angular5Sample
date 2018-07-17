import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PasswordResetComponent, PublicHeaderComponent, PublicFooterComponent, PublicLayout, ExpiredComponent, PasswordComponent } from './index';
import { PublicRoutingModule } from './public-routing.module'
import { ProfileService } from '../_services/profile.service'
import { SharedModule } from '../shared/shared.module'
import { PasswordResetResolve } from '../_resolvers'

@NgModule({
    imports: [ CommonModule, HttpModule, FormsModule, ReactiveFormsModule, SharedModule, PublicRoutingModule ],
    declarations: [ PasswordResetComponent, PublicFooterComponent, PublicHeaderComponent, PublicLayout, ExpiredComponent, PasswordComponent ],
    exports: [ PasswordResetComponent, PublicFooterComponent, PublicHeaderComponent, PublicLayout  ],
    providers:[ ProfileService, PasswordResetResolve ]
})
export class PublicModule { }
