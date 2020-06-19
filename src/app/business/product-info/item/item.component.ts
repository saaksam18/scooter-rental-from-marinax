import { Component, OnInit } from '@angular/core';
import { Meta ,Title } from '@angular/platform-browser';
import { TranslateService ,LangChangeEvent } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  title = this.translate.get('Product Item').subscribe((res: string) => {
    this.pageTitle.setTitle(res);
  });
  constructor(
    private meta: Meta,
    private pageTitle: Title,
    private translate: TranslateService,
    private router: Router
  ) {
    if(this.router.url === '/product-info/item'){
      translate.onLangChange.subscribe((event: LangChangeEvent) => {
          translate.get('Product Item').subscribe((res: string) => {
          this.pageTitle.setTitle(res);
          });
      });
    }
  }

  ngOnInit() {
  }

}
