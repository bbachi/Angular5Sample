import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
    selector: "broker-access-priv",
    templateUrl: './accesspriv.component.html',
    styles: ['.editIcon, .cancelAllIcon, .saveAllIcon{cursor:pointer}']
})
export class BrokerAccessPrivComponent implements OnInit {

    @Input() hierarchyType: string;
    @Input() addUserVerify: boolean;
    @Input() addUserConfirm: boolean;
    @Input() removeUser: boolean;

    @Input() bpNumber: string;
    @Input() startEnabled: boolean;
    @Input() billingEnabled: boolean;

    @Output() accessPrivEvent = new EventEmitter<any>();


    onPayBillAce(event,bpNumber){
       this.accessPrivEvent.emit({bpNumber:this.bpNumber,paybillAccess:event.target.checked})
    }

    onStartStopAce(event){
        this.accessPrivEvent.emit({bpNumber:this.bpNumber,startStopAccess:event.target.checked})
    }

    //update user details start
    editing: boolean = false;
    editingDone: boolean = true;
    @Input() isStartStop: boolean;

    //update user details end

    ngOnInit(){
    }
}
