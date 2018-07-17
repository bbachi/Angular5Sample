import {Router, Request, Response, NextFunction} from 'express';
import LoggerUtil from '../logs/log';
import { PreloginHelper } from './../helper/prelogin.helper';

export class SearchController {

  public selectAccount(req: Request, res: Response, next: NextFunction) {

      var preloginHelper = new PreloginHelper();
      preloginHelper.getFirstLogonFlag(req).then(r => {
          res.json(r);
       });
  }
}
