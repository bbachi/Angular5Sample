import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppConfigService } from '../../_services';
import * as storage from '../../app-state/state/storage'

@Component({
    selector: 'gme-logout',
    template: `<a (click)="onLogout()" href={{logoutURL}} target="_self">Logout</a>`
    //styleUrls: ['./confirm.component.css']
})

export class LogoutComponent {

    public logoutURL: string;

    constructor(private router: Router, private appConfig: AppConfigService){
        this.logoutURL = this.appConfig.readEnvironment('logoutURL')
    }

    onLogout(){
        storage.clearStorage();
    }
}
