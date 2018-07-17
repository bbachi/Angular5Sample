import { Injectable, EventEmitter, Output } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { BaseService } from './base.service';
import * as _ from 'lodash';

@Injectable()
export class SharedService extends BaseService {

    /* route info */
    private userForRemoval: any;
    private txnInfoForDetail: any;
    /* route info */
    private relationshipId: string;
    private userDetails: any;
    private selectedpropertyDtls = new Subject<any>();
    private webSecurityRole = new Subject<any>();
    private startServiceData: any;
    private isSelectedPropertyHasOnlyOneProperty: boolean;
    private messageContentsUrl = '/content/message';

    public hideBGImage = new Subject<any>();

    setImage(state: boolean){
        console.log("state::::"+state);
        this.hideBGImage.next(state);
    }

    setLoggedInUserHasOnlyOneProperty(flag: boolean){
        this.isSelectedPropertyHasOnlyOneProperty = flag;
    }

    getLoggedInUserHasOnlyOneProperty(){
        return this.isSelectedPropertyHasOnlyOneProperty;
    }

    setSelectedpopertyRelationshipId(relationshipId: string){
        this.relationshipId = relationshipId;
    }

    getStartServiceData(){
        return this.startServiceData;
    }

    setStartServiceData(data: any){
        this.startServiceData = data;
    }

    getLoggedInUserDetails(){
        return this.userDetails;
    }

    setLoggedInUserDetails(userDetails: any){
        this.userDetails = userDetails;
    }

    getSelectedpopertyRelationshipId(){
        return this.relationshipId;
    }

    setSelectedPropertyDtls(property: any){
        this.selectedpropertyDtls.next(property);
    }

    getSelectedPropertyDtls(): Observable<any>{
        return this.selectedpropertyDtls.asObservable();
    }

    setUserForRemoval(user: any){
        this.userForRemoval = user;
    }

    getUserForRemoval(){
        return this.userForRemoval;
    }

    setTxnInfoForDetails(txn: any){
        this.txnInfoForDetail = txn;
    }

    getTxnInfoForDetails(){
        return this.txnInfoForDetail;
    }

    getMessageContent(inData: any): Observable<any> {
        return super.callAPI(this.messageContentsUrl,inData);
    }


    private selectedUnits: any[] = []; //this is for back button from verification page

    /* Select units page logic start */
    onUnitSelection(inData: any, unitNumberAndDateObj: any, selectedUnits:any,isUnitNotSelected:boolean,selectedServiceAddr:any): any{
      let clickVal = inData.clickVal
      if(clickVal == 'date'){
          unitNumberAndDateObj = this.checkForIncomingUnitAndPush(inData.unitNumber,inData.effectiveDate,inData.isPrioritySelected,inData.isCurrentDaySelected,unitNumberAndDateObj);
      }else{
        if(inData.checked){
            isUnitNotSelected = false;
            let selectedUnit = selectedServiceAddr.unitList.filter((unit) => unit.strUnitNumber == inData.unitNumber)
            selectedUnits.push(selectedUnit[0]);
        }else{
            selectedUnits = selectedUnits.filter((unit) => unit.strUnitNumber != inData.unitNumber)
        }
      }
      return {selectedUnits,unitNumberAndDateObj,isUnitNotSelected}
    }

    checkForIncomingUnitAndPush(unitNumber, effectiveDate, isPrioritySelected, isCurrentDaySelected, unitNumberAndDateObj){
        let unitAndDateList = unitNumberAndDateObj;
        let unitFound: boolean = false;
        if(unitAndDateList.length > 0){
            unitAndDateList.forEach(unitAndDate => {
                if(unitAndDate.unitNumber == unitNumber){
                    unitFound = true;
                    unitAndDate.effectiveDate = effectiveDate;
                    unitAndDate.prioritySelected = isPrioritySelected;
                    unitAndDate.currentDaySelected = isCurrentDaySelected;
                }
            });
        }
        if(!unitFound){
            unitNumberAndDateObj.push({unitNumber,effectiveDate,prioritySelected:isPrioritySelected,currentDaySelected:isCurrentDaySelected});
        }else{
            unitNumberAndDateObj = unitAndDateList;
        }
        return unitNumberAndDateObj;
    }

