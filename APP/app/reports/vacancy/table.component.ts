import { Component, Input, Output,OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { SortService } from '../../_services'

@Component({
    selector: 'vacancy-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css']
})

export class VacancyTableComponent implements OnInit,OnChanges {

    constructor(private sortService: SortService) {}

    @Input() reportList: any[];

    //for pagination
    allItems: any[];
    totalSize: any;

    onPagination(pagerObj: any){
        this.reportList = this.allItems.slice(pagerObj.rangeStart-1, pagerObj.rangeEnd+1);
    }

    onSorted(event: any){
       this.sortService.sort(this.reportList,event.sortColumn,event.sortDirection);
    }

    ngOnChanges(changes: SimpleChanges){
        if(!changes['reportList'].firstChange){
          if(undefined != this.allItems && this.allItems.length > 0){
            this.allItems = this.reportList;
            this.totalSize = this.allItems.length;
            this.reportList = this.allItems.slice(0, 25);
          }
        }
    }

    ngOnInit(){
        this.allItems = this.reportList;
        this.totalSize = this.allItems.length;
        this.reportList = this.allItems.slice(0, 25);
    }
}
