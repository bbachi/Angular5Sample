import { Component, Input, Output, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { SortService } from '../../_services'
import * as _ from 'lodash'

@Component({
    selector: 'vum-daily-report-table',
    templateUrl: './table.component.html'
})
export class DailyReportTableComponent implements OnInit {

    @Input() dailyReportList: any[];

    cloneList: any[];

    constructor(private sortService: SortService) {}

    //for pagination
    allItems: any[];
    totalSize: any;

    onPagination(pagerObj: any){
        this.cloneList = this.allItems.slice(pagerObj.rangeStart-1, pagerObj.rangeEnd+1);
    }

    onSorted(event: any){
       this.sortService.sort(this.cloneList,event.sortColumn,event.sortDirection);
    }

    ngOnInit(){
        this.cloneList = _.cloneDeep(this.dailyReportList);
        this.allItems = this.cloneList;
        this.totalSize = this.allItems.length;
        this.cloneList = this.allItems.slice(0, 25);
    }

}
