import {Router, Request, Response, NextFunction} from 'express';
import LoggerUtil from '../logs/log';
import { VUMHelper } from './../helper/vum.helper';

export class VUMController {


  public getVacantDailyReport(req: Request, res: Response, next: NextFunction) {

      let vumHelper = new VUMHelper();
      vumHelper.getVUMDailyReportList(req).then(s => {res.json(s)})
  }


  public getVacantDailySetupData(req: Request, res: Response, next: NextFunction) {
      let vumHelper = new VUMHelper();
      vumHelper.getVacantDailySetupData(req).then(s => {res.json(s)})
  }

  public updateEmailPreference(req: Request, res: Response, next: NextFunction) {
      let vumHelper = new VUMHelper();
      vumHelper.updateEmailPreference(req).then(s => {res.json(s)})
  }

  public updateESIIDAtribute(req: Request, res: Response, next: NextFunction) {
      let vumHelper = new VUMHelper();
      vumHelper.updateESIIDAttribute(req).then(s => {res.json(s)})
  }

}
