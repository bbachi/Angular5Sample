import { Pipe, PipeTransform } from '@angular/core';


const checkRoles = (securityRole): boolean => {

  let status: boolean = true;
  switch(securityRole) {
    case "I_Agent_EMM" : status = false;
    case 'I_Agent_EMA': status = false;
    case 'I_Agent_OPS_REP': status = false;
    case 'I_Read-Only_IT': status = false;
    case 'E_Broker Associate_BRK_ASC': status = false;
    case 'E_Customer Associate_PS': status = false;
    case 'E_Read-Only_OA': status = false;
    default: status;
  }
  return status;
}

const checkRolesForVUM = (securityRole): boolean => {

  let status: boolean = true;
  switch(securityRole) {
    case 'I_Read-Only_IT': status = false;
    case 'E_Read-Only_OA': status = false;
    default: status;
  }
  return status;
}

@Pipe({name: 'overviewlink'})
export class OverviewLinkPipe implements PipeTransform {
  transform(webSecurityRole: string): boolean {
    return checkRoles(webSecurityRole)
  }
}

@Pipe({name: 'adduserlink'})
export class AddUserLinkPipe implements PipeTransform {
  transform(webSecurityRole: string): boolean {
    if(webSecurityRole == 'I_Admin_OPS_MGR'){
      return false;
    }else{
      return checkRoles(webSecurityRole)
    }
  }
}

@Pipe({name: 'updateuserlink'})
export class UpdateUserLinkPipe implements PipeTransform {
  transform(webSecurityRole: string): boolean {
    return checkRoles(webSecurityRole)
  }
}

@Pipe({name: 'removeuserlink'})
export class RemoveUserLinkPipe implements PipeTransform {
  transform(webSecurityRole: string): boolean {
    return checkRoles(webSecurityRole)
  }
}

@Pipe({name: 'vumlink'})
export class VUMLinkPipe implements PipeTransform {
  transform(webSecurityRole: string): boolean {
    return checkRolesForVUM(webSecurityRole)
  }
}
