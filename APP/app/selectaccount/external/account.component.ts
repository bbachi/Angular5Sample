import { Component, OnInit, NgZone, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService, SharedService } from '../../_services/index';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../app-state/reducers';
import * as selectedPropertyTypes from '../../app-state/actions/selectedproperty'
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'external-account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.css']
})

export class ExternalAccountComponent implements OnInit, OnDestroy {

    selectionType: string ="BP"
    searchString: string = ""
    searchTitle: string = "Search";
    errorMessage: string = "No Hierarchy found for the search criteria."
    isHierarchyNotFound: boolean = false;
    isAjaxCalled: boolean = false;
    mngList: any[];
    regionList: any[];
    propertyList: any[];
    mngBP: boolean = false;
    regionBP: boolean = false;
    propertyBP: boolean = false;

    showResult:boolean = false;

    /* search types */
    hierarchyDtls: any;
    nodeType: string = "M"; //return search page type M-management, R-region, P-property
    selectedMngBPNumber: string;
    selectedRgnBPNumber: string;
    /* search types */

    hierarchyDtlsSubs: Subscription;

    constructor(private accountService: AccountService, private router: Router, private route: ActivatedRoute,
        private sharedService: SharedService, private store: Store<fromRoot.State>){
    }

    search(){
      //console.log("selectionType:::"+this.selectionType+":::searchString::"+this.searchString);
      //this.clearPreviousSearchIfAny()
      let searchTitle = this.searchTitle;
      this.showResult = false;
      this.searchTitle = this.searchTitle == 'Search'?"Show All":"Search";
      if(searchTitle == 'Search'){
        if(this.selectionType == 'BP'){
            this.searchByBPNumber(this.searchString);
        }else if(this.selectionType == 'AN' || this.selectionType == 'PN'){
            this.searchByAccountName();
        }else{
            this.searchTaxID();
        }
      }else{
          this.showAll();
      }
    }

