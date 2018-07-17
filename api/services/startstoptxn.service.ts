import * as request from 'request';
import LoggerUtil from './../logs/log';
import Promise = require('tspromise');
import * as cst from './../util/constant';
import { RestUtil } from './../services/rest.util';
import { BaseService } from './base.service';


export class StartStopTxnService extends BaseService {

    constructor(){
        super();
    };

    public addHBStarService(postData:any): Promise<any> {
        return this.restUtil.post(cst.ADD_HB_START_SERVICE_URL, postData);
    }

    public addHBStopService(postData:any): Promise<any> {
        return this.restUtil.post(cst.ADD_HB_STOP_SERVICE_URL, postData);
    }

    public updateMFStopService(postData:any): Promise<any> {
        return this.restUtil.post(cst.UPDATE_MF_STOP_SERVICE_URL, postData);
    }

    public updateMFStartService(postData:any): Promise<any> {
        return this.restUtil.post(cst.UPDATE_MF_START_SERVICE_URL, postData);
    }

    public getTdspSpecificCalendarDates(postData:any): Promise<any> {
        return this.restUtil.post(cst.GET_TDSP_SPECIFIC_CALENDAR_DATES_URL, postData);
    }

    public getTDSPFromESID(postData:any): Promise<any> {
        return this.restUtil.post(cst.GET_TDSP_FROM_ESIID, postData);
    }

    public getPromocodeDetails(postData:any): Promise<any> {
        return this.restUtil.post(cst.GET_PROMOCODE_DETAILS_URL, postData);
    }


	// This will be used for both BLDR and MFAM start and stop service to get the service addresses
	//  strCustomerType;      //BLDR or MFAM
    //  strServiceType;        //START or STOP
    //  strSearchType;       //ADDR or ESID or PENDING (PENDING means manual addition of address and esiid)
    //  strServiceArea;       //CPE, TNMP, ONCOR, CPL for AEP TX Central, WTU for AEP TX North
	// @request


    public getServiceAddressForStartStopTxn(postData:any): Promise<any> {
        return this.restUtil.post(cst.GET_SERVICE_ADDRESS_FOR_START_STOP_TXN_URL, postData);
    }


    public isESIIDiSInPendingStatusForBuilderStart(postData:any): Promise<any> {
        return this.restUtil.post(cst.IS_ESIID_PENDING_FOR_BLDR_START, postData);
    }

}
