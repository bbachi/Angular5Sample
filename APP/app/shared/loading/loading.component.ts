import { Component, Input, Output,OnInit } from '@angular/core';
import { Angular2Csv } from 'angular2-csv/Angular2-csv';

@Component({
    selector: 'loading-indicator',
    templateUrl: './loading.component.html',
    styleUrls: ['./loading.component.css']
})

export class LoadingComponent implements OnInit {

    constructor() {}

    ngOnInit(){

    }
}
