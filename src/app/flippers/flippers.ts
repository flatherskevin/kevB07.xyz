class Experience{
	name: string;
	role: string;
	startDate: string;
	endDate: string;
	logoURL: string;
	symbolURL: string;
	subGroups: Array<any>;

	constructor(type: {
		name: string,
		role: string,
		startDate: string,
		endDate: string,
		logoURL: string,
		symbolURL: string,
		subGroups: Array<any>
	}){
		this.name = type.name;
		this.role = type.role;
		this.startDate = type.startDate;
		this.endDate = type.endDate;
		this.logoURL = type.logoURL;
		this.symbolURL = type.symbolURL;
		this.subGroups = type.subGroups.map(obj => new ExperienceDetail(obj));
	}
}

class ExperienceDetail{
	detail: string;

	constructor(type: {
		detail: string
	}){
		this.detail = type.detail;
	}
}


export class Flipper{
	frontState: string = 'visible';
	backState: string = 'hidden';
	mouseState: string = 'mouseOut';
	isRunning: Number = 0;
	experience: any;	
	
	constructor(experience: any){
		this.experience = new Experience(experience);
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
