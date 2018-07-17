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
@Pipe({name: 'usercategory'})
export class UserCategoryPipe implements PipeTransform {
  transform(securityRole: string): string {
    if(!securityRole) return securityRole;
    let firstLetter = securityRole.substring(0,1);
    return firstLetter == 'I'?'Internal':'External'
  }
}


@Pipe({name: 'securityrole'})
export class UserSecurityRolePipe implements PipeTransform {
  transform(securityRole: string): string {
    if(!securityRole) return securityRole;
    switch(securityRole) {
      case "I_Admin_OPS_MGR" : return 'Admin';
      case 'I_Agent_EMA': return "Agent"
      case 'I_Agent_EMM': return "Agent"
      case 'E_Broker_BRK_ADM': return "Broker"
      case 'E_Customer Admin_PO': return "Customer Admin"
      case 'E_Customer Admin_PM': return "Customer Admin"
      case 'I_Read-Only_IT': return "Read-Only"
      case 'I_Agent_OPS_REP': return "Agent"
      case 'E_Read-Only_OA': return "External Read-Only"
      case 'E_Customer Associate_PS': return "Customer Associate"
      case 'E_Broker Associate_BRK_ASC': return "Broker Associate"
      default: securityRole;
    }
  }
}

/*
@Pipe({name: 'usertype'})
export class UserTypePipe implements PipeTransform {
  transform(value: string): string {
    let userType = "NA"
    try{
      if(undefined != value && value.trim().length > 0){
         if(value == 'I_Agent_EMM') return 'Sales Executive';
         if(value == 'I_Agent_EMA') return 'Account Executive';
         if(value == 'E_Customer Admin_PO') return 'Property Owner';
         if(value == 'E_Customer Admin_PM') return 'Property Manager';
         if(value == 'E_Broker I_Agent_OPS_REP') return 'Operations Representative';
         return "NA";
      }
    }catch(err){
        return 'NA'
    }
    return userType;
  }
}
*/

@Pipe({name: 'associatetype'})
export class UserAssociatePipe implements PipeTransform {
  transform(securityRole: string): string {
    //console.log("securityRole -====" +securityRole);
    if(!securityRole) return securityRole;
    switch(securityRole) {
      case 'E_Broker_BRK_ADM': return "Broker Associate"
      case 'E_Customer Admin_PO': return "Customer Associate"
      case 'E_Customer Admin_PM': return "Customer Associate"
      default: securityRole;
    }
  }
}
