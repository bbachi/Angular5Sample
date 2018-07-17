import {Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'selaccount-app',
    styleUrls: [],
    template: `<nolink-header></nolink-header>
               <router-outlet></router-outlet>
               <nolink-footer></nolink-footer>`,
    encapsulation: ViewEncapsulation.Emulated,
    providers: []
})
export class SelectAccountLayout { }
