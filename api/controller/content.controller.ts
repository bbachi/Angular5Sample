import {Router, Request, Response, NextFunction} from 'express';
import LoggerUtil from '../logs/log';
import { ContentHelper } from './../helper/content.helper';

export class ContentController {

  public getPlanDetails(req: Request, res: Response, next: NextFunction) {

      let contentHelper = new ContentHelper();
      contentHelper.getPlanDetails(req).then(s => {res.json(s)})
  }

  public getMessageContentByTitle(req: Request, res: Response, next: NextFunction) {

      let contentHelper = new ContentHelper();
      contentHelper.getMessageContent(req).then(s => {res.json(s)})
  }

  public getFAQs(req: Request, res: Response, next: NextFunction) {

      let contentHelper = new ContentHelper();
      contentHelper.getFAQs(req).then(s => {res.json(s)})
  }
}
