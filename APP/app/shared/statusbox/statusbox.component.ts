import { Component, Input, Output, OnInit } from '@angular/core';

@Component({
    selector: 'gme-status-box',
    templateUrl: './statusbox.component.html',
    styleUrls: ['./statusbox.component.css']
})
export class StatusBoxComponent implements OnInit {

    @Input() message:string;
    @Input() isSuccess: boolean;


    ngOnInit(){
    }
}
