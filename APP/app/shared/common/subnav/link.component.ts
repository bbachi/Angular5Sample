import { Component, Input, Output,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../app-state/reducers';
import { SharedService } from '../../../_services'

@Component({
    selector: 'gme-link',
    templateUrl: './link.component.html',
    styleUrls: ['./link.component.css']
})

export class LinkComponent {

    @Input() restrictionEnabled: boolean;
    @Input() restrictionReason: boolean;
    @Input() title: string;
    @Input() url: string;

    showToolTip: boolean = false;

    leftPos:number;
    topPos:number;

    mouseEnter(currentEvent){
        this.showToolTip = true;
        this.leftPos=currentEvent.target.offsetLeft+currentEvent.target.clientWidth+14; /*14 is width of the arrow - VK*/
        this.topPos=currentEvent.target.offsetTop-10; /*10 is the arrow mark positioned from top in tooltip  -Vk*/
    }

    mouseLeave(currentEvent){
        this.showToolTip = false;
    }

    getPos(pos){
      if(pos=="left") return this.leftPos;
      if(pos=="top") return this.topPos;
    }

}
