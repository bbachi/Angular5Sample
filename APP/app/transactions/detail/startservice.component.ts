import { Component, Input, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'txn-start-service',
    templateUrl: './startservice.component.html'
    //styleUrls: ['./confirm.component.css']
})
export class StartServiceComponent {

      @Input() txnDetail: any;
      @Input() propertyName: string;
}
