import { Injectable, OnDestroy } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AccountService } from '../../_services/index';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../app-state/reducers';
import * as paymentHistoryTypes from '../../app-state/actions/paymenthistory'
import 'rxjs/add/operator/take';
import * as _ from 'lodash'

@Injectable()
export class ModifyPaymentResolve implements Resolve<any> {

  relationshipId: string;

  constructor(private store: Store<fromRoot.State>) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any>|any {

      this.initModifyPaymentData();

      return this.waitForModifiedPaymentDataToLoad();
  }

  waitForModifiedPaymentDataToLoad(): Observable<any> {
     return new Observable(observer => {
        this.store.select(fromRoot.getModifyPaymentStatus).subscribe(data => {
            if(data.isLoadingSuccess){
              observer.next(data.status);
              observer.complete()
            }
        });
      })
  }

  initModifyPaymentData(): void {
      this.store.take(1).subscribe(store => {
        let relationshipId = store.selectedproperty.relationshipId;
        let modifiedData = _.cloneDeep(store.modifypayment.paymentInfo);
        modifiedData.relationshipId = relationshipId;
        this.store.dispatch(new paymentHistoryTypes.ModifyPayment(modifiedData));
      });
  }

}
