import { Component, Input, Output, OnInit, EventEmitter, OnChanges, SimpleChanges  } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../app-state/reducers';
import * as profileTypes from '../../app-state/actions/profile'
import { PhoneFormatPipe } from '../../_pipes';


@Component({
    selector: 'update-user-altphone',
    templateUrl:'./altphone.component.html',
    styles: ['a { cursor: pointer; }','#divid{margin-bottom: 20px;}']
})

export class AltPhoneComponent implements OnInit, OnChanges  {

    @Input() phoneNumber: string;
    @Input() extn: string;
    @Output() onUpdateUser = new EventEmitter<any>();
    @Input() isUpdateSuccesful: boolean;

    displayPhoneNum: string;
    editingDone:boolean = true;
    editing: boolean;

    newAltPhoneNumber: string;
    newAltPhoneExtn: string;

    phoneFormatPipe: PhoneFormatPipe;

    constructor(private store: Store<fromRoot.State>) {
        this.phoneFormatPipe = new PhoneFormatPipe();
    }

    onEdit(){
      this.editingDone = false;
      this.editing = true;
    }

    onSave(){
      var inData = {fieldName:'altphone', altPhoneNum:this.phoneFormatPipe.transform(this.newAltPhoneNumber),
                    phoneExtnAlt:this.newAltPhoneExtn};
      this.onUpdateUser.emit(inData)
      this.editingDone = true;
      this.editing = false;
    }

    ngOnChanges(changes: SimpleChanges) {
        if(changes['isUpdateSuccesful']){
          //console.log("pppppppppp:::::"+this.isUpdateSuccesful)
          if(this.isUpdateSuccesful){this.displayPhoneNum = this.getPhoneDisplay(this.newAltPhoneNumber,this.newAltPhoneExtn)}
          else{this.displayPhoneNum = this.getPhoneDisplay(this.phoneNumber,this.extn);}
        }
    }

    onCancel(){
      this.editingDone = true;
      this.editing = false;
    }

    ngOnInit() {
        this.newAltPhoneNumber = this.phoneNumber;
        this.newAltPhoneExtn = this.extn;
        this.displayPhoneNum = this.getPhoneDisplay(this.phoneNumber,this.extn);
    }

    getPhoneDisplay(phoneNum,extn): string {
        return this.isNotBlank(phoneNum)?(this.isNotBlank(extn)?
          this.phoneFormatPipe.transform(phoneNum)+' ext '+extn:
          this.phoneFormatPipe.transform(phoneNum)):'Not Provided'
    }

    isNotBlank(val: string): boolean {

        if(undefined != val && val.trim().length > 0){
            return true;
        }
        return false;
    }

}
