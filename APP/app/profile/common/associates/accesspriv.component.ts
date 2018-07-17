import { Component, Input, Output, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'associate-access-privileges',
    template: `
          <ng-container *ngIf="startStopAce == 'Y' || billingAce == 'Y'; else noaccesspriv">
            Transactional and report access<br/>
              <div *ngIf="startStopAce == 'Y'">-able to request start/stop service<br/></div>
              <div *ngIf="billingAce == 'Y'">-able to play bills<br/></div>
          </ng-container>
          <ng-template #noaccesspriv>
            No access privileges
          </ng-template>
      `,
    //styleUrls: ['./associates.component.css']
})

export class AsscAccessPrivilegesComponent implements OnInit {

    @Input() startStopAce: string;
    @Input() billingAce: string;

    constructor(private router: Router) {}

    ngOnInit(){
    }

}
