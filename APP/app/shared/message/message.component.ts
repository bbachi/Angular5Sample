import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../../_services/index';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'message',
    template: `<div id="">To quickly find answers to your questions, read our <a routerLink="/protected/customer/cc/faqs.htm" class="moreLinkNav">FAQs</a>.</div>`,
    styleUrls: []
})

export class MessageComponent implements OnInit {

    content$: Observable<any>;
    @Input() key: string;

    constructor(private service: SharedService) {}

    ngOnInit(){

    }
}
