import { Component, Input, Output, OnInit, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { AccountService, SharedService } from '../../_services/index'
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'dashboard-custdtls',
    templateUrl: './custdtls.component.html',
    styleUrls: ['./custdtls.component.css']
})
export class CustomerDtlsComponent implements OnInit, OnChanges {

    constructor(private accountService: AccountService, private sharedService: SharedService) {}

    @Input() custDetails: any;
    @Input() balancesAndPaymentDue: any;

    @Output() viewBalances = new EventEmitter<any>();

    customerType: string;
    customerName: string;
    customerStatus:string;

    balancesAndPaymentsDue$: Observable<any>;

    onPageLoad: boolean = true;
    loading: boolean = false;
    done: boolean = false;

    onViewBalancesAndPaymentsDue(){
        this.balancesAndPaymentsDue$ = new Observable(observer => {
            observer.next({ajaxNotCalled:false,isLoading:true,data:undefined})
        });
        this.viewBalances.emit({});
    }

    ngOnChanges(changes: SimpleChanges){
        if(changes["balancesAndPaymentDue"]){
            console.log(this.balancesAndPaymentDue)
            if(undefined != this.balancesAndPaymentDue && this.balancesAndPaymentDue.isLoadingSuccess){
                this.balancesAndPaymentsDue$ = new Observable(observer => {
                    observer.next({ajaxNotCalled:false,isLoading:false,isLoadingSuccess:true,data:this.balancesAndPaymentDue.data})
                    observer.complete();
                });
            }
        }
    }

    ngOnInit() {
        let custDetails = this.custDetails;
        if(undefined != custDetails){
          this.customerName = custDetails.customerDtls.customerName;
          this.customerType = custDetails.customerDtls.customerType;
          this.customerStatus = custDetails.customerDtls.customerStatus;
        }

        this.balancesAndPaymentsDue$ = new Observable(observer => {
            observer.next({ajaxNotCalled:true,isLoading:false,data:undefined})
        });
    }

}
