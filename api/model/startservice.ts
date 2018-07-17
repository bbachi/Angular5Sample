
export class MFPropertyAddress {

    streetAddress: string;
    city: string;
    zipcode: string;
    state: string;
    selected: boolean;
    unitList: Unit[];
}

export class ESIID {

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

}
