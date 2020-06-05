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

	title = this.translate.get('サイトマップ|KAGA ELECTRONICS CO.,LTD.').subscribe((res: string) => {
		this.pageTitle.setTitle(res);
	});
	constructor(
		private meta: Meta,
		private pageTitle: Title,
		private translate: TranslateService,
		private router: Router
	) {
		if(this.router.url === '/sitemap'){
			translate.onLangChange.subscribe((event: LangChangeEvent) => {
				translate.get('Sitemap').subscribe((res: string) => {
				this.pageTitle.setTitle(res);
				});
			});
		}
	}

	ngOnInit() {
	}

}
