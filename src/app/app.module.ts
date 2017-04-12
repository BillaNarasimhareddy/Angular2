import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import{routs}from'./app.router'
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FromsComponent } from './froms/froms.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NavbarComponent,
    FromsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routs
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
