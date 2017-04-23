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
var navi_1 = require("./navi");
var navi_2 = require("./navi");
var NaviComponent = (function () {
    function NaviComponent() {
        this.buttons = navi_2.naviButtons.map(function (obj) { return new navi_1.NaviButton(obj); });
    }
    return NaviComponent;
}());
NaviComponent = __decorate([
    core_1.Component({
        selector: 'navi',
        styleUrls: [
            './navi.component.css'
        ],
        templateUrl: './navi.component.html',
        animations: [
            animations_1.trigger('hoverState', [
                animations_1.state('mouseIn', animations_1.style({
                    width: '100%'
                })),
                animations_1.state('mouseOut', animations_1.style({
                    width: '0%'
                })),
                animations_1.transition('mouseIn <=> mouseOut', [
                    animations_1.animate('.2s ease-out')
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [])
], NaviComponent);
exports.NaviComponent = NaviComponent;
//# sourceMappingURL=navi.component.js.map