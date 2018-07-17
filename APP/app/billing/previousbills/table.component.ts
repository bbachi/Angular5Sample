import { Component, Input, Output, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { SortService } from '../../_services'

@Component({
    selector: 'previous-bills-table',
    templateUrl: './table.component.html'
})
export class PreviousBillsTableComponent implements OnInit {

    @Input() previousBills: any[];
    @Input() caNumber: string;
    
    csvName: string = "PreviousBills";
    csvHeaders: string[] = ["Invoice Date","Start Bill Period","End Bill Period","Bill Type","Due Date","Invoice Amount"]

    constructor(private sortService: SortService) {}

    //for pagination
    allItems: any[];
    totalSize: any;

    onSorted(event: any){
       this.sortService.sort(this.previousBills,event.sortColumn,event.sortDirection);
    }

    onPagination(pagerObj: any){
        this.previousBills = this.allItems.slice(pagerObj.rangeStart-1, pagerObj.rangeEnd+1);
    }

    ngOnInit(){
        this.allItems = this.previousBills;
        this.totalSize = this.allItems.length;
        this.previousBills = this.allItems.slice(0, 25);
    }

}
