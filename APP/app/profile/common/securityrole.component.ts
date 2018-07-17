import { Component, Input, Output, OnInit } from '@angular/core';

@Component({
    selector: 'update-user-securityrole',
    template:`<div id="divid">
                <div class="label">Security Role:</div>
                <div class="data">{{securityRole}}</div>
              </div>`,
    styles: ['#divid{margin-bottom: 20px;}']
})

export class SecurityRoleComponent implements OnInit {

    @Input() securityRole: string;

    constructor() {}

    ngOnInit() {

    }

}
