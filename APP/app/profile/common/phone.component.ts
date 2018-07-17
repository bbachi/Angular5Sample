import { Component, Input, Output, OnInit, EventEmitter, OnChanges, SimpleChanges  } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../app-state/reducers';
import * as profileTypes from '../../app-state/actions/profile'
import { PhoneFormatPipe } from '../../_pipes';

@Component({
    selector: 'update-user-phone',
    templateUrl:'phone.component.html',
    styles: ['a { cursor: pointer; }','#divid{margin-bottom: 20px;}']
})

export class PhoneComponent implements OnInit, OnChanges {

    @Input() phoneNumber: string;
    @Input() extn: string;
    @Input() isUpdateSuccesful: boolean;
    @Output() onUpdateUser = new EventEmitter<any>();

    displayPhoneNum: string;
    editingDone:boolean = true;
    editing: boolean;

    newPhoneNumber: string;
    newPhoneExtn: string;

    phoneFormatPipe: PhoneFormatPipe;

    constructor(private store: Store<fromRoot.State>) {
        this.phoneFormatPipe = new PhoneFormatPipe();
    }

    onEdit(){
      this.editingDone = false;
      this.editing = true;
    }

    onSave(){
      var inData = {fieldName:'phone', phoneNum:this.phoneFormatPipe.transform(this.newPhoneNumber),
                  phoneNumExtn:this.newPhoneExtn};
      this.onUpdateUser.emit(inData)
      this.editingDone = true;
      this.editing = false;
    }

    ngOnChanges(changes: SimpleChanges) {
        if(changes['isUpdateSuccesful']){
          if(this.isUpdateSuccesful){this.displayPhoneNum = this.getPhoneDisplay(this.newPhoneNumber,this.newPhoneExtn)}
          else{this.displayPhoneNum = this.getPhoneDisplay(this.phoneNumber,this.extn);}
        }
    }

    onCancel(){
      this.editingDone = true;
      this.editing = false;
    }

    ngOnInit() {
        this.newPhoneNumber = this.phoneNumber;
        this.newPhoneExtn = this.extn;
        this.displayPhoneNum = this.getPhoneDisplay(this.phoneNumber,this.extn);
    }

    getPhoneDisplay(phoneNum,extn): string{
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
