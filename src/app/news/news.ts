export class News{
	author: string;
	title: string;
	description: string;
	url: string;
	urlToImage: string;
	publishedAt: string;

	constructor(author:string, title:string, description:string){
		this.author = author;
		this.title = title;
		this.description = description;
	}
}