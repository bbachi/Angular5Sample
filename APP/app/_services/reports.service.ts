import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BaseService } from './base.service';
import * as moment from 'moment';
import * as URL_CONSTS from './urlconstants'

@Injectable()
export class ReportsService extends BaseService {

    private vacancyReportUrl = URL_CONSTS.VACANCY_REPORT_URL;
    private rollReportUrl = URL_CONSTS.ROLL_REPORT_URL;

    dateFormat: string = "MM/DD/YYYY"

    getVacancyReport(inData: any): Observable<any> {
        return super.callAPI(this.vacancyReportUrl,inData);
    }

    getRollReport(inData: any): Observable<any> {
        return super.callAPI(this.rollReportUrl,inData);
    }

    processVacantDataOnApply(data: any, inVar: any){
        let type = inVar.stateType;
        let isLoading = true;
        let isLoadingSuccess = false;
        let reportList = [];
        try{
          if(undefined != data && data.length > 0){
              data.forEach(report => {
                  if(type == 'All'){reportList = data;
                  }else if(type.toLowerCase() == report.stateOfUnit.toLowerCase()){
                      reportList.push(report);
                  }
              })
              isLoadingSuccess = (undefined != reportList && reportList.length > 0);
          }
        }catch(err){
            console.log("ERROR====processDataOnApply>>>>"+err.message)
        }
        return {reportList,isLoading:false,isLoadingSuccess,isLoadingFailure:!isLoadingSuccess}
    }

    getCSVHeadersAndName(propertyName: string, rollType: string){

        let csvName: any;
        let csvHeaders: any;
        if(rollType == "rollin"){
           csvName = propertyName+"_"+moment().format(this.dateFormat)+"__RollInReport"
           csvHeaders = ["ESIID","Service Address","(Roll In)Date Active"];
        }else {
           csvName = propertyName+"_"+moment().format(this.dateFormat)+"__RollOutReport"
           csvHeaders = ["ESIID","Service Address","(Roll Out)Date Inactive"];
        }
        return {csvName,csvHeaders}
    }

}
