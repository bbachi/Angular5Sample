import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BaseService } from './base.service';
import * as URL_CONSTS from './urlconstants'

@Injectable()
export class CCService extends BaseService {

    private ccEmailUsUrl = URL_CONSTS.CC_EMAIL_US_URL;
    private ccFAQsUrl = URL_CONSTS.CC_FAQS_URL;


    emailUs(inData: string): Observable<any> {
        return super.callAPI(this.ccEmailUsUrl,inData);
    }

    getFaqs(inData: any): Observable<any> {
        return super.callAPI(this.ccFAQsUrl,inData);
    }
}
