import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-teams',
	templateUrl: './teams.component.html',
	styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {


	title = this.translate.get('page-title.team').subscribe((res: string) => {
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
		this.meta.updateTag({ property: 'og:title', content: 'Emc Teams' });
		this.meta.updateTag({ property: 'og:description', content: "" });
		this.meta.updateTag({ property: 'og:image', content: "" });
		this.meta.updateTag({ property: 'og:url', content: 'https://emc-groups.com/about/teams' });
		if (this.router.url === '/about/teams') {
			translate.onLangChange.subscribe((event: LangChangeEvent) => {
				translate.get('page-title.team').subscribe((res: string) => {
					this.pageTitle.setTitle(res);
				});
			});
		}
	}

	teams = [
		{ name: 'SHUNGO KUBO' },
		{ name: 'HISASHI KUBO' },
		{ name: 'HAK HEANG' },
		{ name: 'CHUM HAK' },
		{ name: 'PISETH' },
		{ name: 'MAKARA' },
		{ name: 'SAAK' },
		{ name: 'KREY SAK' },
		{ name: 'YUTHEA' }
	]
	ngOnInit() {
	}

}
