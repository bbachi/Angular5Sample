import { Component, Input, Output, OnInit } from '@angular/core';

@Component({
    selector: 'update-user-usercategory',
    template:`<div id="divid">
                <div class="label">Internal/External:</div>
                <div class="data">{{userCategory}}</div>
              </div>`,
    styles: ['#divid{margin-bottom: 20px;}']
})

export class UserCategoryComponent implements OnInit {

    @Input() userCategory: string;

    constructor() {}

    ngOnInit() {

    }

}
