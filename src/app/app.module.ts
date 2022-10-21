import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { ViewemployessComponent } from './viewemployess/viewemployess.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddemployeeComponent,
    ViewemployessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
