import { Component, Input, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'txn-login',
    template: `<div class="mT1P">
                  <div class="label">Requestor:</div>
                  <div class="data">{{txnDetail.firstName}}  {{txnDetail.lastName}}</div>
                </div>
                <div class="mT1P">
                  <div class="label">Login ID:</div>
                  <div class="data">{{txnDetail.userName}}</div>
                </div>`
    //styleUrls: ['./confirm.component.css']
})
export class LoginComponent {

      @Input() txnDetail: any;
}
