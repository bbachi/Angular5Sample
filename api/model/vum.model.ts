
export class DailyReport {

    date: string;
    address: string;
    esiid: string;
    kwh: string;
    threshold: string;
    consecuteDays: string;
    unitType: string;
}

class ESIID {

    esiid: string;
    streetNum: string;
    streetName: string;
    unitNumber: string;
    city: string;
    state: string;
    zipcode: string;
    serviceArea: string;
    meterType: string;
    selected: boolean;
    selectedStartDate: string;
    priorityMoveInEnabled: boolean;
    priorityDateSelected: boolean;
    bpNumber: string;
    active: boolean;
    searchType: string;
    pending: boolean;
    marketHold: boolean;
    priorityMoveInFee: boolean;
    unAvailableDates: string;
    unitID: string;
    effectiveDate: string;
    moveInDate: string;
    moveOutDate: string;
    taxStatus: string;
    depositAmount: string;
    startPendingStatusFromCCS: boolean;
    stopPendingStatusFromCCS: boolean;

}

export class Unit extends ESIID {

    unitType: string;    //only for VUM
    unitThreshold: string; //only for VUM
    vumEsiidAttrUpd: string; //only for VUM
}

export class VUMEmail {

    email1: string;
    email2: string;
    vueEmailStatus: boolean;
}

export class VUMUnitAlertSetup {

    unitList: Unit[];
    vumEmail: VUMEmail;
}
