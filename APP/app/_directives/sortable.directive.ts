import { Directive, OnInit, EventEmitter, Output, OnDestroy, Input, ElementRef, HostBinding } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { SortService } from '../_services/sort.service';

@Directive({
  selector: '[sortable-table]'
})
export class SortableTableDirective implements OnInit, OnDestroy {

  constructor(private sortService: SortService) {}

    @Output()
    sorted = new EventEmitter();

    @HostBinding('class')
    elementClass = 'sort';

    private columnSortedSubscription: Subscription;

    ngOnInit() {
        this.columnSortedSubscription = this.sortService.columnSorted$.subscribe(event => {
            this.sorted.emit(event);
        });
    }

    ngOnDestroy() {
        this.columnSortedSubscription.unsubscribe();
    }
}
