import { BaseRequest } from './base.request';
import {UpdatePMServiceStartStopRequest} from "./updateservicestart.request";
export class MFStartServiceRequest extends UpdatePMServiceStartStopRequest {

        constructor(){
            super();
        }


}

export class GetPromoCodeDetailsRequest extends BaseRequest {

        constructor(){
            super();
        }

       strRelationshipId:string;
}
