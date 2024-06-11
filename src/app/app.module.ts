import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module'; // This is the routing module you generated

import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { HeroesComponent } from './heroes/heroes.component'; // Corrected import path

@NgModule({
  declarations: [
    DashboardComponent, // Declare DashboardComponent
    HeroDetailComponent, // Declare HeroDetailComponent
    MessagesComponent, // Declare MessagesComponent
    HeroesComponent // Declare HeroesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule // Import the AppRoutingModule here
  ],
  exports: [
    MessagesComponent
  ],
  providers: []
})
export class AppModule { }
