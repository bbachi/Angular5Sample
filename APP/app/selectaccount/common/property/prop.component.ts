import { Component, OnInit, NgZone, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { SortService } from '../../../_services';
import * as _ from 'lodash'

@Component({
  selector: 'property',
  templateUrl: './prop.component.html',
  styleUrls: ['./prop.component.css']
})

export class PropertyComponent implements OnInit, OnChanges {

  @Input() propertyList: any[];
  @Output() onPropertyClick = new EventEmitter<string>();
  disablePropLink: boolean = false;

  list: any[];

  constructor(private sortService: SortService) { }

  onProperty(bpNumber: string) {
    this.onPropertyClick.emit(bpNumber)
  }

  onSorted(event: any) {
    this.sortService.sort(this.list, event.sortColumn, event.sortDirection);
  }

  ngOnInit() {
    this.disablePropLink = false;
    this.list = _.cloneDeep(this.propertyList)
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes["propertyList"]) {
      if (undefined != this.propertyList && this.propertyList.length > 0) {
        this.list = _.cloneDeep(this.propertyList)
      }
    }
  }

}
