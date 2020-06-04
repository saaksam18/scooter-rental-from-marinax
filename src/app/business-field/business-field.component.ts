import { Component, OnInit } from '@angular/core';
import { Meta ,Title } from '@angular/platform-browser';
import { TranslateService ,LangChangeEvent } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-business-field',
  templateUrl: './business-field.component.html',
  styleUrls: ['./business-field.component.scss']
})
export class BusinessFieldComponent implements OnInit {

  title = this.translate.get('Business Field').subscribe((res: string) => {
    this.pageTitle.setTitle(res);
  });
  constructor(
    private meta: Meta,
    private pageTitle: Title,
    private translate: TranslateService,
    private router: Router
  ) {
    if(this.router.url === '/busines-field'){
      translate.onLangChange.subscribe((event: LangChangeEvent) => {
        translate.get('Business Field').subscribe((res: string) => {
        this.pageTitle.setTitle(res);
        });
      });
    }
  }

  ngOnInit() {
  }

}
