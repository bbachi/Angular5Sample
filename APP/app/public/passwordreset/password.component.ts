import { Component, Input, Output, EventEmitter, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'gme-password',
    template: `<section #myDiv id="contentWrapper">
    	             <password-expired *ngIf="showExpiryForm"></password-expired>
                   <password-form [userDetails]="userDetails" *ngIf="showPasswordForm"></password-form>
               </section>
                 `
    //styleUrls: ['./confirm.component.css']
})

export class PasswordComponent  implements OnInit {

    userDetails: any;
    showPasswordForm: boolean = false;
    showExpiryForm: boolean = false;

    @ViewChild('myDiv') myDiv: ElementRef;
    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        let userDetails = this.route.snapshot.data['passwordReset'];
        if(undefined != userDetails && userDetails.userName != undefined){
            this.userDetails = userDetails
            this.showPasswordForm = true;
        }else{
            this.showExpiryForm = true;
        }

        let el: HTMLElement = this.myDiv.nativeElement as HTMLElement;
        el.click();
    }
}
