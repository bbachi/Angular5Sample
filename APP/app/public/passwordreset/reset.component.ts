import { Component, Input, Output, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProfileService } from '../../_services/profile.service';
import { Router } from '@angular/router';

@Component({
    selector: 'password-form',
    templateUrl: './reset.component.html',
    styleUrls: ['./reset.component.css']
})
export class PasswordResetComponent implements OnInit {

    @Input() userDetails: any
    resetForm: FormGroup;
    isResetFormNotValid: boolean = false;
    passwordsMismatch: boolean = false;

    updatingPassword: boolean = false;

    constructor(private profileService: ProfileService, private router: Router) {}

    passwordReset(formValues: any): void {
        this.passwordsMismatch = this.isPasswordMismatch(formValues);
        if(this.resetForm.valid && !this.passwordsMismatch){
            this.updatingPassword = true;
            this.isResetFormNotValid = false;
            var inData = {user:this.userDetails,password:formValues.password,loggedInUserName:this.userDetails.userName}
            this.profileService.updatePassword(inData).subscribe(res => {
              let userName = this.userDetails.userName;
              if(res){
                this.router.navigate(['/protected/prelogin.htm', userName]);
              }else{
                this.isResetFormNotValid = true;
                this.updatingPassword = false;
              }
            })
        }else{
            this.isResetFormNotValid = true;
        }
    }

    isPasswordMismatch(formValues: any){
        return formValues.password !== formValues.rePassword;
    }

    ngOnInit() {
        let alphaNumericPattern = '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{7,}$';
        let password = new FormControl('', [Validators.required,Validators.minLength(7),Validators.pattern(alphaNumericPattern)]);
        let rePassword = new FormControl('', [Validators.required,Validators.minLength(7),Validators.pattern(alphaNumericPattern)]);
        this.resetForm = new FormGroup({
            password: password,
            rePassword: rePassword
        });
    }

}
