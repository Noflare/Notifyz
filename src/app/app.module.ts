import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import {NgOptimizedImage} from "@angular/common";
import { HomeComponent } from './home/home.component';

@NgModule({
    imports: [
        BrowserModule,
        NgOptimizedImage,
    ],
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule { }
