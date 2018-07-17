import { Component, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { SharedService } from '../../_services'
import { Observable } from 'rxjs/Observable';
import * as fromRoot from '../../app-state/reducers';
import * as ccTypes from '../../app-state/actions/cc';

@Component({
    templateUrl: './faqs.component.html',
    //styleUrls: ['./forms.component.css']
})
export class FAQsComponent implements OnInit, OnDestroy {

    faqs$: Observable<any>;

    constructor(private store: Store<fromRoot.State>, private sharedService: SharedService) {
        this.store.dispatch(new ccTypes.GetFAQs({containerId:"GME_BMF_FAQ"}))
    }

    ngOnInit() {
       this.sharedService.setImage(true);
       this.faqs$ = this.store.select(fromRoot.getFAQs);
    }

    ngOnDestroy(){
        this.sharedService.setImage(false);
    }

}
