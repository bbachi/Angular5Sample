import { Component, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../app-state/reducers';
import * as profileTypes from '../../app-state/actions/profile'
import { ProfileService } from '../../_services'
import 'rxjs/add/operator/takeUntil';
import { Subject } from "rxjs/Subject";
import { Observable } from 'rxjs/Rx';

@Component({
    templateUrl: './adduser.component.html',
    styles: [`
        .errorMsg{
          color:red;
        }
      `]
})
export class AddUserComponent implements OnInit, OnDestroy {

    addUserForm: FormGroup;
    isUserFormNotValid: boolean = false;
    isAccessprivNotSelected: boolean = true;
    startStopAccess: boolean = false;
    payBillAccess: boolean = false;
    showAccessPrivileges: boolean = true;
    emailsMismatch: boolean = false;

    savedUserInfo: any;

    destroy$: Subject<boolean> = new Subject<boolean>();

    constructor(private router: Router, private profileService: ProfileService,
      private store: Store<fromRoot.State>) {

        Observable.combineLatest(
            store.select(fromRoot.getSavedUserInfo),
            store.select(fromRoot.getLoggedInUserSecurityRole),
            store.select(fromRoot.getLoggedInUserCustomerList)
        )
        .takeUntil(this.destroy$)
        .subscribe((result:any) => {
            this.savedUserInfo = undefined != result[0]?result[0]:{};
            this.showAccessPrivileges = (result[1] != 'E_Broker_BRK_ADM');
            store.dispatch(new profileTypes.AddAdminCustomerList(profileService.processLoggedInCustomerListForAddUser(result[2])));
        })
    }

    addUser(formValues: any): void {
        this.emailsMismatch = this.isEmailsMismatch(formValues);
        if(this.addUserForm.valid && this.checkTransactionalAccess() && !this.emailsMismatch){
            this.isUserFormNotValid = false;
            formValues.startStopAccess = this.startStopAccess;
            formValues.payBillAccess = this.payBillAccess;
            this.store.dispatch(new profileTypes.SaveUserInfo(formValues));
            this.router.navigate(['/protected/customer/profile/adduser/verify.htm']);
        }else{
            this.isUserFormNotValid = true;
        }
    }

    onBack(){
        this.router.navigate(['/protected/customer/profile/overview.htm']);
    }

    checkTransactionalAccess(): boolean {
        if(!this.showAccessPrivileges) return true;
        if(this.isAccessprivNotSelected) return false;
        if(!this.isAccessprivNotSelected){
            if(!this.startStopAccess && !this.payBillAccess){
                return false;
            }
        }
        return true;
    }

    isEmailsMismatch(formValues: any){
        return formValues.emailAddress !== formValues.reEmailAddress;
    }

    onAccessprivRadioClick(e){
        this.isAccessprivNotSelected = false;
    }

    onStartStopAccess(e){
        this.startStopAccess = e.checked;
    }

    onBillingAccess(e){
        this.payBillAccess = e.checked;
    }

    ngOnInit() {
        let onlyNumbersPattern = '^(0|[0-9][0-9]*)$';
        let alphaNumericPattern = '^[a-zA-Z0-9]+$';
        let onlyLettersPattern = '^([\ ]*[a-zA-Z]+[\ ]*)+$';
        let emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
        let firstName = new FormControl(this.savedUserInfo.firstName, [Validators.required, Validators.pattern(onlyLettersPattern)]);
        let lastName = new FormControl(this.savedUserInfo.lastName, [Validators.required, Validators.pattern(onlyLettersPattern)]);
        let phoneNumber = new FormControl(this.savedUserInfo.phoneNumber, [Validators.minLength(10), Validators.pattern(onlyNumbersPattern)]);
        let phoneExtNumber = new FormControl(this.savedUserInfo.phoneExtNumber, Validators.pattern(onlyNumbersPattern));
        let altPhoneNumber = new FormControl(this.savedUserInfo.altPhoneNumber, [Validators.minLength(10), Validators.pattern(onlyNumbersPattern)]);
        let altPhoneExtNumber = new FormControl(this.savedUserInfo.altPhoneExtNumber, Validators.pattern(onlyNumbersPattern));
        let faxNumber = new FormControl(this.savedUserInfo.faxNumber, [Validators.minLength(10), Validators.pattern(onlyNumbersPattern)]);
        let emailAddress = new FormControl(this.savedUserInfo.emailAddress, [Validators.required,Validators.pattern(emailPattern)]);
        let reEmailAddress = new FormControl('', [Validators.required,Validators.pattern(emailPattern)]);
        let userName = new FormControl(this.savedUserInfo.userName, [Validators.required, Validators.pattern(alphaNumericPattern),Validators.minLength(6)]);
        this.addUserForm = new FormGroup({
            firstName: firstName,
            lastName: lastName,
            phoneNumber: phoneNumber,
            phoneExtNumber: phoneExtNumber,
            altPhoneNumber: altPhoneNumber,
            altPhoneExtNumber: altPhoneExtNumber,
            faxNumber: faxNumber,
            emailAddress: emailAddress,
            reEmailAddress: reEmailAddress,
            userName: userName
        });
    }

    ngOnDestroy(){
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }

}
