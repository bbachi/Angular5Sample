import { Component, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../app-state/reducers';
import * as esiidTypes from '../../app-state/actions/esiid'
import 'rxjs/add/operator/publishReplay'
import 'rxjs/add/operator/takeUntil';
import { Subject } from "rxjs/Subject";

@Component({
    selector: 'dashboard-account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.css']
})
export class AccountComponent  implements OnInit, OnDestroy {

    constructor(private store: Store<fromRoot.State>) {}

    @Input() custDetails: any;
    @Input() userCategory: string;

    terms: string;
    contractExpDate: any;
    depositAmount$: Observable<any>;
    taxStatus$: Observable<any>;
    depositAmountClicked:boolean = false;
    taxStatusClicked: boolean = false;

    private NOT_AVAILABLE = "Not Available"
    private UNAVAILABLE = "Unavailable"
    private VIEW_METER_ESIID = "View Meters/ESIID"

    destroy$: Subject<boolean> = new Subject<boolean>();

    onTaxStatus(){
        this.taxStatusClicked = true
        this.taxStatus$ = this.getStringBasedOnLink("TAX").publishReplay().refCount();
    }

    onDepositAmount(){
       this.depositAmountClicked = true
       this.depositAmount$ = this.getStringBasedOnLink("DA").publishReplay().refCount();
    }

    private getStringBasedOnLink(linkName: string): Observable<any> {

        return new Observable(observer => {
              observer.next({isLoading:true,linkNotClicked:false,depositAmount:this.NOT_AVAILABLE});
              this.store.select(fromRoot.getESIIDListFromStorage).takeUntil(this.destroy$).subscribe(esiidList => {
                  if(undefined != esiidList && esiidList.length > 0){
                      observer.next({isLoading:false,isLoadingSuccess:true,value:
                        (linkName == 'DA')?this.calculateDepositAmount(esiidList):this.calculateTaxStatus(esiidList)});
                      observer.complete();
                  }else{
                      this.store.select(fromRoot.getNONCAARealBPList).takeUntil(this.destroy$).subscribe(bpNumberList => {
                        if(undefined != bpNumberList && bpNumberList.length > 0){
                            this.store.dispatch(new esiidTypes.GetESIIDList({bpNumberList}));
                            this.store.select(fromRoot.getESIIDList).takeUntil(this.destroy$).subscribe(result => {
                                if(result.isLoadingSuccess){
                                  observer.next({isLoading:false,isLoadingSuccess:true,value:
                                    (linkName == 'DA')?this.calculateDepositAmount(esiidList):this.calculateTaxStatus(esiidList)});
                                   observer.complete();
                                }
                            });
                        }
                    })
                  }
              });
          });
    }

      calculateDepositAmount(esiidList: any): string {
          let depositAmount: string = this.UNAVAILABLE;
          try{
              if(undefined != esiidList){
                esiidList.forEach(esiid => {
                    if(!isNaN(parseFloat(esiid.strDepositAmount))){
                        depositAmount += parseFloat(esiid.strDepositAmount);
                    }
                });
              }
          }catch(err){
            //console.log("ERROR=========>"+err.message)
          }
          return depositAmount;
      }

      calculateTaxStatus(esiidList: any[]): string {
          let cityStateTaxStatus: string = (undefined != esiidList && esiidList.length >0)?esiidList[0].strTaxStatus:this.NOT_AVAILABLE;
          try{
              if(undefined != esiidList){
                esiidList.forEach(esiid => {
                    if(cityStateTaxStatus != esiid.strTaxStatus){
                        cityStateTaxStatus = this.VIEW_METER_ESIID;
                    }
                })
              }
              cityStateTaxStatus = "" == cityStateTaxStatus?this.VIEW_METER_ESIID:cityStateTaxStatus
          }catch(err){
            //console.log("ERROR=========>"+err.message)
          }
          return cityStateTaxStatus;
      }

    ngOnInit() {
      let custDetails = this.custDetails;
      if(undefined != custDetails){
        this.contractExpDate = this.custDetails.customerDtls.contractExpDate;
        this.terms = this.custDetails.customerDtls.terms;

        this.depositAmount$ = new Observable(observer => {
            observer.next({linkNotClicked:true,isLoading:false,depositAmount:this.NOT_AVAILABLE})
        });
      }
    }

    ngOnDestroy(){
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }
}
