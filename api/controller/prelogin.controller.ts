import {Router, Request, Response, NextFunction} from 'express';
import LoggerUtil from '../logs/log';
import { PreloginHelper } from './../helper/prelogin.helper';

export class PreLoginController {

    public getFirstLogonFlag(req: Request, res: Response, next: NextFunction) {
        var preloginHelper = new PreloginHelper();
        preloginHelper.getFirstLogonFlag(req).then(r => {res.json(r);});
    }

    public setFirstLogonFlag(req: Request, res: Response, next: NextFunction) {
        var preloginHelper = new PreloginHelper();
        preloginHelper.setFirstLogonFlag(req).then(r => {res.json(r);});
    }

    public getUserProfileDetails(req: Request, res: Response, next: NextFunction) {

        var preloginHelper = new PreloginHelper();
        preloginHelper.getUserProfileDetails(req).then(r => {res.json(r);});
    }

    public searchByBpNumber(req: Request, res: Response, next: NextFunction) {

        var preloginHelper = new PreloginHelper();
        preloginHelper.searchByBpNumber(req).then(r => {res.json(r);});
    }

    public searchByFedTaxId(req: Request, res: Response, next: NextFunction) {

        var preloginHelper = new PreloginHelper();
        preloginHelper.searchByFedTaxId(req).then(r => {res.json(r);});
    }


    public testget(req: Request, res: Response, next: NextFunction) {

        res.json("this is get request");
    }

    public testpost(req: Request, res: Response, next: NextFunction) {

        res.json(req.body);
    }


}
