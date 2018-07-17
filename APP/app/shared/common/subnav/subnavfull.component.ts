import { Component, Input, Output,OnInit } from '@angular/core';
import { Angular2Csv } from 'angular2-csv/Angular2-csv';
import { SharedService } from '../../../_services'

@Component({
    selector: 'gme-subnav-full',
    templateUrl: './subnavfull.component.html',
    styleUrls: ['./subnavfull.component.css']
})

export class SubNavFullComponent implements OnInit {

    constructor(private sharedService: SharedService) {}

    @Input() webSecurityRole: string;
    @Input() startEnabled: boolean = true;
    @Input() stopEnabled: boolean = true;
    @Input() billingEnabled: boolean = true;
    @Input() startRestrictionReason: string;
    @Input() stopRestrictionReason: string;
    @Input() billingRestrictionReason: string;

    defaultRestriction: boolean = true;

    isFAQsPage: boolean = false;

    ngOnInit(){
        this.isFAQsPage = true;
    }
}
