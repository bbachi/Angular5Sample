import { Component, Input, Output, OnInit, OnChanges, SimpleChanges, EventEmitter, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { PagerService } from '../../_services'
import * as _ from 'underscore';

@Component({
    selector: 'gme-pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit, OnDestroy {

    constructor(private pagerService: PagerService){}

    pageSize: any = 25;
    @Input() totalSize: number;
    @Input() placement: string;
    @Output() pagerOut = new EventEmitter<any>();

    showPagination: boolean = true;
    showButtons: boolean= true;
    rangeStart: number;
    rangeEnd: number;
    totalPages:number;
    pageNumbers: number[];

    private pageEventSubscription: Subscription;

    ngOnInit(){
        this.setPagination();

        this.pageEventSubscription = this.pagerService.pageRangeEvent$.subscribe(pageEvent => {
            this.rangeStart = pageEvent.rangeStart;
            this.rangeEnd = pageEvent.rangeEnd;
            this.totalPages = pageEvent.totalPages;
            this.pageSize = pageEvent.pSize;
            this.showButtons = (this.pageSize != 0)
            this.pagerOut.emit(pageEvent)
        })
    }

    setPagination(){
      this.totalPages = Math.ceil(this.totalSize / this.pageSize);
      this.showPagination = this.totalSize > 25;
      this.rangeStart = 1;
      this.rangeEnd = this.pageSize;
    }

    ngOnChanges(changes: SimpleChanges){
        if(changes['totalSize']){
          if(undefined != this.totalPages){
              this.setPagination();
          }
        }
    }

    onPageSizeDisplay(){
       this.showButtons = (this.pageSize != 0)
       this.pagerService.onPageSizeDisplay(this.totalSize,this.pageSize)
    }

    onFirst(){
      this.pagerService.onFirst(this.pageSize,this.totalPages,this.totalSize)
    }

    onPrevious(){
       this.pagerService.onPrevious(this.pageSize,this.rangeStart, this.rangeEnd,this.totalSize,this.totalPages);
    }

    onNext(){
       this.pagerService.onNext(this.pageSize,this.rangeStart, this.rangeEnd,this.totalSize,this.totalPages);
    }

    onLast(){
       this.pagerService.onLast(this.totalSize,this.totalPages,this.pageSize);
    }

    ngOnDestroy() {
        this.pageEventSubscription.unsubscribe();
    }

}
