import { Component, Input, Output, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../app-state/reducers';
import * as profileTypes from '../../app-state/actions/profile'

@Component({
    selector:'balance-info',
    template: `
              <field-name name="Balance Forward" [value]="balanceForward"></field-name>
              <field-name name="Current Charges" [value]="currentCharges"></field-name>
              <field-name name="Total Amount Due" [value]="totalAmountDue"></field-name>
              `,
  /*  styles: [`
          div{
            margin-bottom: 10px;
          }
      `] */
})
export class BalanceInfoComponent {

    @Input() balanceForward: string;
    @Input() currentCharges: string;
    @Input() totalAmountDue: string;

}
