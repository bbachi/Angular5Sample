import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../app-state/reducers';
import * as profileTypes from '../../../app-state/actions/profile'
import { Observable } from 'rxjs/Observable';
import { ProfileService } from '../../../_services/profile.service'

@Component({
    selector: 'admin-user-search',
    templateUrl: './adminsearch.component.html',
    styleUrls: ['./adminsearch.component.css']
})

export class AdminSearchComponent implements OnInit {

    userList$: Observable<any>;
    dontShowLoading:boolean = false;
    @Output() onContinueClick = new EventEmitter<any>();
    @Input() fromPage: string;
    onPageLoad:boolean = false;
    buttonName: string;
    isUserNotSelectedForUpdate: boolean;
    user: any;

    message: string;
    isSuccess: boolean;

    constructor(private router: Router, private store: Store<fromRoot.State>, private profileService: ProfileService) {}

    onSearchUsersBy(inData){
        this.dontShowLoading = true;
        this.onPageLoad = true;
        this.store.dispatch(new profileTypes.SearchUsersForUpdate(inData));

        this.userList$ = this.store.select(fromRoot.getUsersForUpdate);
    }

    onUpdateUser(){
        if(this.user == undefined){
            this.isUserNotSelectedForUpdate = true;
        }else{
            this.isUserNotSelectedForUpdate = false;
            this.onContinueClick.emit(this.user.userName)
        }
    }

    resetPasswordStatus(status){
        this.isUserNotSelectedForUpdate = status.isUserNotSelectedForUpdate;
        this.message = status.message;
        this.isSuccess = status.isSuccess;
    }

    onSelectUser(user){
        this.user = user;
    }

    ngOnInit() {
        this.buttonName = this.fromPage == 'UPDATE_PAGE'?"Update User":"Remove User";
    }

}
