import {Router, Request, Response, NextFunction} from 'express';
import LoggerUtil from '../logs/log';
import { CommonUtil } from './../util/common.util';
import { PCIHelper } from '../helper'

export class PCIController {

  public pciToGme(req: Request, res: Response, next: NextFunction) {

      let pciHelper = new PCIHelper();
      if(CommonUtil.isNotBlank(req.body.module)){
          let redirectUrl = pciHelper.getURLBasedOnModule(req.body.module, req.body.paymentMethodsAvailable, req.body.userCategory);
          console.log("redirectUrl:::"+redirectUrl)
          res.redirect(redirectUrl);
      }else{
        res.cookie("payBillJson" , req.body.payBillJson)
        res.redirect('/gmeSSApp/protected/customer/billing/paybill/pcitogme.htm');
      }
  }




}
