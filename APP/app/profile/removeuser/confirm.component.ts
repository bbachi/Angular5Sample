import { Component, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from '../../_services'

@Component({
    templateUrl: './confirm.component.html',
    styles: ['.errorMsg{color:red;}']
})
export class RemoveUserConfirmComponent implements OnInit, OnDestroy {

    removeConfirm: any;
    isSuccess: boolean = true;
    name: string;

    showAccessPrivileges: boolean;

    routeDataSubs: any;

    constructor(private route: ActivatedRoute, public profileService: ProfileService) {}

    checkForAccessPrivileges(securityRole){
        this.showAccessPrivileges = !(securityRole == 'E_Broker Associate_BRK_ASC' || securityRole == 'E_Broker_BRK_ADM')
    }

    ngOnInit() {
        this.routeDataSubs = this.route.data.subscribe(data => {
            this.isSuccess = !data.removeUserConfirm.error;
            this.name = data.removeUserConfirm.firstName+" "+data.removeUserConfirm.lastName;
            this.removeConfirm = data.removeUserConfirm;
            this.checkForAccessPrivileges(this.removeConfirm.webSecurityRole)
        });
   }

   ngOnDestroy(){
       this.routeDataSubs.unsubscribe();
   }

}
