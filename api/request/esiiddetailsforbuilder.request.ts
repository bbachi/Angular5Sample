import { BaseRequest } from './base.request';
import * as cst from './../util/constant';

export class ESIIDDetailsForBuilderRequest extends BaseRequest {
    
        constructor(){
            super();
        }
       bpNumberList:string[];
       strLoggedInUserName:string;
}