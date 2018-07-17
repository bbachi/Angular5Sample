import { Component, Input, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'txn-stop-service',
    templateUrl: './stopservice.component.html'
    //styleUrls: ['./confirm.component.css']
})
export class StopServiceComponent {

      @Input() txnDetail: any;
      @Input() propertyName: string;
}
