import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import ngx-translate and the http loader
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { HistoryComponent } from './about/history/history.component';
import { AboutHeaderComponent } from './about/about-header/about-header.component';
import { FounderComponent } from './about/founder/founder.component';
import { PhilosophyComponent } from './about/philosophy/philosophy.component';
import { CorporateInfoComponent } from './about/corporate-info/corporate-info.component';
import { VisaComponent } from './business/visa/visa.component';
import { BusinessHeaderComponent } from './business/business-header/business-header.component';
import { ExchangeComponent } from './business/exchange/exchange.component';
import { ExchangeItemComponent } from './business/exchange/exchange-item/exchange-item.component';
import { SitemapComponent } from './sitemap/sitemap.component';
import { EmsComponent } from './business/ems/ems.component';
import { EmsItemComponent } from './business/ems/ems-item/ems-item.component';
import { ProductInfoComponent } from './business-field/product-info/product-info.component';
import { NewbusinessComponent } from './business-field/newbusiness/newbusiness.component';
import { ItemComponent } from './business-field/product-info/item/item.component';
import { MapComponent } from './about/corporate-info/map/map.component';
import { BusinessComponent } from './business/business.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    HistoryComponent,
    AboutHeaderComponent,
    FounderComponent,
    PhilosophyComponent,
    CorporateInfoComponent,
    VisaComponent,
    BusinessHeaderComponent,
    ExchangeComponent,
    ExchangeItemComponent,
    SitemapComponent,
    EmsComponent,
    EmsItemComponent,
    ProductInfoComponent,
    NewbusinessComponent,
    ItemComponent,
    MapComponent,
    BusinessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}