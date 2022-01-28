import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { GridComponent } from './grid/grid.component';
import {MatBadgeModule} from '@angular/material/badge';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    GridComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatBadgeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
