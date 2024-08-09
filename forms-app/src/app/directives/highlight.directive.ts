import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit{
  
  @HostListener('mouseover', ['$event']) mouseOverHandler(event: MouseEvent) {
    console.log('mousseOver', event)
  }
  
  
  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }
  
  ngOnInit(): void {
    
  }
  

  
  
  // ngOnInit(): void {
    // console.log(this.elementRef.nativeElement);
  
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'pink');

    // this.renderer.listen(this.elementRef.nativeElement, 'mouseenter', this.mouseEnterHandler.bind(this));
    // this.renderer.listen(this.elementRef.nativeElement, 'mouseleave', this.mouseLeaveHandler.bind(this));
  // }
  
  // mouseEnterHandler(event: MouseEvent): void {
  //   // console.log(event)
  //   // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'green');
  //   this.renderer.addClass(this.elementRef.nativeElement, 'highlight');
  // }
  // mouseLeaveHandler(event: MouseEvent): void {
  //   // console.log('Mouse leave trugered');
  //   // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'initial');
  //   this.renderer.removeClass(this.elementRef.nativeElement, 'highlight');
  // }

}
