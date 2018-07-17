import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BaseService } from './base.service';
import * as URL_CONSTS from './urlconstants'

@Injectable()
export class ServiceStartService extends BaseService {

    private listPropertyAddressUrl = URL_CONSTS.LIST_PROPERTY_ADDR_URL;
    private startServiceSubmitUrl = URL_CONSTS.START_SERVICE_SUBMIT_URL;
    private planDetailsUrl = URL_CONSTS.PLAN_DETAILS_URL;
    private listPromocodesUrl = URL_CONSTS.LIST_PROMO_CODE_URL;
    private getUnavailableDatesUrl = URL_CONSTS.GET_UNAVILABLE_DATES_URL;
    private selectUnitsGetNearTo5pmFlagUrl = URL_CONSTS.SELECT_UNITS_GET_NEAR_TO5PM_FLAG_URL;
    private verifyGetNearTo5pmFlagUrl = URL_CONSTS.VERIFY_GET_NEAR_TO_5PM_FLAG_URL;

    isCalandarShownAtTheMoment: boolean = true;

    listPropertyAddress(esiidList: any): Observable<any> {
        return super.callAPI(this.listPropertyAddressUrl,esiidList);
    }

    submitStartService(submitReq:any): Observable<any> {
        return super.callAPI(this.startServiceSubmitUrl,submitReq);
    }

    getPlanDetails(promoCodeList: any): Observable<any> {
        return super.callAPI(this.planDetailsUrl,{promoCodeList});
    }

    getPromocodeList(relationshipId: any): Observable<any> {
        return super.callAPI(this.listPromocodesUrl,{relationshipId});
    }

    getUnavailableDates(esiid: any): Observable<any> {
        return super.callAPI(this.getUnavailableDatesUrl,{esiid});
    }

    getNearTo5pmFlag(fromPage: any): Observable<any> {
       let url = fromPage == 'Verify'?this.verifyGetNearTo5pmFlagUrl:this.selectUnitsGetNearTo5pmFlagUrl;
       return super.callAPI(url,{fromPage});
    }

    SetCalandarShownAtTheMoment(val: boolean){
        this.isCalandarShownAtTheMoment = val;
    }

}
