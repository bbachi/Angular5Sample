import {Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'public-layout',
    styleUrls: [],
    template: `<gme-public-header></gme-public-header>
               <div id="pageBody">
                  <router-outlet></router-outlet>
                </div>
               <gme-public-footer></gme-public-footer>`,
    encapsulation: ViewEncapsulation.Emulated,
    providers: []
})
export class PublicLayout { }