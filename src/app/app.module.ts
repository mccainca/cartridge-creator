import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WbComponent } from './theme/wb/wb.component';
import { AmpexComponent } from './theme/ampex/ampex.component';
import { TypewriterComponent } from './theme/typewriter/typewriter.component';
import { ThemeDirective } from './theme/theme.directive';
import { CartCreatorComponent } from './cart-creator/cart-creator.component';
import { RoutingModule } from './routing/routing.module';
import { ThemeService } from './theme/theme.service';

import {MatStepperModule} from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatDividerModule} from '@angular/material/divider';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    WbComponent,
    AmpexComponent,
    TypewriterComponent,
    ThemeDirective,
    CartCreatorComponent,
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatExpansionModule,
    MatGridListModule,
    FlexLayoutModule,
    MatDividerModule,
    MatTabsModule,
  ],
  providers: [ThemeService],
  bootstrap: [AppComponent],
  entryComponents: [
    WbComponent,
    AmpexComponent,
    TypewriterComponent,
 ],
})
export class AppModule { }
