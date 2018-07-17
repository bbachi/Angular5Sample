import { Component, NgZone, Input, Output, OnInit, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { SortService } from '../../../_services';
import * as _ from 'lodash'

@Component({
    selector: 'region',
    templateUrl: './region.component.html',
    styleUrls: ['./region.component.css']
})

export class RegionComponent implements OnInit, OnChanges {

  @Input() regionList: any[];
  @Output() onRegionClick = new EventEmitter<string>();

  list: any[];

  constructor(private sortService: SortService){}

  onRegion(bpNumber: string){
      this.onRegionClick.emit(bpNumber)
  }

  onSorted(event: any){
     this.sortService.sort(this.list,event.sortColumn,event.sortDirection);
  }

  ngOnInit(){
      this.list = _.cloneDeep(this.regionList)
  }

  ngOnChanges(changes: SimpleChanges){
      if(changes["regionList"]){
          if(undefined != this.regionList && this.regionList.length > 0){
              this.list = _.cloneDeep(this.regionList)
          }
      }
  }

}
