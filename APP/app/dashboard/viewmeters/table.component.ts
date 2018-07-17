import { Component, Input, Output,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SortService } from '../../_services'

@Component({
  selector: 'esiid-meter-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class ESIIDMetersTableComponent implements OnInit {

    @Input() esiidList: any[];

    constructor(private sortService: SortService){}

    //for pagination and sorting -- start
    allItems: any[];
    totalSize: any;

    onPagination(pagerObj: any){
        this.esiidList = this.allItems.slice(pagerObj.rangeStart-1, pagerObj.rangeEnd+1);
    }

    onSorted(event: any){
       this.sortService.sort(this.esiidList,event.sortColumn,event.sortDirection);
    }

    ngOnInit(){
        this.allItems = this.esiidList;
        this.totalSize = this.allItems.length;
        this.esiidList = this.allItems.slice(0, 25);
    }
    //for pagination and sorting -- end
}
