import { Component, OnInit } from "@angular/core";
import { TranslateService } from '@ngx-translate/core';
import $ from "jquery";
@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent implements OnInit {
	constructor(private translate: TranslateService) {
		translate.setDefaultLang('jp');
	}
	useLanguage(language: string) {
		this.translate.use(language);
	}
  	ngOnInit() {
		// menu

		$("ul.parent-menu > li ").each(function(){
			$(this).mouseenter(function(){
				$(this).children(".sub-menu").css("visibility","visible");
			});

			$(this).mouseleave(function(){
				$(this).children(".sub-menu").css("visibility","hidden");
			});
		});
		$(".sub-menu ul li").click(function(){
			$(".sub-menu").css("visibility","hidden");
		});

		$(".menu-icon").click(function(){
			$(this).toggleClass("active");
			$("#content-menu").toggleClass("show");
		});

		if( $(window).width() <= 768 ) {

			$(".sidebar__menu ul.parent-menu > li").click(function(){
				$(this).find(">a:first-child").toggleClass("is-active");
				$(this).children(".sub-menu").toggleClass("is-active");
			});

			$(".sub-menu ul li").click(function(){
				$("#content-menu").removeClass("show");
				$(".menu-icon").removeClass("active");
			});
			
			$("ul.parent-menu > li ").each(function(){
				if($(this).find(".sub-menu").length > 0){
					$(this).find(">a:first-child").css("pointer-events","none");
				}else {
					$(this).click(function(){
						$("#content-menu").removeClass("show");
						$(".menu-icon").removeClass("active");
						$("ul.parent-menu > li").find(".is-active").removeClass("is-active");
						$(this).next(".sub-menu").removeClass("is-active");
					});
				}
			});
		}

		// change font-size
		$(".text-size .text-size__s").click(function(){
			$(this).addClass("active");
			$(".text-size .text-size__m").removeClass("active");
			$("html").css("font-size","62.5%");
		});
		$(".text-size .text-size__m").click(function(){
			$(this).addClass("active");
			$(".text-size .text-size__s").removeClass("active");
			$("html").css("font-size","72%");
		});

		// change langauge 
		$(".text-translate li").on("click", function(){
			$(".text-translate li").removeClass("active");
			$(this).addClass("active");	
		});

		// search 
		$(".search-input").on("keyup keypress", function() {
			if ($(this).val() != "") {
				$(".clear-text").removeClass("d-none");
			}else {
				$(".clear-text").addClass("d-none");
			}
		});

		// clear text search
		$(".clear-text").on("click", function(){
			$(this).addClass("d-none");
			$(".search-input").val("");
		});
  	}
}