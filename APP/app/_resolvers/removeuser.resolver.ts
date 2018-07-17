import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { ProfileService } from '../_services/profile.service';
import { SharedService } from '../_services/shared.service';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class RemoveUserResolve implements Resolve<any> {

  user: any;

  constructor(private profileService: ProfileService, private sharedService: SharedService) {
      this.user = sharedService.getUserForRemoval();
  }

  resolve(route: ActivatedRouteSnapshot) {
    return new Observable((observer) => {
        this.profileService.removeUser({userName:this.user.userName,user:this.user}).subscribe(data => {
            observer.next({...this.user,...data});
            observer.complete();
        });
    });
  }
}
