import { Injectable } from '@angular/core';

@Injectable()
export class CSVService {

    public getCSVData(data: any[],csvName: string): CSV {
        let headers = [];
        if(undefined != data && data.length > 0){
            for(var k in data[0]){
              headers.push(k);
            }
        }
        return {headers,csvName,data};
    }

}

export interface CSV {
    headers: string[];
    csvName: string;
    data: any[];
}
