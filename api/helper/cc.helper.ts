import LoggerUtil from './../logs/log';
import Promise = require('tspromise');
import * as cst from './../util/constant';
import { CommonUtil } from './../util/common.util';
import { EmailHelper } from './../helper/email.helper'
import * as moment from 'moment'

export class CCHelper {

  private emailHelper: EmailHelper;

  constructor(){
      this.emailHelper = new EmailHelper();
  }

  public emailUs(req: any): Promise<any> {
    let dt = moment.now();
    let dateSentOn= moment.tz(dt, 'America/Chicago').format("MMMM DD, YYYY h:mm a z")
    let toCCEmail = process.env.CUSTOMER_CARE_EMAIL
    return new Promise((resolve, reject) => {
        this.emailHelper.emailUsConfirmationEmail(this.emailHelper.getEmailUsEmail(req,toCCEmail));
        resolve({...req.body,txnDateAndTime:dateSentOn})
    })
  }

}
