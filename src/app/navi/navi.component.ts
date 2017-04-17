import { Component } from '@angular/core';

@Component({
	selector: 'navi',
	styleUrls: [
		'./navi.component.css'
	],
	templateUrl: './navi.component.html'
})

export class NaviComponent{
	buttons: any[];

	constructor(){
		this.buttons = [
			{
				'text': 'About',
				'link': ''
			},
			{
				'text': 'Contact',
				'link': '' 
			}
		];
	}
}