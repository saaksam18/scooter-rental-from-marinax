import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HistoryComponent } from './about/history/history.component';
import { FounderComponent } from './about/founder/founder.component';
import { PhilosophyComponent } from './about/philosophy/philosophy.component';
import { CorporateInfoComponent } from './about/corporate-info/corporate-info.component';
import { BusinessFieldComponent } from './business-field/business-field.component';
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
				component: CorporateInfoComponent,
				pathMatch: 'full'
			}
		]
	},
	{
		path: 'business-field',
		component: BusinessFieldComponent
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
