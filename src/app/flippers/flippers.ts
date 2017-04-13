

export class Flipper{
	frontState: string = 'visible';
	backState: string = 'hidden';
	mouseState: string = 'mouseOut';
	isRunning: Number = 0;

	//Flipper job properties
	company: string;
	jobTitle: string;
	dates: string;


	constructor(job: {
		company: string,
		jobTitle: string,
		dates: string

	}){
		this.company = job.company;
		this.jobTitle = job.jobTitle;
		this.dates = job.dates;
	}


	setFlipState(stateFront: string, stateBack: string){
		if(!this.isRunning){
			this.frontState = stateFront;
			this.backState = stateBack;
			this.isRunning = 1;
		}
	}

	setIsRunningOff(){
		this.isRunning = 0;
	}

	mouseHover(mouseState: string){
		this.mouseState = mouseState;
	}
}

export class Experience{
	name: string;
	role: string;
	startDate: string;
	endDate: string;
	logoURL: string;
	symbolURL: string;
	subGroups: Array<Object>;

	constructor(type: {
		name: string,
		role: string,
		startDate: string,
		endDate: string,
		logoURL: string,
		symbolURL: string,
		subGroups: Array<Object>
	}){
		this.name = type.name;
		this.role = type.role;
		this.startDate = type.startDate;
		this.endDate = type.endDate;
		this.logoURL = type.logoURL;
		this.symbolURL = type.symbolURL;
		//this.subGroups = type.subGroups.map()
	}
}

export class ExperienceDetail{
	detail: string;

	constructor(type: {
		detail: string,
	}){
		this.detail = type.detail;
	}
}