import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { SortService } from '../../../_services'

@Component({
    selector: 'admin-user-search-table',
    templateUrl: './table.component.html',
    //styleUrls: ['./table.component.css']
})

export class AdminSearchTableComponent implements OnInit {

    @Input() userList: any[];
    @Output() onUserSelectEmitter = new EventEmitter<any>();

    constructor(private router: Router, private sortService: SortService) {}

    onUserSelect(user){
        this.onUserSelectEmitter.emit(user);
    }

    //for pagination
    allItems: any[];
    totalSize: any;

    onPagination(pagerObj: any){
        this.userList = this.allItems.slice(pagerObj.rangeStart-1, pagerObj.rangeEnd+1);
    }

    onSorted(event: any){
       this.sortService.sort(this.userList,event.sortColumn,event.sortDirection);
    }

    ngOnInit(){
        this.allItems = this.userList;
        this.totalSize = this.allItems.length;
        this.userList = this.allItems.slice(0, 25);
    }

}
