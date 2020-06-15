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
		component: HomeComponent
	},
	{
		path: 'about',
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
			},
			{
				path: 'founder',
				component: FounderComponent,
				pathMatch: 'full',
			},
			{
				path: 'philosophy', 
				component: PhilosophyComponent,
				pathMatch: 'full'
			},
			{
				path: 'outline',
				children:[
					{
						path: '',
						component: CorporateInfoComponent,
						pathMatch: 'full'
					},
					{
						path: 'map',
						component: MapComponent,
						pathMatch: 'full'
					}
				]
			}
		]
	},
	{
		path: 'business',
		children: [
			{ 
				path: '',
				component: BusinessComponent,
				pathMatch: 'full'
			},
			{
				path: 'visa',
				component: VisaComponent,
				pathMatch: 'full'
			},
			{ 
				path: 'ems',
				children:[
					{
						path: '',
						component: EmsComponent,
						pathMatch: 'full'
					},
					{
						path: 'item',
						component: EmsItemComponent,
						pathMatch: 'full'
					}
				]
			},
			{ 
				path: 'exchange',
				children:[
					{
						path: '',
						component: ExchangeComponent,
						pathMatch: 'full'
					},
					{
						path: 'item',
						component: ExchangeItemComponent,
						pathMatch: 'full'
					}
				]
			},
			{
				path: 'product-info',
				children:[
					{
						path: '',
						component: ProductInfoComponent,
						pathMatch: 'full'
					},
					{
						path: 'item',
						component: ItemComponent,
						pathMatch: 'full'
					}
				]
			},
			{
				path: 'newbusiness',
				component: NewbusinessComponent,
				pathMatch: 'full'
			},
		]
	},

	{
		path: 'sitemap',
		component: SitemapComponent
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
