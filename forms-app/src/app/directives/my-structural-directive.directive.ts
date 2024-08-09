import { Directive, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMyStructuralDirective]',
  exportAs: 'appMyStructuralDirective'
})
export class MyStructuralDirectiveDirective implements OnChanges {
  
  @Input() appMyStructuralDirective: boolean = false;
  
  
  constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) { }

  
  ngOnChanges(changes: SimpleChanges): void {
    console.log('onChanges', this.appMyStructuralDirective);
    
    if (this.appMyStructuralDirective) {
        this.viewContainerRef.createEmbeddedView(this.templateRef, {myCustomValue: 'TEST TEST TEST'});
    } else {
      this.viewContainerRef.clear();
    }
  }
 

}
