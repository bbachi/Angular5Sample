import {Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'half-layout-app',
    styleUrls: [],
    template: `<gme-full-header></gme-full-header>
               <div id="pageBody">
                  <router-outlet></router-outlet>
               </div>
               <gme-full-footer></gme-full-footer>`,
    encapsulation: ViewEncapsulation.Emulated,
    providers: []
})
export class HalfLayout { }
