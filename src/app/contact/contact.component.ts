import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { environment } from '../../environments/environment';
import { FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import $ from 'jquery';
import { from } from 'rxjs';
import countryCodes from '../../assets/json/countryCodes.json';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
	title = this.translate.get('page-title.contact').subscribe((res: string) => {
		this.pageTitle.setTitle(res);
	});
	selected : string = '+81';
	codes = countryCodes;
	contactForm: FormGroup;
	constructor(
		private meta: Meta,
		private pageTitle: Title,
		private translate: TranslateService,
		private router: Router
	) {
		this.meta.addTag({ name: 'robots', content: 'noindex, nofollow' });
		this.meta.updateTag({ name: 'description', content: '' });
		this.meta.updateTag({ name: 'keywords', content: '' });
		this.meta.updateTag({ property: 'og:title', content: 'EMC Contact' });
		this.meta.updateTag({ property: 'og:description', content: "" });
		this.meta.updateTag({ property: 'og:image', content: "" });
		this.meta.updateTag({ property: 'og:url', content: 'https://emc-groups.com/contact' });
		if (this.router.url === '/contact') {
			translate.onLangChange.subscribe((event: LangChangeEvent) => {
				translate.get('page-title.contact').subscribe((res: string) => {
					this.pageTitle.setTitle(res);
				});
			});
		}
	}

	ngOnInit() {
		// validation
		this.contactForm = new FormGroup({
			name: new FormControl('', Validators.compose([
				Validators.required,
				Validators.pattern('^.{2,30}$')
			])),
			email: new FormControl('', Validators.compose([
				Validators.required,
				Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')
			])),
			code: new FormControl,
			fphone: new FormControl('', Validators.compose([
				Validators.required,
				Validators.pattern('[0-9]{2}-[0-9]{3,4}-[0-9]{3,4}')
			])),
			subject: new FormControl('', Validators.compose([
				this.validateText
			])),
			message: new FormControl('', Validators.compose([
				this.validateText
			]))
		});
	}

	selectChange(event: any) {
		this.selected = event.target.value;
	}

	validateText(control: AbstractControl): { [key: string]: any } | null {
		let value = control.value.trim() || '';
        if(value == '') {
            return { required: true};
		}
		
        if (value && value.length < 5) {
            return { minlength: true };
        }
        return null;
	}

	submit() {
		var form = $('#contact_form');
		$('<input />').attr('type', 'hidden')
			.attr('name', 'lang')
			.attr('value', $('html').attr('lang'))
			.appendTo('#contact_form');

		$('<input />').attr('type', 'hidden')
			.attr('name', 'phone')
			.attr('value', $("#ccode").val()+" "+ $('#fphone').val())
			.appendTo('#contact_form');
			$("#ccode").remove();$("#fphone").remove();$("#code").remove();
		//$("#phone").val(function() {
		//	return this.value = $("#ccode").val()+" "+ this.value;
		//});
		const urlApi = environment.contactApi;
		const crossAnyway = 'https://cors-anywhere.herokuapp.com/';
		
		$.ajax({
			type: 'POST', // define the type of HTTP verb we want to use (POST for our form)
			url: crossAnyway + urlApi, // the url where we want to POST
			datatype: 'json', // what type of data do we expect back from the server
			data: form.serialize() // our data object
		});
		this.router.navigate(['/contact/thank']);
	}

}
