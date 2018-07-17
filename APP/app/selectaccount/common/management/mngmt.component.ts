import { Component, OnInit, NgZone, Input, Output, EventEmitter, OnChanges, SimpleChanges  } from '@angular/core';
import { Router } from '@angular/router';
import { SortService } from '../../../_services';
import * as _ from 'lodash'

@Component({
    selector: 'management',
    templateUrl: './mngmt.component.html',
    styleUrls: ['./mngmt.component.css']
})

export class ManagementComponent implements OnInit, OnChanges {

    @Input() mngList: any[];
    @Output() onManagementClick = new EventEmitter<string>();

    list: any[];

    constructor(private sortService: SortService){}

    ngOnChanges(changes: SimpleChanges) {
        if(changes["mngList"]){
          if (undefined != this.mngList && this.mngList.length > 0) {
            this.list = _.cloneDeep(this.mngList)
          }
        }
    }

    onManagement(bpNumber: string){
        this.onManagementClick.emit(bpNumber)
    }

    onSorted(event: any){
       this.sortService.sort(this.list,event.sortColumn,event.sortDirection);
    }

    ngOnInit(){
        this.list = _.cloneDeep(this.mngList)
    }

}
