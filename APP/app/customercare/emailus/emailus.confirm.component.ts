import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../app-state/reducers';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/publishReplay'

@Component({
    templateUrl: './emailus.confirm.component.html'
})
export class EmailUsConfirmComponent implements OnInit {

    constructor(private store: Store<fromRoot.State>) {}

    confirm$: Observable<any>;

    ngOnInit() {
        this.confirm$ = this.store.select(fromRoot.getEmailUsConfirmation).publishReplay().refCount();
    }

}
