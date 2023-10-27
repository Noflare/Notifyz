import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import {NgOptimizedImage} from "@angular/common";
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ShopComponent } from './shop/shop.component';

@NgModule({
    imports: [
        BrowserModule,
        NgOptimizedImage,
        AppRoutingModule,
    ],
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    ShopComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule { }
