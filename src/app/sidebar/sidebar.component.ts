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
    const $menu = $(".menu_icon");
		$(document).mouseup(e => {
			if (!$menu.is(e.target)
			&& $menu.has(e.target).length === 0)
			{
				$menu.removeClass('active');
				// $("#content_menu").addClass("d-md-none");
			}
		});
		

		$(".menu_icon").click(function(){
			$(this).toggleClass("active");
			$("#content_menu").removeClass("d-md-none");
		});
  }

}
