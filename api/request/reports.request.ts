import { BaseRequest } from './base.request';
import * as cst from './../util/constant';

export class ReportsRequest extends BaseRequest {

        constructor(){
            super();
        }
        bpNumber: string;
        fromDate: string;
        toDate:string;
        reportType:string;
        relationshipId:string;
        companyCode:string;

    }

  
