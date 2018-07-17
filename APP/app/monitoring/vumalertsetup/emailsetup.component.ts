import { Component, Input, Output, OnInit, ViewChild, ElementRef, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../app-state/reducers';

@Component({
    selector: 'vum-email-setup',
    templateUrl: './emailsetup.component.html',
    styleUrls: ['./emailsetup.component.css']
})
export class EmailSetupComponent implements OnInit, OnChanges {

    @Input() vumEmail: {email1: string, email2: string, vueEmailStatus: boolean};
    @Output() emailPrefEvent = new EventEmitter<any>();
    @Input() status: boolean;
    @Input() message: string;

    vumEmailStatus: boolean;
    updatedEmail1: string;
    updatedEmail2: string;
    btndisabled: boolean = false;
    updateType: string;

    constructor(private route: ActivatedRoute) {}

    onRecieveCheckBox(eventTarget: any){
        this.vumEmailStatus = eventTarget.checked;
        this.status = false;
        this.btndisabled = !this.btndisabled;
    }

    onConfirm(){
        var obj = {email1:this.updatedEmail1,email2:this.updatedEmail2,updateType:"EP",vumEmailStatus:this.vumEmailStatus}
        this.emailPrefEvent.emit(obj)
    }

    emailUpdated(emailOut: any){
        let index = emailOut.index;
        if(index == "1") {this.updatedEmail1 = emailOut.email1; this.updateType = "E1"; }
        if(index == "2") {this.updatedEmail2 = emailOut.email2; this.updateType = "E2"; }
        var obj = {email1:this.updatedEmail1,email2:this.updatedEmail2,updateType:this.updateType,vumEmailStatus:this.vumEmailStatus}
        this.emailPrefEvent.emit(obj)
    }

    ngOnInit() {
        this.vumEmailStatus = this.vumEmail.vueEmailStatus;
        this.updatedEmail1 = this.vumEmail.email1;
        this.updatedEmail2 = this.vumEmail.email2;
    }

    ngOnChanges(changes: SimpleChanges) {

        if(!changes["status"].firstChange){
            this.btndisabled = !this.status;
        }
    }

}
