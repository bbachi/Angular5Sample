import { BaseRequest } from './base.request';
import * as cst from './../util/constant';

export class OetdspRequest extends BaseRequest {
    
        constructor(){
            super();
        }
        endDate:string;
        esiid:string;
        tdsp:string;
        startDate:string;
        trackingNum:string;
        
}