import {Router, Request, Response, NextFunction} from 'express';
import LoggerUtil from '../logs/log';
import { MyAccountHelper } from './../helper/myaccount.helper';

export class MyAccountController {


    public getCustomerDetails(req: Request, res: Response, next: NextFunction) {

        var myAccountHelper = new MyAccountHelper();
        myAccountHelper.getDashBoardData(req).then(s => {res.json(s)})
    }


    public getMFESIIDListForNONCAABPList(req: Request, res: Response, next: NextFunction) {
        var myAccountHelper = new MyAccountHelper();
        myAccountHelper.getMFESIIDListForNONCAABPList(req).then(s => {res.json(s)})
    }

}
