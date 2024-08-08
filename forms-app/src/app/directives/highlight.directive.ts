import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit{

  constructor(private elementRef: ElementRef) { }
  
  ngOnInit(): void {
    console.log(this.elementRef.nativeElement);
    
    this.elementRef.nativeElement.style.background = 'orange';
  
  }

}
