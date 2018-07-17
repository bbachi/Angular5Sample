import {Router, Request, Response, NextFunction} from 'express';
import LoggerUtil from '../logs/log';
import { BillingHelper } from '../helper';

export class BillingController {


  public getBillingDetails(req: Request, res: Response, next: NextFunction) {

      let billingHelper = new BillingHelper();
      billingHelper.getBillingDetails(req).then(s => res.json(s))
  }

  public submitPayment(req: Request, res: Response, next: NextFunction) {

      let billingHelper = new BillingHelper();
      billingHelper.submitPayment(req).then(s => res.json(s))
  }

  public getStoredBankDtls(req: Request, res: Response, next: NextFunction) {

      let billingHelper = new BillingHelper();
      billingHelper.getStoredBankDtls(req).then(s => res.json(s))
  }

  public deletePaymentMethod(req: Request, res: Response, next: NextFunction) {

      let billingHelper = new BillingHelper();
      billingHelper.deleteBankDetails(req).then(s => res.json(s))
  }

  public getDashboardBillingDetails(req: Request, res: Response, next: NextFunction) {

      let billingHelper = new BillingHelper();
      billingHelper.getDashboardBillingDetails(req).then(s => res.json(s))
  }

}
