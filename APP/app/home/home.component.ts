import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../_services/user.service'
import { SharedService } from '../_services/shared.service'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as fromRoot from '../app-state/reducers';
import * as loggedInUserTypes from '../app-state/actions/loggedinuser'
import * as selectedPropertyTypes from '../app-state/actions/selectedproperty'
import * as storage from '../app-state/state/storage'

@Component({
    selector: 'gme-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

    constructor(private userService: UserService, private sharedService: SharedService, private router: Router, private store: Store<fromRoot.State>) {}

    loginForm: FormGroup;
    isUserValidated: boolean = true;
    errorMessage: string = "Please enter valid credentials.";

    login(formValues: any): void {
        //console.log('login clicked');
        storage.clearStorage();
        if (this.loginForm.valid) {
            this.userService.getFirstLogonFlag(formValues.userName).subscribe((resp: any) => {
                console.log('user from the service:::::::' + JSON.stringify(resp));
                if(undefined != resp && 0 == resp.errorCode){
                    //console.log('USER NAME NOT FOUND IN DB:::');
                    this.isUserValidated = false;
                    this.errorMessage = "Username doesn't exist in the system.";
                }else{
                    this.isUserValidated = true;
                    if(resp.firstLogonFlag == 'N'){
                        this.router.navigate(['/protected/termsofuse.htm', formValues.userName]);
                    }else if(resp.firstLogonFlag == 'I'){
                        this.router.navigate(['/protected/inactiveuser.htm']);
                    }else{
                        this.userService.getUserProfile(formValues.userName).subscribe((resp: any) => {
                           if(undefined != resp && 2 != resp.errorCode){
                              this.redirectUserBasedOnUserType(resp);
                           }else{
                              //console.log('USER NAME FOUND IN DB:::BUT PORCESSING ERROR::'+resp.errorMessage);
                              this.router.navigate(['/protected/error.htm/'+resp.errorCode]);
                           }
                        });
                    }
                }
            });
        } else {
            this.isUserValidated = false;
            this.errorMessage = "Please enter valid credentials.";
            //console.log('login form is invalid');
        }
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

      let userName = new FormControl('', Validators.required);
      this.loginForm = new FormGroup({
          userName: userName
      });
    }
}
