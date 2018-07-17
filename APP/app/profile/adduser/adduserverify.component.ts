import { Component, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ProfileService } from '../../_services'
import * as fromRoot from '../../app-state/reducers';
import * as profileTypes from '../../app-state/actions/profile'
import * as loggedInUserTypes from '../../app-state/actions/loggedinuser'
import * as _ from 'lodash'
import { Subject } from "rxjs/Subject";
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/takeUntil';

@Component({
    templateUrl: './adduserverify.component.html',
    //styleUrls: ['./forms.component.css']
})
export class AddUserVerifyComponent implements OnInit, OnDestroy {

    public userInfo$: Observable<any>;
    user: any;
    customerList: any;
    securityRole: string;
    loggedInUser: any;
    showAccessPrivileges: boolean = true;
    showPrivInTable: boolean;

    destroy$: Subject<boolean> = new Subject<boolean>();

    constructor(private router: Router, private profileService: ProfileService, private store: Store<fromRoot.State>) {

        store.select(fromRoot.getLoggedInUserSecurityRole).takeUntil(this.destroy$).subscribe(securityRole => {
            if(securityRole == 'E_Broker_BRK_ADM'){
                this.showAccessPrivileges = false;
                this.showPrivInTable = true;
            }
        });
    }

    onConfirm(){
        this.store.dispatch(new profileTypes.UpdateAdminCustomerList(this.customerList))
        this.store.dispatch(new profileTypes.SaveUser({user:this.user,customerList:this.customerList,securityRole:this.securityRole,loggedInUser:this.loggedInUser}));
        this.router.navigate(['/protected/customer/profile/adduser/confirm.htm']);
    }

    onBack(){
        this.router.navigate(['/protected/customer/profile/adduser/info.htm']);
    }

    onBrokerAccesspriv(event){
        let customerList = _.cloneDeep(this.customerList);
        this.customerList = this.profileService.setBrokerPermissions(event,customerList);
    }

    ngOnInit() {

      this.userInfo$ = Observable.combineLatest(
              this.store.select(fromRoot.getSavedUserInfo),
              this.store.select(fromRoot.getAdminCustomerList),
              this.store.select(fromRoot.getLoggedInUserSecurityRole),
              this.store.select(fromRoot.getLoggedInUser),
              (user, customerList,securityRole,loggedInUser) => {
                this.user = user;
                this.customerList = customerList;
                this.securityRole = securityRole;
                this.loggedInUser = {firstName:loggedInUser.firstName, lastName:loggedInUser.lastName, email:loggedInUser.email}
                return {user,customerList,securityRole}
            });
    }

    ngOnDestroy(){
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }

}
