import { BaseRequest } from './base.request';
import * as cst from './../util/constant';

export class TdspByESIDRequest extends BaseRequest {

        constructor(){
            super();
        }
       strCompanycode:string;
       pointOfDeliveryId:string;
}
