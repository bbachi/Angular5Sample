import {Router, Request, Response, NextFunction} from 'express';
import LoggerUtil from '../logs/log';
import { PreviousBillsHelper } from './../helper';

export class PreviousBillsController {

  public getPreviousBills(req: Request, res: Response, next: NextFunction) {

      let previousBillsHelper = new PreviousBillsHelper();
      previousBillsHelper.getPreviousBills(req).then(s => res.json(s))
  }

}
