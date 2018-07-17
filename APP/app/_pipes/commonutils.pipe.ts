import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
@Pipe({name: 'notprovided'})
export class NotProvidedPipe implements PipeTransform {
  transform(value: string): string {
    try{
      if(undefined != value && value.trim().length > 0){
        return value;
      }else{
        return 'Not Provided'
      }
    }catch(err){
        return 'Not Provided'
    }
  }
}

@Pipe({name: 'formatphone'})
export class PhoneFormatPipe implements PipeTransform {
  transform(value: string): string {
    let phone = "Not Provided"
    try{
      if(undefined != value && value.trim().length > 0){
        phone = value.replace(/-/g,'');
        if('' != phone && undefined != phone && 'Not Provided' != phone){
            return phone.substring(0,3)+"-"+phone.substring(3,6)+"-"+phone.substring(6)
        }
      }
      return phone;
    }catch(err){
        return 'Not Provided'
    }
  }
}

//ext 7777
@Pipe({name: 'extn'})
export class PhoneExtnPipe implements PipeTransform {
  transform(value: string): string {
    let extn = ""
    try{
      if(undefined != value && value.trim().length > 0){
         extn = "ext "+value;
      }
    }catch(err){
        return 'Not Provided'
    }
    return extn;
  }
}

//onlynumbers
@Pipe({name: 'onlynumbers'})
export class OnlyNumbersPipe implements PipeTransform {

  transform(value: string): string {
    let onlyNumbersPattern = '^(0|[1-9][0-9]*)$';
    var pattern = new RegExp(onlyNumbersPattern);
    return pattern.test(value)?value:"";
  }
}

//noWhitespace
@Pipe({name: 'nowhitespace'})
export class NOwhiteSpacePipe implements PipeTransform {

  transform(value: string): string {
    return value.replace(/ /g,'');
  }
}

//ext 7777
@Pipe({name: 'phoneformataddextn'})
export class PhoneFormatAddExtnPipe implements PipeTransform {
  transform(value: string, args: string): string {
    let extn = ""
    let phone = "Not Provided"
    try{

      if(undefined != value && value.trim().length > 0){
        phone = value.replace(/-/g,'');
        if('' != phone && undefined != phone && 'Not Provided' != phone){
            phone= phone.substring(0,3)+"-"+phone.substring(3,6)+"-"+phone.substring(6)
          if(undefined != args && args.trim().length > 0){
               extn = "ext "+args;            }

            return phone +" "+extn
        }
      }

    }catch(err){
        return 'Not Provided'
    }
    return phone;
  }
}

//ext 7777
@Pipe({name: 'phformatplaceholder'})
export class PhoneFormatPlaceHolderPipe implements PipeTransform {
  transform(value: string): string {
    let formatVal = ""
    try{
      if(undefined != value){
        value = value.replace(/-/g,'').replace('(','').replace(')','').replace(' ','');
        if(undefined != value && value.trim().length > 0){
           formatVal = "("+value.substring(0,3)+") "+value.substring(3,6)+"-"+value.substring(6);
        }
      }
    }catch(err){
        //console.log(err.message)
    }
    return formatVal;
  }
}

@Pipe({name: 'usertype'})
export class UserTypePipe implements PipeTransform {
  transform(value: string): string {
    let userType = "NA"
    try{
      if(undefined != value && value.trim().length > 0) {
        if(value == 'I_Agent_EMM') return 'Sales Executive';
        if(value == 'I_Agent_EMA') return 'Account Executive';
        if(value == 'E_Customer Admin_PO') return 'Property Owner';
        if(value == 'E_Customer Admin_PM') return 'Property Manager';
        if(value == 'I_Agent_OPS_REP') return 'Operations Representative';
        if(value == 'E_Broker Associate_BRK_ASC') return 'Broker Asscoiate';
        if(value == 'E_Customer Associate_PS') return 'Customer Asscoiate';
        return "NA";
      }
    }catch(err){
        return 'NA'
    }
    return userType;
  }
}


//CA #123456789
@Pipe({name: 'formatca'})
export class FormatContractAccountPipe implements PipeTransform {
  transform(value: string): string {
    return undefined != value?"CA #"+value:"";
  }
}

//CA #123456789
@Pipe({name: 'twodecimal'})
export class TwoDecimalPipe implements PipeTransform {
  transform(value: string): string {
    let decimalVal = value.split(".");
    if(parseFloat(decimalVal[1]) == 1){
        return value+"0";
    }
    return value;
  }
}

//CA #123456789
@Pipe({name: 'maskbank'})
export class MaskBankAccountPipe implements PipeTransform {
  transform(value: string): string {
    if(undefined != value){
        let bankAry = value.split("-");
        if(undefined != bankAry && bankAry.length > 0){
            return "********-"+bankAry[1];
        }
    }
    return value;
  }
}

@Pipe({name: 'stripleadingzero'})
export class StripLeadingZeroPipe implements PipeTransform {
  transform(value: string): string {
    if(undefined != value){
        return parseInt(value, 10).toString();
    }
    return value;
  }
}
