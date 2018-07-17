import { Directive, ElementRef, OnInit, Input, EventEmitter, Output, OnDestroy  } from '@angular/core';
import * as moment from 'moment';

declare var jQuery: any;

@Directive({
    selector: '[gmeDatePicker]',
})
export class DatePickerDirective implements OnInit, OnDestroy {

    @Input() defaultDate = '';
    @Input() maxDate: string;
    @Input() minDate: string;
    @Input() serviceType: string;
    @Input() unavailableDates: any;
    @Output() dateChange = new EventEmitter();

    constructor(public el: ElementRef) { }

    ngOnInit() {
        let minDate = this.getMinimumDateBasedOnTime();
        let maxDate = this.getMaximumDateBasedOnServiceType(this.serviceType);
        let serviceType = this.serviceType;
        let unavailableDates = this.unavailableDates;

        jQuery(this.el.nativeElement).datepicker({
          maxDate: maxDate,
          minDate: minDate,
          showOtherMonths: true,
          beforeShowDay: (value) => this.checkHolidaysAndReturnDate(this.serviceType,this.unavailableDates,value,minDate),
          onSelect: (value, el) => {
            let day  = el.selectedDay,mon  = el.selectedMonth,year = el.selectedYear;
            var el = jQuery(el.dpDiv).find('[data-year="'+year+'"][data-month="'+mon+'"]').filter(function() {
                return jQuery(this).find('a').text().trim() == day;
            });
            let isPrioritySelected = el.hasClass('priority');
            let isCurrentDaySelected = (moment(value).format("MM/DD/YYYY") == moment().format("MM/DD/YYYY"));
            this.defaultDate = value;
            this.dateChange.next({date:value,isPrioritySelected,isCurrentDaySelected});
          },
      });
    }

    /*
      Mindate should be later one day if it is past 4:45 PM or it is sunday
     */
    getMinimumDateBasedOnTime(){

        let today = new Date();
        if(today.getDay()==0){
            return moment(new Date()).add(1,'days').toDate();
        }else if((today.getHours()==16 && today.getMinutes() > 45) || (today.getHours() > 16)){
            return moment(new Date()).add(1,'days').toDate();
        }
        return today;
    }

    getMaximumDateBasedOnServiceType(serviceType:string){
       if(serviceType == "STOP"){
          return moment().add(62, 'days').toDate()
       }else{
         return moment().add(60, 'days').toDate()
       }
    }

    checkHolidaysAndReturnDate(serviceType: string, unavailableDates, date, minDate){
        try{
          if(serviceType == 'START'){
              return this.noWeekendsOrHolidaysForStart(date,unavailableDates,minDate);
          }else{
              return this.noWeekendsOrHolidaysForStop(date,minDate);
          }
        }catch(err){
            //console.log("ERROR=====checkHolidaysAndReturnDate====>"+err.message);
        }
    }


    noWeekendsOrHolidaysForStart(date, unavailableDates,minDate){
        //var noWeekend = jQuery.datepicker.noWeekends(date);
        if (date.getDay() != 0) {
            let dateStr = moment(date).format("MM/DD/YYYY");
            let dateAry = this.getNextTwoDays(minDate);
            if(dateStr == dateAry[0] || dateStr == dateAry[1]){
                return [true,"priority"];
            }else{
                let holidayFound = false;
                if(undefined != unavailableDates && unavailableDates.length > 0){
                    unavailableDates.forEach(holiday => {
                        if(date.getDay() != 6 && dateStr == holiday){
                            holidayFound = true;
                        }
                    })
                }
                return holidayFound?[false,""]:[true,"standard"];
            }
        } else {
           return [false,""];
        }
    }

    noWeekendsOrHolidaysForStop(date,minDate){
        //var noWeekend = jQuery.datepicker.noWeekends(date);
        if (date.getDay() != 0) {
            let dateStr = moment(date).format("MM/DD/YYYY");
            let dateAry = this.getNextTwoDays(minDate);
            if(dateStr == dateAry[0] || dateStr == dateAry[1]){
                return [false,""];
            }else{
                return [true,"standard"];
            }
        } else {
           return [false,""];
        }
    }

    getNextTwoDays(minDate){
        if(minDate.getDay() == 0){ //sunday
           return [moment(minDate).add(1,'days').format("MM/DD/YYYY"), moment(minDate).add(2,'days').format("MM/DD/YYYY")]
        }else if(minDate.getDay() == 6){ //saturday
           return [moment(minDate).format("MM/DD/YYYY"), moment(minDate).add(2,'days').format("MM/DD/YYYY")]
        }else{ //all other days
           return [moment(minDate).format("MM/DD/YYYY"), moment(minDate).add(1,'days').format("MM/DD/YYYY")]
        }


    }

    /* We should cleanup the resources claimed by the jQuery UI DatePicker to avoid memory leaks. */
    ngOnDestroy() {
       jQuery(this.el.nativeElement).datepicker('destroy');
    }
}
