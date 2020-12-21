import { Component, OnInit } from '@angular/core';
import { Meta ,Title } from '@angular/platform-browser';
import { TranslateService ,LangChangeEvent } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { ApiserverService } from '../service/apiserver.service';
@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
    hisashi_posts: any = [];
    shungo_posts: any = [];
    isLoad = true;
    title = this.translate.get('page-title.blog').subscribe((res: string) => {
		this.pageTitle.setTitle(res);
    });
    
    constructor(
		private meta: Meta,
		private pageTitle: Title,
		private translate: TranslateService,
        private router: Router,
        private appService: ApiserverService,
	) {
        this.meta.addTag({ name: 'robots', content: 'noindex, nofollow' });
		this.meta.updateTag({ name: 'description', content: '' });
		this.meta.updateTag({ name: 'keywords', content: '' });
        this.meta.updateTag({ property: 'og:title', content: 'Emc Blogs' });
        this.meta.updateTag({ property: 'og:description', content: "" });
        this.meta.updateTag({ property: 'og:image', content: "" });
        this.meta.updateTag({ property: 'og:url', content: 'https://emc-groups.com/blog' });
		if(this.router.url === '/blog'){
			translate.onLangChange.subscribe((event: LangChangeEvent) => {
				translate.get('page-title.blog').subscribe((res: string) => {
				this.pageTitle.setTitle(res);
				});
			});
		}
	}

    ngOnInit() {

        // Loading icon
        setTimeout(()=>{
            this.isLoad = false;
        },1000);
        
        
        this.appService.getPost(true).subscribe( post => {
            this.hisashi_posts.push(post);
        });

        this.appService.getPost(false).subscribe( post => {
            this.shungo_posts.push(post)
        })
    }

}
