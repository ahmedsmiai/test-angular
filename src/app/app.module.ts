import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddVideoComponent } from './add-video/add-video.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { VideoComponent } from './video/video.component';

@NgModule({
  declarations: [AppComponent, AddVideoComponent, NavBarComponent, VideoComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
