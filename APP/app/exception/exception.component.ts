import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
    template: `
    <div id="pageBody">
        <section id="contentWrapper">
          <div>
            <h1 class="pageHeader">We're Unable to Process Your Request</h1>
            <p>{{errorMessage}}</p>
          </div>
        </section>
      </div>
      `,
    //styleUrls: ['./termsofuse.component.css']
})
export class ExceptionComponent implements OnInit, OnDestroy {

    routeParamsSubs: Subscription;
    errorMessage: string = "We're currently experiencing technical difficulties and cannot process your request at this time. Please try again later or call us at 1-800-273-2135. We apologize for any inconvenience.";

    constructor(private activatedRoute: ActivatedRoute){

    }

    ngOnInit(): void {
        this.routeParamsSubs = this.activatedRoute.params.subscribe((params: Params) => {
            let errorCode = params['errorCode'];
            if(errorCode == 2){
                this.errorMessage = "Sorry about that, this account doesn’t have login access at the moment. Please reach out to our VIP team for help"
            }
        });
    }

    ngOnDestroy(){
        this.routeParamsSubs.unsubscribe();
    }

}
