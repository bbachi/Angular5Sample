import { Component, OnInit, NgZone, OnDestroy } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { UserService, LoggerService, SharedService } from '../_services'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as fromRoot from '../app-state/reducers';
import * as loggedInUserTypes from '../app-state/actions/loggedinuser'
import * as selectedPropertyTypes from '../app-state/actions/selectedproperty'
import * as storage from '../app-state/state/storage'
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'gme-prelogin',
  template:``,
  styleUrls: []
})
export class PreLoginComponent implements OnInit, OnDestroy {

    constructor(private userService: UserService, private sharedService: SharedService, private router: Router,
      private activatedRoute: ActivatedRoute,private store: Store<fromRoot.State>, private logger: LoggerService) {}

    routeParamsSubs: Subscription;

    redirectBasedOnFirstlogonFlag(userName): void {
        this.userService.getFirstLogonFlag(userName).subscribe((resp: any) => {
            if(undefined != resp && 0 == resp.errorCode){
                this.logger.info('USER NAME NOT FOUND IN DB:::');
            }else{
                if(resp.firstLogonFlag == 'N'){
                    this.router.navigate(['/protected/termsofuse.htm', userName]);
                }else if(resp.firstLogonFlag == 'I'){
                    this.logger.debug("USER FLAG IS INACTIVE:::REDIRECTING TO INACTIVE PAGE")
                    this.router.navigate(['/protected/inactiveuser.htm']);
                }else{
                    this.userService.getUserProfile(userName).subscribe((resp: any) => {
                      if(undefined != resp && 2 != resp.errorCode){
                         this.redirectUserBasedOnUserType(resp);
                      }else{
                         this.logger.info('USER NAME FOUND IN DB:::BUT PORCESSING ERROR::'+resp.errorMessage);
                         this.router.navigate(['/protected/error.htm/'+resp.errorCode]);
                      }
                    });
                }
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
        storage.clearStorage();
        this.routeParamsSubs = this.activatedRoute.params.subscribe((params: Params) => {
            let userName = params['userName'];
            this.redirectBasedOnFirstlogonFlag(userName);
        });
    }

    ngOnDestroy(){
        this.routeParamsSubs.unsubscribe();
    }
}
