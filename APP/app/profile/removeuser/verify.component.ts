import { Component, Input, Output, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SharedService, ProfileService } from "../../_services";

@Component({
    templateUrl: './verify.component.html',
    //styleUrls: ['./forms.component.css']
})
export class RemoveUserVerifyComponent implements OnInit {

    user: any;
    name: string;
    phoneNumber: string;
    altPhoneNumber: string;
    faxNumber: string;
    email: string;
    securityRole: string;
    customerList: any;
    phoneExtn: string;
    altPhoneExt: string;
    usercategory:string;

    showAccessPrivileges: boolean;

    constructor(private route: ActivatedRoute,private router: Router, private sharedService: SharedService, public profileService: ProfileService) {}

    onConfirm(){
        this.sharedService.setUserForRemoval(this.user);
        this.router.navigate(['/protected/customer/profile/remove/userconfirm.htm']);
    }

    onBack(){
       this.router.navigate(['/protected/customer/profile/remove/search.htm']);
    }

    ngOnInit() {
        let userDetails = this.route.snapshot.data['userDetails'];
        this.user = userDetails.user;
        this.securityRole = this.user.webSecurityRole;
        //console.log("this.securityRole:::" +this.securityRole)
        this.phoneNumber = this.user.phoneNum;
        this.altPhoneNumber = this.user.altPhoneNum;
        this.faxNumber = this.user.faxNum;
        this.email = this.user.email;
        this.name = this.user.firstName+" "+this.user.lastName;
        this.phoneExtn = this.user.phoneNumExtn;
        this.altPhoneExt = this.user.altPhoneNumExtn;
        this.usercategory = this.user.userCategory;
        this.customerList = undefined != userDetails.customerList?
          this.profileService.processLoggedInCustomerListForAddUser(userDetails.customerList):null;
        this.profileService.setRemoveUserCustomerList(this.customerList);
    }

}
