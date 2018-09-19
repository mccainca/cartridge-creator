import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[theme-host]',
})
export class ThemeDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
