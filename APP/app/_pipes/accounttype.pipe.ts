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
@Pipe({name: 'premisetype'})
export class PremiseTypePipe implements PipeTransform {
  transform(premiseType: string, propertyType: string): string {

      let premiseName: string = '';
      if(propertyType == 'PM'){
          premiseName = 'Vacant Units and Common Areas';
          if(premiseType == '02'){
              premiseName = 'Common Areas';
          }else if(premiseType == '01'){
              premiseName = 'Vacant Units';
          }
      }else{
          premiseName = 'Premises and Common Areas';
          if(premiseType == '02'){
              premiseName = 'Premises';
          }else if(premiseType == '01'){
              premiseName = 'Common Areas';
          }
      }
      return premiseName;
  }
}
