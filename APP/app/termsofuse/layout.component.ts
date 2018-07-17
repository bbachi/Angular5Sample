import {Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'gme-app',
    styleUrls: ['./termsofuse.component.css'],
    template: `<gme-header></gme-header>
              <router-outlet></router-outlet>
              <nolink-footer></nolink-footer>`,
    encapsulation: ViewEncapsulation.Emulated,
    providers: []
})
export class TermsOfUseLayout { }
