import { Component, Input, Output, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../app-state/reducers';
import * as billingTypes from '../../../app-state/actions/billing'
import { BillingService, AppConfigService } from '../../../_services'

declare var jQuery: any;

@Component({
    templateUrl: './gmetopci.component.html',
    styleUrls: ['./gmetopci.component.css'],
    //encapsulation: ViewEncapsulation.None
})
export class GMEToPCIComponent implements OnInit {

    public gmeHostInfo: string = "";
    public pciHostInfo: string = "";

    constructor(private router: Router, private route: ActivatedRoute,
      private store: Store<fromRoot.State>, private billingService: BillingService, private appConfig: AppConfigService){

          this.gmeHostInfo = this.appConfig.readEnvironment('gmeHostInfo');
          this.pciHostInfo = this.appConfig.readEnvironment('pciHostInfo');

    }

    ngOnInit(){
        this.store.take(1).subscribe(store => {
            let selectedProp = store.selectedproperty.selectedProperty;
            let paymentMethods = store.paymentmethod.paymentMethods;
            let paymentInfo = store.billing.payment;
            let userCategory = store.loggedinuser.loggedInUser.userCategory;
            let pciData = this.billingService.getGMEToPCIData(selectedProp,paymentInfo,paymentMethods,userCategory);
            jQuery("#pciBMFSSJSON").val(encodeURI(JSON.stringify(pciData)));
            jQuery("#gmeHostInfo").val(this.gmeHostInfo);
            jQuery("#addpayform").attr("action", this.pciHostInfo+"/paybill.htm").submit();
        });

    }
}
