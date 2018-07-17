import { Component, Input, Output,OnInit } from '@angular/core';
import { Angular2Csv } from 'angular2-csv/Angular2-csv';
import { CSVService } from '../../_services'

@Component({
    selector: 'gme-csv',
    templateUrl: './csv.component.html',
    styleUrls: ['./csv.component.css']
})

export class CSVComponent implements OnInit {

    constructor(private csvService: CSVService) {}

    @Input() csvList: any[];
    @Input() name: string;
    @Input() headers: string[];

    onDownload(){
      let csvData = this.csvService.getCSVData(this.csvList, this.name);
      var options = {
            fieldSeparator: ',',
            quoteStrings: '"',
            decimalseparator: '.',
            showLabels: true,
            headers: this.headers
        };
      new Angular2Csv(this.csvList,this.name,options)
    }

    ngOnInit(){

    }
}
