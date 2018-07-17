import { Component, Input, Output, OnInit, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import * as moment from 'moment';

@Component({
    selector: 'payment-history-search',
    templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit, OnChanges {

    @Output() onApplyClick = new EventEmitter<any>();
    fromDate: Date = moment().subtract('months',1).toDate();
    toDate: Date = moment().toDate();
    accountNumber: string;
    bpNumber: string;
    @Input() contractAccountList: any;

    constructor() {}

    onApply(){
      let inVar = {fromDate:this.fromDate,toDate:this.toDate, contractAccountNumber:this.accountNumber,bpNumber: this.bpNumber}
      this.onApplyClick.emit(inVar)
    }

    onChangeAccountNumber(accountNum){
        this.accountNumber = accountNum;
    }

    onDateChange(date, type){
        if(type == 'from'){
            this.fromDate = date;
        }else{
            this.toDate = date;
        }
    }

    ngOnChanges(changes: SimpleChanges){
        if(changes["contractAccountList"]){
            if(undefined != this.contractAccountList){
              if(undefined != this.contractAccountList.indContractAccountList && this.contractAccountList.indContractAccountList.length > 0){
                  this.accountNumber = this.contractAccountList.indContractAccountList[0].contractAccountNumber;
                  this.bpNumber = this.contractAccountList.indContractAccountList[0].partnerNumber;
              }else if(undefined != this.contractAccountList.collContractAccountList  && this.contractAccountList.collContractAccountList.length > 0){
                  this.accountNumber = this.contractAccountList.collContractAccountList[0].contractAccountNumber;
                  this.bpNumber = this.contractAccountList.collContractAccountList[0].partnerNumber;
              }
              this.onApply();
            }
        }
    }

    ngOnInit() {}

}
