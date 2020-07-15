import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import ngx-translate and the http loader
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BreadcrumbModule } from 'xng-breadcrumb';

import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { AboutHeaderComponent } from './about/about-header/about-header.component';
import { HistoryComponent } from './about/history/history.component';
import { CorporateInfoComponent } from './about/corporate-info/corporate-info.component';
import { BusinessComponent } from './business/business.component';
import { BusinessHeaderComponent } from './business/business-header/business-header.component';
import { VisaComponent } from './business/visa/visa.component';
import { ExchangeComponent } from './business/exchange/exchange.component';
import { SitemapComponent } from './sitemap/sitemap.component';
import { RentalComponent } from './business/rental/rental.component';
import { ContactComponent } from './contact/contact.component';
import { ThankComponent } from './contact/thank/thank.component';
import { Error404Component } from './error404/error404.component';
import { BlogComponent } from './blog/blog.component';
import { TeamsComponent } from './about/teams/teams.component';
import { TravelAgencyComponent } from './business/travel-agency/travel-agency.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    HistoryComponent,
    AboutHeaderComponent,
    CorporateInfoComponent,
    VisaComponent,
    BusinessHeaderComponent,
    ExchangeComponent,
    SitemapComponent,
    BusinessComponent,
    RentalComponent,
    ContactComponent,
    Error404Component,
    BlogComponent,
    ContactComponent,
    ThankComponent,
    TeamsComponent,
    TravelAgencyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BreadcrumbModule,
    FormsModule,
    ReactiveFormsModule,
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