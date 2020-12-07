import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import $ from 'jquery';

@Component({
	selector: 'app-thank',
	templateUrl: './thank.component.html',
	styleUrls: ['./thank.component.scss']
})
export class ThankComponent implements OnInit {
	title = this.translate.get('page-title.thank').subscribe((res: string) => {
		this.pageTitle.setTitle(res);
	});
	constructor(
		private meta: Meta,
		private pageTitle: Title,
		private translate: TranslateService,
		private router: Router
	) {
		this.meta.addTag({ name: 'robots', content: 'noindex, nofollow' });
		this.meta.updateTag({ property: 'og:title', content: 'EMC Thank You' });
		this.meta.updateTag({ property: 'og:description', content: "" });
		this.meta.updateTag({ property: 'og:image', content: "" });
		this.meta.updateTag({ property: 'og:url', content: 'https://emc-groups.com/contact/thank' });
		if (this.router.url === '/contact/thank') {
			translate.onLangChange.subscribe((event: LangChangeEvent) => {
				translate.get('page-title.thank').subscribe((res: string) => {
					this.pageTitle.setTitle(res);
				});
			});
		}
	}

	ngOnInit() {
		$(document).ready(function () {
			// block direct access to thank you page
			// if (document.referrer == ''){
			// 	window.location.href='/';
			// }
		});
	}

}
