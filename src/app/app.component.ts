import { Component , OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'emc';
  isLoading = true;

  ngOnInit() {
		setTimeout(()=>{
      this.isLoading = false;
      document.getElementById("wrapper").classList.add("d-none");
      document.getElementById("wrapper").classList.add("d-block");
		},2500)
	}
}
