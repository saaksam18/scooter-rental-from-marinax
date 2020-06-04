import { Component, OnInit } from '@angular/core';
import { Meta ,Title } from '@angular/platform-browser';
import { TranslateService ,LangChangeEvent } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-philosophy',
  templateUrl: './philosophy.component.html',
  styleUrls: ['./philosophy.component.scss']
})
export class PhilosophyComponent implements OnInit {
  
  title = this.translate.get('Philosophy').subscribe((res: string) => {
    this.pageTitle.setTitle(res);
  });
  constructor(
    private meta: Meta,
    private pageTitle: Title,
    private translate: TranslateService,
    private router: Router
  ) {
    if(this.router.url === '/philosophy'){
      translate.onLangChange.subscribe((event: LangChangeEvent) => {
        translate.get('Philosophy').subscribe((res: string) => {
        this.pageTitle.setTitle(res);
        });
      });
    }
  }

  ngOnInit() {
    
  }

}
