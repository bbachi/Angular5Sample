import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BaseService } from './base.service';
import { Http } from '@angular/http';
import { Store } from '@ngrx/store';
import * as fromRoot from '../app-state/reducers';
import * as selectedPropertyTypes from '../app-state/actions/selectedproperty'
import { ISubscription } from "rxjs/Subscription";
import 'rxjs/add/operator/take';
import * as URL_CONSTS from './urlconstants'

@Injectable()
export class AccountService extends BaseService {

    constructor(private http1: Http, private store1: Store<fromRoot.State>){
        super(http1,store1)
    }

    private searchByBpNumberUrl = URL_CONSTS.SEARCH_BY_BP_NUMBER_URL;
    private searchByFedTaxIdUrl = URL_CONSTS.SEARCH_BY_FED_TAX_ID_URL;
    private customerDtlsUrl = URL_CONSTS.CUSTOMER_DETAILS_URL;
    private listESIIDListUrl = URL_CONSTS.LIST_ESIID_URL;

    private subscription: ISubscription;

    private relationshipId: string;

    setSelectedpopertyRelationshipId(relationshipId: string){
        this.relationshipId = relationshipId;
    }

    searchByBpNumber(inData: string): Observable<any> {
        return super.callAPI(this.searchByBpNumberUrl,inData);
    }

    searchByFedTaxId(inData: string): Observable<any> {
        return super.callAPI(this.searchByFedTaxIdUrl,inData);
    }

    getCustomerDetails(relationshipId:string): Observable<any> {
        return super.callAPI(this.customerDtlsUrl,{relationshipId});
    }

    listESIIDs(inData: any): Observable<any> {
        return super.callAPI(this.listESIIDListUrl,inData);
    }

    onManagement(bpNumber: string, mngList:any[]): any{
        let mngmt = mngList.filter(mng => mng.bpNumber == bpNumber);
        let regionList = [];
        let propertyList = [];
        let showNode = "";
        if(mngmt.length > 0){
            regionList = mngmt[0].regionList;
            if(regionList.length == 1 && regionList[0].bpNumber == 'NO_REGN'){
               propertyList = regionList[0].propertyList
               showNode = "P"
            }else{
               showNode = "R"
            }
        }
        return {regionList,propertyList,showNode}
    }

    isInternalUserHasAssociates(securityRole: string) {
        if(securityRole == 'I_Agent_EMM' || securityRole == 'I_Agent_EMA'){
            return true;
        }
        return false;
    }

    isEMA(securityRole: string){
        return securityRole == 'I_Agent_EMA'
    }

    getSearchErrorMessage(selectionType: string): string {
        if(selectionType == 'BP') return "Business Partner Account is required."
        if(selectionType == 'AN') return "Account Name is required."
        if(selectionType == 'PN') return "Property Name is required."
        if(selectionType == 'TID') return "Tax ID is required."
    }

}
