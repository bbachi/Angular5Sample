import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
    selector: 'gme-image-loader',
    template: `<img src={{imageUrl}} alt={{altName}}/>`
    //styleUrls: ['./confirm.component.css']
})

export class ImageLoaderComponent implements OnInit {

    @Input() imageUrlIn: string;
    @Input() altName: string;
    imageUrl: string;

    ngOnInit(){
      let defaultContextRoot = "/gmeSSApp"
      if(undefined != environment.contextRoot && environment.contextRoot != ""){
          this.imageUrl = environment.contextRoot+this.imageUrlIn;
      }else{
          this.imageUrl = defaultContextRoot+this.imageUrlIn;
      }
    }

}
