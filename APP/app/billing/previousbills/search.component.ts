import { Component, Input, Output, OnInit, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';

@Component({
    selector: 'previous-bills-search',
    templateUrl: './search.component.html'
})
export class PreviousBillsSearchComponent implements OnInit, OnChanges {

    contractAccNumber: string;
    accountType: string;
    noCA: boolean;
    isLoading: boolean = true;
    @Output() onApplyClick = new EventEmitter<any>();
    @Input() contractAccountList: any;

    constructor() {}

    onChangeContractAccount(inVar){
        let contractAccNumber = inVar.split(":")[0];
        let accountType = inVar.split(":")[1];
        this.contractAccNumber = contractAccNumber;
        this.accountType = accountType;
    }

    onApply(){
      var inVar = {contractAccNumber:this.contractAccNumber, accountType:this.accountType}
      this.onApplyClick.emit(inVar);
    }

    ngOnInit() {

    }

    ngOnChanges(changes: SimpleChanges) {
        if(changes["contractAccountList"]){
          this.isLoading = false;
          if(undefined != this.contractAccountList){
            if(undefined != this.contractAccountList.indContractAccountList && this.contractAccountList.indContractAccountList.length > 0){
                this.contractAccNumber = this.contractAccountList.indContractAccountList[0].contractAccountNumber;
                this.accountType = "I";
                this.onApply();
            }else if(undefined != this.contractAccountList.collContractAccountList && this.contractAccountList.collContractAccountList.length > 0){
                this.contractAccNumber = this.contractAccountList.collContractAccountList[0].contractAccountNumber;
                this.accountType = "C";
                this.onApply();
            }else{
                this.noCA = true;
            }
          }
        }
    }

}
