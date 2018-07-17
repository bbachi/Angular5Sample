import { Injectable, EventEmitter, Output, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions, ResponseContentType } from '@angular/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Store } from '@ngrx/store';
import * as fromRoot from '../app-state/reducers';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/publishReplay'
import * as base64js from 'base64-js'
import { TestService } from '../../test_env'

@Injectable()
export class BaseService implements OnInit {

      private rootUrl = environment.contextRoot+environment.apiRoot;
      private isTestEnvironemnt: boolean = false;
      loggedInUser: any;
      bpDtlsList: any;

      constructor(private http: Http, private store: Store<fromRoot.State>) {
          store.select(fromRoot.getLoggedInUser).subscribe(user => {
              this.loggedInUser = user;
              if(undefined != user){
                if(user.webSecurityRole == 'I_Admin_OPS_MGR' || user.webSecurityRole == 'I_Read-Only_IT'
                    || user.webSecurityRole == 'I_Agent_OPS_REP'){
                    this.store.select(fromRoot.getBPDetailsList).subscribe(bpDtlsList =>{
                        this.bpDtlsList = bpDtlsList;
                    })
                }else{
                    this.store.select(fromRoot.getLoggedInBPDtlsList).subscribe(bpDtlsList => {
                        this.bpDtlsList = bpDtlsList;
                    })
                }
             }

          })
      }

      callAPI(url: string, inData: any): Observable<any> {
          let headers = new Headers({'Content-Type' : 'application/json'});
          let options = new RequestOptions({headers: headers});
          if(this.isTestEnvironemnt){
              let testService: TestService = new TestService();
              return testService.loadData(url)
          }else{
            return this.http.post(this.rootUrl+url, JSON.stringify(this.appendDataToReqBasedOnUrl(inData, url)), options)
                .publishReplay().refCount()
                .map((response: Response) => <any> response.json())
                .do(data => {})
                .catch(this.handleError);
           }
     }

     getAPI(url: string):  Observable<any> {
          let headers = new Headers({'Content-Type' : 'application/json'});
          let options = new RequestOptions({headers: headers});
          return this.http.get(this.rootUrl+url, options)
              .publishReplay().refCount()
              .map((response: Response) => <any> response.json())
              .do(data => {})
              .catch(this.handleError);
     }

      downloadPDF(url: string, inData: any): any {
          let headers = new Headers({'Content-Type' : 'application/json',responseType:'arraybuffer'});
          let options = new RequestOptions({headers: headers});

          this.http.post(this.rootUrl+url, JSON.stringify(this.appendDataToReqBasedOnUrl(inData, url)),options)
            .map((response: Response) => <any> response.json())
            .subscribe(response => { // download file
              //convert response string to bytearray
              //console.log(response)

              var blob = new Blob([base64js.toByteArray(`VGhpcyBpcyB1cmw=`)], {type: 'application/pdf'});
              var filename = 'file.pdf';
              var fileURL = URL.createObjectURL(blob);
              window.open(fileURL);
          });
      }

      base64ToArrayBuffer(base64:any) {
          var binaryString = window.atob(base64);
          var binaryLen = binaryString.length;
          var bytes = [binaryLen];
          for (var i = 0; i < binaryLen; i++) {
             var ascii = binaryString.charCodeAt(i);
             bytes[i] = ascii;
          }
          return bytes;
        }

      private handleError(error: Response) {
          console.log('ERROR::STATUS:::::' + error.status);
          console.log('ERROR::STATUS TEXT:::::' + error.statusText);
          console.log('ERROR::BODY:::::' + error['_body']);
          if(error.status == 504 || error.status == 502 || error.status == 503){
              return Observable.of("");
          }else{
             return Observable.of(JSON.stringify(error) || 'Server error');
          }
      }

      appendDataToReqBasedOnUrl(inData: any, url: string){
          let returnReq = {};
          try{
            if(undefined != this.loggedInUser && undefined != this.loggedInUser.userName){
                returnReq = {...inData, ...{loggedInUserName:this.loggedInUser.userName}}
            }else{
                returnReq = inData;
            }

            if(url == '/dashboard/custdtls'){
                //console.log("adding bp details list for the url:::"+url)
                returnReq = {...returnReq, ...{bpDtlsList: this.bpDtlsList}}
            }
          }catch(err){
              //console.log("ERROR====>>>>>"+err.message)
              returnReq = inData;
          }
          return returnReq;
      }


      ngOnInit(){}


}
