import { BaseRequest } from './base.request';

export class UserDtlsForRstPswdRequest extends BaseRequest{

    strTransactionId: string;
}

export class UpdatePwdExpiryRequest extends BaseRequest{

   txnId:string;
   userName:string;
}
