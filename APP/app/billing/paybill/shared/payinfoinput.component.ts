import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import * as moment from 'moment'

@Component({
    selector: 'pay-info-input',
    templateUrl: './payinfoinput.component.html',
    //styleUrls: ['./storedbank.component.css']
})
export class PaymentInfoInputComponent implements OnInit {

    @Input() paymentAmount: any;
    @Input() paymentDate: any;
    @Input() pastDue: string;
    @Input() dueDate: string;

    maxDate: string;
    pastDueFlag: boolean = false;

    paymentDateErr: boolean;
    errorMessage: string;

    @Output() paymentInfoEvent = new EventEmitter<any>();

    onDateChange(event){
        if(moment(event, "MM/DD/YYYY").diff(moment(this.dueDate,"MM/DD/YYYY"), "days") > 0){
            this.paymentDateErr = true;
            this.errorMessage = "You have chosen a date that is after the payment due date. You may be charged a late fee or service may be disconnected.";
        }else{
            this.paymentDateErr = false;
            this.errorMessage = "";
        }
        this.paymentInfoEvent.emit({paymentDate:event})
    }

    onPaymentAmount(event){
        let paymentAmount = event.target.value;
        this.paymentInfoEvent.emit({paymentAmount:event.target.value})
    }

    ngOnInit() {

      if(undefined != this.pastDue){
          if(parseFloat(this.pastDue) > 0){
              this.pastDueFlag = true;
          }
      }

      if(undefined != this.paymentDate){
          let inputDate = this.paymentDate;
          let dueDate = moment(inputDate, "MM/DD/YYYY");
          if(dueDate.diff(moment(),'days') > 0){
              this.paymentDate = moment().format("MM/DD/YYYY");
          }
      }

      this.maxDate = "29d";
      this.paymentInfoEvent.emit({paymentDate:this.paymentDate})

      /*if(undefined != this.dueDate){
          let dueDate = moment(this.dueDate, "MM/DD/YYYY");
          this.maxDate = dueDate.diff(moment(),'days')+1+"d";
      }
      */
   }
}
