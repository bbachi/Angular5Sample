import {Router, Request, Response, NextFunction} from 'express';
import LoggerUtil from '../logs/log';
import { PaymentHistoryHelper } from './../helper';

export class PaymentHistoryController {

  public getPaymentHistory(req: Request, res: Response, next: NextFunction) {

      let paymentHistoryHelper = new PaymentHistoryHelper();
      paymentHistoryHelper.getPaymentHistory(req).then(s => res.json(s))
  }

  public modifyPayment(req: Request, res: Response, next: NextFunction) {

      let paymentHistoryHelper = new PaymentHistoryHelper();
      paymentHistoryHelper.modifyPayment(req).then(s => res.json(s))
  }

  public cancelPayment(req: Request, res: Response, next: NextFunction) {

      let paymentHistoryHelper = new PaymentHistoryHelper();
      paymentHistoryHelper.cancelPayment(req).then(s => res.json(s))
  }

  public getDueDateForCA(req: Request, res: Response, next: NextFunction) {
      let paymentHistoryHelper = new PaymentHistoryHelper();
      paymentHistoryHelper.getDueDateForCA(req).then(s => res.json(s));
  }

}
