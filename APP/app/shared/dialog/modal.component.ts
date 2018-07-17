import { Component, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';
import { ModalService } from '../../_services';

declare var jQuery: any;
 
@Component({
    selector: 'gme-modal',
    templateUrl: './modal.component.html',
    //styleUrls:['./modal.component.css']
})
 
export class ModalComponent implements OnInit, OnDestroy {

    @Input() id: string;
    private element: any;
 
    constructor(private modalService: ModalService, private el: ElementRef) {
        this.element = jQuery(el.nativeElement);
    }

    onClose(){
        this.close();
    }
 
    ngOnInit(): void {
        let modal = this;
 
        // ensure id attribute exists
        if (!this.id) {
            console.error('modal must have an id');
            return;
        }
 
        // move element to bottom of page (just before </body>) so it can be displayed above everything else
        this.element.appendTo('body');
 
        // close modal on background click
        /*
        this.element.on('click', function (e: any) {
            var target = jQuery(e.target);
            if (!target.closest('.modal-body').length) {
                modal.close();
            }
        });
        */
 
        // add self (this modal instance) to the modal service so it's accessible from controllers
        this.modalService.add(this);
    }
 
    // remove self from modal service when directive is destroyed
    ngOnDestroy(): void {
        if(this.id != "session-timeout"){
           this.modalService.remove(this.id);
           this.element.remove();
        }
    }
 
    // open modal
    open(): void {
        jQuery('body').find('.modal').show();
    }
 
    // close modal
    close(): void {
        jQuery('body').find('.modal').hide();
    }
}
