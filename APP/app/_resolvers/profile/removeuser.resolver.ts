import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { ProfileService } from '../../_services/profile.service';
import { SharedService } from '../../_services/shared.service';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class RemoveUserResolve implements Resolve<any> {

  user: any;

  constructor(private profileService: ProfileService, private sharedService: SharedService) {

  }

  resolve(route: ActivatedRouteSnapshot) {
    return new Observable((observer) => {
        this.user = this.sharedService.getUserForRemoval();
        let obj = {userName:this.user.userName,email:this.user.email,firstName:this.user.firstName,lastName: this.user.lastName}
        this.profileService.removeUser(obj).subscribe(data => {
            observer.next({...this.user,...data});
            observer.complete();
        });
    });
  }
}
