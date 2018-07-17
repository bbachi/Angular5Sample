import { Component, Input, Output } from '@angular/core';

@Component({
    selector: 'gme-error',
    templateUrl: './error.component.html',
    styleUrls: ['./error.component.css']
})
export class ErrorComponent {

    @Input() errorMessage:string;
}
