import { BaseRequest } from './base.request';
import * as cst from './../util/constant';

export class GetTCSEsidDetailsRequest  extends BaseRequest {
    
        constructor(){
            super();
        }
       esiidList:string[];
       strLoggedInUserName:string;
}