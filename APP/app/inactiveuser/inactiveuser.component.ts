import { Component } from '@angular/core';

@Component({
    template: `
    <div id="pageBody">
        <section id="contentWrapper">
          <div>
            <h1 class="pageHeader">InActive User</h1>
            <p>This User does not have access privileges to log into portal. Please contact us at 1-800-273-2135. We apologize for any inconvenience.</p>
          </div>
        </section>
      </div>
      `,
    //styleUrls: ['./termsofuse.component.css']
})
export class InActiveUserComponent {}
