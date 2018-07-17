import * as request from 'request';
import LoggerUtil from './../logs/log';
import Promise = require('tspromise');
import {CommonUtil} from './../util/common.util';
import { ServiceError } from '../model/error';



export class RestUtil {

    public post(url:string, postData:any): Promise<any> {
        LoggerUtil.info("CALLING SERVICE FOR THE URL:::"+url)
        var p = new Promise((resolve, reject) => {
                request.post(url, this.getOptions(postData), (err, response, data) => {
                  try{
                    if(err){
                        LoggerUtil.error(err.toString());
                        resolve(this.getErrorObj(2,err.toString));
                    }
                    var data = CommonUtil.isJSONString(data)?JSON.parse(data):{};
                    if(response.statusCode == 200 && data.error == undefined){
                        var resBody = CommonUtil.isJSONString(response.body)?JSON.parse(response.body):response.body;
                        resolve(resBody);
                    }else{
                        LoggerUtil.info(data.error);
                        resolve(this.getErrorObj(2,data.error));
                    }
                  }catch(err){
                    LoggerUtil.info("ERROR calling API==="+url+"==="+err.message);
                    resolve({error:err.message});
                  }
                });
            });
        return p;
    }

    public postForPDF(url:string, postData:any): Promise<any> {
        LoggerUtil.info("CALLING SERVICE FOR THE URL:::"+url)
        var p = new Promise((resolve, reject) => {
                request.post(url, this.getOptions(postData), (err, response, data) => {
                    resolve(response);
                });
            });
        return p;
    }


    public get(url:string): Promise<any> {
        var p = new Promise((resolve, reject) => {
                request.get(url, this.getOptions(null), (err, response, data) => {
                    if(err){
                        LoggerUtil.error(err.toString());
                        resolve(this.getErrorObj(2,err.toString));
                    }
                    var data = CommonUtil.isJSONString(data)?JSON.parse(data):{};
                    if(response.statusCode == 200 && data.error == undefined){
                        var resBody = JSON.parse(response.body);
                        LoggerUtil.info('Response from Rest Call is::::::'+resBody);
                        resolve(resBody);
                    }else{
                        LoggerUtil.info(data.error);
                        resolve(this.getErrorObj(2,data.error));
                    }
                });
            });
        return p;
    }


    private getErrorObj(errCode:number, errMsg: string): ServiceError{

        var error  = new ServiceError(errCode,JSON.stringify(errMsg));
        return error;
    }

    private getOptions(postData: any): request.CoreOptions {
        var headers: request.Headers = {"content-type":"application/json"};
        var options: request.CoreOptions;
        if(null != postData){
            options = {body:JSON.stringify(postData)};
            options.headers = headers;
        }else{
            options = {};
        }
        return options;
    }

}
