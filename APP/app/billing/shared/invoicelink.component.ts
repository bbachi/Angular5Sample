import { Component, Input, Output, OnInit } from '@angular/core';
import { AppConfigService } from '../../_services';

@Component({
    selector: 'gme-invoice-link',
    template: `
        <a *ngIf="invoiceNumber" (click)="getInVoice()">Invoice #{{invoiceNumber}}</a>
    `
})
export class InvoiceLinkComponent {

    @Input() invoiceNumber: string;
    @Input() caNumber: string;

    downloadInvoiceUrl: string;

    constructor(private appConfig: AppConfigService) {
        this.downloadInvoiceUrl = this.appConfig.readEnvironment('downloadInvoiceUrl')
    }

    getInVoice(){
       window.open(this.downloadInvoiceUrl+this.caNumber+"/"+this.invoiceNumber+"/0270");
    }
}
