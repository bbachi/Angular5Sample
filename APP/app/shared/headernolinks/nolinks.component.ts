import { Component, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../app-state/reducers';

@Component({
    selector: 'nolink-header',
    templateUrl: './nolinks.component.html',
    styleUrls: ['./nolinks.component.css']
})
export class NoLinkHeaderComponent {

    webSecurityRole$: Observable<any>;

    constructor(private router: Router, private store: Store<fromRoot.State>) {
          this.webSecurityRole$ = store.select(fromRoot.getLoggedInUserSecurityRole);
    }
}
