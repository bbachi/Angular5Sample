import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BaseService } from './base.service';
import * as URL_CONSTS from './urlconstants'

@Injectable()
export class ServiceStopService extends BaseService {

    private listPropertyAddressUrl = URL_CONSTS.LIST_PROPERTY_ADDR_STOP_URL;
    private stopServiceSubmitUrl = URL_CONSTS.STOP_SERVICE_SUBMIT_URL;

    listPropertyAddress(startDate: string, endDate: string): Observable<any> {
        return super.callAPI(this.listPropertyAddressUrl,{startDate,endDate});
    }

    submitStopService(submitReq:any): Observable<any> {
        return super.callAPI(this.stopServiceSubmitUrl,submitReq);
    }

}