    searchByBPNumber(bpNumber: string){
        let hierDtls = this.hierarchyDtls;
        try{
          if(this.nodeType == "M"){
            this.clearPreviousSearchIfAny()
            if(hierDtls.mngBP){
                this.mngList = hierDtls.mngBPList.filter((mng) => mng.bpNumber.indexOf(this.searchString) != -1);
                this.isHierarchyNotFound = (this.mngList.length == 0)
                this.showResult = (this.mngList.length > 0)
                this.mngBP = (this.mngList.length > 0)
            }
            if(hierDtls.regionBP && this.isHierarchyNotFound){
                this.regionList = hierDtls.regionList.filter((rgn) => rgn.bpNumber.indexOf(this.searchString) != -1);
                this.isHierarchyNotFound = (this.regionList.length == 0)
                this.showResult =(this.regionList.length > 0)
                this.regionBP = (this.regionList.length > 0)
            }
            if(hierDtls.propertyBP && this.isHierarchyNotFound){
                this.propertyList = hierDtls.propertyList.filter((prop) => prop.relationshipId.indexOf(this.searchString) != -1);
                this.isHierarchyNotFound = (this.propertyList.length == 0)
                this.showResult =(this.propertyList.length > 0)
                this.propertyBP = (this.propertyList.length > 0)
            }
          }else if(this.nodeType == "R"){
              this.regionList = this.regionList.filter((rgn) => rgn.bpNumber.indexOf(this.searchString) != -1);
              this.isHierarchyNotFound = this.regionList.length == 0
              this.showResult =(this.regionList.length > 0)
              this.regionBP = (this.regionList.length > 0)
          }else if(this.nodeType == "P"){
              this.propertyList = this.propertyList.filter((rgn) => rgn.relationshipId.indexOf(this.searchString) != -1);
              this.isHierarchyNotFound = this.propertyList.length == 0
              this.showResult =(this.propertyList.length > 0)
              this.propertyBP = (this.propertyList.length > 0)
          }
        }catch(err){
            console.log("ERROR=====searchByBPNumber>>>>>"+err.message)
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


    searchByAccountName(){
        let hierDtls = this.hierarchyDtls;
        try{
          if(this.nodeType == "M"){
              if(hierDtls.mngBP){
                  this.mngList = hierDtls.mngBPList.filter((mng) => mng.bpName.toLowerCase().indexOf(this.searchString.toLowerCase()) != -1);
                  this.isHierarchyNotFound = (this.mngList.length == 0)
                  this.showResult = (this.mngList.length > 0)
                  this.mngBP = (this.mngList.length > 0)
              }
              if(hierDtls.regionBP && this.isHierarchyNotFound){
                  this.regionList = hierDtls.regionList.filter((rgn) => rgn.bpName.toLowerCase().indexOf(this.searchString.toLowerCase()) != -1);
                  this.isHierarchyNotFound = (this.regionList.length == 0)
                  this.showResult =(this.regionList.length > 0)
                  this.regionBP = (this.regionList.length > 0)
              }
              if(hierDtls.propertyBP && this.isHierarchyNotFound){
                  this.propertyList = hierDtls.propertyList.filter((prop) => prop.bpName.toLowerCase().indexOf(this.searchString.toLowerCase()) != -1);
                  this.isHierarchyNotFound = (this.propertyList.length == 0)
                  this.showResult =(this.propertyList.length > 0)
                  this.propertyBP = (this.propertyList.length > 0)
              }
          }else if(this.nodeType == "R"){
              this.regionList = this.regionList.filter((rgn) => rgn.bpName.toLowerCase().indexOf(this.searchString.toLowerCase()) != -1);
              this.isHierarchyNotFound = this.regionList.length == 0
          }else if(this.nodeType == "P"){
              this.propertyList = this.propertyList.filter((prop) => prop.bpName.toLowerCase().indexOf(this.searchString.toLowerCase()) != -1);
              this.isHierarchyNotFound = this.propertyList.length == 0
          }
        }catch(err){
            //console.log("ERROR====="+err.message);
            this.isHierarchyNotFound = true;
        }
    }

    searchTaxID(){
      if(this.nodeType == "M"){
          this.mngList = this.mngList.filter((mng) => mng.fedTaxId.indexOf(this.searchString) != -1);
          this.isHierarchyNotFound = this.mngList.length == 0
      }else if(this.nodeType == "R"){
          this.regionList = this.regionList.filter((rgn) => rgn.fedTaxId.indexOf(this.searchString) != -1);
          this.isHierarchyNotFound = this.regionList.length == 0
      }else if(this.nodeType == "P"){
          this.propertyList = this.propertyList.filter((prop) => prop.fedTaxId.indexOf(this.searchString) != -1);
          this.isHierarchyNotFound = this.propertyList.length == 0
      }
    }

    showAll(){

        this.isHierarchyNotFound = false;
        this.showResult = true;
        if(this.nodeType == "R"){
          this.hierarchyDtls.mngBPList.forEach(mng => {
            if(mng.bpNumber == this.selectedMngBPNumber){
                this.regionList = mng.regionList
            }
          })
        }else if(this.nodeType == "P"){
          this.hierarchyDtls.mngBPList.forEach(mng => {
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
        }else{
          let hdtls = this.hierarchyDtls
          if(hdtls.mngBP){this.mngBP = true; this.mngList = hdtls.mngBPList}
          if(hdtls.regionBP){this.regionBP = true; this.regionList = hdtls.regionList}
          if(hdtls.propertyBP){this.propertyBP = true; this.propertyList = hdtls.propertyList;}
        }
    }

    onManagement(mngBPNumber){
        this.selectedMngBPNumber = mngBPNumber
        let obj = this.accountService.onManagement(mngBPNumber,this.mngList)
        if(obj.showNode == "P"){
            this.propertyList = obj.propertyList
        }else{
            this.regionList = obj.regionList
        }
        this.showAndHideNodes(obj.showNode);
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
    }

    onProperty(relationshipId: string){
        this.redirectToCustomersDetailsPage(relationshipId);
    }

    redirectToCustomersDetailsPage(relationshipId: string){
        this.store.dispatch(new selectedPropertyTypes.SaveRelationshipId(relationshipId))
        this.store.dispatch(new selectedPropertyTypes.DeleteSelectedPropertyDetails({}));
        this.router.navigate(['/protected/customer/dashboard.htm']);
    }

    onSearchBySelection(event){
        this.selectionType = event.target.value;
    }

    onSearchStringChange(event){
        this.searchString = event.target.value;
    }

    ngOnInit(): void {
      this.hierarchyDtlsSubs = this.store.select(fromRoot.getLoggedInUserCustomerList).subscribe(hdtls => {
          this.hierarchyDtls = hdtls;
          if(hdtls.mngBP){this.mngBP = true; this.mngList = hdtls.mngBPList}
          if(hdtls.regionBP){this.regionBP = true; this.regionList = hdtls.regionList}
          if(hdtls.propertyBP){this.propertyBP = true; this.propertyList = hdtls.propertyList;}
          this.showResult  = (this.mngBP || this.regionBP || this.propertyBP);
        });
    }

    ngOnDestroy(){
        this.hierarchyDtlsSubs.unsubscribe();
    }

}
