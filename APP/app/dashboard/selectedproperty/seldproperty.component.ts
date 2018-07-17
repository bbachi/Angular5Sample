import { Component, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountService, SharedService } from '../../_services/index'
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../app-state/reducers';
import * as selectedPropertyTypes from '../../app-state/actions/selectedproperty';
import * as esiidListTypes from '../../app-state/actions/esiid';
import * as storage from '../../app-state/state/storage'
import 'rxjs/add/operator/takeUntil';
import { Subject } from "rxjs/Subject";

@Component({
    selector: 'selected-property',
    templateUrl: './seldproperty.component.html',
    styleUrls: ['./seldproperty.component.css']
})
export class SelectedPropertyComponent implements OnInit, OnDestroy {

  masterBpName:string;
  propertyName: string;
  streetNumber: string;
  streetName: string;
  city: string;
  state: string;
  zipcode: string;
  phoneNumber: string;

  isSelectedPropertyExist: boolean = false;
  onlyOneProperty: boolean = false;

  destroy$: Subject<boolean> = new Subject<boolean>();
  hideImage: boolean;

  constructor(private router: Router, private store: Store<fromRoot.State>, private sharedService: SharedService) {
      store.select(fromRoot.isPropertySelected).takeUntil(this.destroy$).subscribe(propSelected => this.isSelectedPropertyExist = propSelected)
      this.onlyOneProperty = this.sharedService.getLoggedInUserHasOnlyOneProperty();
  }

  changeProperty(): void {
      this.store.dispatch(new selectedPropertyTypes.DeleteSelectedPropertyDetails({}));
      this.store.dispatch(new esiidListTypes.DeleteESIIDDetails({}));
      storage.deleteItemByKey("SELECTED_PROP_DTLS");
      this.store.select(fromRoot.getLoggedInUser)
      .takeUntil(this.destroy$)
      .subscribe(loggedInUser => {
          if(loggedInUser.userCategory == "I"){
              this.router.navigate(['/protected/selectaccount/internal.htm']);
          }else{
              this.router.navigate(['/protected/selectaccount/external.htm']);
          }
      });
  }

  /*
    get the slected property details from shared service on initial load of dashboard.
    later for every page refresh take it from the store. since on initial load of dashboard store is not loaded with these details
   */
  ngOnInit() {
      let selDtls = storage.getItemByKey("SELECTED_PROP_DTLS");
      if(undefined != selDtls){
        this.setSelectedPropDetails(selDtls);
      }else{
        this.sharedService.getSelectedPropertyDtls().subscribe(dtls => {
          storage.saveItem("SELECTED_PROP_DTLS", dtls)
          this.setSelectedPropDetails(dtls);
        })
      }

      this.sharedService.hideBGImage.takeUntil(this.destroy$).subscribe(hideImage => {
          this.hideImage = hideImage;
      })
  }

  setSelectedPropDetails(dtls: any){
      this.streetNumber = dtls.address.streetNum;
      this.streetName = dtls.address.streetName;
      this.city = dtls.address.city;
      this.state = dtls.address.state;
      this.zipcode = dtls.address.zipcode;
      this.propertyName = dtls.bpName;
      this.masterBpName = dtls.masterBPName;
      this.phoneNumber = dtls.customerDtls.phoneNum;
  }

  ngOnDestroy(){
      this.destroy$.next(true);
      this.destroy$.unsubscribe();
  }

}
