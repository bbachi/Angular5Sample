import {Router, Request, Response, NextFunction} from 'express';
import LoggerUtil from '../logs/log';
import { CCHelper } from './../helper/cc.helper';

export class CCController {


  public emailUs(req: Request, res: Response, next: NextFunction) {

      let ccHelper = new CCHelper();
      ccHelper.emailUs(req).then(s => {res.json(s)});
  }

}
