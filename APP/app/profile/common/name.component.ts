import { Component, Input, Output, OnInit, EventEmitter, OnChanges, SimpleChanges  } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../app-state/reducers';
import * as profileTypes from '../../app-state/actions/profile'

@Component({
    selector: 'update-user-name',
    templateUrl: './name.component.html',
    styles: ['a { cursor: pointer; }','#divid{margin-bottom: 20px;}']
})

export class NameComponent implements OnInit {

    @Input() firstName: string;
    @Input() lastName: string;
    @Input() isUpdateSuccesful: boolean;
    @Output() onUpdateUser = new EventEmitter<any>();

    editingDone:boolean = true;
    editing: boolean;
    newFirstName: string;
    newLastName: string;

    constructor(private store: Store<fromRoot.State>) {}

    onEdit(){
      this.editingDone = false;
      this.editing = true;
    }

    onSave(){
      var inData = {fieldName:'name', firstName:this.newFirstName,lastName:this.newLastName};
      this.onUpdateUser.emit(inData)
      this.editingDone = true;
      this.editing = false;
    }

    ngOnChanges(changes: SimpleChanges) {
        if(changes['isUpdateSuccesful']){
          //console.log("pppppppppp::name:::"+this.isUpdateSuccesful)
          if(this.isUpdateSuccesful){this.firstName = this.newFirstName;this.lastName = this.newLastName;}
        }
    }

    onCancel(){
      this.editingDone = true;
      this.editing = false;
    }

    ngOnInit() {
        this.newLastName = this.lastName;
        this.newFirstName = this.firstName;
    }

}
