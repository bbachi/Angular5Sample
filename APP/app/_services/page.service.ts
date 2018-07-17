import { Injectable, EventEmitter, Output } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import * as _ from 'underscore';

@Injectable()
export class PagerService {

    constructor() { }

    private pageRangeEvent = new Subject<PageRangeEvent>();

    pageRangeEvent$ = this.pageRangeEvent.asObservable();

    onFirst(pageSize: any,totalPages:number,totalSize:number){
        let pSize =parseInt(pageSize);
        let rangeEnd = pSize>totalSize?totalSize:pSize;
        this.pageRangeEvent.next({rangeStart:1,rangeEnd,totalPages,pSize});
    }

    onNext(pageSize: any, rangeStart: number, rangeEnd: number, totalSize: number, totalPages: number){
       let pSize =parseInt(pageSize);
       if(rangeEnd+pSize > totalSize || rangeStart+pSize > totalSize){
           rangeStart = (rangeStart+pSize > totalSize)?rangeStart:rangeStart+pSize;
           rangeEnd = totalSize;
       }else{
           rangeStart = rangeStart+pSize;
           rangeEnd = rangeEnd+pSize;
       }

       this.pageRangeEvent.next({rangeStart,rangeEnd,totalPages,pSize});
    }

    onPrevious(pageSize: any, rangeStart: number, rangeEnd: number, totalSize: number,totalPages: number){
        let pSize = parseInt(pageSize);
        if(rangeStart-pSize < 0 || rangeEnd-pSize < pSize){
            rangeStart = 1;
            rangeEnd = (rangeEnd-pSize < pSize)?(pSize>totalSize?totalSize:pSize):rangeEnd-pSize;
        }else{
            rangeStart = rangeStart-pSize;
            rangeEnd = (rangeEnd == totalSize)?(rangeStart+pSize)-1:(rangeEnd-pSize);
        }
        this.pageRangeEvent.next({rangeStart,rangeEnd,totalPages,pSize});
    }

    onLast(totalSize: number, totalPages: number, pageSize: any){
        let rangeStart = ((totalPages-1) * parseInt(pageSize))+1;
        this.pageRangeEvent.next({rangeStart,rangeEnd:totalSize,totalPages,pSize:parseInt(pageSize)});
    }

    onPageSizeDisplay(totalSize: number,pageSize: any){
        let pSize = parseInt(pageSize);
        let rangeEnd = (pSize == 0 || pSize>totalSize)?totalSize:pSize;
        //rangeEnd = rangeEnd -1;
        let totalPages = Math.ceil(totalSize / pSize);
        this.pageRangeEvent.next({rangeStart:1,rangeEnd,totalPages,pSize});
    }

}

export interface PageRangeEvent {
    rangeStart: number;
    rangeEnd: number;
    totalPages: number;
    pSize: any;
}
