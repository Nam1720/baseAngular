import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appClickOutSide]'
})
export class ClickOutSideDirective {
  
  constructor(private elementRef: ElementRef) {}
  
  @Output('clickOutside') clickOutside: EventEmitter<any> = new EventEmitter();
  
  @HostListener('document:click', ['$event.target']) onMouseEnter(targetElement: HTMLHtmlElement) {
    
    const clickedInside = this.elementRef.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.clickOutside.emit(null);
    }
  }
}
