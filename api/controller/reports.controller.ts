import {Router, Request, Response, NextFunction} from 'express';
import LoggerUtil from '../logs/log';
import { ReportsHelper } from './../helper/reports.helper';

export class ReportsController {


  public vacancyReport(req: Request, res: Response, next: NextFunction) {

      let reportsHelper = new ReportsHelper();
      reportsHelper.vacancyReport(req).then(s => {
        res.json(s)
      })

  }

  public rollReport(req: Request, res: Response, next: NextFunction) {

      let reportsHelper = new ReportsHelper();
      reportsHelper.rollReport(req).then(s => {
        res.json(s)
      })
  }
}
