import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class LoggerService {

    private LOG_LEVELS: string[] = ["DEBUG","INFO","ERROR"];

    public debug(message: string): void {
        if(!environment.production){
            console.log("DEBUG "+message)
        }
    }

    public info(message: string): void {
        if(environment.production){
            console.log("INFO "+message)
        }
    }

    public print(message: any): void {
      if(!environment.production){
          console.log(message)
      }
    }

}
