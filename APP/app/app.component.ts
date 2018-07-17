import {Component, ViewEncapsulation, OnInit } from '@angular/core';
import { ModalService, AppConfigService } from './_services';
import * as storage from './app-state/state/storage'
import { Router } from '@angular/router';

//Session timeouts
import {Idle, DEFAULT_INTERRUPTSOURCES} from '@ng-idle/core';
import {Keepalive} from '@ng-idle/keepalive';

@Component({
    selector: 'gme-app',
    styleUrls: ['./app.component.css'],
    templateUrl: 'app.component.html',
    encapsulation: ViewEncapsulation.Emulated,
    providers: []
})
export class AppComponent implements OnInit {

    idleState = 'Not started.';
    timedOut = false;
    lastPing?: Date = null;

    public logoutURL: string = "";

    constructor(private idle: Idle, private keepalive: Keepalive, private modalService: ModalService, private router: Router, private appConfig: AppConfigService) {

      this.logoutURL = this.appConfig.readEnvironment('logoutURL');
      // sets an idle timeout from environment.
      idle.setIdle(this.appConfig.readEnvironment('idleTimeOutInSec'));
      // sets a timeout period from environment. after seconds of inactivity, the user will be considered timed out.
      idle.setTimeout(this.appConfig.readEnvironment('timeOutInSec'));
      // sets the default interrupts, in this case, things like clicks, scrolls, touches to the document
      idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);

      idle.onIdleEnd.subscribe(() => this.idleState = 'No longer idle.');
      idle.onTimeout.subscribe(() => {
        this.idleState = 'Timed out!';
        this.timedOut = true;
        //console.log('::::time out')
        this.logOut('session-timeout')
      });
      idle.onIdleStart.subscribe(() => {
        //console.log("gone idle:::")
        this.idleState = 'You\'ve gone idle!'
        this.modalService.open('session-timeout');
      });
      idle.onTimeoutWarning.subscribe((countdown) => this.idleState = 'You will time out in ' + countdown + ' seconds!');

      // sets the ping interval to 15 seconds
      keepalive.interval(15);

      keepalive.onPing.subscribe(() => this.lastPing = new Date());

      this.reset();
  }

  stayLoggedOn(id){
     this.reset();
     this.modalService.close(id)
  }

  logOut(id){
      storage.clearStorage()
      this.modalService.close(id)
      window.location.href = this.logoutURL;
      //this.router.navigate([this.logoutURL])
  }

  closeModal(id){
      this.modalService.close(id)
  }

  reset() {
    this.idle.watch();
    this.idleState = 'Started.';
    this.timedOut = false;
  }

  ngOnInit(){
      this.reset();
  }

}
