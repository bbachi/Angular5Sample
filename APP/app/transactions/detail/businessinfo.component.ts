import { Component, Input, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'txn-business-info',
    templateUrl: './businessinfo.component.html'
    //styleUrls: ['./confirm.component.css']
})
export class BusinessInfoComponent {

      @Input() businessInfo: any;
}
