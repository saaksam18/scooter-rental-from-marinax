import { Component, OnInit } from '@angular/core';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Meta ,Title } from '@angular/platform-browser';
import { TranslateService ,LangChangeEvent } from '@ngx-translate/core';
import { Router } from '@angular/router';
@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
    posts: any = [];
    postsApi = environment.wpPostsApi;

    title = this.translate.get('Blog').subscribe((res: string) => {
        this.pageTitle.setTitle(res);
    
    });
    constructor(
        private meta: Meta,
        private pageTitle: Title,
        private translate: TranslateService,
        private router: Router,
        private http: HttpClient
      ) {
        if(this.router.url === '/blog'){
          translate.onLangChange.subscribe((event: LangChangeEvent) => {
              translate.get('Blog').subscribe((res: string) => {
              this.pageTitle.setTitle(res);
              });
          });
        }
      }

    ngOnInit() {
        // this.http.get(this.postsApi).subscribe(res => {
        //     this.posts = res;
        // });
    }

}
