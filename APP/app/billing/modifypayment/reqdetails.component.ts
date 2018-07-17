import { Component, Input } from '@angular/core';

@Component({
    selector: "modify-request-details",
    templateUrl: './reqdetails.component.html'
})
export class RequestDetailsComponent {
    //December 26, 2012  09:12 AM CDT
    @Input() time: string;
    @Input() confirmNumber: string;
    @Input() email: string;

}
