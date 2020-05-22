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
		$(".menu_icon").click(function(){
			$(this).toggleClass("active");
			$("#content_menu").toggleClass('show');
		});
		$(".sidebar__menu ul li").click(function(){
			$(this).children(".sub_menu").slideToggle();
		});

		// change font-size
		$(".text_size .size_s").on("click", function(){
			$(this).addClass('active');
			$(".text_size .size_m").removeClass('active');
			$('html').css('font-size','62.5%');
		});

		$(".text_size .size_m").on("click", function(){
			$(this).addClass('active');
			$(".text_size .size_s").removeClass('active');
			$('html').css('font-size','72%');
		});
  }

}
