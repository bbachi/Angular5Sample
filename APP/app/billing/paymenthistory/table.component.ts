import { Component, Input, Output, OnInit, EventEmitter, OnChanges, SimpleChanges  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { SortService, BillingService } from '../../_services'

@Component({
    selector: 'payment-history-table',
    templateUrl: './table.component.html',
    styles: ['a { cursor: pointer; }']
})
export class PaymentHistoryTableComponent implements OnInit, OnChanges {

    @Input() paymentHistoryList: any[];
    @Output() onCancelPaymentClick = new EventEmitter<any>();
    @Output() onModifyPaymentClick = new EventEmitter<any>();

    csvName: string = "PaymentHistory";
    csvHeaders: string[] = ["Received By","Account Number","Payment Description","Payment Amount","Posting Date","Status"];

    constructor(private sortService: SortService, private billingService: BillingService) {}

    cancelPayment(paymentId: string){
        this.paymentHistoryList.forEach(history => {
          if(history.paymentID == paymentId){
              this.onCancelPaymentClick.emit(history);
          }
        })
    }

    modifyPayment(paymentId: string){
      this.paymentHistoryList.forEach(history => {
        if(history.paymentID == paymentId){
            this.onModifyPaymentClick.emit(history);
        }
      })
    }

    ngOnChanges(changes: SimpleChanges){
        if(!changes["paymentHistoryList"].firstChange){
            if(undefined != this.paymentHistoryList && this.paymentHistoryList.length > 0){
                this.setPagination()
            }
        }
    }

    //for pagination
    allItems: any[];
    totalSize: any;

    onSorted(event: any){
       this.sortService.sort(this.paymentHistoryList,event.sortColumn,event.sortDirection);
    }

    onPagination(pagerObj: any){
        this.paymentHistoryList = this.allItems.slice(pagerObj.rangeStart-1, pagerObj.rangeEnd+1);
    }

    setPagination(){
      if(undefined != this.paymentHistoryList && this.paymentHistoryList.length > 0){
          this.allItems = this.paymentHistoryList;
          this.totalSize = this.allItems.length;
          this.paymentHistoryList = this.allItems.slice(0, 25);
      }
    }

    ngOnInit(){
        this.setPagination()
    }
}
