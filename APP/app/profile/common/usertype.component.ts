import { Component, Input, Output, OnInit } from '@angular/core';

@Component({
    selector: 'update-user-usertype',
    template:`<div id="divid">
                <div class="label">User Type:</div>
                <div class="data">{{userType}}</div>
              </div>`,
    styles: ['#divid{margin-bottom: 20px;}']
})

export class UserTypeComponent implements OnInit {

    @Input() userType: string;

    constructor() {}

    ngOnInit() {

    }

}
