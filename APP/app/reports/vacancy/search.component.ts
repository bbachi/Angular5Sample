import { Component, Input, Output,OnInit, EventEmitter } from '@angular/core';
import * as moment from 'moment';

@Component({
    selector: 'vacancy-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})

export class VacancySearchComponent implements OnInit {

    constructor() {}

    stateType: string = "All";
    @Output() onApplyClick = new EventEmitter<any>();

    onApply(){
        let inVar = {stateType:this.stateType}
        this.onApplyClick.emit(inVar)
    }

    ngOnInit(){

    }
}
