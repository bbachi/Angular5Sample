import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../app-state/reducers';
import { Observable } from 'rxjs/Observable';

@Component({
    templateUrl: './overview.component.html'
})
export class ProfileOverviewComponent {

    webSecurityRole$: Observable<any>;

    constructor(private store: Store<fromRoot.State>) {
        this.webSecurityRole$ = store.select(fromRoot.getLoggedInUserSecurityRole)
    }

    shouldDisableLink(securityRole): boolean{
        return securityRole == 'I_Admin_OPS_MGR'
    }

}
