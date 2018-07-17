import { Component, Input, Output, OnChanges, SimpleChanges, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { ModalService } from '../../_services'

@Component({
    selector: 'vum-edit-modal',
    templateUrl: './editmodal.component.html',
    styles: [`#errordiv:{width:90%;}`]
})
export class SingleEditModalComponent implements OnChanges {

    constructor(private modalService: ModalService) {}

    @ViewChild('unitType') unitType: ElementRef;
    @ViewChild('unitThreshold') unitThreshold: ElementRef;

    @Input() unit: any;
    @Output() esiidAttrUpdate = new EventEmitter<any>();

    isError: boolean = false;


    onUpdate(id: string){
       let unit = Object.assign({}, this.unit)
       unit.unitThreshold = this.unitThreshold.nativeElement.value;
       unit.unitType = this.unitType.nativeElement.value;
       if(unit.unitThreshold != "" && unit.unitThreshold != undefined){
           this.isError = false;
           this.esiidAttrUpdate.emit(unit)
           this.modalService.close(id);
       }else{
          this.isError = true;
       }

    }

    onCancel(id: string){
       this.modalService.close(id);
       this.esiidAttrUpdate.emit('cancel')
       this.isError = false;
    }

    ngOnChanges(changes: SimpleChanges){
        if(changes["unit"]){
          if(undefined != this.unit){
            this.unitType.nativeElement.value = this.unit.unitType;
            this.unitThreshold.nativeElement.value = this.unit.unitThreshold
          }
        }
    }

    ngOnInit(){
        this.unit = Object.assign({}, this.unit);
    }

}
