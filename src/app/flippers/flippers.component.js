"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
/*import { Flipper } from './flippers.service'*/
var flippers_1 = require('./flippers');
var flippers_mock_jobs_1 = require('./flippers.mock-jobs');
var FlippersComponent = (function () {
    function FlippersComponent() {
        this.flippersArray = flippers_mock_jobs_1.mockJobs.map(function (job) { return new flippers_1.Flipper(job); });
        this;
    }
    FlippersComponent = __decorate([
        core_1.Component({
            selector: 'flippers',
            styleUrls: ['./flippers.component.css'],
            templateUrl: './flippers.component.html',
            animations: [
                core_1.trigger('flipperFrontState', [
                    core_1.state('visible', core_1.style({
                        transform: 'perspective(100em) rotateY(0deg)'
                    })),
                    core_1.state('hidden', core_1.style({
                        transform: 'perspective(100em) rotateY(-180deg)'
                    })),
                    core_1.transition('hidden => visible', [
                        core_1.animate('.35s ease-in')
                    ]),
                    core_1.transition('visible => hidden', [
                        core_1.animate('.5s ease-in')
                    ]),
                ]),
                core_1.trigger('flipperBackState', [
                    core_1.state('visible', core_1.style({
                        transform: 'perspective(100em) rotateY(0deg)'
                    })),
                    core_1.state('hidden', core_1.style({
                        transform: 'perspective(100em) rotateY(180deg)'
                    })),
                    core_1.transition('hidden => visible', [
                        core_1.animate('.5s ease-in')
                    ]),
                    core_1.transition('visible => hidden', [
                        core_1.animate('.35s ease-in')
                    ]),
                ]),
                core_1.trigger('backArrow', [
                    core_1.state('mouseIn', core_1.style({
                        backgroundColor: '#E0E0E0'
                    })),
                    core_1.state('mouseOut', core_1.style({
                        backgroundColor: 'transparent'
                    })),
                    core_1.state('mouseDown', core_1.style({
                        backgroundColor: '#C0C0C0'
                    }))
                ])
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], FlippersComponent);
    return FlippersComponent;
}());
exports.FlippersComponent = FlippersComponent;
//# sourceMappingURL=flippers.component.js.map