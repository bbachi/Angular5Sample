import { Component, Input, Output, OnInit } from '@angular/core';

@Component({
    selector: 'gme-tool-tip',
    templateUrl: './tooltip.component.html',
    styleUrls: ['./tooltip.component.css']
})
export class ToolTipComponent implements OnInit {

    @Input() message:string;
    @Input() title: string;

    ngOnInit(){
    }
}
