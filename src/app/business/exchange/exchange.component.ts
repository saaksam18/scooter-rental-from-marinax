import { Component, OnInit } from '@angular/core';
import { Meta ,Title } from '@angular/platform-browser';
import { TranslateService ,LangChangeEvent } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.scss']
})
export class ExchangeComponent implements OnInit {

  title = this.translate.get('Current Exchange').subscribe((res: string) => {
    this.pageTitle.setTitle(res);
  });
  constructor(
    private meta: Meta,
    private pageTitle: Title,
    private translate: TranslateService,
    private router: Router
  ) {
    if(this.router.url === '/exchange'){
      translate.onLangChange.subscribe((event: LangChangeEvent) => {
          translate.get('Current Exchange').subscribe((res: string) => {
          this.pageTitle.setTitle(res);
          });
      });
    }
  }

  ngOnInit() {
  }

}
