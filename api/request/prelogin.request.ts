import { BaseRequest } from './base.request';
import * as cst from './../util/constant';

export class BPHierarchyRequest extends BaseRequest {
    
        constructor(){
            super();
        }
        bpNumberList: string[];
        federalTaxIdList: string[];   //this list contains same federal tax id with '-' and without '-'
        callType:string;
        strLoggedInUserName:string;
       
    }

    export class BPHierarchyDtlsRequest extends BaseRequest {

        propNodeGuidList:string[];
        strLoggedInUserName:string;
    }

    export class AccessPrivilegesRequest extends BaseRequest {        
                
            strRelationshipId:string;
    }

    export class GetCustomerContractRequest extends BaseRequest {

       strNONCAAMSTRBP:string;
       strCAAMSTRBP:string;
    }