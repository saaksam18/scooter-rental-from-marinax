import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-history',
	templateUrl: './history.component.html',
	styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

	title = this.translate.get('page-title.history').subscribe((res: string) => {
		this.pageTitle.setTitle(res);
	});
	constructor(
		private meta: Meta,
		private pageTitle: Title,
		private translate: TranslateService,
		private router: Router
	) {
		this.meta.addTag({ name: 'robots', content: 'noindex, nofollow' });
		this.meta.updateTag({ name: 'description', content: '' });
		this.meta.updateTag({ name: 'keywords', content: '' });
		this.meta.updateTag({ property: 'og:title', content: 'Emc History' });
		this.meta.updateTag({ property: 'og:description', content: "" });
		this.meta.updateTag({ property: 'og:image', content: "" });
		this.meta.updateTag({ property: 'og:url', content: 'https://emc-groups.com/about/history' });
		if (this.router.url === '/about/history') {
			translate.onLangChange.subscribe((event: LangChangeEvent) => {
				translate.get('page-title.history').subscribe((res: string) => {
					this.pageTitle.setTitle(res);
				});
			});
		}
	}

	ngOnInit() {
	}

}
