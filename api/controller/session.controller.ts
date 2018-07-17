import {Router, Request, Response, NextFunction} from 'express';
import LoggerUtil from '../logs/log';
import { PreloginHelper } from './../helper/prelogin.helper';

export class SessionController {

  public updateSessionWithSelectedProperty(req: Request, res: Response, next: NextFunction){

      var preloginHelper = new PreloginHelper();
      preloginHelper.searchByBpNumber(req).then(r => {
          res.json(r);
      });
  }
}
