import { Injectable }           from '@angular/core';

import { AmpexComponent }   from './ampex/ampex.component';
import { WbComponent }   from './wb/wb.component';
import { TypewriterComponent }   from './typewriter/typewriter.component';


import { ThemeItem }               from './theme-item';

@Injectable()
export class ThemeService {
  getThemes() {
    return [
      new ThemeItem(AmpexComponent, null,"Ampex"),
      new ThemeItem(WbComponent, null,"WB"),
      new ThemeItem(TypewriterComponent, null,"TypeWriter"),
    ];
  }
}
