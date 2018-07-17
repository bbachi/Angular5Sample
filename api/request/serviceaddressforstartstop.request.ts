
import {ESIIDBPNumberDO} from './../model/esiidbpnumberdo';
export class ServiceAddressForStartStopRequest{


        strCompanycode:string;
      	strPortal:string;
      	strLoggedInUserName:string;
        strCustomerType:string;      //BLDR or MFAM
       	strServiceType:string;       //START or STOP
       	strSearchType:string;		 //ADDR or ESID or PENDING (PENDING means manual addition of address and esiid)
       	strServiceArea:string;       //CPE, TNMP, ONCOR, CPL for AEP TX Central, WTU for AEP TX North
        esiidBPDOList: Array<ESIIDBPNumberDO>;       //THIS ESIID LIST IS THE ESIID LIST FROM CCS EXCEPT MANUAL ENTRY FOR BUILDR START SERVICE
       	strStreetNum:string;
       	strStreetName:string;
       	strUnitNumber:string;
       	strCity:string;
       	strZipcode:string;
}
