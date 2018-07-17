export interface PaymentHistory {

    receivedBy: string;
    accountNumber: string;
    paymentDescription: string;
    paymentAmount: string;
    postingDate: string;
    status: string;
    scheduledCancelDate: string;
}

export class Payment {
    type: string;  //C - collective, I - Individual
    collective: CollectiveInfo;
    Individual: IndividualInfo;
    bank: any;
}

export class CollectiveInfo {
    caNumber: string;
    dueDate: string;
    currentBalance: string;
    pastDue: string;
    invoiceNumber: string;
    paymentAmount: string;
    paymentDate: string;
    bpNumber: string;
}

export class IndividualInfo {

}
