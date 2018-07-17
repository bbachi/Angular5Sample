import { Component, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../app-state/reducers';
import * as transactionTypes from '../../app-state/actions/transactions'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.css']
})
export class TransactionDetailComponent  implements OnInit, OnDestroy {

    txnDtl: any;
    propertyName: string;
    businessInfo: any;

    subscription: any;

    constructor(private router: Router, private route: ActivatedRoute) {

    }

    ngOnInit(){
        this.subscription = this.route.data.subscribe(data => {
              if(undefined != data.txnDetail){
                this.txnDtl = (undefined != data.txnDetail.txnDtl)?data.txnDetail.txnDtl.data:{};
                this.businessInfo = data.txnDetail.businessInfo;
                this.propertyName = data.txnDetail.propertyName;
              }
          })
    }

    ngOnDestroy(){
        this.subscription.unsubscribe();
    }
}
