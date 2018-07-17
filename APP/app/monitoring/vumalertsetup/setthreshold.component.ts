import { Component, Input, Output, OnInit, ViewChild, ElementRef, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'vum-set-threshold',
    templateUrl: './setthreshold.component.html',
    styles: ['gme-error {margin-bottom:20px;}']
})
export class SetThresholdComponent implements OnInit {

    @ViewChild('bedone') bedOneRef: ElementRef;
    @ViewChild('bedtwo') bedTwoRef: ElementRef;
    @ViewChild('bedthree') bedThreeRef: ElementRef;
    @ViewChild('other') otherRef: ElementRef;

    @Output() applyToAllEvnt = new EventEmitter<any>();
    isThresholdValEmpty: boolean = false;

    constructor(private route: ActivatedRoute) {}

    applyToAll(){
        this.isThresholdValEmpty = false;
        let bed1Threshold: string = this.bedOneRef.nativeElement.value;
        let bed2Threshold: string = this.bedTwoRef.nativeElement.value;
        let bed3Threshold: string = this.bedThreeRef.nativeElement.value;
        let otherThreshold: string = this.otherRef.nativeElement.value;
        if("" != bed1Threshold && "" != bed2Threshold && "" != bed3Threshold && "" != otherThreshold){
            let obj = {bed1Threshold,bed2Threshold,bed3Threshold,otherThreshold}
            this.applyToAllEvnt.emit(obj)
        }else{
            this.isThresholdValEmpty = true;
        }
    }

    ngOnInit() {

    }

}
