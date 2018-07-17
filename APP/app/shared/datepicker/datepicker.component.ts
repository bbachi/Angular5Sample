import { ViewChild, ElementRef, AfterViewInit, Component, ViewEncapsulation,Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { environment } from '../../../environments/environment';
import * as moment from 'moment'

declare var jQuery: any;

@Component({
  selector: 'gme-datepicker',
  template: `<input #input type="text">`,
  styleUrls: ['./datepicker.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DatePickerComponent implements AfterViewInit, OnChanges {

    @Input() defaultDate = '';
    @Input() maxDate: string;
    @Input() minDate: string;
    @Output() dateChange = new EventEmitter();

    /* Billing dates */
    @Input() isBilling: boolean;
    @Input() dueDate: string;
    /* Billing dates */
    imageUrl: string;

    @ViewChild('input') input: ElementRef;

    constructor(){
        let imgPath = '/images/calendarIcon.png';
        this.imageUrl = environment.contextRoot+imgPath;
    }

    ngOnChanges(changes: SimpleChanges){

        if(changes['defaultDate']){
            jQuery(this.input.nativeElement)
            .datepicker('setDate', this.defaultDate)
        }
    }

    ngAfterViewInit() {
       this.input.nativeElement.className = 'marginrgt'
       jQuery(this.input.nativeElement).datepicker({
          showOn: 'both',
          buttonImage: this.imageUrl,
          buttonText: 'Show Date',
          buttonImageOnly: true,
          maxDate: this.maxDate,
          minDate: this.minDate,
          beforeShowDay: (value) => this.checkForBillingDates(value),
          onSelect: (value) => {
            this.defaultDate = value;
            this.dateChange.next(value);
          }
        })
        .datepicker('setDate', this.defaultDate);
    }

    /* We should cleanup the resources claimed by the jQuery UI DatePicker to avoid memory leaks. */
    ngOnDestroy() {
       jQuery(this.input.nativeElement).datepicker('destroy');
    }

    checkForBillingDates(date: Date){
        try{
            let bgCls = "";
            if(this.isBilling){
                if(moment(date).format("MM/DD/YYYY") == moment().format("MM/DD/YYYY")){
                    bgCls = "current";
                }
                if(moment(date).format("MM/DD/YYYY") == moment(this.dueDate).format("MM/DD/YYYY")){
                    bgCls = "duedate";
                }
                return [true,bgCls];
            }else{
                return [true,""];
            }
        }catch(err){
            //console.log("ERROR=====checkHolidaysAndReturnDate====>"+err.message);
        }
    }
}
