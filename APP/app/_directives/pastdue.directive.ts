import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appPastDue]'
})
export class PastDueDirective implements OnInit {

    constructor(private el: ElementRef, private renderer: Renderer2) {}

    @Input('appPastDue') pastDue: string;

    ngOnInit(){
        if(parseFloat(this.pastDue) > 0){
            this.renderer.setStyle(this.el.nativeElement, "color","red");
        }
    }
}
