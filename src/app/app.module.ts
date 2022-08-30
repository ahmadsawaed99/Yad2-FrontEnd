import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { RealstateSearchboxComponent } from './components/realstate-searchbox/realstate-searchbox.component';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { FormsModule } from '@angular/forms';
import { AdvancedSearchBoxComponent } from './components/advanced-search-box/advanced-search-box.component';
import { DatePipe } from '@angular/common';
import { OfferListComponent } from './components/offer-list/offer-list.component';
import { ImagesGalleryComponent } from './components/images-gallery/images-gallery.component';
import { DisplayImagesComponent } from './components/display-images/display-images.component';
import { BigImageComponent } from './components/big-image/big-image.component';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { HttpClientModule } from '@angular/common/http';
import { AdressService } from './services/adress.service';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RealstateSearchboxComponent,
    ClickOutsideDirective,
    AdvancedSearchBoxComponent,
    OfferListComponent,
    ImagesGalleryComponent,
    DisplayImagesComponent,
    BigImageComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxUsefulSwiperModule,
    HttpClientModule

  ],
  providers: [
    DatePipe,
    AdressService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
