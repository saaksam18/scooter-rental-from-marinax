import { Component, OnInit } from '@angular/core';
import { Meta ,Title } from '@angular/platform-browser';
import { TranslateService ,LangChangeEvent } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ems-item',
  templateUrl: './ems-item.component.html',
  styleUrls: ['./ems-item.component.scss']
})
export class EmsItemComponent implements OnInit {

  title = this.translate.get('Ems Items').subscribe((res: string) => {
    this.pageTitle.setTitle(res);
  });
  constructor(
    private meta: Meta,
    private pageTitle: Title,
    private translate: TranslateService,
    private router: Router
  ) {
    if(this.router.url === '/ems/item'){
      translate.onLangChange.subscribe((event: LangChangeEvent) => {
          translate.get('Ems Items').subscribe((res: string) => {
          this.pageTitle.setTitle(res);
          });
      });
    }
  }

  ngOnInit() {
  }

}
