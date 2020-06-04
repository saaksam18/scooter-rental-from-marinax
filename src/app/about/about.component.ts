import { Component, OnInit } from '@angular/core';
import { Meta ,Title } from '@angular/platform-browser';
import { TranslateService ,LangChangeEvent } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  title = this.translate.get('About').subscribe((res: string) => {
    this.pageTitle.setTitle(res);
  });
  constructor(
    private meta: Meta,
    private pageTitle: Title,
    private translate: TranslateService,
    private router: Router
  ) {
    if(this.router.url === '/about'){
      translate.onLangChange.subscribe((event: LangChangeEvent) => {
          translate.get('About').subscribe((res: string) => {
          this.pageTitle.setTitle(res);
          });
      });
    }
  }

  ngOnInit() {
  }

}
