import { Component, Input, Output,OnInit } from '@angular/core';
import { SortService } from '../../_services'

@Component({
    selector: 'roll-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css']
})

export class RollTableComponent implements OnInit {

    constructor(private sortService: SortService) {}

    @Input() reportList: any[];
    @Input() rollType:string;

    //for pagination
    allItems: any[];
    totalSize: any;


    onPagination(pagerObj: any){
        this.reportList = this.allItems.slice(pagerObj.rangeStart-1, pagerObj.rangeEnd+1);
    }

    onSorted(event: any){
       this.sortService.sort(this.reportList,event.sortColumn,event.sortDirection);
    }

    ngOnInit(){
        this.allItems = this.reportList;
        this.totalSize = this.allItems.length;
        this.reportList = this.allItems.slice(0, 25);
    }
}
