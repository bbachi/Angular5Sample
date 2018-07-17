import { Component, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from "rxjs/Subject";
import { AccountService, SharedService, LoggerService } from '../_services'
import { Store } from '@ngrx/store';
import * as fromRoot from '../app-state/reducers';
import * as selectedPropertyTypes from '../app-state/actions/selectedproperty'
import * as billingTypes from '../app-state/actions/billing'
import { Router } from '@angular/router';
import 'rxjs/add/operator/takeUntil';

@Component({
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {

    custDetails: any;
    userInfo:any;
    userName: string;
    userCategory: string;

    balancesAndPaymentDue: any;

    destroy$: Subject<boolean> = new Subject<boolean>();

    constructor(private route: ActivatedRoute, private router: Router, private store: Store<fromRoot.State>,
      private sharedService: SharedService, private accountService: AccountService, private logger: LoggerService) {
          this.store.select(fromRoot.getLoggedInUser).takeUntil(this.destroy$).subscribe(user => {
              this.userName = user.userName;
              this.userCategory = user.userCategory;
          });
      }

    termsOfUse(): void {
        this.router.navigate(['/protected/termsofuse.htm', this.userName]);
    }

    ngOnInit() {
        this.route.data
        .takeUntil(this.destroy$)
        .subscribe(data => {
            let resp = data.dashboard;
            if(resp.errorCode == 2){
                this.logger.info("NO DATA FOR THE DASHBOARD:::ERRORCODE::"+JSON.stringify(resp));
                this.router.navigate(['./protected/error.htm'])
            }else{
              this.custDetails = resp;
              this.sharedService.setSelectedPropertyDtls(this.custDetails)
              this.store.dispatch(new selectedPropertyTypes.SaveSelectedPropertyDetails(this.custDetails))
            }
        });
    }

    onBalancesAndPaymentDue(event: any){

        this.store.select(fromRoot.getNONCAARealBPList).takeUntil(this.destroy$).subscribe(nonCAABPList => {
            this.store.dispatch(new billingTypes.GetDashboardPaymentDtls({nonCAABPList}));
        })

        this.store.select(fromRoot.getDashboardPaymentDetails)
        .takeUntil(this.destroy$)
        .subscribe(data => this.balancesAndPaymentDue = data)
    }

    ngOnDestroy(){
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }

}
