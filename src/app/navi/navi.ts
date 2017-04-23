export class NaviButton{
	mouseState: string = 'mouseOut';
	text: string;
	link: string;


	constructor(button: any){
		this.text = button.text;
		this.link = button.link;
	}

	mouseHover(mouseState: string){
		this.mouseState = mouseState;
	}
}

export const naviButtons: any[] = [
	{
		'text': 'Contact',
		'link': ''
	},
	{
		'text': 'About',
		'link': ''
	}
]