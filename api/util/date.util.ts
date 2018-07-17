import { CommonUtil } from './../util/common.util';
import LoggerUtil from './../logs/log';
import * as moment from 'moment-timezone';


export class DateUtil {

    public getTimeStamp(): string {

        let dt = moment.now();
        let newDate= moment.tz(dt, 'America/Chicago').format("MM/DD/YYYY HH:mm:ss")
        //console.log("date TS for logs:::" +newDate)
        return newDate;

    }


    public isNearTo5PM(fromPage:string):boolean{
        var nearTo5PMFlag:boolean = false;
        let dt = moment.now();
        let now = moment.tz(dt, 'America/Chicago');

        var hour:number = now.hour();
        var minute:number = now.minute();
        var dayOfWeek:number = now.day();
        LoggerUtil.info("Hour:::"+hour +" :::minute:::"+minute + " :::dayOfWeek:::"+dayOfWeek)

        if(CommonUtil.isNotBlank(fromPage) && CommonUtil.equalsIgnoreCase(fromPage,"StartService")){
            if((dayOfWeek != 0 )&& (((hour == 16)&& (minute >=30 && minute <=45)))) {
                nearTo5PMFlag = true;
            } else {
                nearTo5PMFlag = false;
            }
            LoggerUtil.info("nearTo5PMFlag in dateUtil::"+nearTo5PMFlag)
        }else if(CommonUtil.isNotBlank(fromPage) && CommonUtil.equalsIgnoreCase(fromPage,"Verify")){
            if((dayOfWeek != 0 )&& (((hour == 16)&& (minute >=45)) || (hour > 16)))  {
                nearTo5PMFlag = true;
            } else {
                nearTo5PMFlag = false;
            }
        }
        return nearTo5PMFlag;
    }

}
