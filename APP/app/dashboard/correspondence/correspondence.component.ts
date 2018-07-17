import { Component, Input, Output, OnInit } from '@angular/core';

@Component({
    selector: 'dashboard-correspondence',
    templateUrl: './correspondence.component.html',
    styleUrls: ['./correspondence.component.css']
})
export class CorrespondenceComponent  implements OnInit {

    constructor() {}

    @Input() custDetails: any;

    address: any;
    phoneNumber: any;

    ngOnInit() {
      let custDetails = this.custDetails;
      if(undefined != custDetails){
        this.address = custDetails.customerDtls.mailingAddress
        this.phoneNumber = custDetails.customerDtls.phoneNum
      }
    }
}
