import { Component, OnInit } from '@angular/core';
import { Meta ,Title } from '@angular/platform-browser';
import { TranslateService ,LangChangeEvent } from '@ngx-translate/core';
import { environment } from '../../environments/environment';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import $ from 'jquery';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
	title = this.translate.get('Contact').subscribe((res: string) => {
    this.pageTitle.setTitle(res);
  });
  contactForm: FormGroup;
  constructor(
		private meta: Meta,
    private pageTitle: Title,
    private translate: TranslateService,
		private router:Router
	) {
		if(this.router.url === 'contact'){
      translate.onLangChange.subscribe((event: LangChangeEvent) => {
          translate.get('Contact').subscribe((res: string) => {
          this.pageTitle.setTitle(res);
          });
      });
    }
	}

  ngOnInit() {
    // validation
		this.contactForm = new FormGroup({
			name:	new FormControl('', Validators.compose([
					Validators.required,
					Validators.pattern('^.{2,30}$')
			])),
			email:	new FormControl('',Validators.compose([
					Validators.required,
					Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')
			])),
			phone:	new FormControl('', Validators.compose([
					Validators.required,
					Validators.pattern('^((\\+91-?)|0)?[0-9]{9}$')
			])),
			subject:	new FormControl('',Validators.compose([
					Validators.required,
					Validators.pattern('^.{5,100}$')
			])),
			message:	new FormControl('',Validators.compose([])),
		});
  }
  submit(){
    var form = $('#contact_form');

    const urlApi = environment.contactApi;
    const crossAnyway = 'https://cors-anywhere.herokuapp.com/';
    $.ajax({
			type		:	'POST',
			url			:	crossAnyway+urlApi,
			datatype	:	'json',
      data		: 	form.serialize(),
			success		:	function() {
				$('#sms-success').removeClass('d-none').addClass('alert-primary d-block');
				setTimeout(function() {
					$('#sms-success').remove();
				}, 5000);
			},
			error		:	function() {
				$('#sms-error').removeClass('d-none').addClass('alert-primary d-block');
				setTimeout(function() {
					$('#sms-error').remove();
				}, 5000);
			}
    });
    this.router.navigate(['/contact/thank']);
  }

}
