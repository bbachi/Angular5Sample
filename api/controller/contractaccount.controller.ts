import {Router, Request, Response, NextFunction} from 'express';
import LoggerUtil from '../logs/log';
import { ContractAccountHelper } from './../helper';

export class ContractAccountController {

  public getContractAccountList(req: Request, res: Response, next: NextFunction){

      let caHelper = new ContractAccountHelper();
      caHelper.getStructuralDetails(req).then(s => res.json(s))
  }

}
