import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HistoryComponent } from './about/history/history.component';
import { FounderComponent } from './about/founder/founder.component';
import { PhilosophyComponent } from './about/philosophy/philosophy.component';
import { CorporateInfoComponent } from './about/corporate-info/corporate-info.component';
import { BusinessFieldComponent } from './business-field/business-field.component';
import { SemiconductorComponent } from './business-field/semiconductor/semiconductor.component';
import { SitemapComponent } from './sitemap/sitemap.component';
import { EmsComponent } from './business-field/ems/ems.component';
import { ProductInfoComponent } from './business-field/product-info/product-info.component';
import { NewbusinessComponent } from './business-field/newbusiness/newbusiness.component';
import { ItemComponent } from './business-field/product-info/item/item.component';
import { SemiconductorItemComponent } from './business-field/semiconductor/semiconductor-item/semiconductor-item.component';
import { EmsItemComponent } from './business-field/ems/ems-item/ems-item.component';
import { MapComponent } from './about/corporate-info/map/map.component'
import { BusinessComponent } from './business/business.component';

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
		component: BusinessComponent
	},
	{
		path: 'business-field',
		children: [
			{ 
				path: '',
				component: BusinessFieldComponent,
				pathMatch: 'full'
			},
			{ 
				path: 'semiconductor',
				children:[
					{
						path: '',
						component: SemiconductorComponent,
						pathMatch: 'full'
					},
					{
						path: 'item',
						component: SemiconductorItemComponent,
						pathMatch: 'full'
					}
				]
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
			}
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
	})],
	exports: [RouterModule]
})
export class AppRoutingModule { }
