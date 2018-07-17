import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { ProfileService } from '../../_services/profile.service'

@Component({
    selector: 'reset-password',
    template:`<button *ngIf="fromPage == 'UPDATE_PAGE'" (click)="onResetPassword()">Reset Password</button>`,
    styles: ['#divid{margin-bottom: 20px;}']
})

export class ResetPasswordComponent implements OnInit {

    @Input() user: any;
    @Input() fromPage: string;
    @Output() resetPasswordSts = new EventEmitter<any>();

    constructor(private profileService: ProfileService) {}

    onResetPassword(){
        if(this.user == undefined){
            this.resetPasswordSts.emit({isUserNotSelectedForUpdate:true})
        }else{
            this.resetPasswordSts.emit({isUserNotSelectedForUpdate:false})
            this.profileService.resetPassword({userName:this.user.userName,email:this.user.email}).subscribe(s => {
                if(s == 'Y'){
                     this.resetPasswordSts.emit({message:"A password reset link and instructions have been sent to "+this.user.email,isSuccess:true});
                }else if(s == 'E'){
                    this.resetPasswordSts.emit({message:"There is no email address associated with this user "+this.user.userName+". Please update the Email Address",isSuccess:true});
                }else{
                     this.resetPasswordSts.emit({message:"We are unable to process your request at this time. Please try again.",isSuccess:false});
                }
            })
        }
    }

    ngOnInit() {

    }

}
