import { Injectable, OnDestroy } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { ServiceStartService, SharedService } from '../../_services';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../app-state/reducers';
import * as transactionTypes from '../../app-state/actions/transactions'

@Injectable()
export class TxnDetailResolve implements Resolve<any> {

  relationshipId: string;
  txnDetail$: Observable<any>;

  txnDetailReceived: boolean;

  constructor(private store: Store<fromRoot.State>, private sharedService: SharedService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any>|any {

      return this.waitForTxnDetailDataToLoad();
  }

  waitForTxnDetailDataToLoad(): Observable<any> {

    this.txnDetail$ = Observable.combineLatest(
           this.store.select(fromRoot.getCustomerDetails),
           this.store.select(fromRoot.getLoggedInUser),
           this.store.select(fromRoot.getDetailTransaction),
           this.store.select(fromRoot.getSelectedpropertyName),
           (custDtls, loggedInUser, txnDtl, propertyName) => {
             var businessInfo = {firstName:loggedInUser.firstName,
                                 lastName:loggedInUser.lastName,
                                 email:loggedInUser.email,
                                 phoneNumber: (undefined != loggedInUser.phoneNum)?loggedInUser.phoneNum:'Not Provided',
                                 faxNumber:(undefined != loggedInUser.faxNum)?loggedInUser.faxNum:'Not Provided',
                                 addr: custDtls.contactAddress,
                                 fedTaxId:(undefined != custDtls.fedTaxId)?custDtls.fedTaxId:'Not Provided',
                                 languagePref:custDtls.correspondenceLang
                               }
             return {businessInfo,txnDtl,propertyName}
         });

     return new Observable(observer => {
           this.txnDetail$.subscribe(dtl => {
              if(dtl.txnDtl.isLoadingSuccess){
                observer.next(dtl);
                observer.complete();
              }
          })
     });
  }

}
