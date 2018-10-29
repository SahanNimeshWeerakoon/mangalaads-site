import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { SearchParamsComponent } from './search-params/search-params.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CarouselComponent,
    SearchParamsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbCarouselModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
