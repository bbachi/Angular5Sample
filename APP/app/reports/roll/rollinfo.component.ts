import { Component, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
    selector: 'roll-info',
    templateUrl: './rollinfo.component.html',
    styleUrls: ['./rollinfo.component.css']
})

export class RollInfoComponent {

    constructor() {}

    @Input() propertyName;
    @Input() reportExecutionDate;
    @Input() reportPeriod;

}
