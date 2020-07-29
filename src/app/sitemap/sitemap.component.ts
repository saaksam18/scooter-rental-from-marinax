import { Component, OnInit } from '@angular/core';
import { Meta ,Title } from '@angular/platform-browser';
import { TranslateService ,LangChangeEvent } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-sitemap',
	templateUrl: './sitemap.component.html',
	styleUrls: ['./sitemap.component.scss']
})
export class SitemapComponent implements OnInit {

	title = this.translate.get('page-title.site-map').subscribe((res: string) => {
		this.pageTitle.setTitle(res);
	});
	constructor(
		private meta: Meta,
		private pageTitle: Title,
		private translate: TranslateService,
		private router: Router
	) {
		this.meta.updateTag({ property: 'og:title', content: 'Emc Site Map' });
		this.meta.updateTag({ property: 'og:description', content: "" });
		this.meta.updateTag({ property: 'og:image', content: "" });
		this.meta.updateTag({ property: 'og:url', content: 'https://emc-groups.com/sitemap' });
		if(this.router.url === '/sitemap'){
			translate.onLangChange.subscribe((event: LangChangeEvent) => {
				translate.get('page-title.site-map').subscribe((res: string) => {
				this.pageTitle.setTitle(res);
				});
			});
		}
	}

	ngOnInit() {
	}

}
