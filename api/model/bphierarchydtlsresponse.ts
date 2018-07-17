export class BPHierarchyDtlsResponse{
    
        hierarchyDtlsList= new Array<HierarchyDtlsDO>();
        strRelationshipId:string;
        strMasterBP:string;  
        strErrorCode: number;
        strErrorMessage: string;
        strCCSCode:string;
        strCCSMessage:string;
        strMessage:string;
        dataAvilableForInput:boolean;
}

export class HierarchyDtlsDO {
    
        bpNumber:string;
        bpName:string;
        parentBP:string;
        heirarchyLevel:string;
        bpDescription:string;
        primaryContactTitle:string;
        primaryContactFirstName:string;
        primaryContactLastName:string;
        primaryContactPhone:string;
        primaryContactExtn:string;
        primaryContactAltPhone:string;
        primaryContactFax:string;
        primaryContactEmailAddress:string;
        billingtPhone:string;
        billingtPhoneExtn:string;
        validFromDate:string;
        validToDate:string;
        taxStatus:string;
        fedTaxId:string;
        language:string;
        mailingAddress:AddressDO;
        billingAddress:AddressDO;
        bmfPartnerId:string;
}

export class AddressDO {    
        
        unitNumber:string;
        streetNumber:string;
        streetName:string;
        city:string;
        state:string;
        zipCode:string;
        fullZipcode:string;
        poBox:string;
        suiteNumber:string;
        
}      