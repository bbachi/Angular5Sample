import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment'

@Component({
    selector: 'bank-info',
    templateUrl: './bankinfo.component.html',
    //styleUrls: ['./storedbank.component.css']
})
export class BankInformationComponent {

    @Input() routingNumber: string;
    @Input() maskedBankNumber: string;
    @Input() nickName: string;
    @Input() fromPCI: boolean;
    @Input() page: string;

    @Output() changeBankInfo = new EventEmitter<any>();

    onChangeBankInfo(){
        this.changeBankInfo.emit(true);
    }

}
