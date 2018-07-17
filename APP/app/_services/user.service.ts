import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BaseService } from './base.service';
import * as URL_CONSTS from './urlconstants'
import { FirstLogOnFlag } from '../_models'

@Injectable()
export class UserService extends BaseService {

    private getFirstLognFlagUrl = URL_CONSTS.GET_FIRST_LOGIN_FLAG_URL;
    private setFirstLognFlagUrl = URL_CONSTS.SET_FIRST_LOGIN_FLAG_URL;
    private getUserProfileUrl = URL_CONSTS.USER_DETAILS_URL;

    getFirstLogonFlag(userName: string): Observable<FirstLogOnFlag> {
        return super.callAPI(this.getFirstLognFlagUrl,{userName});
    }

    setFirstLogonFlag(userName: string): Observable<any> {
        return super.callAPI(this.setFirstLognFlagUrl,{userName});

    }

    getUserProfile(userName: string): Observable<any> {
        return super.callAPI(this.getUserProfileUrl,{userName});
    }

}
