import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { SortService } from '../../../_services'
import * as _ from 'lodash';

@Component({
    selector: 'associates-list',
    templateUrl: './associates.component.html',
    //styleUrls: ['./associates.component.css']
})

export class AssociatesListComponent implements OnInit {

    @Input() associates: any[];
    @Input() fromPage: string
    @Input() webSecurityRole: string;
    text: string;
    @Output() onUserClick = new EventEmitter<string>();

    constructor(private router: Router,private sortService: SortService) {}

    onUser(userName){
        this.onUserClick.emit(userName)
    }

    //for pagination
    allItems: any[];
    totalSize: any;

    onPagination(pagerObj: any){
        this.associates = this.allItems.slice(pagerObj.rangeStart-1, pagerObj.rangeEnd+1);
    }

    onSorted(event: any){
       let cloneList = _.cloneDeep(this.associates)
       this.associates = this.sortService.sort(cloneList,event.sortColumn,event.sortDirection);
    }

    ngOnInit(){
        this.allItems = this.associates;
        this.totalSize = this.allItems.length;
        this.associates = this.allItems.slice(0, 25);

        this.text = this.fromPage == 'UPDATE_PAGE'?"Select a user to update information.":"Select a user to remove.";
    }

}
