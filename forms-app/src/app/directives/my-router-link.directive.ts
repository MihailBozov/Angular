import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[appMyRouterLink]'
})
export class MyRouterLinkDirective implements OnInit {
  
  @Input('appMyRouterLink') appRouterLink: string = ''; 
  
  
  constructor( private elementRef: ElementRef,private renderer: Renderer2 , private router: Router ) { }
  
  ngOnInit( ): void {
    this.renderer.listen(this.elementRef.nativeElement, 'click', this.clickHandler.bind(this))
  }
  
  clickHandler(event: MouseEvent) { 
    console.log('click', this.appRouterLink, 'click');
    this.router.navigate([this.appRouterLink])
  } 

}
