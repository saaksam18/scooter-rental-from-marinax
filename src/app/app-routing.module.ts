import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FounderComponent } from './about/founder/founder.component';

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
				path: 'founder', 
				component: FounderComponent, 
				pathMatch: 'full', 
			},
		]
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes, {
		useHash: false,
	})],
	exports: [RouterModule]
})
export class AppRoutingModule { }
