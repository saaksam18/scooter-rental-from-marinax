import { Component, OnInit } from '@angular/core';
import { Meta ,Title } from '@angular/platform-browser';
import { TranslateService ,LangChangeEvent } from '@ngx-translate/core';
import { Router } from '@angular/router';
import $ from 'jquery';

@Component({
	selector: 'app-founder',
	templateUrl: './founder.component.html',
	styleUrls: ['./founder.component.scss']
})
export class FounderComponent implements OnInit {

	title = this.translate.get("Founder's story|About us|KAGA ELECTRONICS CO.,LTD.").subscribe((res: string) => {
		this.pageTitle.setTitle(res);
	});
	constructor(
		private meta: Meta,
		private pageTitle: Title,
		private translate: TranslateService,
		private router: Router
	) {
		if(this.router.url === '/founder'){
			translate.onLangChange.subscribe((event: LangChangeEvent) => {
				translate.get('Founder').subscribe((res: string) => {
				this.pageTitle.setTitle(res);
				});
			});
		}
	}

	ngOnInit() {
		var accordion = "close";
        $(".accordion__title").on("click", function() {
			$(this).next('.accordion__content').slideToggle("fast");
			if(accordion == "close"){
	            $(this).next('.accordion__content').next('.open-accordion').text("CLOSE");
	            accordion = "open";
	        }else{
				$(this).next('.accordion__content').next('.open-accordion').text("MORE");
	            accordion = "close";
        	};

        });
        $(".open-accordion").on("click", function() {
			$(this).prev('.accordion__content').slideToggle("fast");
			if(accordion == "close"){
	            $(this).text("CLOSE");
	            accordion = "open";
	        }else{
				$(this).text("MORE");
	            accordion = "close";
        	};
        });
	}

}
