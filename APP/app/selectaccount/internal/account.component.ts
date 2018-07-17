import { Component, OnInit, NgZone, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../app-state/reducers';
import * as selectedPropertyTypes from '../../app-state/actions/selectedproperty'
import * as searchAccountsTypes from '../../app-state/actions/search'
import { Subject } from 'rxjs/Subject';
import { LoggerService, AccountService } from '../../_services';
import { Observable } from "rxjs/Rx"
import 'rxjs/add/operator/takeUntil';

@Component({
    selector: 'internal-account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.css']
})

export class InternalAccountComponent implements OnInit, OnDestroy {

    selectionType: string ="BP"
    searchString: string = ""
    errorMessage: string = "No Hierarchy found for the search criteria."
    isHierarchyNotFound: boolean;
    showResult: boolean;

    hierarchydtls: any;
    mngList: any[];
    regionList: any[];
    propertyList: any[];
    mngBP: boolean = false;
    regionBP: boolean = false;
    propertyBP: boolean = false;

    isSearchStringEmpty: boolean;
    searchErrorMessage: string;

    isLoading: boolean = false;
    isLoadingSuccess: boolean = false;

    notOnMngtNodes: boolean = false;
    searchTitle: string = "Search";

    destroy$: Subject<boolean> = new Subject<boolean>();

    webSecurityRole: string;

    /* search types */
    hierarchyDtls: any;
    nodeType: string = "M"; //return search page type M-management, R-region, P-property
    selectedMngBPNumber: string;
    selectedRgnBPNumber: string;
    /* search types */

    constructor(private router: Router,private route: ActivatedRoute,private accountService: AccountService,
      private store: Store<fromRoot.State>, private logger: LoggerService){}

    search(){
        this.logger.debug("selectionType:::"+this.selectionType+":::searchString::"+this.searchString);
        if(this.isNewHierarchyCallNeeded()){
            this.clearPreviousSearchIfAny();
            this.searchNewHierarchy();
        }else{
          this.isLoadingSuccess = true;
          let searchTitle = this.searchTitle;
          this.searchTitle = this.searchTitle == 'Search'?"Show All":"Search";
          if(searchTitle == 'Search'){
            if(this.selectionType == 'BP'){
                this.searchByBPNumber();
            }else if(this.selectionType == 'AN' || this.selectionType == 'PN'){
                this.searchByAccountName();
            }else{
                this.searchTaxID();
            }
          }else{
              this.showAll();
              this.showResult = true;
          }
        }
    }

    isNewHierarchyCallNeeded(){
        if(this.accountService.isInternalUserHasAssociates(this.webSecurityRole)) return false;
        if(this.nodeType == "M") return true;
    }

    searchNewHierarchy(){
      if(undefined != this.searchString && this.searchString.trim() != ''){
          this.isSearchStringEmpty = false;
          if(this.selectionType == "TID"){
              this.store.dispatch(new searchAccountsTypes.SearchByTaxId({fedTaxId:this.searchString}))
          }else{
              this.store.dispatch(new searchAccountsTypes.SearchByBPNumber({bpNumber:this.searchString}));
          }
          this.store.select(fromRoot.getHierarchyDetails).takeUntil(this.destroy$).subscribe((resp: any) => {
              this.isLoading = resp.isLoading;
              this.isLoadingSuccess = resp.isLoadingSuccess;
              this.showResult = resp.isLoadingSuccess;
              if(resp.isLoadingSuccess && undefined != resp.hierarchydtls && resp.hierarchydtls.found){
                  this.isHierarchyNotFound = false;
                  this.setHierarchyDtls(resp.hierarchydtls);
              }else{
                 this.isHierarchyNotFound = true;
              }
          });
      }else{
          this.isSearchStringEmpty = true;
          this.searchErrorMessage = this.accountService.getSearchErrorMessage(this.selectionType);
      }
    }

