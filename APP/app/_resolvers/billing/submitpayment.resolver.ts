import { Injectable, OnDestroy } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AccountService } from '../../_services/index';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../app-state/reducers';
import * as billingTypes from '../../app-state/actions/billing'
import 'rxjs/add/operator/take';

@Injectable()
export class SubmitPaymentResolve implements Resolve<any> {

  relationshipId: string;

  constructor(private store: Store<fromRoot.State>) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any>|any {

      this.initSubmitPaymentData();

      return this.waitForSubmitPaymentToLoad();
  }

  waitForSubmitPaymentToLoad(): Observable<any> {
     return new Observable(observer => {
        this.store.select(fromRoot.getPaymentConfirmation).subscribe(data => {
            if(data.isLoadingSuccess){
              observer.next(data.confirm);
              observer.complete()
            }
        });
      })
  }

  initSubmitPaymentData(): void {
      this.store.take(1).subscribe(store => {
        try{
          let relationshipId = store.selectedproperty.relationshipId;
          let bpName = store.selectedproperty.selectedProperty.bpName;
          let email = store.loggedinuser.loggedInUser.email;
          let payment = store.billing.payment;
          this.store.dispatch(new billingTypes.SubmitPayment({bpName,email,relationshipId,payment}));
        }catch(err){
            console.log("error===initSubmitPaymentData>>>>"+err.message)
        }
    });
  }

}
