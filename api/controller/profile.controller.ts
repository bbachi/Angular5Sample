import {Router, Request, Response, NextFunction} from 'express';
import LoggerUtil from '../logs/log';
import { ProfileHelper } from './../helper/profile.helper';

export class ProfileController {


  public searchUsersForUpdate(req: Request, res: Response, next: NextFunction) {

      let profileHelper = new ProfileHelper();
      profileHelper.searchUsersForUpdate(req).then((s) => {res.json(s);});
  }

  public getUserDetailsForTxnId(req: Request, res: Response, next: NextFunction) {

      let profileHelper = new ProfileHelper();
      profileHelper.getUserDtlsForTransactionId(req).then(s => {res.json(s)})
  }

  public saveUser(req: Request, res: Response, next: NextFunction) {

      let profileHelper = new ProfileHelper();
      profileHelper.saveUser(req).then(s => {res.json(s)})
  }

  public listAssociates(req: Request, res: Response, next: NextFunction) {

     let profileHelper = new ProfileHelper();
     profileHelper.listAssociates(req).then(s => {res.json(s)})
  }

  public validateUserName(req: Request, res: Response, next: NextFunction) {

     let profileHelper = new ProfileHelper();
     profileHelper.validateUserName(req).then(s => {res.json(s)})
  }

  public getUserDetails(req: Request, res: Response, next: NextFunction) {

    let profileHelper = new ProfileHelper();
    profileHelper.getUserProfileDetails(req).then(s => {res.json(s)})
  }

  public updateUser(req: Request, res: Response, next: NextFunction) {
      var profileHelper = new ProfileHelper();
      profileHelper.updateUser(req).then(s => {res.json(s);})
  }

  public removeUser(req: Request, res: Response, next: NextFunction) {
      var profileHelper = new ProfileHelper();
      profileHelper.removeUser(req).then(s => {res.json(s);})
  }

	public  updatePassword(req: Request, res: Response, next: NextFunction){
      var profileHelper = new ProfileHelper();
      profileHelper.updatePassword(req).then(s => {res.json(s);});
	}

  public passwordReset(req: Request, res: Response, next: NextFunction) {
      var profileHelper = new ProfileHelper();
      profileHelper.resetPassword(req).then(s => {res.json(s)})
  }

  public  setupPasswordFirstTime(req: Request, res: Response, next: NextFunction){

     var profileHelper = new ProfileHelper();
     profileHelper.setupPasswordFirstTime(req).then(s => {res.json(s);});
  }

}
