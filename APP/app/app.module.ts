import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
//import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent }  from './app.component';
import { HomeComponent,LoginHeaderComponent, LoginFooterComponent } from './home';
import { PreLoginComponent } from './prelogin/prelogin.component'
import { TermsOfUseComponent, TermsOfUseLayout } from './termsofuse';
import { InActiveUserComponent } from './inactiveuser/inactiveuser.component'
import { ExceptionComponent } from './exception/exception.component'
import { environment } from '../environments/environment'
//feature module imports
import { SharedModule } from './shared/shared.module';
//routing module
import { AppRoutingModule } from './app.router.module'
//configuration module before bootstraping the app
import { AppConfigModule } from './appconfig.module'
import { AppConfigService } from './_services'

//services
import { UserService, SharedService, ModalService, LoggerService } from './_services'

//state related imports
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers, metaReducers } from "./app-state/reducers";
import { CustomRouterStateSerializer } from './app-state/shared/utils';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';

//Session Timeout modules
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive'; // this includes the core NgIdleModule but includes keepalive providers for easy wireup
import { MomentModule } from 'angular2-moment'; // optional, provides moment-style pipes for date formatting

@NgModule({
  imports: [BrowserModule,
            FormsModule,
            ReactiveFormsModule,
            HttpClientModule,
            AppRoutingModule,
            SharedModule,
            //app comfiguration module
            AppConfigModule,
            //for Service ServiceWorkerModule
            //ServiceWorkerModule.register('../ngsw-worker.js', {enabled: true}),
            //Session timeout Modules
            MomentModule,
            NgIdleKeepaliveModule.forRoot(),


          /**
           * StoreModule.forRoot is imported once in the root module, accepting a reducer
           * function or object map of reducer functions. If passed an object of
           * reducers, combineReducers will be run creating your application
           * meta-reducer. This returns all providers for an @ngrx/store
           * based application.
           */
           StoreModule.forRoot(reducers, { metaReducers }),

           /**
           * @ngrx/router-store keeps router state up-to-date in the store.
           */
           StoreRouterConnectingModule,

           /**
           * Store devtools instrument the store retaining past versions of state
           * and recalculating new states. This enables powerful time-travel
           * debugging.
           *
           * To use the debugger, install the Redux Devtools extension for either
           * Chrome or Firefox
           *
           * See: https://github.com/zalmoxisus/redux-devtools-extension
           */
           !environment.production ? StoreDevtoolsModule.instrument() : [],

           /**
           * EffectsModule.forRoot() is imported once in the root module and
           * sets up the effects class to be initialized immediately when the
           * application starts.
           *
           * See: https://github.com/ngrx/platform/blob/master/docs/effects/api.md#forroot
           */
          ],
  declarations: [
        AppComponent,
        PreLoginComponent,
        TermsOfUseComponent,
        InActiveUserComponent,
        ExceptionComponent,
        LoginHeaderComponent,
        HomeComponent,
        LoginFooterComponent,
        TermsOfUseLayout ],
  bootstrap: [ AppComponent ],
  providers: [
    /**
    * The `RouterStateSnapshot` provided by the `Router` is a large complex structure.
    * A custom RouterStateSerializer is used to parse the `RouterStateSnapshot` provided
    * by `@ngrx/router-store` to include only the desired pieces of the snapshot.
    */
   { provide: RouterStateSerializer, useClass: CustomRouterStateSerializer },
   UserService, SharedService, ModalService, LoggerService, AppConfigService ]
})
export class AppModule { }
