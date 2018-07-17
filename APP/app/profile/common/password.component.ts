import { Component, Input, Output, OnInit, EventEmitter, OnChanges, SimpleChanges  } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../app-state/reducers';
import * as profileTypes from '../../app-state/actions/profile'

@Component({
    selector: 'update-user-password',
    templateUrl: './password.component.html',
    styles: ['a { cursor: pointer; }','#divid{margin-bottom: 20px;}',
    '.bordercls{border-color:#ff8080}','.errMsg{color:#ff8080}']
})

export class PasswordComponent implements OnInit {

    editingDone:boolean = true;
    editing: boolean;
    newPassword: string;
    newRePassword: string;
    @Input() isUpdateSuccesful: boolean;
    @Output() onUpdateUser = new EventEmitter<any>();

    passwordsMismatch: boolean;
    isError: boolean;

    constructor(private store: Store<fromRoot.State>) {}

    onEdit(){
      this.editingDone = false;
      this.editing = true;
    }

    isPasswordMismatch(){
        return (this.newPassword.indexOf("***") == -1 &&
                this.newRePassword.indexOf("***") == -1 &&
                this.newPassword !== this.newRePassword);
    }

    checkPassword(){
        let alphaNumericPattern = '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{7,}$';
        var patt = new RegExp(alphaNumericPattern);
        if(undefined != this.newPassword && this.newPassword.length >= 7 && patt.test(this.newPassword)) return true;
        if(undefined != this.newRePassword && this.newRePassword.length >= 7 && patt.test(this.newRePassword)) return true;
        return false;
    }

    onSave(){
      this.passwordsMismatch = this.isPasswordMismatch();
      if(!this.passwordsMismatch && this.checkPassword()){
          this.isError = false;
          var inData = {fieldName:'password', password:this.newPassword,rePassword:this.newRePassword};
          this.onUpdateUser.emit(inData)
          this.editingDone = true;
          this.editing = false;
      }else{
          //console.log("passwords mismatch:::")
          this.isError = true;
      }
    }

    ngOnChanges(changes: SimpleChanges) {
        if(changes['isUpdateSuccesful']){
        if(this.isUpdateSuccesful){}
       }
    }

    onCancel(){
      this.editingDone = true;
      this.editing = false;
    }

    ngOnInit() {
        this.newPassword = "**********";
        this.newRePassword = "**********";
    }

}
