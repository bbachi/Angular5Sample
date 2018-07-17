import { BaseRequest } from './base.request';


export class GetFormFileDetailsForPromoCodeRequest extends BaseRequest {

        constructor(){
            super();
        }

       promoCodeList:Array<string>;
}
