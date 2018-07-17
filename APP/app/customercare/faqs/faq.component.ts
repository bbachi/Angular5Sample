import { Component, Input, Output, OnInit } from '@angular/core';

@Component({
    selector: 'gme-faq',
    templateUrl: './faq.component.html',
    //styleUrls: ['./forms.component.css']
})
export class FAQComponent implements OnInit {

    @Input() question: string;
    @Input() answer: string

    isCollapsed: boolean = true;

    constructor() {}

    onLinkClick(){
        //console.log("this.collapsed:::"+this.isCollapsed)
        this.isCollapsed = !this.isCollapsed;
    }

    ngOnInit() {

    }

}
