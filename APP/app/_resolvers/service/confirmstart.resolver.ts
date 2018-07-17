import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../app-state/reducers';

@Injectable()
export class ConfirmStartResolve implements Resolve<any> {

  startConfirmation$: Observable<any>;

  constructor(private store: Store<fromRoot.State>) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any>|any {
      return this.waitForStopConfirmationLoad();
  }

  waitForStopConfirmationLoad(): Observable<any> {

      this.startConfirmation$ = Observable.combineLatest(
              this.store.select(fromRoot.getCustomerDetails),
              this.store.select(fromRoot.getLoggedInUser),
              this.store.select(fromRoot.getSelectedUnits),
              this.store.select(fromRoot.getSelectedSrvcAddrDetails),
              this.store.select(fromRoot.getSelectedpropertyName),
              this.store.select(fromRoot.getStartServiceConfirmation),
            (custDtls, loggedInUser,selectedUnits,selectedSrvcAddress,selectedpropName,confirmation) => {
                return{
                      businessInfo:{firstName:loggedInUser.firstName,
                                    lastName:loggedInUser.lastName,
                                    email:loggedInUser.email,
                                    phoneNumber: loggedInUser.phoneNum,
                                    extn: loggedInUser.phoneNumExtn,
                                    faxNumber: loggedInUser.faxNum,
                                    addr: custDtls.contactAddress,
                                    fedTaxId:(undefined != custDtls.fedTaxId)?custDtls.fedTaxId:'Not Provided',
                                    languagePref:custDtls.correspondenceLang
                                  },
                      selectedUnits: selectedUnits.unitList,
                      serviceAddress: selectedSrvcAddress,
                      selectedpropName:selectedpropName,
                      confirmation:confirmation.confirmation,
                      isLoadingSuccess: confirmation.isLoadingSuccess
                  }
       });

       return new Observable(observer => {
             this.startConfirmation$.subscribe(data => {
                if(data.isLoadingSuccess){
                  observer.next(data);
                  observer.complete();
                }
             })
       });
  }

}
