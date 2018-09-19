import { Type } from '@angular/core';
import { ThemeComponent } from './theme.component';

export class ThemeItem {
  constructor(public component: Type<any>, public data: ThemeComponent, public displayName: string) {}
}
