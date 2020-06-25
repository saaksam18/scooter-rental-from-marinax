import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
    posts: any = [];
    postsApi = environment.wpPostsApi;
    constructor(
        private http: HttpClient
    ) { }

    ngOnInit() {
        this.http.get(this.postsApi).subscribe(res => {
            this.posts = res;
        });
    }

}
