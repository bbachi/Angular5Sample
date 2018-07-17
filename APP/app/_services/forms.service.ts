import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BaseService } from './base.service';
import * as URL_CONSTS from './urlconstants'

@Injectable()
export class FormsService extends BaseService {

    private listFormsUrl = URL_CONSTS.LIST_FORMS_URL;
    private getPDFUrl = URL_CONSTS.GET_PDF_URL;

    listForms(inData: any): Observable<any> {
        return super.callAPI(this.listFormsUrl,inData);
    }

    getPDF(inData: any): any {
        //return super.callAPI(this.getPDFUrl,inData);
        return super.downloadPDF(this.getPDFUrl,inData);
    }

}
