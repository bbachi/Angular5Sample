import { Component, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromRoot from '../../app-state/reducers';
import * as esiidTypes from '../../app-state/actions/esiid'
import 'rxjs/add/operator/publishReplay'
import 'rxjs/add/operator/takeUntil';
import { Subject } from "rxjs/Subject";

@Component({
    selector: 'dashboard-viewmeters',
    templateUrl: './viewmeters.component.html',
    styleUrls: ['./viewmeters.component.css']
})
export class ViewMetersComponent implements OnDestroy {

    esiidList$: Observable<any>;
    isESIIDsDtlsNotFound: boolean = false;

    destroy$: Subject<boolean> = new Subject<boolean>();

    constructor(private store: Store<fromRoot.State>) {}

    onViewESIIDs(){

        this.esiidList$ = new Observable(observer => {
              observer.next({isLoading:true});
              this.store.select(fromRoot.getESIIDListFromStorage).takeUntil(this.destroy$).subscribe(esiidList => {
                  if(undefined != esiidList && esiidList.length > 0){
                      observer.next({isLoading:false,isLoadingSuccess:true,esiidList});
                      observer.complete();
                  }else{
                      this.store.select(fromRoot.getNONCAARealBPList).takeUntil(this.destroy$).subscribe(bpNumberList => {
                        if(undefined != bpNumberList && bpNumberList.length > 0){
                            this.store.dispatch(new esiidTypes.GetESIIDList({bpNumberList}));
                            return this.store.select(fromRoot.getESIIDList).takeUntil(this.destroy$);
                        }
                    })
                  }
              });
          }).publishReplay().refCount();
  }

  ngOnDestroy(){
      this.destroy$.next(true);
      this.destroy$.unsubscribe();
  }

}
