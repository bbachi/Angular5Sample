import { Directive, HostListener, ElementRef, OnInit } from "@angular/core";
import { OnlyNumbersPipe } from "../_pipes";

@Directive({ selector: "[onlynumbers]" })
export class OnlyNumbersDirective implements OnInit {

  private el: HTMLInputElement;
  private onlyNumbersPipe: OnlyNumbersPipe;

  constructor(private elementRef: ElementRef){
    this.onlyNumbersPipe = new OnlyNumbersPipe();
    this.el = this.elementRef.nativeElement;
  }

  ngOnInit() {
    this.el.value = this.onlyNumbersPipe.transform(this.el.value);
  }

  @HostListener("input", ["$event.target.value"])
  onFocus(value) {
    this.el.value = this.onlyNumbersPipe.transform(value);
    //this.el.value = this.onlyNumbersPipe.parse(value); // opossite of transform
  }

  @HostListener("blur", ["$event.target.value"])
  onBlur(value) {
    this.el.value = this.onlyNumbersPipe.transform(value);
  }
}
