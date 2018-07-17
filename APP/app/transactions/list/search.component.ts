import { Component, Input, Output,OnInit, EventEmitter } from '@angular/core';
import * as moment from 'moment';

@Component({
    selector: 'txnlist-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})

export class SearchComponent {

    constructor() {}

    fromDate: Date = moment().toDate();
    toDate: Date = moment().toDate();
    @Output() onApplyClick = new EventEmitter<any>();

    onApply(){
      let inVar = {fromDate:this.fromDate,toDate:this.toDate}
      this.onApplyClick.emit(inVar)
    }

    onDateChange(date, type){
        if(type == 'from'){
            this.fromDate = date;
        }else{
            this.toDate = date;
        }
    }

    clearDates(){
        this.fromDate = moment().toDate();
        this.toDate = moment().toDate();
    }

}
