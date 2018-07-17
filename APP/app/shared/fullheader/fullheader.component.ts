import { Component, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../_services/user.service';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../app-state/reducers';
import { Subject } from 'rxjs/subject';
import 'rxjs/add/operator/takeUntil'

@Component({
    selector: 'gme-full-header',
    templateUrl: './fullheader.component.html',
    styleUrls: ['./fullheader.component.css']
})


export class FullHeaderComponent implements OnInit, OnDestroy {

    webSecurityRole$: Observable<any>;
    accessPriv$: Observable<any>;

    startEnabled: boolean = true;
    stopEnabled: boolean = true;
    billingEnabled: boolean = true;
    startRestrictionReason: string;
    stopRestrictionReason: string;
    billingRestrictionReason: string;


    isSelectedpropertyExist: boolean = true;

    destroy$: Subject<boolean> = new Subject<boolean>();

    constructor(private userService: UserService, private router: Router, private store: Store<fromRoot.State>) {
          this.webSecurityRole$ = store.select(fromRoot.getLoggedInUserSecurityRole);

          store.select(fromRoot.getAccessPrivForSelectedProperty).takeUntil(this.destroy$).subscribe((accessPriv:any) => {
              this.startEnabled = accessPriv.startEnabled;
              this.stopEnabled = accessPriv.stopEnabled;
              this.startRestrictionReason = accessPriv.startRestrictionReason;
              this.stopRestrictionReason = accessPriv.stopRestrictionReason;
              this.billingEnabled = accessPriv.billingEnabled;
              this.billingRestrictionReason = accessPriv.billingRestrictionReason;
          });

          store.select(fromRoot.isPropertySelected).takeUntil(this.destroy$).subscribe(propSelected => {
              this.isSelectedpropertyExist = propSelected
          })
    }


    ngOnInit(): void {}

    ngOnDestroy(){
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }
}
