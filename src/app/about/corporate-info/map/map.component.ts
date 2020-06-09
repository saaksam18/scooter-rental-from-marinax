import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-map',
	templateUrl: './map.component.html',
	styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {


	title = this.translate.get('地図画像|営業所情報|会社情報|加賀電子株式会社').subscribe((res: string) => {
		this.pageTitle.setTitle(res);
	});
	constructor(
		private meta: Meta,
		private pageTitle: Title,
		private translate: TranslateService,
		private router: Router
	) {
		if (this.router.url === '/map') {
			translate.onLangChange.subscribe((event: LangChangeEvent) => {
				translate.get('Map').subscribe((res: string) => {
					this.pageTitle.setTitle(res);
				});
			});
		}
	}

	ngOnInit() {
	}

}
