import { Directive, OnDestroy, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[gmeToolTip]'
})
export class ToolTipDirective implements OnDestroy {

    @Input() tooltipTitle: string = '';

    @HostListener('mouseenter')
    onMouseEnter(): void {
        //console.log("mouse entered:::")
    }

    @HostListener('mouseleave')
    onMouseLeave(): void {
      //console.log("mouse leave:::")
    }

    ngOnDestroy(): void {
      // hide tooltip
    }

}
