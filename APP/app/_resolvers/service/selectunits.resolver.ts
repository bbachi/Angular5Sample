import { Injectable, OnDestroy } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { ServiceStartService, SharedService } from '../../_services';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../app-state/reducers';
import * as startserviceTypes from '../../app-state/actions/startservice'
import { Observable, Subject } from 'rxjs/Rx';
import 'rxjs/add/operator/takeUntil';

@Injectable()
export class SelectUnitsResolve implements Resolve<any> {

  relationshipId: string;
  isPlanDetailsAvailable: boolean;

  selectedServiceAddr: any;
  isPlanDetailsCalled: boolean;
  unitList: any;

  unavailableDates: any;

  destroy$: Subject<boolean> = new Subject<boolean>();

  resolverData$: Subject<any> = new Subject<any>();

  constructor(private store: Store<fromRoot.State>, private startService: ServiceStartService, private sharedService: SharedService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any>|any {
      this.destroy$ = new Subject<boolean>();
      this.destroy$.next(false);

      this.initPlanDetails();
      return this.waitForSelecUnitsDataToLoad();
  }

  waitForSelecUnitsDataToLoad(): Observable<any> {

       return new Observable(observer => {
         this.resolverData$.takeUntil(this.destroy$).subscribe(data => {
           if(data.unavailableDatesCompleted){
               let obj = {selectedServiceAddr:this.selectedServiceAddr, unitList:this.unitList,
                 unavailableDates: this.unavailableDates, isPlanDetailsAvailable: this.isPlanDetailsAvailable};
               observer.next(obj);
               observer.complete()
               this.destroy$.next(true);
               this.destroy$.unsubscribe();
            }
         });
      })
  }

  initPlanDetails(): void {

      this.store.select(fromRoot.getRelationshipIdForStartStopTxn).takeUntil(this.destroy$).subscribe(id => {
          this.startService.getPromocodeList(id).subscribe(list => {
              let promocodeList: string[] = new Array<string>();
              list.forEach(promo => {promocodeList.push(promo.strPromoCode);})
              this.isPlanDetailsAvailable = (promocodeList.length > 0);
              this.startService.getPlanDetails(promocodeList).subscribe(planDtls => {
                  this.isPlanDetailsCalled = true;
                  this.store.dispatch(new startserviceTypes.SavePlanDetails(planDtls))
                  //this.resolverData$.next({planDetailsCompleted: true})
              });
          })
      });

      this.store.select(fromRoot.getSelectedServiceProperty).takeUntil(this.destroy$).subscribe(selectedAddr => {
          this.selectedServiceAddr = selectedAddr;
          this.unitList = this.sharedService.getUnitList(selectedAddr,"START");
          let esiid = this.unitList.length > 0?this.unitList[0].esiid:"";
          this.store.dispatch(new startserviceTypes.GetUnavailableDates(esiid));
          this.store.select(fromRoot.getUnavailableDates).takeUntil(this.destroy$).subscribe(data => {
              if(data.isLoadingSuccess){
                  this.unavailableDates = data.unavailableDates;
                  this.resolverData$.next({unavailableDatesCompleted: true})
              }
          });
      })
  }

}
