import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ProfileService } from '../../_services/';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../app-state/reducers';
import * as selectedPropertyTypes from '../../app-state/actions/selectedproperty'

@Injectable()
export class UserDetailsResolve implements Resolve<any> {

  userName: string;
  constructor(private profileService: ProfileService, private store: Store<fromRoot.State>) {
      this.store.select(fromRoot.getUserNameForProfileDetails).subscribe(userName => {
          this.userName = userName;
      });
  }

  resolve(route: ActivatedRouteSnapshot): Observable<any>|any {
      return this.profileService.getUserProfileDetails({userName:this.userName});
  }

}
