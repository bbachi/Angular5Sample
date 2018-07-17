import * as request from 'request';
import LoggerUtil from './../logs/log';
import Promise = require('tspromise');
import * as cst from './../util/constant';
import { RestUtil } from './../services/rest.util';
import { BaseService } from './base.service';


export class BillFetchService extends BaseService {

    constructor(){
        super();
    };

    public fetchBillInvoicePDF(postData:any): Promise<any> {
        //TODO:port the code to fetch invoice pdfs from Documentum to service layer
        return this.restUtil.post(cst.FETCH_BILL_INVOICE_PDF_URL, postData);
    }

    public validateInvoiceAndCANumber(postData:any): Promise<any> {
        return this.restUtil.post(cst.VALIDATE_INVOICE_AND_CA_NUM_URL, postData);
    }

   }