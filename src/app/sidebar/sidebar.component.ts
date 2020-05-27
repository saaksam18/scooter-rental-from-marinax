import { Component, OnInit } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  	constructor() { }

  	ngOnInit() {

		// menu responsive
		$(".menu-icon").click(function(){
			$(this).toggleClass("active");
			$("#content-menu").toggleClass('show');
		});
		$(".sidebar__menu ul li").click(function(){
			$(this).children().toggleClass('is-active');
		});

		// change font-size
		$(".text-size .text-size__s").on("click", function(){
			$(this).addClass('active');
			$(".text-size .text-size__m").removeClass('active');
			$('html').css('font-size','62.5%');
		});

		$(".text-size .text-size__m").on("click", function(){
			$(this).addClass('active');
			$(".text-size .text-size__s").removeClass('active');
			$('html').css('font-size','72%');
		});

		// change langauge 
		$('.text-translate li').on("click", function(){
			$('.text-translate li').removeClass("active");
			$(this).addClass("active");	
		});

		// search 
		$('.search-input').on('keyup keypress', function() {
			if ($(this).val() != '') {
				$('.clear-text').removeClass('d-none');
			}else {
				$('.clear-text').addClass('d-none');
			}
		});

		// clear text search
		$('.clear-text').on("click", function(){
			$(this).addClass("d-none");
			$('.search-input').val('');
		});
  	}

}
