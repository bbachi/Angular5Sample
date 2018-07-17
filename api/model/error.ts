
export class Error{

    constructor(errorCode:number, errorMessage:string){
        this.errorCode = errorCode;
        this.errorMessage = errorMessage;
    }
    
        errorCode: number;
        errorMessage: string;
    }
    
    export class ServiceError extends Error {
        
    
    }