import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { Router } from '@angular/router';
import $ from 'jquery';

@Component({
	selector: 'app-visa',
	templateUrl: './visa.component.html',
	styleUrls: ['./visa.component.scss']
})
export class VisaComponent implements OnInit {

	title = this.translate.get('page-title.visa').subscribe((res: string) => {
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
		this.meta.updateTag({ property: 'og:title', content: 'EMC Visa Service And Work Permit' });
		this.meta.updateTag({ property: 'og:description', content: "" });
		this.meta.updateTag({ property: 'og:image', content: "" });
		this.meta.updateTag({ property: 'og:url', content: 'https://emc-groups.com/business/visa' });
		if (this.router.url === '/business/visa') {
			translate.onLangChange.subscribe((event: LangChangeEvent) => {
				translate.get('page-title.visa').subscribe((res: string) => {
					this.pageTitle.setTitle(res);
				});
			});
		}
	}

	ngOnInit() {

		// hide show block centent Q&A
		let toggle = $(".content-Q");
			
		toggle.click(function(){
			$(this).toggleClass("minus");
			$(this).siblings(".content-A").slideToggle( "slow" );
		});
	}

}
