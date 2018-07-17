import { Component, Input, Output, OnInit } from '@angular/core';

@Component({
    selector:'field-name',
    template: `
              <div class="infoRow">
                <div class="infoColumn">{{name}}:</div>
                <div class="infoColumn">{{value}}</div>
              </div>`,
  /*  styles: [`
          div{
            margin-bottom: 10px;
          }
      `] */
})
export class FieldNameComponent {

    @Input() name: any;
    @Input() value: any;

}
