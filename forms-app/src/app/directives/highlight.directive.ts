import { Directive, ElementRef, HostListener, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { MyVoid } from '../types/my-void';




@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit, OnDestroy{
  
  @HostListener('mouseover', ['$event']) mouseOverHandler(event: MouseEvent) {
    // console.log('mousseOver', event)
  }
  
  unsubFromEventsArray: MyVoid[] = [];
  
  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }
  
  ngOnInit(): void {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'pink');

    //* inmouseEnterEvent and mouseExitEvent we store the result of renderer.listen, which is a function 'removeEventListener'
    //* that's why we don't need to implement eventFn()
    const mouseEnterEvent = this.renderer.listen(this.elementRef.nativeElement, 'mouseenter', this.mouseEnterHandler.bind(this));
    const mouseExitEvent = this.renderer.listen(this.elementRef.nativeElement, 'mouseleave', this.mouseLeaveHandler.bind(this));
    
    this.unsubFromEventsArray.push(mouseEnterEvent);
    this.unsubFromEventsArray.push(mouseExitEvent);
  }
  
  mouseEnterHandler(event: MouseEvent): void {
    // console.log(event)
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'green');
    this.renderer.addClass(this.elementRef.nativeElement, 'highlight');
  }
  mouseLeaveHandler(event: MouseEvent): void {
    // console.log('Mouse leave trugered');
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'initial');
    this.renderer.removeClass(this.elementRef.nativeElement, 'highlight');
  }

  
  ngOnDestroy(): void {
    // console.log('On destroy invocked');
    this.unsubFromEventsArray.forEach(eventFn => eventFn());
  }
}
