import { Component, OnInit } from '@angular/core';
import { Meta ,Title } from '@angular/platform-browser';
import { TranslateService ,LangChangeEvent } from '@ngx-translate/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss']
})
export class BusinessComponent implements OnInit {

  title = this.translate.get('page-title.business').subscribe((res: string) => {
    this.pageTitle.setTitle(res);
  });
  constructor(
    private meta: Meta,
    private pageTitle: Title,
    private translate: TranslateService,
    private router: Router
  ) {
		this.meta.updateTag({property: 'og:url', content: 'https://emc-groups.com/business'});
		this.meta.updateTag({property: 'og:title', content: 'EMC Business'});
    if(this.router.url === '/business'){
      translate.onLangChange.subscribe((event: LangChangeEvent) => {
          translate.get('page-title.business').subscribe((res: string) => {
          this.pageTitle.setTitle(res);
          });
      });
    }
  }

  ngOnInit() {
  }

}
