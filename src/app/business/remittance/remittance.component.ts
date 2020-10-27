import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-remittance',
  templateUrl: './remittance.component.html',
  styleUrls: ['./remittance.component.scss']
})
export class RemittanceComponent implements OnInit {
  title = this.translate.get('page-title.remittance').subscribe((res: string) => {
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
		this.meta.updateTag({ property: 'og:title', content: 'EMC International Remittance' });
		this.meta.updateTag({ property: 'og:description', content: "" });
		this.meta.updateTag({ property: 'og:image', content: "" });
		this.meta.updateTag({ property: 'og:url', content: 'https://emc-groups.com/business/remittance' });
		if (this.router.url === '/business/remittance') {
			translate.onLangChange.subscribe((event: LangChangeEvent) => {
				translate.get('page-title.remittance').subscribe((res: string) => {
					this.pageTitle.setTitle(res);
				});
			});
		}
	}

  ngOnInit() {
  }

}
