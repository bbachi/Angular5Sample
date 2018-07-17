import {Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'dashboard-app',
    styleUrls: [],
    template: `<gme-full-header></gme-full-header>
               <div id="pageBody">
                  <selected-property></selected-property>
                  <router-outlet></router-outlet>
                </div>
               <gme-full-footer></gme-full-footer>`,
    encapsulation: ViewEncapsulation.Emulated,
    providers: []
})
export class FullLayout { }
