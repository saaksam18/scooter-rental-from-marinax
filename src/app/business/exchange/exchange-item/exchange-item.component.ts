import { Component, OnInit } from '@angular/core';
import { Meta ,Title } from '@angular/platform-browser';
import { TranslateService ,LangChangeEvent } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exchange-item',
  templateUrl: './exchange-item.component.html',
  styleUrls: ['./exchange-item.component.scss']
})
export class ExchangeItemComponent implements OnInit {

  title = this.translate.get('Exchange Items').subscribe((res: string) => {
    this.pageTitle.setTitle(res);
  });
  constructor(
    private meta: Meta,
    private pageTitle: Title,
    private translate: TranslateService,
    private router: Router
  ) {
    if(this.router.url === '/exchange/item'){
      translate.onLangChange.subscribe((event: LangChangeEvent) => {
          translate.get('Exchange Items').subscribe((res: string) => {
          this.pageTitle.setTitle(res);
          });
      });
    }
  }

  ngOnInit() {
  }

}
