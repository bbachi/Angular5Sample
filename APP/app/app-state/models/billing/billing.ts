export interface PreviousBill {

    invoiceDate: string;
    startBillPeriod: string;
    endBillPeriod: string;
    billType: string;
    dueDate: string;
    invoiceAmount: string;
    invoiceNumber: string;
}

export interface PaymentHistory {

    receivedBy: string;
    accountNumber: string;
    paymentDescription: string;
    paymentAmount: string;
    postingDate: string;
    status: string;
    scheduledCancelDate: string;
  }
