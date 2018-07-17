import { Property } from './bmfss.session';

export class HierarchyDetails {

    mngBPList: ManagementBP[];
    regionList: Region[] = new Array<any>();
    propertyList: Property[] = new Array<Property>();
    mngBP: boolean = false;
    regionBP: boolean = false;
    propertyBP: boolean = false;
    onlyProperty: boolean = false;
    isBroker: boolean;
    found:boolean = false;
}


export class ManagementBP {

    bpNumber: string;
    relationshipId: string;
    bpName: string;
    regionList: Region[] = new Array<Region>();
    strBPAddress: string;
    brokerBPNumber: string;;
    fedTaxId: string;
    newlyAddedBP: string;
    bokerAssigned: boolean = false;
}

export class Region {

    bpNumber: string;
    relationshipId: string;
    bpName: string;
    strBPAddress: string;
    propertyList: Property[] = new Array<Property>();
    masterBP: string;
    brokerBPNumber: string;
    fedTaxId: string;
    newlyAddedBP: boolean;
    bokerAssigned: boolean = false;
}



export class Address {

    streetName: string;
    streetNum: string;
    state: string;
    city: string;
    zipcode: string;
    POBox: string;
}
