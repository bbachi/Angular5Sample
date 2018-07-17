import { Component, Input, Output, OnInit, EventEmitter, OnChanges, SimpleChanges  } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../app-state/reducers';
import * as profileTypes from '../../app-state/actions/profile'

@Component({
    selector: 'request-details',
    template:`<div class="subheader">Request Details</div>
              <div class="greyLineSeperator">&nbsp;</div>
              <div id="divid">
                <div class="label">Submitted on:</div>
                <div class="data">{{submittedOn}}</div>
              </div>
              <div id="divid">
                <div class="label">Transaction number:</div>
                <div class="data">{{transactionId}}</div>
              </div>`,
    styles: ['#divid{margin: 20px 0px;}']
})

export class RequestDetailsComponent implements OnInit {

    @Input() submittedOn: string;
    @Input() transactionId: string;

    ngOnInit() {

    }

}
