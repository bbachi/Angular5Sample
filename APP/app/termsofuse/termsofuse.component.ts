import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../_services/user.service';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../_services/shared.service'
import { Store } from '@ngrx/store';
import * as fromRoot from '../app-state/reducers';
import * as loggedInUserTypes from '../app-state/actions/loggedinuser'
import * as selectedPropertyTypes from '../app-state/actions/selectedproperty'
import * as storage from '../app-state/state/storage'

@Component({
    selector: 'gme-terms-of-use',
    templateUrl: './termsofuse.component.html',
    styleUrls: ['./termsofuse.component.css']
})
export class TermsOfUseComponent implements OnInit {

    constructor(private userService: UserService, private router: Router, private route: ActivatedRoute,
      private sharedService: SharedService, private store: Store<fromRoot.State>){

    }

    private userName: string;
    showContinueBtn: boolean = true;

    onContinue(): void {
        //console.log("onContinue clicked")
        this.userService.setFirstLogonFlag(this.userName).subscribe((resp: any) => {});
        this.userService.getUserProfile(this.userName).subscribe((resp: any) => {
          if(undefined != resp && 2 != resp.errorCode){
              this.redirectUserBasedOnUserType(resp);
          }else{
             //console.log('USER NAME FOUND IN DB:::BUT PORCESSING ERROR::'+resp.errorMessage);
             this.router.navigate(['/protected/error.htm/'+resp.errorCode]);
          }
        });
    }

    redirectUserBasedOnUserType(resp: any){
      this.sharedService.setLoggedInUserDetails(resp)
      this.store.dispatch(new loggedInUserTypes.SaveLoggedInUser(resp))
      if(this.checkForOnlyproperty(resp)){
            this.sharedService.setLoggedInUserHasOnlyOneProperty(true);
            let relationshipId = resp.customerList.propertyList[0].relationshipId;
            this.store.dispatch(new selectedPropertyTypes.SaveRelationshipId(relationshipId))
            this.store.dispatch(new selectedPropertyTypes.DeleteSelectedPropertyDetails({}));
            this.router.navigate(['/protected/customer/dashboard.htm']);
      }else{
          this.sharedService.setLoggedInUserHasOnlyOneProperty(false);
          if(resp.user.userCategory == 'I'){
              this.router.navigate(['/protected/selectaccount/internal.htm']);
          }else{
              this.router.navigate(['/protected/selectaccount/external.htm']);
          }
      }
    }

    checkForOnlyproperty(resp: any){
        if(undefined != resp.customerList){
            if(resp.customerList.mngBP) return false;
            if(resp.customerList.regionBP) return false;
            if(resp.customerList.propertyBP && resp.customerList.onlyProperty) return true;
        }
        return false;
    }

    ngOnInit(): void {
        let userName = this.route.snapshot.params['userName'];
        //console.log("username from the params::::"+userName);
        if(userName == 'dashboard'){
            this.showContinueBtn = false;
        }else{
            this.userName = userName;
        }
    }
}
