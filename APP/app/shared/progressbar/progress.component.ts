import { Component, Input, Output,OnInit  } from '@angular/core';
import { Angular2Csv } from 'angular2-csv/Angular2-csv';

@Component({
    selector: 'gme-progress-bar',
    templateUrl: './progress.component.html',
    styleUrls: ['./progress.component.css']
})

export class ProgressBarComponent implements OnInit {

    constructor() {}

    @Input() nameList: any[];

    ngOnInit(){

    }
}
