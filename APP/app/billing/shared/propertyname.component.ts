import { Component, Input, Output, OnInit } from '@angular/core';

@Component({
    selector: 'gme-property-name',
    templateUrl: './propertyname.component.html',
    styles: ['.minlabel{min-width:50px !important}']
})
export class PropertyNameComponent {

    @Input() propertyName: string;

}