    searchByBPNumber(){
      if(this.accountService.isInternalUserHasAssociates(this.webSecurityRole)){
          let hierDtls = this.hierarchydtls;
          if(hierDtls.mngBP){
              this.mngList = this.mngList.filter((mng) => mng.bpNumber.indexOf(this.searchString) != -1);
              this.isHierarchyNotFound = this.mngList.length == 0
              this.nodeType = this.isHierarchyNotFound?"":"M";
          }
          if(hierDtls.regionBP && !this.isHierarchyNotFound){
              this.regionList = this.regionList.filter((rgn) => rgn.bpNumber.indexOf(this.searchString) != -1);
              this.isHierarchyNotFound = this.regionList.length == 0
              this.nodeType = this.isHierarchyNotFound?"":"R";
          }
          if(hierDtls.propertyBP && !this.isHierarchyNotFound){
              this.propertyList = this.propertyList.filter((prop) => prop.relationshipId.indexOf(this.searchString) != -1);
              this.isHierarchyNotFound = this.propertyList.length == 0
              this.nodeType = this.isHierarchyNotFound?"":"P";
          }
      }else{
        if(this.nodeType == "R"){
            this.regionList = this.regionList.filter((rgn) => rgn.bpNumber.indexOf(this.searchString) != -1);
            this.isHierarchyNotFound = (undefined != this.regionList)?this.regionList.length == 0:true
            this.showResult = (undefined != this.regionList)?this.regionList.length > 0:false
        }else if(this.nodeType == "P"){
            this.propertyList = this.propertyList.filter((prop) => prop.relationshipId.indexOf(this.searchString) != -1);
            this.isHierarchyNotFound = (undefined != this.propertyList)?this.propertyList.length == 0:true
            this.showResult = (undefined != this.propertyList)?this.propertyList.length > 0:false
        }
      }
   }

    searchByAccountName(){
      try{
        if(this.nodeType == "R"){
            this.regionList = this.regionList.filter((rgn) => rgn.bpName.toLowerCase().indexOf(this.searchString.toLowerCase()) != -1);
            this.isHierarchyNotFound = (undefined != this.regionList)?this.regionList.length == 0:true
            this.showResult = (undefined != this.regionList)?this.regionList.length > 0:false
        }else if(this.nodeType == "P"){
            this.propertyList = this.propertyList.filter((prop) => prop.bpName.toLowerCase().indexOf(this.searchString.toLowerCase()) != -1);
            this.isHierarchyNotFound = (undefined != this.propertyList)?this.propertyList.length == 0:true
            this.showResult = (undefined != this.propertyList)?this.propertyList.length > 0:false
        }
      }catch(err){
          //console.log("ERROR====="+err.message);
          this.isHierarchyNotFound = true;
      }
    }

    searchTaxID(){
      if(this.nodeType == "R"){
          this.regionList = this.regionList.filter((rgn) => rgn.fedTaxId.indexOf(this.searchString) != -1);
          this.isHierarchyNotFound = (undefined != this.regionList)?this.regionList.length == 0:true
          this.showResult = (undefined != this.regionList)?this.regionList.length > 0:false
      }else if(this.nodeType == "P"){
          this.propertyList = this.propertyList.filter((prop) => prop.fedTaxId.indexOf(this.searchString) != -1);
          this.isHierarchyNotFound = (undefined != this.propertyList)?this.propertyList.length == 0:true
          this.showResult = (undefined != this.propertyList)?this.propertyList.length > 0:false
      }
    }

    showAll(){
      this.isHierarchyNotFound = false;
      if(this.accountService.isInternalUserHasAssociates(this.webSecurityRole)){
         if(this.accountService.isEMA(this.webSecurityRole)){
            this.propertyBP = this.hierarchydtls.propertyBP;
            this.propertyList = this.hierarchydtls.propertyList;
         }else{
            this.propertyBP = this.hierarchydtls.propertyBP;
            this.mngBP = this.hierarchydtls.mngBP;
            this.regionBP = this.hierarchydtls.regionBP;
            this.propertyList = this.hierarchydtls.propertyList;
            this.regionList = this.hierarchydtls.regionList;
            this.propertyList = this.hierarchydtls.propertyList;
         }
      }else{
        if(this.nodeType == "R"){
          this.hierarchydtls.mngBPList.forEach(mng => {
            if(mng.bpNumber == this.selectedMngBPNumber){
                this.regionList = mng.regionList
            }
          })
        }else if(this.nodeType == "P"){
          this.hierarchydtls.mngBPList.forEach(mng => {
            mng.regionList.forEach(rgn => {
              if(rgn.bpNumber == "NO_REGN"){
                  this.propertyList = rgn.propertyList
              }else{
                if(rgn.bpNumber == this.selectedRgnBPNumber){
                    this.propertyList = rgn.propertyList
                }
              }
            })
          })
        }
      }
   }

