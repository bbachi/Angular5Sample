import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ModalService } from '../../../_services'

@Component({
    selector: 'payment-methods',
    templateUrl: './storedbank.component.html',
    styles: [`.label{
                min-width: 100px !important;
              }`]
})
export class StoredBankHolderComponent implements OnInit {

    constructor(private modalService: ModalService){}

    @Input() paymentMethods: any[];
    @Output() selectedBankEvent = new EventEmitter<any>();
    @Output() deleteBankEvent = new EventEmitter<any>();
    @Output() onNewBankEvent = new EventEmitter<any>();

    nickNameForModal: string;
    bankAccountNumForModal: string;

    onStoredAccount(bank: any){
       this.selectedBankEvent.emit(bank);
    }

    onDelete(bank: any){
        this.nickNameForModal = bank.nickname;
        this.bankAccountNumForModal = bank.maskedBankAcc;
        this.modalService.open('delete-payment-profile');
    }

    onNewBankAccount(event){
        this.onNewBankEvent.emit({newBank:event.target.checked});
    }

    onDeleteConfirm(event){
        this.deleteBankEvent.emit(event)
    }

    ngOnInit(){}

}
