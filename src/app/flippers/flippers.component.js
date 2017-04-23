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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var animations_1 = require("@angular/animations");
/*import { Flipper } from './flippers.service'*/
var flippers_1 = require("./flippers");
var flippers_mock_jobs_1 = require("./flippers.mock-jobs");
var FlippersComponent = (function () {
    function FlippersComponent() {
        this.flippersArray = flippers_mock_jobs_1.mockJobs.map(function (obj) { return new flippers_1.Flipper(obj); });
    }
    return FlippersComponent;
}());
FlippersComponent = __decorate([
    core_1.Component({
        selector: 'flippers',
        styleUrls: ['./flippers.component.css'],
        templateUrl: './flippers.component.html',
        animations: [
            animations_1.trigger('flipperFrontState', [
                animations_1.state('visible', animations_1.style({
                    transform: 'perspective(100em) rotateY(0deg)'
                })),
                animations_1.state('hidden', animations_1.style({
                    transform: 'perspective(100em) rotateY(-180deg)'
                })),
                animations_1.transition('hidden => visible', [
                    animations_1.animate('.35s ease-in')
                ]),
                animations_1.transition('visible => hidden', [
                    animations_1.animate('.5s ease-in')
                ])
            ]),
            animations_1.trigger('flipperBackState', [
                animations_1.state('visible', animations_1.style({
                    transform: 'perspective(100em) rotateY(0deg)'
                })),
                animations_1.state('hidden', animations_1.style({
                    transform: 'perspective(100em) rotateY(180deg)'
                })),
                animations_1.transition('hidden => visible', [
                    animations_1.animate('.5s ease-in')
                ]),
                animations_1.transition('visible => hidden', [
                    animations_1.animate('.35s ease-in')
                ])
            ]),
            animations_1.trigger('backArrow', [
                animations_1.state('mouseIn', animations_1.style({
                    backgroundColor: '#E0E0E0'
                })),
                animations_1.state('mouseOut', animations_1.style({
                    backgroundColor: 'transparent'
                })),
                animations_1.state('mouseDown', animations_1.style({
                    backgroundColor: '#C0C0C0'
                }))
            ])
        ]
    }),
    __metadata("design:paramtypes", [])
], FlippersComponent);
exports.FlippersComponent = FlippersComponent;
//# sourceMappingURL=flippers.component.js.map