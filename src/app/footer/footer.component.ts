import { Component, OnInit, HostListener } from '@angular/core';
import $ from 'jquery';
@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

	public screenWidth: number;
	public isFbPc = true;
	constructor() { }

	ngOnInit() {
		var width = $(window).width();

		if (width > 600) {
			this.isFbPc = true;
		}
		else {
			this.isFbPc = false;
		}
	}
	@HostListener('window:resize', ['$event'])
	onResize(event) {
		this.screenWidth = event.target.innerWidth;
		if (this.screenWidth > 600) {
			this.isFbPc = true;
		} else {
			this.isFbPc = false;
		}
	}
}
