import { Component, Input, Output, OnInit, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { ModalService } from '../../../_services'

@Component({
    selector: 'delete-paymentprofile-modal',
    templateUrl: './delprofilemodal.component.html'
})
export class DeletePaymentProfileModalComponent {

    constructor(private modalService: ModalService) {}

    @Input() nickName: string;
    @Input() bankAccountNum: string;

    @Output() deletePaymentEvent = new EventEmitter<any>();

    onCancel(id: string){
       this.modalService.close(id);
    }

    onDelete(id: string){
       this.modalService.close(id);
       this.deletePaymentEvent.emit({nickName:this.nickName,bankAccountNum:this.bankAccountNum})
    }

}
