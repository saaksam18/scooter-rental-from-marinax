import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { Router } from '@angular/router';
import $ from 'jquery';
@Component({
	selector: 'app-rental',
	templateUrl: './rental.component.html',
	styleUrls: ['./rental.component.scss']
})
export class RentalComponent implements OnInit {

	title = this.translate.get('page-title.scooter-rental').subscribe((res: string) => {
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
		this.meta.updateTag({ property: 'og:title', content: 'EMC Scooter Rental' });
		this.meta.updateTag({ property: 'og:description', content: "" });
		this.meta.updateTag({ property: 'og:image', content: "" });
		this.meta.updateTag({ property: 'og:url', content: 'https://emc-groups.com/business/scooter-rental' });
		if (this.router.url === '/business/scooter-rental') {
			translate.onLangChange.subscribe((event: LangChangeEvent) => {
				translate.get('page-title.scooter-rental').subscribe((res: string) => {
					this.pageTitle.setTitle(res);
				});
			});
		}
	}

	ngOnInit() {

		// hide show block content Q&A
		let toggle = $(".content-Q");
		
		toggle.click(function(){
			$(this).siblings(".content-A").toggleClass("d-block");
			$(this).toggleClass("minus");
		});
	}

}
