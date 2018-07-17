import{BaseRequest} from './../request/base.request';

export class AddUserTxnRequest extends BaseRequest{

      constructor(){
          super();
      }

      strActivityPerformed:string;
      strActivityType:string;
      strTransactionType:string;
      strUsername:string;
      strVUECity:string;
      strVUEESIID:string;
      strVUEEmailOne:string
      strVUEEmailTwo:string;
      strVUEPropertyName:string;
      strVUEState:string;
      strVUEStreetAddress:string;
      strVUEUnit:string;
      strVUEUnitThreshold:string;
      strVUEUnitType:string;
      strVUEZipcode:string;


    }
