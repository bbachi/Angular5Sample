import LoggerUtil from './../logs/log';
import Promise = require('tspromise');
import * as cst from './../util/constant';
import { CommonUtil } from './../util/common.util';
import { MyAccountService } from './../services/myaccount.service';
import { BMFSSSession } from './../model/bmfss.session';
import { Error } from './../model/error';
import {BaseRequest } from './../request/base.request';
import {CommonUtilityHelper} from './../helper/commonutility.helper';
import { Unit } from './../model/bmfss.session';

export class SessionHelper {

  public updateSessionWithSelectedProperty(req: any): void {

      LoggerUtil.info("UPDATING SELECTED PROPERTY IN SESSION::::::"+req.body.propertyId)
      let hierarchyDtls = req.session.bmfSSSession.hierarchyDtls;
    

  }


}
