import { Inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { BaseService } from './base.service';
import * as URL_CONSTS from './urlconstants'
import { Store } from '@ngrx/store';

@Injectable()
export class AppConfigService  extends BaseService {

    private envUrl = "/environment/ui";
    private config: Object = null;

    public isTestEnv: any = false;

    public readEnvironment(key: string): any {
        return this.config[key];
    }

    public isProduction(): boolean {
        return this.config['production'];
    }

    public isEnvironment(env: string): boolean {
        let environment: string = this.getEnvironment();
        return env === environment;
    }

    public getEnvironment(): string {
        if(this.config['local']) return "local";
        if(this.config['dev']) return "dev";
        if(this.config['stage']) return "stage";
        if(this.config['production']) return "production";
    }

    public load(): Promise<any> {
        return new Promise((resolve, reject) => {
          this.getAPI(this.envUrl).subscribe((response: any) => {
              console.log(response);
              this.config = response;
              this.isProduction = response.production;
              resolve(true);
        });
      });
    }
}
