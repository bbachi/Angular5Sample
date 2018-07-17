import { BaseRequest } from './base.request';


export class GetTxnDetailsRequest extends BaseRequest {

        constructor(){
            super();
        }

      transactionId:string;
      transactionType:string;


}
