import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MainScreenModule } from './main-screen/main-screen.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainScreenModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
