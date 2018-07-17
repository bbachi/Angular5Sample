import { Component, Input, Output, OnInit, ViewChild, ElementRef, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'vum-email',
    templateUrl: './email.component.html',
    styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

    @ViewChild('email') email1Ref: ElementRef;
    @Input() inEmail: string;
    @Output() emailOut = new EventEmitter<any>();
    @Input() index: string;

    editing: boolean = false;

    constructor(private route: ActivatedRoute) {}

    onEmailEdit(){
        this.editing = true;
    }

    onEmailCancel(){
        this.editing = false;
    }

    onEmailSave(){
        this.editing = false;
        this.inEmail = this.email1Ref.nativeElement.value;
        let outObj = this.index == "1"?{index:this.index,email1:this.inEmail}:{index:this.index,email2:this.inEmail};
        this.emailOut.emit(outObj);
    }

    ngOnInit() {
        //console.log('index:::::::'+this.index)
    }

}
