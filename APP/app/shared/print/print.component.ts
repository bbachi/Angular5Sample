import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
    selector: 'gme-print',
    template: `<div class="text-right mT3P printIconHolder">
                <a (click)="print()"><span class="printerIcon lessMargin"></span>Print</a>
               </div>`
    //styleUrls: ['./confirm.component.css']
})

export class PrintComponent {

    @Input() title: string;

    print(){
        document.title = this.title;
        window.print();
    }
}
