import LoggerUtil from './../logs/log';
import Promise = require('tspromise');
import { ReportsRequest } from '../request/reports.request';
import { VacancyReport, RollReport, VacancyReportVO, RollInReportVO, RollOutReportVO} from '../model/reports.model';
import * as cst from './../util/constant';
import {CommonUtil} from './../util/common.util';
import * as moment from 'moment';
import { ReportsService } from '../services/reports.service';
import * as _ from "lodash";



export class ReportsHelper {

    private reportsService: ReportsService;

    constructor(){
        this.reportsService = new ReportsService();
    }


    public vacancyReport(req: any): Promise<any> {

        LoggerUtil.info("getting vacancy report for the request::::"+JSON.stringify(req.body));
        let inReq = this.populateVacancyReportsRequest(req);
        let vacancyListFilter = new Array<VacancyReport>();
        var p = new Promise((resolve, reject) => {
          this.reportsService.getVacancyReport(inReq).then(s => {
            if((undefined != s && s.dataAvailable)){
               s.vacancyList.forEach((vacancyReportVo:VacancyReportVO) => {
                 let vacancyReport = new VacancyReport();
                 vacancyReport.serviceAddress= vacancyReportVo.streetNumber+ " "+ vacancyReportVo.streetName;
                 vacancyReport.unit= vacancyReportVo.premiseUnitNbr;
                 vacancyReport.changeDate= vacancyReportVo.changeDate;
                 vacancyReport.daysVacant= vacancyReportVo.daysVacant;
                 vacancyReport.stateOfUnit= vacancyReportVo.stateOfUnit;
                 vacancyListFilter.push(vacancyReport)
            });
          }
              resolve(vacancyListFilter);

          });
        });
        return p;
    }

    private populateVacancyReportsRequest(req: any): ReportsRequest {

        let inReq = new ReportsRequest();
        inReq.companyCode = cst.GMESS_CC_0270;
        inReq.relationshipId = req.body.relationshipId;
        return inReq;
    }


    public rollReport(req: any): Promise<any> {

        LoggerUtil.info("getting roll report for the request::::"+JSON.stringify(req.body));
        let dateFormat: string = "MM/DD/YYYY";
        let inReq = this.populateReportsRequest(req);
        let reportList = new Array<RollReport>();
        let reportType = req.body.reportType;
        var p = new Promise((resolve, reject) => {
          if(CommonUtil.equalsIgnoreCase(reportType,"rollin")){
            this.reportsService.getRollInReport(inReq).then(s => {
                resolve(this.populateRollReportList(reportType,s));
            });
          }else{
            this.reportsService.getRollOutReport(inReq).then(s => {
              resolve(this.populateRollReportList(reportType,s));
            });
          }
        });
        return p;
    }


    private populateRollReportList(type: string, s: any): RollReport[]{

        let reportList = new Array<RollReport>();
        try{
          if(undefined != s && s.dataAvailable){
            let resList = (type == 'rollin')?s.rollInReportList:s.rollOutReportList;
            if(undefined != resList){
               resList.forEach((report:any) => {
                  let rollReport = new RollReport();
                  rollReport.esiid = report.esiid;
                  rollReport.serviceAddress = report.serviceAddress;
                  rollReport.transactionDate = (type=="rollin")?report.rollinDate:report.rolloutDate;
                  reportList.push(rollReport)
               })
            }
          }
        }catch(err){
            LoggerUtil.info("ERROR=====>>>>populateRollReportList>>>>>"+err.message)
        }
        return reportList;
    }


    private populateReportsRequest(req: any): ReportsRequest {

        let inReq = new ReportsRequest();
        inReq.companyCode = cst.GMESS_CC_0270;
        inReq.relationshipId = req.body.relationshipId;
        inReq.fromDate = req.body.fromDate;
        inReq.toDate = req.body.toDate;
        inReq.reportType = req.body.reportType;
        return inReq;
    }

    public getRollReportData(t:any):any{
      let rpttList = new Array<RollReport>();
      if(null !=t && t.dataAvailable){
        rpttList= t.rollList;
      }
      return rpttList;
    }


}
