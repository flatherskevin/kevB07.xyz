/*import { Injectable } from '@angular/core'

class Job{
    frontState: string = 'visible';
    backState: string = 'hidden';
    mousePosition: Number = 0;
    isRunning: Number = 0;

    constructor(public company: string){
        this.company = company;
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

    /*setMousePosition(mouseIn: Number){
        this.mousePosition = mouseIn;
    }*/
/*}


let ALL_JOBS = [
    'Schneider Electric',
    'Triumph Aerostructures',
    'Kettle Cove Cafe and Creamery'
].map(company => new Job(company));


@Injectable()
export class Flipper implements Iterable<Job>{

    

    currentJobs: Job[] = ALL_JOBS;

    [Symbol.iterator]() {
        return this.currentJobs;
    }




}*/ 
//# sourceMappingURL=flippers.service.js.map