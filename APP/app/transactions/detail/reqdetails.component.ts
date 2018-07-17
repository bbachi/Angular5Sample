import { Component, Input, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'txn-request-details',
    templateUrl: './reqdetails.component.html'
    //styleUrls: ['./confirm.component.css']
})
export class RequestDetailsComponent {

      @Input() txnDtl: any;
}
