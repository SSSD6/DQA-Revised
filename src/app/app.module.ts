import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { AdminModule } from './admin/admin.module';
import { RouterModule, Routes } from '@angular/router';
import {AuthenticationModule} from './authentication/authentication.module';

@NgModule({
  declarations: [
    AppComponent, 
    LandingComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    AuthenticationModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
