import { Component, Input, Output, OnInit, EventEmitter, OnChanges, SimpleChanges  } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../app-state/reducers';
import * as profileTypes from '../../app-state/actions/profile'

@Component({
    selector: 'update-user-email',
    template:`<div id="divid">
                <div *ngIf="editingDone">
                  <div class="label">Email address:</div>
                  <div class="data">{{email}}</div>
                  <div class="inlineBlock width40Per text-right"><a (click)="onEdit()" class="edit">Edit</a></div>
                </div>
                <div class="inlineBlock" *ngIf="editing">
                    <div class="inlineBlock">
                      <label for="email">Email address</label>
                      <input type="text" name="email" [(ngModel)]="newEmail"/>
                    </div>
                    <div class="inlineBlock">
                      <a (click)="onSave()">Save</a>
                      <a (click)="onCancel()" class="mL20">Cancel</a>
                    </div>
                </div>
              </div>`,
    styles: ['a { cursor: pointer; }','#divid{margin-bottom: 20px;}']
})

export class EmailComponent implements OnInit, OnChanges {

    @Input() email: string;
    @Output() onUpdateUser = new EventEmitter<any>();
    @Input() isUpdateSuccesful: boolean;

    editingDone:boolean = true;
    editing: boolean;

    newEmail: string;

    constructor(private store: Store<fromRoot.State>) {}

    onEdit(){
      this.editingDone = false;
      this.editing = true;
    }

    onSave(){
      var inData = {fieldName:'email', email:this.newEmail};
      this.onUpdateUser.emit(inData)
      this.editingDone = true;
      this.editing = false;
    }

    ngOnChanges(changes: SimpleChanges) {
        if(changes['isUpdateSuccesful']){
          if(this.isUpdateSuccesful){this.email = this.newEmail}
          else{this.email = this.email}
        }
    }

    onCancel(){
      this.editingDone = true;
      this.editing = false;
    }

    ngOnInit() {
        this.newEmail = this.email;
    }

}
