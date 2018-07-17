import { BaseRequest } from './base.request';

export class GetTransactionsRequest extends BaseRequest {
    fromDate: string;
    toDate: string;
}
