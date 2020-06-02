import { Component, OnInit } from '@angular/core';
import $ from 'jquery';

@Component({
	selector: 'app-founder',
	templateUrl: './founder.component.html',
	styleUrls: ['./founder.component.scss']
})
export class FounderComponent implements OnInit {

	constructor() { }

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
