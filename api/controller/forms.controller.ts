import {Router, Request, Response, NextFunction} from 'express';
import LoggerUtil from '../logs/log';
import { FormsHelper } from './../helper/forms.helper';

export class FormsController {


  public getGMEForms(req: Request, res: Response, next: NextFunction) {

      let formsHelper = new FormsHelper();
      formsHelper.getGMEForms(req).then(s => {res.json(s)})
  }

  public getPDFs(req: Request, res: Response, next: NextFunction) {

     let formsHelper = new FormsHelper();
     formsHelper.getPDFsForSelectedForm(req).then(s => {res.json(s)})
  }

}
