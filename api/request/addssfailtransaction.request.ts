import{BaseRequest} from './../request/base.request';

export class AddSSFailTransactionRequest extends BaseRequest{

      constructor(){
          super();
      }

      createdBy:string;
      errorCode:string;
      errorLocation:string;
      errorMessage:string;
      reason:string;

    }
