import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-travel-agency',
	templateUrl: './travel-agency.component.html',
	styleUrls: ['./travel-agency.component.scss']
})
export class TravelAgencyComponent implements OnInit {

	title = this.translate.get('page-title.travel-agency').subscribe((res: string) => {
		this.pageTitle.setTitle(res);
	});
	constructor(
		private meta: Meta,
		private pageTitle: Title,
		private translate: TranslateService,
		private router: Router
	) {
		this.meta.updateTag({ name: 'description', content: '' });
		this.meta.updateTag({ name: 'keywords', content: '' });
		this.meta.updateTag({ property: 'og:title', content: 'EMC Travel Agency' });
		this.meta.updateTag({ property: 'og:description', content: "" });
		this.meta.updateTag({ property: 'og:image', content: "" });
		this.meta.updateTag({ property: 'og:url', content: 'https://emc-groups.com/business/travel-agency' });
		if (this.router.url === '/business/travel-agency') {
			translate.onLangChange.subscribe((event: LangChangeEvent) => {
				translate.get('page-title.travel-agency').subscribe((res: string) => {
					this.pageTitle.setTitle(res);
				});
			});
		}
	}

	ngOnInit() {
	}

}
