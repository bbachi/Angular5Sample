import { BaseRequest } from './base.request';

export class EsiidDetailsForMultifamilyRequest extends BaseRequest {

    bpNumberList: string[];
}

export class GetTCSEsidDetailsRequest extends BaseRequest {

    esidList: string[];
}
