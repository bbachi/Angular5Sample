import { Injectable, OnDestroy } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ServiceStartService, SharedService } from '../../_services';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../app-state/reducers';
import * as transactionTypes from '../../app-state/actions/transactions'

@Injectable()
export class AddUserConfirmResolve implements Resolve<any> {

  relationshipId: string;
  userInfo$: Observable<any>;

  txnDetailReceived: boolean;

  constructor(private store: Store<fromRoot.State>, private sharedService: SharedService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any>|any {
      return this.waitForSavingUserLoad();
  }

  waitForSavingUserLoad(): Observable<any> {

      this.userInfo$ = Observable.combineLatest(
              this.store.select(fromRoot.getSavedUserInfo),
              this.store.select(fromRoot.getAdminCustomerList),
              this.store.select(fromRoot.getLoggedInUserSecurityRole),
              this.store.select(fromRoot.getSaveUserConfirmation),
              (user,customerList,securityRole,confirmation) => {
                    return {user,customerList,securityRole,confirmation}
            });

       return new Observable(observer => {
             this.userInfo$.subscribe(data => {
                if(data.confirmation.isLoadingSuccess){
                  observer.next(data);
                  observer.complete();
                }
            })
       });
  }

}
