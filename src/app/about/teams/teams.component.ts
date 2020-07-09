import { Component, OnInit } from '@angular/core';
import { Meta ,Title } from '@angular/platform-browser';
import { TranslateService ,LangChangeEvent } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {

  
  title = this.translate.get('Teams').subscribe((res: string) => {
    this.pageTitle.setTitle(res);
  });
  constructor(
    private meta: Meta,
    private pageTitle: Title,
    private translate: TranslateService,
    private router: Router
  ) {
    if(this.router.url === '/teams'){
      translate.onLangChange.subscribe((event: LangChangeEvent) => {
          translate.get('Teams').subscribe((res: string) => {
          this.pageTitle.setTitle(res);
          });
      });
    }
  }

  teams = [
    { name: 'SHUNGO KUBO'},
    { name: 'HISASHI KUBO'},
		{ name: 'HAK HEANG', position: 'スタッフ情報提供'},
		{ name: 'CHUM HAK'},
		{ name: 'PISETH'},
		{ name: 'MAKARA'},
		{ name: 'SAAK'},
		{ name: 'KREY SAK'},
		{ name: 'YUTHEA'}
	]
  ngOnInit() {
  }

}
