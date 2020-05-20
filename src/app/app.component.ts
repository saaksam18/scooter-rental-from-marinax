import { Component , OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'emc';
  isPageLoad = false;

  ngOnInit() {
		setTimeout(()=>{
			document.getElementById("loading-page").style.display = 'none';
			this.isPageLoad = true;
		},2500)
	}
}
