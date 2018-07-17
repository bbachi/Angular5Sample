import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { ProfileService } from '../../_services/profile.service';

@Injectable()
export class PasswordResetResolve implements Resolve<any> {

  constructor(private profileService: ProfileService) {}

  resolve(route: ActivatedRouteSnapshot) {
    //console.log("id:::"+route.paramMap.get('id'))
    return this.profileService.getUserDtlsForTxnId(route.paramMap.get('id'));
  }
}
