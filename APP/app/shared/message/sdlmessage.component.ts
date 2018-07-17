import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../../_services/index';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'sdl-message',
    template: `<div [innerHTML]="content$ | async"></div>`,
    styleUrls: ['./sdlmessage.component.css']
})

export class SDLMessageComponent implements OnInit {

    content$: Observable<any>;
    @Input() key: string;

    constructor(private service: SharedService) {}

    ngOnInit(){
        this.content$ = this.service.getMessageContent({title:this.key});
    }
}
