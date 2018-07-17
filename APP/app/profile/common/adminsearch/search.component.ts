import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'admin-user-searchby',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})

export class SearchUsersByComponent implements OnInit {

    @Output() onSearchClick = new EventEmitter<any>();
    searchType: string = "NA:ALL";
    searchVal: string;
    isFormInValid: boolean = null;

    constructor(private router: Router) {}

    onSearch(){
        if(this.searchVal == undefined || '' == this.searchVal){
            this.isFormInValid = true;
        }else{
            this.isFormInValid = false;
            var inData = {searchString: this.searchVal, searchType:"LN",userCategory:this.searchType}
            this.onSearchClick.emit(inData);
        }
    }

    onUserTypeChange(val){
        this.searchType = val;
    }

    ngOnInit() {
    }

}
