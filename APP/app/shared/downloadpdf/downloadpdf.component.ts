import { Component, Input, Output, ElementRef } from '@angular/core';
import * as jsPDF from 'jspdf'

@Component({
    selector: 'gme-download-pdf',
    template: `<div  class="text-right">
			           <a (click)="downloadPDF()">Download Statement [PDF]</a>
          		 </div>`
    //styleUrls: ['./confirm.component.css']
})

export class DownloadPDFComponent {

    @Input() pdfElement: ElementRef;

    downloadPDF(){
       let pdf = new jsPDF();
       let options = {pagesplit: false};
       pdf.addHTML(this.pdfElement, 0, 0, options, () => {
           pdf.save("confirmation.pdf");
       });
    }
}
