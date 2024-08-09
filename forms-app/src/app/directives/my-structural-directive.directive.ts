import { Directive, Input, OnChanges, OnInit, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMyStructuralDirective]',
  exportAs: 'appMyStructuralDirective'
})
export class MyStructuralDirectiveDirective implements OnInit, OnChanges {
  
  @Input() appMyStructuralDirective: boolean = false;
  
  
  constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) { }
  
  ngOnInit(): void {
    console.log(this.appMyStructuralDirective);
    console.log(this.templateRef);
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log('onChanges', this.appMyStructuralDirective);
    
    if (this.appMyStructuralDirective) {
        this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  }
 

}
