import {Router, Request, Response, NextFunction} from 'express';
import LoggerUtil from '../logs/log';
import { TransactionsHelper } from './../helper/transactions.helper';

export class TransactionsController {


  public listTransactions(req: Request, res: Response, next: NextFunction) {

      let txnHelper = new TransactionsHelper();
      txnHelper.listTransactions(req).then(s => {
        res.json(s)
      })

  }

  public detailTransaction(req: Request, res: Response, next: NextFunction) {

      let txnHelper = new TransactionsHelper();
      txnHelper.detailTransaction(req).then(s => {
        res.json(s)
      })
  }
}
