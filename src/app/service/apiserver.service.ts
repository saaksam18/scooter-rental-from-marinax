import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { PostDto } from '../dto/postDto';
import { PostType } from '../dto/postType';

@Injectable({
    providedIn: 'root'
})
export class ApiserverService {

    constructor(
        private http: HttpClient
    ) { }

    private readonly ApiShungo = environment.shungo;
    private readonly ApiHisashi = environment.hisashi;

    getPost(id_hisashi = false): Observable<PostType> {
        return new Observable(subscribe => {
            this.http.get(id_hisashi ? this.ApiHisashi : this.ApiShungo).subscribe((res: PostDto[]) => {
                res.forEach(it => subscribe.next(this.convertPostDtoToPostType(it)))
                subscribe.complete();
            });
        })
    }

    convertPostDtoToPostType(post: PostDto): PostType {
        return {
            title: post.title.rendered,
            content: this.convertHtmlToPlainText(post.content.rendered),
            img: post._embedded['wp:featuredmedia'] ? post._embedded['wp:featuredmedia'][0].source_url : '',
            link: post.link
        };
    }

    convertHtmlToPlainText(html: string): string {
        const div = document.createElement("div");
        div.innerHTML = html;
        return div.innerText.trim();
    }
}
