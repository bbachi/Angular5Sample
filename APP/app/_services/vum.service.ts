import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BaseService } from './base.service';
import * as URL_CONSTS from './urlconstants'

@Injectable()
export class VUMService extends BaseService {

    private getDailyReportUrl = URL_CONSTS.GET_VACANT_DAILY_REPORT_URL;
    private getVUMDataSetupUrl = URL_CONSTS.GET_VACANT_VUM_DATA_URL;
    private updateEmailPrefUrl = URL_CONSTS.UPDATE_EMAIL_PREFERENCE_URL;
    private updateESIIDAttributeUrl = URL_CONSTS.UPDATE_ESIID_ATTRIBUTE_URL;

    getVacantDailyReport(inData: string): Observable<any> {
        return super.callAPI(this.getDailyReportUrl,inData);
    }

    getVacantDataSetup(inData: any): Observable<any> {
        return super.callAPI(this.getVUMDataSetupUrl,inData);
    }

    updateEmailPreference(inData: any): Observable<any> {
        return super.callAPI(this.updateEmailPrefUrl,inData);
    }

    updateESIIDAttribute(inData: any): Observable<any> {
        return super.callAPI(this.updateESIIDAttributeUrl,inData);
    }

}
