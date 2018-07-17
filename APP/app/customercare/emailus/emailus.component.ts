import { Component, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../app-state/reducers';
import * as ccTypes from '../../app-state/actions/cc';
import 'rxjs/add/operator/takeUntil';
import { Subject } from "rxjs/Subject";

@Component({
    templateUrl: './emailus.component.html',
    styles: ['.bordercls{border-color:#ff8080}']
})
export class EmailUsComponent implements OnInit, OnDestroy {

    ccForm: FormGroup;
    isFormNotValid: boolean;
    emailsMismatch: boolean = false;
    propertyName: string;

    destroy$: Subject<boolean> = new Subject<boolean>();

    constructor(private router: Router, private store: Store<fromRoot.State>) {
        this.store.select(fromRoot.getSelectedpropertyName).takeUntil(this.destroy$).subscribe(bpName => this.propertyName = bpName)
    }

    sendEmail(formValues: any){

        this.emailsMismatch = this.isEmailsMismatch(formValues);
        if(this.ccForm.valid && !this.emailsMismatch){
          this.isFormNotValid = false;
          let inData = {comments:formValues.comments,subject:formValues.subject,email:formValues.emailAddress,bpName:this.propertyName}
          this.store.dispatch(new ccTypes.EmailUs(inData))
          this.router.navigate(['/protected/customer/cc/emailconfirm.htm']);
        }else{
          this.isFormNotValid = true;
        }
    }

    isEmailsMismatch(formValues: any){
        return formValues.emailAddress !== formValues.reEmailAddress;
    }

    ngOnInit() {
      let emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
      let subject = new FormControl('Activity Reports', [Validators.required]);
      let emailAddress = new FormControl('', [Validators.required,Validators.pattern(emailPattern)]);
      let reEmailAddress = new FormControl('', [Validators.required,Validators.pattern(emailPattern)]);
      let comments = new FormControl('', [Validators.required]);
      this.ccForm = new FormGroup({
          comments: comments,
          subject: subject,
          emailAddress: emailAddress,
          reEmailAddress: reEmailAddress
      });
    }

    ngOnDestroy(){
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }

}
