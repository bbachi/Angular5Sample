import { Component, Input, Output,OnInit } from '@angular/core';
import { Angular2Csv } from 'angular2-csv/Angular2-csv';

@Component({
    selector: '[gme-progress-step]',
    templateUrl: './step.component.html',
    styleUrls: ['./step.component.css']
})

export class ProgressStepComponent implements OnInit {

    constructor() {}

    public name: string;
    public breadCrumbStatus: string;
    public barStatus: string;

    @Input()
    set brdCrumb(brdCrumb: any) {
      this.name = brdCrumb.name;
      this.breadCrumbStatus = brdCrumb.crumbStatus
      this.barStatus = brdCrumb.barStatus
  }

    ngOnInit(){

    }
}
