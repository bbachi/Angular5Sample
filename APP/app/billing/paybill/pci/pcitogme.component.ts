import { Component, Input, Output, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../app-state/reducers';
import * as billingTypes from '../../../app-state/actions/billing'
import { BillingService } from '../../../_services'
import { CookieService } from 'ngx-cookie-service';

declare var jQuery: any;

@Component({
    selector: "pci-to-gme",
    templateUrl: './pcitogme.component.html',
    styleUrls: ['./gmetopci.component.css'],
    //styles: ['body{display:none}']
})
export class PCIToGMEComponent implements OnInit {

    constructor(private router: Router, private cookieService:CookieService,
      private store: Store<fromRoot.State>, private billingService: BillingService){}

    ngOnInit(){
        let pciParams = this.cookieService.get('payBillJson');
        this.cookieService.delete('payBillJson');
        let decodedString = decodeURI(pciParams).replace(new RegExp("%3A", 'g'),":").replace(new RegExp("%2C", 'g'),",")
        let paymentInfo = JSON.parse(decodedString);
        paymentInfo.nickName = this.replaceAll(paymentInfo.nickName,"+"," ");
        let paymentDate = this.replaceAll(paymentInfo.paymentDate,"%2F","/");
        this.store.dispatch(new billingTypes.UpdateCollectivePaymentInfo({paymentAmount:paymentInfo.paymentAmount,paymentDate}))
        this.store.dispatch(new billingTypes.SaveBankInfo(this.billingService.getBankInfoForStore(paymentInfo)))
        this.router.navigate(['/protected/customer/billing/paybill/collective/verify.htm'])
    }

    replaceAll(target: string, search: string, replacement: string) {
        let returnStr = "";
        try{
          returnStr = target.split(search).join(replacement);
        }catch(err){
            console.log("ERR0R:::::target>>>>"+err.message)
        }
        return returnStr;
    }

}
