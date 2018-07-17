import { Component, Input, Output, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../app-state/reducers';
import * as profileTypes from '../../app-state/actions/profile'

@Component({
    selector:'field-name',
    template: `
              <div>
                <div class="label">{{name}}:</div>
                <div class="data">{{value}}</div>
              </div>`,
    styles: [`
          div{
            margin-bottom: 10px;
          }
      `]
})
export class FieldNameComponent {

    @Input() name: any;
    @Input() value: any;

}
