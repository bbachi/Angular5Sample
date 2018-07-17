import { Injectable, OnDestroy } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AccountService } from '../../_services/index';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../app-state/reducers';
import * as billingTypes from '../../app-state/actions/billing'
import 'rxjs/add/operator/take';

@Injectable()
export class PaymentMethodsResolve implements Resolve<any> {

  relationshipId: string;

  constructor(private store: Store<fromRoot.State>) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any>|any {

      this.initPaymentMethodData();

      return this.waitForPaymentMethodDataToLoad();
  }

  waitForPaymentMethodDataToLoad(): Observable<any> {
     return new Observable(observer => {
        this.store.select(fromRoot.getPaymentMethods).subscribe(data => {
            if(data.isLoadingSuccess){
              observer.next(data.paymentMethods);
              observer.complete()
            }
        });
      })
  }

  initPaymentMethodData(): void {
      this.store.take(1).subscribe(store => {
        let relationshipId = store.selectedproperty.relationshipId;
        this.store.dispatch(new billingTypes.GetPaymentMethods({relationshipId}));
      });
  }

}
