import { Component, Input } from '@angular/core';

@Component({
    selector: 'collective-info',
    templateUrl: './collectiveinfo.component.html',
    //styleUrls: ['./storedbank.component.css']
})
export class CollectiveInfoComponent {

    @Input() collectiveInfo: any;

    constructor(){}

}
