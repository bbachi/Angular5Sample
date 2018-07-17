import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';

@Component({
    selector: 'vum-find-units',
    templateUrl:'./findunits.component.html' 
})
export class FindUnitsComponent implements OnInit {

    dates: string[];
    dateFormat: string = "MM/DD/YYYY";
    @Output() onChangeReportDate = new EventEmitter<any>();

    constructor(private route: ActivatedRoute) {}

    onDateChange(e){
      let inVar = {reportDate:e.target.value}
      this.onChangeReportDate.emit(inVar)
    }

    ngOnInit() {
        let dates = [];
        for(var i=0 ; i<7; i++){
            dates.push(moment().subtract(i, 'days').format(this.dateFormat))
        }
        this.dates = dates;
        this.onChangeReportDate.emit({reportDate:dates[0]})
    }

}
