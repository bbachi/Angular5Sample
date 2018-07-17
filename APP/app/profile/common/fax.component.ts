import { Component, Input, Output, OnInit, EventEmitter, OnChanges, SimpleChanges  } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../app-state/reducers';
import * as profileTypes from '../../app-state/actions/profile'
import { PhoneFormatPipe } from '../../_pipes';

@Component({
    selector: 'update-user-fax',
    templateUrl:'./fax.component.html',
    styles: ['a { cursor: pointer; }','#divid{margin-bottom: 20px;}']
})

export class FaxComponent implements OnInit, OnChanges {

    @Input() faxNumber: string;
    @Output() onUpdateUser = new EventEmitter<any>();
    @Input() isUpdateSuccesful: boolean;

    displayFaxNum: string;
    editingDone:boolean = true;
    editing: boolean;
    newFaxNumber: string;

    phoneFormatPipe: PhoneFormatPipe;

    constructor(private store: Store<fromRoot.State>) {
        this.phoneFormatPipe = new PhoneFormatPipe();
    }

    onEdit(){
      this.editingDone = false;
      this.editing = true;
    }

    onSave(){
      var inData = {fieldName:'fax',faxNum:this.phoneFormatPipe.transform(this.newFaxNumber)};
      this.onUpdateUser.emit(inData)
      this.editingDone = true;
      this.editing = false;
    }

    ngOnChanges(changes: SimpleChanges) {
        if(changes['isUpdateSuccesful']){
          if(this.isUpdateSuccesful){this.displayFaxNum = this.getPhoneDisplay(this.newFaxNumber,"");}
          else{this.faxNumber = this.faxNumber}
        }
    }

    onCancel(){
      this.editingDone = true;
      this.editing = false;
    }

    ngOnInit() {
        this.newFaxNumber = this.faxNumber;
        this.displayFaxNum = this.getPhoneDisplay(this.faxNumber,"");
    }

    getPhoneDisplay(phoneNum,extn): string{
      return this.isNotBlank(phoneNum)?this.phoneFormatPipe.transform(phoneNum):'Not Provided'
    }

    isNotBlank(val: string): boolean {

        if(undefined != val && val.trim().length > 0){
            return true;
        }
        return false;
    }

}
