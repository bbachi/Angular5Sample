import { Component, Input, Output, OnInit, ViewChild, ElementRef, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { ModalService, SortService } from '../../_services';
import * as _ from 'lodash'

@Component({
    selector: 'vum-manage-threshold',
    templateUrl: './managethreshold.component.html',
    styles: ['.editIcon{cursor:pointer}']
})
export class ManageThresholdComponent implements OnInit, OnChanges {

    @Input() unitList: any;
    @Input() updateStatus: boolean;
    selectedUnitForEdit: any;
    @Output() updateVUMESIIDAttribute = new EventEmitter<any>();
    @Output() updateVUMESIIDAttributes = new EventEmitter<any>();

    cancelUnitList: any[] = [];

    message: string;
    validateMessage: string = "Unit Threshold should not be empty.";
    isError: boolean = false;

    editAllClicked: boolean = false;
    editAllUnitList: any[] = [];

    constructor(private modalService: ModalService, private sortService: SortService) {}

    //for pagination
    allItems: any[];
    totalSize: any;

    onPagination(pagerObj: any){
        this.unitList = this.allItems.slice(pagerObj.rangeStart-1, pagerObj.rangeEnd+1);
    }

    ngOnInit(){
       this.setPagination();
       this.cancelUnitList = _.cloneDeep(this.unitList)
    }

    setPagination(){
       this.allItems = this.unitList;
       this.totalSize = this.allItems.length;
       this.unitList = this.allItems.slice(0, 25);
    }

    onSorted(event: any){
       this.sortService.sort(this.unitList,event.sortColumn,event.sortDirection);
    }

    ngOnChanges(changes: SimpleChanges){
        if(changes['updateStatus']){
            if(undefined != this.updateStatus){
                if(this.updateStatus){
                    this.message = "Your unit update has been applied."
                }
                if(!this.updateStatus){
                    this.message = "Units Update Failure."
                }
            }
        }

        if(undefined != changes['unitList'] && !changes['unitList'].firstChange){
            if(undefined != this.unitList && this.unitList.length > 0){
                this.cancelUnitList = _.cloneDeep(this.unitList)
                this.setPagination();
            }
        }
    }

    onEdit(unit: any){
       this.selectedUnitForEdit = unit;
       this.message = undefined;
       this.modalService.open('single-edit-vum-modal');
    }

    onEditAll(){
        this.message = undefined;
        this.editAllClicked = true;
    }

    unitThresholdChange(unit: any, newThreshold: any){
       let foundUnit = this.editAllUnitList.find(u => u.unitNumber == unit.unitNumber);
       if(undefined != foundUnit){
          this.editAllUnitList.forEach(u => {
            if(foundUnit.unitNumber == u.unitNumber){
                u.unitThreshold = newThreshold
            }
        })
       }else{
         unit.unitThreshold = newThreshold;
         this.editAllUnitList.push(unit);
       }
    }

    unitTypeChange(unit: any, newUnitType: any){
        let foundUnit = this.editAllUnitList.find(u => u.unitNumber == unit.unitNumber);
        if(undefined != foundUnit){
           this.editAllUnitList.forEach(u => {
             if(foundUnit.unitNumber == u.unitNumber){
                 u.unitThreshold = newUnitType
             }
           })
        }else{
          unit.unitType = newUnitType;
          this.editAllUnitList.push(unit);
        }
    }

    updateESIIDAttribute(updatedUnit: any){
        if(updatedUnit != 'cancel'){
            this.updateVUMESIIDAttribute.emit(updatedUnit);
        }
        this.selectedUnitForEdit = {};
    }

    onSaveAll(){
        let emptyThresholdUnitFound = this.editAllUnitList.find(u => u.unitThreshold == "" || u.unitThreshold == undefined);
        if(undefined != emptyThresholdUnitFound){
          this.validateMessage = "Unit Threshold should not be empty."
          this.isError = true;
        }else{
          this.isError = false;
          this.editAllClicked = false;
          this.updateVUMESIIDAttributes.emit(this.editAllUnitList);
          this.editAllUnitList = [];
        }
    }

    onCancelAll(){
        this.isError = false;
        this.editAllClicked = false;
        this.editAllUnitList = [];
        this.unitList = _.cloneDeep(this.cancelUnitList)
    }

    updateESIIDAttributes(updatedUnit: any){
        this.updateVUMESIIDAttribute.emit(updatedUnit);
        this.selectedUnitForEdit = {};
    }

}
