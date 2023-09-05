import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { RecommendedComponent } from './recommended/recommended.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ViewProfileComponent,
    RecommendedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
