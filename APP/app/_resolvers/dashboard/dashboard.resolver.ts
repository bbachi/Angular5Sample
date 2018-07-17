import { Injectable, OnDestroy } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ISubscription } from "rxjs/Subscription";
import { Subject } from 'rxjs/Subject';
import { AccountService } from '../../_services/index';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../app-state/reducers';
import 'rxjs/add/operator/take';

@Injectable()
export class DashboardResolve implements Resolve<any> {

  relationshipId: string;
  private dashboardData = new Subject<any>();
  private subscription: ISubscription;

  private alive: boolean = true;

  constructor(private accountService: AccountService, private store: Store<fromRoot.State>) {
      this.store.select(fromRoot.getRelationshipId).subscribe(id => {
          this.relationshipId = id;
      });
  }

  resolve(route: ActivatedRouteSnapshot): Observable<any>|any {
      return this.accountService.getCustomerDetails(this.relationshipId);
  }

}
