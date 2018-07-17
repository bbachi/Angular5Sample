import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import * as URL_CONSTS from '../app/_services/urlconstants'

export class TestService {

    public loadData(url): Observable<any> {
        if(url == URL_CONSTS.GET_FIRST_LOGIN_FLAG_URL){
          return Observable.of({flag:"Y"})
        }
        return Observable.of({})
    }
}
