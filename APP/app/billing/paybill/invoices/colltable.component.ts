import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'collective-invoice-table',
    templateUrl: './colltable.component.html',
    styleUrls: ['./colltable.component.css']
})
export class CollectiveInvoiceComponent implements OnInit  {

    @Input() collectiveInvoices: any;
    @Output() onPayBillClick = new EventEmitter<any>();

    constructor(private router: Router) {}

    payBill(invoice:any){
       this.onPayBillClick.emit(invoice);
    }

    isCurrentBalGreaterThanZero(currentBalance: string){
        return parseFloat(currentBalance) > 0;
    }

    ngOnInit(){}
}
