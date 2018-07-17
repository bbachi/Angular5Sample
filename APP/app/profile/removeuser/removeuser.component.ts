import { Component, Input, Output, OnInit, OnDestroy} from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../app-state/reducers';
import * as profileTypes from '../../app-state/actions/profile'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/publishReplay'

@Component({
    templateUrl: './removeuser.component.html',
    styleUrls: ['./removeuser.component.css']
})
export class RemoveUserComponent implements OnInit, OnDestroy {

    associates$: Observable<any>;
    showAdminSearchPage: boolean = false;
    webSecurityRole: string;

    loggedInUserSubs: any;

    constructor(private router: Router, private store: Store<fromRoot.State>) {}

    onUserDetails(userName){
        //console.log("GETTING THE DETAILS FOR THE USER NAME::::"+userName)
        this.store.dispatch(new profileTypes.SaveUserNameForProfileDetails(userName));
        this.router.navigate(['/protected/customer/profile/remove/userverify.htm']);
    }

    ngOnInit() {

        this.loggedInUserSubs = this.store.select(fromRoot.getLoggedInUser).subscribe(user => {
            let webSecurityRole = user.webSecurityRole;
            this.webSecurityRole = webSecurityRole;
            if(webSecurityRole == 'I_Admin_OPS_MGR'){
                this.showAdminSearchPage = true
            }else{
               let userName = user.userName;
               this.store.dispatch(new profileTypes.ListAssociates({userName}));
            }
        });

        this.associates$ = this.store.select(fromRoot.getAssociates).publishReplay().refCount();
    }

    ngOnDestroy(){
        this.loggedInUserSubs.unsubscribe();
    }

}
