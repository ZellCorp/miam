import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgClass } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpModule } from '@angular/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HeaderComponent } from './header/header.component';
import { AppComponent } from './app.component';
import { NavBarComponent } from './navbar/navbar.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { RestaurantService } from './restaurant.service';
import { appRouterModule } from "./app-routes";
import { FooterComponent } from './footer/footer.component';
import { RestaurantComponent } from './restaurant-list/restaurant/restaurant.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    RestaurantListComponent,
    FooterComponent,
    RestaurantComponent,
    MainComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    appRouterModule,
    HttpModule
  ],
  providers: [RestaurantService],
  bootstrap: [AppComponent, NavBarComponent]
})
export class AppModule { }
