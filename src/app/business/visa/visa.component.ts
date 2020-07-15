import { Component, OnInit } from '@angular/core';
import { Meta ,Title } from '@angular/platform-browser';
import { TranslateService ,LangChangeEvent } from '@ngx-translate/core';
import { Router } from '@angular/router';

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
    if(this.router.url === '/business/visa'){
      translate.onLangChange.subscribe((event: LangChangeEvent) => {
        translate.get('page-title.visa').subscribe((res: string) => {
        this.pageTitle.setTitle(res);
        });
      });
    }
  }

  ngOnInit() {
  }

}
