import { Component, Input, Output, OnInit, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { ModalService } from '../../../_services'

@Component({
    selector: 'cancel-payment-modal',
    templateUrl: './cancelpay.component.html',
    styles: ['.mrgntb{margin:5px 0px}']
})
export class CancelPaymentModalComponent {

    constructor(private modalService: ModalService) {}

    @Input() cancelPaymentInfo: any;
    @Output() cancelPaymentEvent = new EventEmitter<any>();

    onCancel(id: string){
       this.modalService.close(id);
    }

    onYes(id: string){
       this.modalService.close(id);
       this.cancelPaymentEvent.emit(this.cancelPaymentInfo)
    }

}

export interface CancelPaymentInfo {
    paymentAmount: string;
    paymentDate: string;
    routingNumber: string;
    bankAccountNum: string;
    scheduledCancelDate: string;
}