    clearPreviousSearchIfAny(){
        this.mngList = [];
        this.regionList = [];
        this.propertyList = [];
        this.mngBP = false;
        this.regionBP = false;
        this.propertyBP = false;
    }


    onManagement(mngBPNumber: string){
        this.selectedMngBPNumber = mngBPNumber;
        let mngList = this.mngList
        this.notOnMngtNodes = true;
        mngList.forEach(mng => {
          if(mng.bpNumber == mngBPNumber){
              if(mng.regionList.length == 1 && mng.regionList[0].bpNumber == 'NO_REGN'){
                  let propertyList = mng.regionList[0].propertyList
                  this.propertyList = propertyList
                  this.showAndHideNodes("P")
              }else{
                  this.regionList = mng.regionList
                  this.showAndHideNodes("R")
              }
          }
        })
    }

    showAndHideNodes(node: string){
        this.nodeType = node;
        if(node == 'M'){
          this.mngBP = true;this.regionBP = false; this.propertyBP =false;
        }else if(node == 'R'){
          this.mngBP = false;this.regionBP = true; this.propertyBP =false;
        }else if(node == 'P'){
          this.mngBP = false;this.regionBP = false; this.propertyBP =true;
        }
    }

    onRegion(regionBpNumber: string){
        try{
          this.notOnMngtNodes = true;
          this.selectedRgnBPNumber = regionBpNumber;
          let accountFound: boolean = false;
          if(this.mngBP){
            let mngList = this.mngList
            mngList.forEach(mng => {
              mng.regionList.forEach(rgn => {
                if(rgn.bpNumber == regionBpNumber){
                    accountFound = true;
                    this.propertyList = rgn.propertyList
                    this.showAndHideNodes("P")
                }
              })
            })
         }
         if(!accountFound && this.regionBP){
             this.regionList.forEach(rgn => {
                if(rgn.bpNumber == regionBpNumber){
                  this.propertyList = rgn.propertyList
                  this.showAndHideNodes("P")
                }
             })
         }
       }catch(err){
          console.log("ERROR===onRegion>>>>>"+err.message)
       }
    }

    onProperty(relationshipId: string){
        this.store.dispatch(new selectedPropertyTypes.SaveRelationshipId(relationshipId))
        this.router.navigate(['/protected/customer/dashboard.htm']);
    }

    onSearchBySelection(event){
        this.isSearchStringEmpty = false;
        this.isHierarchyNotFound = false;
        this.selectionType = event.target.value;
    }

    onSearchStringChange(event){
        this.searchString = event.target.value;
    }

    setHierarchyDtls(hierarchydtls: any){
        if(undefined != hierarchydtls){
          this.isHierarchyNotFound = false;
          this.hierarchydtls = hierarchydtls;
          this.showResult  = true;
          if(hierarchydtls.mngBP){this.mngList = hierarchydtls.mngBPList; this.mngBP = true;}
          if(hierarchydtls.regionBP){this.regionList = hierarchydtls.regionList; this.regionBP = true;}
          if(hierarchydtls.propertyBP){this.propertyList = hierarchydtls.propertyList; this.propertyBP = true;}
          if(!hierarchydtls.mngBP && !hierarchydtls.regionBP && !hierarchydtls.propertyBP){
              this.isHierarchyNotFound = true;
          }
        }
    }

    ngOnInit(): void {

        Observable.combineLatest(
            this.store.select(fromRoot.getStoredHierarchyDetails),
            this.store.select(fromRoot.getLoggedInUserSecurityRole),
            this.store.select(fromRoot.getLoggedInUserCustomerList)
        )
        .takeUntil(this.destroy$)
        .subscribe((result: any) => {
            this.setHierarchyDtls(result[0]);
            this.webSecurityRole = result[1];
            if(this.accountService.isInternalUserHasAssociates(this.webSecurityRole)){
                let hdtls = result[2];
                this.showResult  = true;
                this.hierarchydtls = hdtls;
                if(hdtls.mngBP){this.mngBP = true; this.mngList = hdtls.mngBPList}
                if(hdtls.regionBP){this.regionBP = true; this.regionList = hdtls.regionList}
                if(hdtls.propertyBP){this.propertyBP = true; this.propertyList = hdtls.propertyList}
            }
        })
    }

    ngOnDestroy(){
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }

}
