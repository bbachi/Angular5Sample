import {Router, Request, Response, NextFunction} from 'express';
import LoggerUtil from '../logs/log';
import { StopServiceHelper } from '../helper/stopservice.helper';

export class StopServiceController {


  public listPropertyAddress(req: Request, res: Response, next: NextFunction) {

      let stopHelper = new StopServiceHelper();
      stopHelper.listPropertyAddress(req).then(s => {
        res.json(s)
      })
  }

  public stopServiceSubmit(req: Request, res: Response, next: NextFunction) {

      let stopHelper = new StopServiceHelper();
      stopHelper.stopServiceSubmit(req).then(s => {
        res.json(s)
      })
  }

}
