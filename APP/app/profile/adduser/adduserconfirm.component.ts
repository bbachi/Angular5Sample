import { Component, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import * as fromRoot from '../../app-state/reducers';
import * as profileTypes from '../../app-state/actions/profile'

@Component({
    templateUrl: './adduserconfirm.component.html'
})
export class AddUserConfirmComponent implements OnInit, OnDestroy {

    routeSubscription: any;
    showAccessPrivileges: boolean = true;
    showPrivInTable: boolean;

    customerList: any;
    securityRole: string;
    user: any;
    confirmation: any;

    constructor(private store: Store<fromRoot.State>, private route: ActivatedRoute) {}


    ngOnInit() {
        this.routeSubscription = this.route.data.subscribe(routeData => {
            this.customerList = routeData.data.customerList;
            this.securityRole = routeData.data.securityRole;
            this.user = routeData.data.user;
            this.confirmation = routeData.data.confirmation.data;

            if(this.securityRole == 'E_Broker_BRK_ADM'){
                this.showAccessPrivileges = false;
                this.showPrivInTable = true;
            }
        });
    }

    ngOnDestroy(){
        this.store.dispatch(new profileTypes.SaveUserInfo(undefined))
        this.routeSubscription.unsubscribe();
    }

}
