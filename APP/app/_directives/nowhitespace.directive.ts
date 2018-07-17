import { Directive, HostListener, ElementRef, OnInit } from "@angular/core";
import { NOwhiteSpacePipe } from "../_pipes";

@Directive({ selector: "[noWhiteSpaces]" })
export class NoWhiteSpacesDirective implements OnInit {

  private el: HTMLInputElement;
  private noWhiteSpacePipe: NOwhiteSpacePipe;

  constructor(private elementRef: ElementRef){
    this.noWhiteSpacePipe = new NOwhiteSpacePipe();
    this.el = this.elementRef.nativeElement;
  }

  ngOnInit() {
    this.el.value = this.noWhiteSpacePipe.transform(this.el.value);
  }

  @HostListener("focus", ["$event.target.value"])
  onFocus(value) {
    //this.el.value = this.onlyNumbersPipe.parse(value); // opossite of transform
  }

  @HostListener("blur", ["$event.target.value"])
  onBlur(value) {
    this.el.value = this.noWhiteSpacePipe.transform(value);
  }
}
