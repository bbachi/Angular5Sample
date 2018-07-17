import { Component, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VUMService } from '../../_services/vum.service'
import { Store } from '@ngrx/store';
import * as fromRoot from '../../app-state/reducers';
import * as startserviceTypes from '../../app-state/actions/startservice';
import * as vumTypes from '../../app-state/actions/vum';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/takeUntil';
import { Subject } from "rxjs/Subject";
import * as _ from 'lodash';

@Component({
    templateUrl: './alertsetup.component.html',
    styles: [`vum-email-setup{margin-bottom: 100px;}`]
})
export class VacantUnitAlertSetupComponent implements OnInit, OnDestroy {

    vumData: any;
    relationshipId: string;
    propertyName: string;
    updateStatus: boolean;
    statusMessage: string;
    updateEmailStatus: boolean;

    destroy$: Subject<boolean> = new Subject<boolean>();
    emailDestroy$: Subject<boolean> = new Subject<boolean>();


    constructor(private route: ActivatedRoute, private vumService: VUMService, private store: Store<fromRoot.State>) {

        Observable.combineLatest(
            store.select(fromRoot.getRelationshipId),
            store.select(fromRoot.getSelectedpropertyName)
        )
        .takeUntil(this.destroy$)
        .subscribe((result: any) => {
            this.relationshipId = result[0];
            this.propertyName = result[1];
        });
    }

    applyToAll(applyAllObj: any){

        let unitList: any[] = this.vumData.unitList;
        
        unitList.forEach(unit => {
           if(unit.unitType == "1") unit.unitThreshold = ("" != applyAllObj.bed1Threshold)?applyAllObj.bed1Threshold:unit.unitThreshold;
           if(unit.unitType == "2") unit.unitThreshold = ("" != applyAllObj.bed2Threshold)?applyAllObj.bed2Threshold:unit.unitThreshold;
           if(unit.unitType == "3") unit.unitThreshold = ("" != applyAllObj.bed3Threshold)?applyAllObj.bed3Threshold:unit.unitThreshold;
           if(unit.unitType == "0") unit.unitThreshold = ("" != applyAllObj.otherThreshold)?applyAllObj.otherThreshold:unit.unitThreshold;
        });
        var inData = {unitList,propertyName: this.propertyName}
        this.vumService.updateESIIDAttribute(inData).subscribe(data => {
            this.vumData.unitList = unitList;
        });
    }


    updateEmailPreference(emailObj: any){
        //console.log('emailObj.vumEmailStatus::::'+emailObj.vumEmailStatus)
        let emailFlag = emailObj.vumEmailStatus?'Y':'N';
        let propertyName = this.propertyName;
        let relationshipId = this.relationshipId;
        let email1 = emailObj.email1;
        let email2 = emailObj.email2;
        let updateType = emailObj.updateType;
        var inData = {emailFlag,propertyName,relationshipId,email1,email2,updateType}
        this.store.dispatch(new vumTypes.UpdateEmailPreference(inData));

        this.store.select(fromRoot.getUpdateEmailPreferenceStatus)
        .takeUntil(this.destroy$)
        .subscribe(data => {
            if(data.isLoadingSuccess){
                this.updateEmailStatus = data.status.status;
                this.statusMessage = data.status.status?"Updated Email Preference Successfully.":"Update email preference failed. Please try again."
            }else{
                this.updateEmailStatus = undefined;
            }
        })
  }

    afterEmailPreferenceUpdate(){
        this.emailDestroy$.next(true);
    }

    updateVUMESIIDAttribute(unit: any){
        let unitList = [];
        unitList.push(unit);
        this.store.dispatch(new vumTypes.UpdateESIIDAttribute({unitList,propertyName:this.propertyName}));
        this.updateStatus = undefined;

        this.store.select(fromRoot.getUpdateESIIDAttributeSatatus).takeUntil(this.destroy$).subscribe(resp => {
            if(resp.isLoadingSuccess){
                if(resp.status.status){
                  this.updateStatus = resp.status.status;
                  let unitList: any[] = this.vumData.unitList;
                  unitList.forEach(u => {
                      if(u.unitNumber == unit.unitNumber){
                          u.unitThreshold = unit.unitThreshold;
                          u.unitType = unit.unitType;
                      }
                  });
                  this.vumData.unitList = unitList;
                }else{
                    this.updateStatus = false;
                }
            }
        })
    }

    updateVUMESIIDAttributes(inUnitList: any){
        this.store.dispatch(new vumTypes.UpdateESIIDAttribute({unitList:inUnitList,propertyName:this.propertyName}));

        this.store.select(fromRoot.getUpdateESIIDAttributeSatatus).takeUntil(this.destroy$).subscribe(resp => {
            if(resp.isLoadingSuccess && resp.status.status){
              this.updateStatus = resp.status.status;
              let unitList: any[] = _.cloneDeep(this.vumData.unitList);
              unitList.forEach(u => {
                  inUnitList.forEach(unit => {
                    if(u.unitNumber == unit.unitNumber){
                        u.unitThreshold = unit.unitThreshold;
                        u.unitType = unit.unitType;
                    }
                  });
              });
              this.vumData.unitList = unitList;
            }else{
                this.updateStatus = false;
            }
        });
    }

    ngOnInit() {

      this.store.select(fromRoot.getESIIDList).takeUntil(this.destroy$).subscribe(result => {
          ////console.log("ESIID LENGTH SENDING TO START SERVICE LIST:::::"+esiidList.length);
          if(undefined == result.esiidList || result.esiidList.length == 0){
            this.store.select(fromRoot.getNONCAARealBPList).takeUntil(this.destroy$).subscribe(bpNumberList => {
                //console.log("ESIID LENGTH SENDING TO START SERVICE LIST:::::"+bpNumberList.length);
                this.vumService.getVacantDataSetup({bpNumberList,relationshipId:this.relationshipId}).subscribe(data => {
                    this.vumData = data;
                })
            })
          }else{
            this.vumService.getVacantDataSetup({esiidList:result.esiidList,relationshipId:this.relationshipId}).subscribe(data => {
                this.vumData = data;
            })
          }
      })

    }

    ngOnDestroy(){
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }

}
