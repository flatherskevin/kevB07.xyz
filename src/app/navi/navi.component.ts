import { Component } from '@angular/core';
import {
  	trigger,
  	state,
  	style,
  	animate,
  	transition
  } from '@angular/animations';

import { NaviButton } from './navi';
import { naviButtons } from './navi';

@Component({
	selector: 'navi',
	styleUrls: [
		'./navi.component.css'
	],
	templateUrl: './navi.component.html',
	animations: [
		trigger('hoverState', [
			state('mouseIn', style({
				width: '100%'
			})),
			state('mouseOut', style({
				width: '0%'
			})),
			transition('mouseIn <=> mouseOut', [
				animate('.2s ease-out')
			])
		])
	]
})

export class NaviComponent{
	buttons: any[];

	constructor(){
		this.buttons = naviButtons.map(obj => new NaviButton(obj));
	}
}