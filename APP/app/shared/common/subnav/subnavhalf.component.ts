import { Component, Input, Output,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../app-state/reducers';
import { SharedService } from '../../../_services'

@Component({
    selector: 'gme-subnav-half',
    templateUrl: './subnavhalf.component.html',
    //styleUrls: ['./csv.component.css']
})

export class SubNavHalfComponent implements OnInit {

    @Input() webSecurityRole: string;
    userCategory: string;

    constructor(private router: Router,private store: Store<fromRoot.State>, private sharedService: SharedService) {
        store.select(fromRoot.getLoggedInUserUserCategory).subscribe(userCategory => {
            this.userCategory = userCategory;
        });
    }



    onDashboardLink(){
        if(this.userCategory == "I"){
           this.router.navigate(['/protected/selectaccount/internal.htm']);
        }else{
            this.router.navigate(['/protected/selectaccount/external.htm']);
        }
    }

    ngOnInit(){

    }
}
