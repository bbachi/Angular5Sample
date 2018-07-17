import { Component, Input, Output,OnInit, EventEmitter } from '@angular/core';
import * as moment from 'moment';

@Component({
    selector: 'roll-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

    constructor() {}

    fromDate: Date = moment().subtract(7, 'days').toDate();
    toDate: Date = moment().toDate();
    toRangeStart: Date;
    toRangeEnd: Date;
    fromRangeStart: Date;
    fromRangeEnd: Date;

    rollType: string = "rollin";
    @Output() onApplyClick = new EventEmitter<any>();

    onDateChange(date, type){
        if(type == 'from'){
            this.fromDate = date;
        }else{
            this.toDate = date;
        }
    }

    onApply(){
        let inVar = {fromDate:this.fromDate,toDate:this.toDate,rollType:this.rollType}
        let rollType = inVar.rollType;
        this.rollType = rollType;
        this.onApplyClick.emit(inVar)
    }

    clearDates(){
        this.fromDate = null;
        this.toDate = null;
    }

    /*
    var fromDateLimits = {
			minDate : '-12M',
			maxDate : '+0d'

			}

			var toDateLimits={
			minDate : '-12M',
			maxDate : '+13d'

			}
     */
    ngOnInit(){
        this.toRangeEnd = moment().add(13, 'days').toDate();
        this.toRangeStart = moment().subtract(12, 'months').toDate();

        this.fromRangeEnd = moment().add(0, 'days').toDate();
        this.fromRangeStart = moment().subtract(12, 'months').toDate();
    }
}
