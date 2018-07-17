import { Component, OnInit, Input, EventEmitter, OnDestroy, HostListener, HostBinding } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { SortService } from '../../_services';

@Component({
    selector: '[sortable-column]',
    templateUrl: './sortablecolumn.component.html'
})
export class SortableColumnComponent implements OnInit, OnDestroy  {

    constructor(private sortService: SortService) { }

    @Input('sortable-column')
    columnName: string;

    @Input('sort-direction')
    sortDirection: string = '';

    @HostBinding('class')
    elementClass;

    private columnSortedSubscription: Subscription;

    @HostListener('click')
    sort() {
        this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
        this.elementClass =  this.sortDirection === 'asc'?'headerUp':'headerDown';
        this.sortService.columnSorted({ sortColumn: this.columnName, sortDirection: this.sortDirection });
    }

    ngOnInit() {
        // subscribe to sort changes so we can react when other columns are sorted
        this.columnSortedSubscription = this.sortService.columnSorted$.subscribe(event => {
            // reset this column's sort direction to hide the sort icons
            if (this.columnName != event.sortColumn) {
                this.sortDirection = '';
            }
        });
    }

    ngOnDestroy() {
        this.columnSortedSubscription.unsubscribe();
    }
}
