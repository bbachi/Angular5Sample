import { Component, Input, Output, OnInit } from '@angular/core';

@Component({
    selector: 'update-user-username',
    template:`<div id="divid">
                <div class="label">Username:</div>
                <div class="data">{{userName}}</div>
              </div>`,
    styles: ['#divid{margin-bottom: 20px;}']
})

export class UserNameComponent implements OnInit {

    @Input() userName: string;

    constructor() {}

    ngOnInit() {

    }

}
