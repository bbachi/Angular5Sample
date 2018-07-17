import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
    selector: 'password-expired',
    template: `<div>
                  <h1 class="pageHeader">Change Password -- Request Expired</h1>
                  <p>This request to change your businessportal.greenmountain.com password has expired to protect your security<br/>
                    Please use the <a href="/public/fps/identify.htm">Forgot Password</a> process to make this request again.
                  </p>
                </div>
                 `
    //styleUrls: ['./confirm.component.css']
})

export class ExpiredComponent implements OnInit {

    ngOnInit(){
       console.log(":::in expiry form:::")
    }

}
