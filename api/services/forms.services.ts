import * as request from 'request';
import LoggerUtil from './../logs/log';
import Promise = require('tspromise');
import * as cst from './../util/constant';
import { RestUtil } from './../services/rest.util';
import { BaseService } from './base.service';


export class FormsService extends BaseService {

    constructor(){
        super();
    };

    public getFormFileDetailsforPromocode(postData:any): Promise<any> {
        return this.restUtil.post(cst.GET_FORM_FILE_DTLS_FOR_PROMOCODE_URL, postData);
    }


    public getPDFForm(postData:any): Promise<any> {
          return this.restUtil.post(cst.GET_PDF_FORMS_URL, postData);
    }


}
