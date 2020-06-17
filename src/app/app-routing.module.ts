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
import { ItemComponent } from './business/product-info/item/item.component';
import { SitemapComponent } from './sitemap/sitemap.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
		data: {
			breadcrumb: 'Home'
		},
	},
	{
		path: 'about',
		data: {
			breadcrumb: 'About'
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
					breadcrumb: 'History'
				},
			},
			{
				path: 'founder',
				component: FounderComponent,
				pathMatch: 'full',
				data: {
					breadcrumb: 'Founder'
				},
			},
			{
				path: 'philosophy', 
				component: PhilosophyComponent,
				pathMatch: 'full',
				data: {
					breadcrumb: 'Philosophy'
				},
			},
			{
				path: 'outline',
				data: {
					breadcrumb: 'Outline'
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
			}
		]
	},
	{
		path: 'business',
		data: {
			breadcrumb: 'menu.about-us'
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
					breadcrumb: 'Visa'
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
					breadcrumb: 'Exchange'
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
		path: '**',
		redirectTo: '/'
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes, {
		useHash: false,
		scrollPositionRestoration: 'enabled',
		anchorScrolling: 'enabled',
	})],
	exports: [RouterModule]
})
export class AppRoutingModule { }
