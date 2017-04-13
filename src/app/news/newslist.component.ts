import { Component } from '@angular/core';
import { News } from './news'

@Component({
  selector: 'newslist',
  styleUrls: ['./newslist.component.css'],
  templateUrl: './newslist.component.html',
})
export class NewslistComponent{
	newsItems:Array<News>;

	constructor(){
		this.newsItems = [
			new News("Kevin", "Sexy Title", "Cool things happened"),
			new News("Becca", "Sexier Title", "Cooler things happened")
		]
	}
}
