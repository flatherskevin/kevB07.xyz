import { Component } from '@angular/core';
import {
  	trigger,
  	state,
  	style,
  	animate,
  	transition
  } from '@angular/animations';

/*import { Flipper } from './flippers.service'*/
import { Flipper } from './flippers';
import { mockJobs } from './flippers.mock-jobs';

@Component({
	selector: 'flippers',
	styleUrls: ['./flippers.component.css'],
	templateUrl: './flippers.component.html',
	animations: [
		trigger('flipperFrontState', [
			state('visible', style({
				transform: 'perspective(100em) rotateY(0deg)'
			})),
			state('hidden', style({
				transform: 'perspective(100em) rotateY(-180deg)'
			})),
			transition('hidden => visible', [
				animate('.35s ease-in')
			]),
			transition('visible => hidden', [
				animate('.5s ease-in')
			])
		]),
		trigger('flipperBackState', [
			state('visible', style({
				transform: 'perspective(100em) rotateY(0deg)'
			})),
			state('hidden', style({
				transform: 'perspective(100em) rotateY(180deg)'
			})),
			transition('hidden => visible', [
				animate('.5s ease-in')
			]),
			transition('visible => hidden', [
				animate('.35s ease-in')
			])
		]),
		trigger('backArrow', [
			state('mouseIn', style({
				backgroundColor: '#E0E0E0'
			})),
			state('mouseOut', style({
				backgroundColor: 'transparent'
			})),
			state('mouseDown', style({
				backgroundColor: '#C0C0C0'
			}))
		])
	]
})

export class FlippersComponent{
	flippersArray: Array<Flipper>
	
	
	constructor(){
		this.flippersArray = mockJobs.map(obj => new Flipper(obj));
	}
}
