import { Component, Input, Output, OnInit, EventEmitter, OnChanges, SimpleChanges  } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../app-state/reducers';
import * as profileTypes from '../../app-state/actions/profile'

@Component({
    selector: 'confirm-info',
    template:`<h1 *ngIf="isSuccess" class="pageHeader">Add User Confirmation</h1>
              <p *ngIf="isSuccess">The user was successfully added to the system. Please print this page for your records. An email has been sent to the user that contains their username and a link to create a password to log onto the system.</p>
              <h1 *ngIf="!isSuccess" class="pageHeader errorMsg">We're Unable to Process Your Request</h1>
              <gme-error *ngIf="!isSuccess" errorMessage="Cannot perform add user request now. Please try again later."></gme-error>
              `,
    styles: ['.errorMsg{color:red;}']
})

export class ConfirmationInfoComponent implements OnInit {

    @Input() isSuccess: boolean;

    ngOnInit() {

    }

}
