import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appStructuralTest]'
})
export class StructuralTestDirective {

  constructor( private templateRef: TemplateRef<any>,
               private viewContainer: ViewContainerRef) { }
  @Input() set appStructuralTest(condition: boolean) {
  if (condition) {
    this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
    this.viewContainer.clear();
    }
  }

}
