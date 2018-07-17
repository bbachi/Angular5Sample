export class VacancyReport {

    serviceAddress: string;
    unit: string;
    changeDate: string;
    daysVacant: string;
    stateOfUnit: string;
}

export class RollReport {

    esiid: string;
    serviceAddress: string;
    unit: string;
    transactionDate: string;
    transactionType: string;
}

export class  VacancyReportVO {

			esiid:string;
			relationshipId:string;
			propertyName:string;
			streetNumber:string;
			streetName:string;
			premiseUnitNbr:string;
			city:string;
			state:string;
			zipCode:string;
			changeDate:string;
			daysVacant:string;
			stateOfUnit:string;
			contractNbr:string;
			companyCd:string;
			serviceAddress:string;
}

export class RollInReportVO {
	esiid:string;
	relationshipId:string;
	propertyName:string;
	streetNumber:string;
	streetName:string;
	premiseUnitNbr:string;
	city:string;
	state:string;
	zipCode:string;
	busPartner:string;
	contractAcct:string;
	rollinDate:string;
	companyCd:string;
	serviceAddress:string;
}

export class RollOutReportVO {
	esiid:string;
	relationshipId:string;
	propertyName:string;
	streetNumber:string;
	streetName:string;
	premiseUnitNbr:string;
	city:string;
	state:string;
	zipCode:string;
	busPartner:string;
	contractAcct:string;
	rolloutDate:string;
	companyCd:string;
	serviceAddress:string;
}
