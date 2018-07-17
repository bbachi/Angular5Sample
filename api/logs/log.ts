import * as winston from "winston";
var path = require ('path');
winston.transports.DailyRotateFile = require('winston-daily-rotate-file');
require('dotenv').load();
import { DateUtil } from '../util/date.util';
import { EnvironmentConfig } from 'env-read';

export class LoggerUtil {

    logger: winston.LoggerInstance;
    private dateUtil: DateUtil;

    constructor(){
        this.dateUtil = new DateUtil();
        this.logger = new (winston.Logger)({
            transports: [
                new (winston.transports.Console)({prettyPrint: true}),
                new (winston.transports.File)({
                    filename: EnvironmentConfig.getEnvConfig().fileLocation,
                    prettyPrint: true
                }),
                new (winston.transports.DailyRotateFile)({
                    filename: EnvironmentConfig.getEnvConfig().fileLocation,
                    datePattern: EnvironmentConfig.getEnvConfig().rollingDatePattern,
                    prepend: true,
                    prettyPrint: true
                })
            ]
        });
    }

    public info(logText: any, msgType?:string): void{

        this.logger.info(this.dateUtil.getTimeStamp()+'::::'+logText);

    }

    public error(logText: any, msgType?:string): void{
        this.logger.error(this.dateUtil.getTimeStamp()+'::::'+logText);
    }

    private getDateFormat(): string {
        var date = new Date();
        var returnStr = date.getMonth()+1+"/"+date.getDate()+"/"+date.getFullYear()+" "+date.getHours()+":"+date.getMinutes();
        return returnStr;
    }
}

// Create the loggerUtil, and export its instance
const loggerUtil = new LoggerUtil();
export default loggerUtil;
