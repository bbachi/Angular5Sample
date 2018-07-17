import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
    selector: "broker-access-priv-update",
    templateUrl: './accessprivupdate.component.html',
    styles: ['.editIcon, .cancelAllIcon, .saveAllIcon{cursor:pointer}']
})
export class BrokerAccessPrivUpdateComponent implements OnInit {

    @Input() hierarchyType: string;

    @Input() isUpdateUserDtls: boolean;
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

    onEdit(){
       this.editing = true;
       this.editingDone = false;
    }

    onCancel(){
       this.editing = false;
       this.editingDone = true;
    }

    onSave(event: HTMLInputElement, accessPrivType: string, otherPrivilege: boolean){
       this.editing = false;
       this.editingDone = true;
       let emitObj: any = {};
       if(accessPrivType == "S")emitObj = {bpNumber:this.bpNumber,startStopAccess:event.checked,paybillAccess:otherPrivilege};
       if(accessPrivType == "B")emitObj = {bpNumber:this.bpNumber,paybillAccess:event.checked,startStopAccess:otherPrivilege};
       this.accessPrivEvent.emit(emitObj)
    }

    //update user details end

    ngOnInit(){
    }
}
