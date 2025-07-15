import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { HistoryComponent } from "./about/history/history.component";
import { CorporateInfoComponent } from "./about/corporate-info/corporate-info.component";
import { BusinessComponent } from "./business/business.component";
import { VisaComponent } from "./business/visa/visa.component";
import { ExchangeComponent } from "./business/exchange/exchange.component";
import { RentalComponent } from "./business/rental/rental.component";
import { SitemapComponent } from "./sitemap/sitemap.component";
import { ContactComponent } from "./contact/contact.component";
import { ThankComponent } from "./contact/thank/thank.component";
import { Error404Component } from "./error404/error404.component";
import { BlogComponent } from "./blog/blog.component";
import { TeamsComponent } from "./about/teams/teams.component";
import { TravelAgencyComponent } from "./business/travel-agency/travel-agency.component";
import { RemittanceComponent } from "./business/remittance/remittance.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    data: {
      breadcrumb: "menu.top",
    },
  },
  {
    path: "about",
    data: {
      breadcrumb: "menu.about-us",
    },
    children: [
      // {
      // 	path: '',
      // 	component: AboutComponent,
      // 	pathMatch: 'full'
      // },
      {
        path: "history",
        component: HistoryComponent,
        pathMatch: "full",
        data: {
          breadcrumb: "menu.history",
        },
      },
      {
        path: "outline",
        component: CorporateInfoComponent,
        pathMatch: "full",
        data: {
          breadcrumb: "menu.corperate-info",
        },
      },
      {
        path: "teams",
        component: TeamsComponent,
        pathMatch: "full",
        data: {
          breadcrumb: "menu.operational-team",
        },
      },
    ],
  },
  {
    path: "business",
    data: {
      breadcrumb: "menu.business-field",
    },
    children: [
      {
        path: "",
        component: BusinessComponent,
        pathMatch: "full",
      },
      {
        path: "visa",
        component: VisaComponent,
        pathMatch: "full",
        data: {
          breadcrumb: "menu.visa-wp",
        },
      },
      {
        path: "exchange",
        component: ExchangeComponent,
        pathMatch: "full",
        data: {
          breadcrumb: "menu.current-exchange",
        },
      },
      {
        path: "scooter-rental",
        component: RentalComponent,
        pathMatch: "full",
        data: {
          breadcrumb: "menu.scoter-rental",
        },
      },
      {
        path: "travel-agency",
        component: TravelAgencyComponent,
        pathMatch: "full",
        data: {
          breadcrumb: "menu.travel-agency",
        },
      } /* 
			{
				path: 'remittance',
				component: RemittanceComponent,
				pathMatch: "full",
				data: {
					breadcrumb: 'menu.remittance'
				},
			} */,
    ],
  },
  {
    path: "contact",
    data: {
      breadcrumb: "menu.contact",
    },
    children: [
      {
        path: "",
        component: ContactComponent,
        pathMatch: "full",
      },
      {
        path: "thank",
        component: ThankComponent,
        pathMatch: "full",
        data: {
          breadcrumb: "Thank You",
        },
      },
    ],
  },
  {
    path: "sitemap",
    component: SitemapComponent,
    data: {
      breadcrumb: "menu.site-map",
    },
  },
  /* {
    path: "blog",
    component: BlogComponent,
    data: {
      breadcrumb: "menu.blog",
    },
  }, */
  {
    path: "404",
    component: Error404Component,
    pathMatch: "full",
  },
  {
    path: "**",
    redirectTo: "404",
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: false,
      scrollPositionRestoration: "enabled",
      anchorScrolling: "enabled",
      scrollOffset: [0, 64],
      onSameUrlNavigation: "reload",
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
