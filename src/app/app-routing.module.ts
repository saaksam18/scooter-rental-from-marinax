import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HistoryComponent } from './about/history/history.component';
import { FounderComponent } from './about/founder/founder.component';
import { PhilosophyComponent } from './about/philosophy/philosophy.component';
import { CorporateInfoComponent } from './about/corporate-info/corporate-info.component';
import { MapComponent } from './about/corporate-info/map/map.component';
import { BusinessComponent } from './business/business.component';
import { VisaComponent } from './business/visa/visa.component';
import { ExchangeComponent } from './business/exchange/exchange.component';
import { ExchangeItemComponent } from './business/exchange/exchange-item/exchange-item.component';
import { EmsComponent } from './business/ems/ems.component';
import { EmsItemComponent } from './business/ems/ems-item/ems-item.component';
import { ProductInfoComponent } from './business/product-info/product-info.component';
import { NewbusinessComponent } from './business/newbusiness/newbusiness.component';
import { RentalComponent } from './business/rental/rental.component';
import { ItemComponent } from './business/product-info/item/item.component';
import { SitemapComponent } from './sitemap/sitemap.component';
import { ContactComponent } from './contact/contact.component';
import { ThankComponent } from './contact/thank/thank.component';
import { Error404Component } from './error404/error404.component';
import { BlogComponent } from './blog/blog.component';
import { TeamsComponent } from './about/teams/teams.component';
import { TravelAgencyComponent } from './business/travel-agency/travel-agency.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
		data: {
			breadcrumb: 'menu.top'
		},
	},
	{
		path: 'about',
		data: {
			breadcrumb: 'menu.about-us'
		},
		children: [
			{ 
				path: '',
				component: AboutComponent,
				pathMatch: 'full'
			},
			{ 
				path: 'history',
				component: HistoryComponent,
				pathMatch: 'full',
				data: {
					breadcrumb: 'menu.history'
				},
			},
			{
				path: 'founder',
				component: FounderComponent,
				pathMatch: 'full',
				data: {
					breadcrumb: 'menu.founder-story'
				},
			},
			{
				path: 'philosophy',
				component: PhilosophyComponent,
				pathMatch: 'full',
				data: {
					breadcrumb: 'menu.mission-philosophy'
				},
			},
			{
				path: 'outline',
				data: {
					breadcrumb: 'menu.corperate-info'
				},
				children:[
					{
						path: '',
						component: CorporateInfoComponent,
						pathMatch: 'full'
					},
					{
						path: 'map',
						component: MapComponent,
						pathMatch: 'full',
						data: {
							breadcrumb: 'Map'
						},
					}
				]
			},
			{
				path: 'teams', 
				component: TeamsComponent,
				pathMatch: 'full',
				data: {
					breadcrumb: 'menu.operational-team'
				},
			}
		]
	},
	{
		path: 'business',
		data: {
			breadcrumb: 'menu.business-field'
		},
		children: [
			{ 
				path: '',
				component: BusinessComponent,
				pathMatch: 'full'
			},
			{
				path: 'visa',
				component: VisaComponent,
				pathMatch: 'full',
				data: {
					breadcrumb: 'menu.visa-wp'
				},
			},
			{ 
				path: 'ems',
				data: {
					breadcrumb: 'Ems'
				},
				children:[
					{
						path: '',
						component: EmsComponent,
						pathMatch: 'full',
					},
					{
						path: 'item',
						component: EmsItemComponent,
						pathMatch: 'full',
						data: {
							breadcrumb: 'Items'
						},
					}
				]
			},
			{ 
				path: 'exchange',
				data: {
					breadcrumb: 'menu.current-exchange'
				},
				children:[
					{
						path: '',
						component: ExchangeComponent,
						pathMatch: 'full',
					},
					{
						path: 'item',
						component: ExchangeItemComponent,
						pathMatch: 'full',
						data: {
							breadcrumb: 'Item'
						},
					}
				]
			},
			{
				path: 'product-info',
				data: {
					breadcrumb: 'Product info'
				},
				children:[
					{
						path: '',
						component: ProductInfoComponent,
						pathMatch: 'full',
					},
					{
						path: 'item',
						component: ItemComponent,
						pathMatch: 'full',
						data: {
							breadcrumb: 'Item'
						},
					}
				]
			},
			{
				path: 'newbusiness',
				component: NewbusinessComponent,
				pathMatch: 'full',
				data: {
					breadcrumb: 'New Business'
				},
			},
			{
				path: 'scooter-rental',
				component: RentalComponent,
				pathMatch: 'full',
				data: {
					breadcrumb: 'menu.scoter-rental'
				},
			},
			{
				path: 'travel-agency',
				component: TravelAgencyComponent,
				pathMatch: 'full',
				data: {
					breadcrumb: 'menu.travel-agency'
				},
			}
		]
	},
	{
		path: 'contact',
		data: {
			breadcrumb: 'menu.contact'
		},
		children:[
			{
				path: '',
				component: ContactComponent,
				pathMatch: 'full',
			},
			{
				path: 'thank',
				component: ThankComponent,
				pathMatch: 'full',
				data: {
					breadcrumb: 'Thank You'
				},
			}
		]
	},
	{
		path: 'sitemap',
		component: SitemapComponent,
		data: {
			breadcrumb: 'Site map'
		},
	},
	{
		path: 'blog',
		component: BlogComponent,
		data: {
			breadcrumb: 'menu.blog'
		},
	},
	{
		path: "404",
		component: Error404Component,
		pathMatch: 'full'
	},
	{
		path: '**',
		redirectTo: '404'
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes, {
		useHash: false,
		scrollPositionRestoration: 'enabled',
		anchorScrolling: 'enabled',
		scrollOffset: [0, 64],
		onSameUrlNavigation: 'reload'
	})],
	exports: [RouterModule]
})
export class AppRoutingModule { }
