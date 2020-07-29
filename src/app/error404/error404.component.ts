import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { Router } from '@angular/router';
@Component({
	selector: 'app-error404',
	templateUrl: './error404.component.html',
	styleUrls: ['./error404.component.scss']
})
export class Error404Component implements OnInit {

	title = this.translate.get('page-title.page-404').subscribe((res: string) => {
		this.pageTitle.setTitle(res);
	});
	constructor(
		private meta: Meta,
		private pageTitle: Title,
		private translate: TranslateService,
		private router: Router
	) {
		this.meta.updateTag({ property: 'og:title', content: '404 Not Found' });
		this.meta.updateTag({ property: 'og:description', content: "" });
		this.meta.updateTag({ property: 'og:image', content: "" });
		this.meta.updateTag({ property: 'og:url', content: 'https://emc-groups.com/404' });
		if (this.router.url === '/404') {
			translate.onLangChange.subscribe((event: LangChangeEvent) => {
				translate.get('page-title.page-404').subscribe((res: string) => {
					this.pageTitle.setTitle(res);
				});
			});
		}
	}

	ngOnInit() {
	}

}