    checkIfCurrentDaySelectedInAnyOneOfSelectedUnits(unitNumberAndDate: any){
        let currentDayAry = 0;
        if(undefined != unitNumberAndDate && unitNumberAndDate.length > 0){
            unitNumberAndDate.forEach(unitAndDate => {
                if(unitAndDate.currentDaySelected)currentDayAry++;
            })
        }
        //this.showSameDayEnrollMessage = (currentDayAry > 0)
    }

    processSelectedUnits(unitNumberAndDate: any, selectedUnits: any){
        var seldUnits = new Array<any>();
        if(unitNumberAndDate.length > 0 && selectedUnits.length == unitNumberAndDate.length){
            unitNumberAndDate.forEach(unitAndDate => {
              selectedUnits.forEach(unit => {
                  if(unit.strUnitNumber == unitAndDate.unitNumber){
                      var unitSeld = {...unit};
                      unitSeld.effectiveDate = unitAndDate.effectiveDate;
                      unitSeld.priorityDateSelected = unitAndDate.prioritySelected;
                      unitSeld.currentDaySelected = unitAndDate.currentDaySelected;
                      seldUnits.push(unitSeld);
                  }
              })
            })
            this.selectedUnits = seldUnits;
            return seldUnits;
        }else{
          return seldUnits;
        }
    }

    getUnitAndDateList(){
        let unitAndDateList = [];
        if(undefined != this.selectedUnits){
            this.selectedUnits.forEach(selUnit => {
                let unitAndDate:any = {};
                unitAndDate.effectiveDate = selUnit.effectiveDate;
                unitAndDate.priorityDateSelected = selUnit.priorityDateSelected;
                unitAndDate.currentDaySelected = selUnit.currentDaySelected;
                unitAndDate.unitNumber = selUnit.strUnitNumber;
                unitAndDateList.push(unitAndDate);
            })
        }
        return unitAndDateList;
    }

    getUnitList(selectedServiceAddr, serviceType:string): any{
        let unitList = selectedServiceAddr.unitList;
        let returnUnitList = [];
        unitList.forEach(unit => {
            if(serviceType == 'START'){
                if(!unit.active){returnUnitList.push(unit)}
            }else{
                if(unit.active){returnUnitList.push(unit)}
            }
        });
        return this.mergeWithSelectedUnits(returnUnitList);
    }

    mergeWithSelectedUnits(unitList: any[]){
        let selectedUnits = this.selectedUnits;
        if(undefined != selectedUnits && selectedUnits.length > 0){
            let cloneList = _.cloneDeep(unitList);
            cloneList.forEach(unit => {
                selectedUnits.forEach(selUnit => {
                    if(unit.strUnitNumber == selUnit.strUnitNumber){
                        unit.selected = true;
                        unit.effectiveDate = selUnit.effectiveDate;
                    }
                })
            })
            return cloneList;
        }else{
            return unitList;
        }
    }

    searchUnitListWithComma(unitList: any[], input){
        if(input.indexOf(",") != -1){
            let unitArray = input.split(",");
            let returnUnitList = [];
            unitList.forEach(unit => {
                unitArray.forEach(input => {
                    if(input == unit.strUnitNumber){
                        returnUnitList.push(unit);
                    }
                })
            })
            return returnUnitList;
        }else{
            return unitList.filter((unit) => unit.strUnitNumber == input)
        }
    }

    public getSelectedUnits(){
        return this.selectedUnits;
    }

    public setSelectedUnitsEmpty(){
        this.selectedUnits = [];
    }

    /* select units page logic end */

}
