import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ThemeService } from './services/theme.service';
import { HeaderComponent } from './views/header/header.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    MatSlideToggleModule
  ],
  providers: [ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
