import { Component, Input, Output, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../app-state/reducers';
import * as profileTypes from '../../app-state/actions/profile'

@Component({
    selector:'profile-access-privileges',
    template: `
              <div>
                <div class="label">Access privileges:</div>
                <div class="data">
                  <ng-container *ngIf="startStopAce == 'Y' || billingAce == 'Y'; else noaccesspriv">
                    <div>Transactional and report access:</div>
                    <div *ngIf="startStopAce == 'Y'" class="mL20">- Able to request start/stop service</div>
                    <div *ngIf="billingAce == 'Y'" class="mL20">- Able to pay bills</div>
                  </ng-container>
                  <ng-template #noaccesspriv>
                    No access privileges
                  </ng-template>
                </div>
              </div>`,
    /*styles: [`
          div{
            margin-bottom: 10px;
          }
      `]*/
})
export class AccessprivlegesComponent {

    @Input() startStopAce: string;
    @Input() billingAce: string;

}
