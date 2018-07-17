import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/withLatestFrom';
import { of } from 'rxjs/observable/of';
import { Effect, Actions, toPayload } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ProfileService } from '../../_services/profile.service';
import * as profile from '../actions/profile';

@Injectable()
export class ProfileEffects {

  constructor(private action$: Actions, private profileService: ProfileService) { }

  @Effect()
  validateUserNameEffects$ = this.action$.ofType(profile.VALIDATE_USER_NAME)
    .map(toPayload)
    .switchMap((payload) => this.profileService.validateUserName(payload)
    .map((result) => {
        return new profile.ValidateUserNameSuccess(result)
    }))
    .catch(() => Observable.of(new profile.ValidateUserNameFailure({})))


  @Effect()
  saveUserEffects$ = this.action$.ofType(profile.SAVE_USER)
    .map(toPayload)
    .switchMap((payload) => this.profileService.saveUser(payload)
    .map((result) => {
        return new profile.SaveUserSuccess(result)
    }))
    .catch(() => Observable.of(new profile.SaveUserFailure({})))


  @Effect()
  listAssociatesEffects$ = this.action$.ofType(profile.LIST_ADMIN_ASSOCIATES)
    .map(toPayload)
    .switchMap((payload) => this.profileService.listAssociates(payload)
    .map((result) => {
        return new profile.ListAssociatesSuccess(result)
    }))
    .catch(() => Observable.of(new profile.ListAssociatesFailure({})))


  @Effect()
  getUserProfileDetailsEffects$ = this.action$.ofType(profile.GET_USER_PROFILE_DETAILS)
    .map(toPayload)
    .switchMap((payload) => this.profileService.getUserProfileDetails(payload)
    .map((result) => {
        return new profile.GetUserProfileDetailsSuccess(result)
    }))
    .catch(() => Observable.of(new profile.GetUserProfileDetailsFailure({})))


  @Effect()
  updateUserEffects$ = this.action$.ofType(profile.UPDATE_USER)
    .map(toPayload)
    .switchMap((payload) => this.profileService.updateUser(payload)
    .map((result) => {
        return new profile.UpdateUserSuccess(result)
    }))
    .catch(() => Observable.of(new profile.UpdateUserFailure({})))


  @Effect()
  searchUsersForUpdateEffects$ = this.action$.ofType(profile.SEARCH_USERS_FOR_UPDATE)
    .map(toPayload)
    .switchMap((payload) => this.profileService.searchUsersForUpdate(payload)
    .map((result) => {
        return new profile.SearchUsersForUpdateSuccess(result)
    }))
    .catch(() => Observable.of(new profile.SearchUsersForUpdateFailure({})))


  @Effect()
  removeUserEffects$ = this.action$.ofType(profile.REMOVE_USER)
    .map(toPayload)
    .switchMap((payload) => this.profileService.removeUser(payload)
    .map((result) => {
        return new profile.RemoveUserSuccess(result)
    }))
    .catch(() => Observable.of(new profile.RemoveUserFailure({})))

}
