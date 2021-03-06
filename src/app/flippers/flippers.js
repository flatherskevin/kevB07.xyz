"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Experience = (function () {
    function Experience(type) {
        this.name = type.name;
        this.role = type.role;
        this.startDate = type.startDate;
        this.endDate = type.endDate;
        this.logoURL = type.logoURL;
        this.symbolURL = type.symbolURL;
        this.subGroups = type.subGroups.map(function (obj) { return new ExperienceDetail(obj); });
    }
    return Experience;
}());
var ExperienceDetail = (function () {
    function ExperienceDetail(type) {
        this.detail = type.detail;
    }
    return ExperienceDetail;
}());
var Flipper = (function () {
    function Flipper(experience) {
        this.frontState = 'visible';
        this.backState = 'hidden';
        this.mouseState = 'mouseOut';
        this.isRunning = 0;
        this.experience = new Experience(experience);
    }
    Flipper.prototype.setFlipState = function (stateFront, stateBack) {
        if (!this.isRunning) {
            this.frontState = stateFront;
            this.backState = stateBack;
            this.isRunning = 1;
        }
    };
    Flipper.prototype.setIsRunningOff = function () {
        this.isRunning = 0;
    };
    Flipper.prototype.mouseHover = function (mouseState) {
        this.mouseState = mouseState;
    };
    return Flipper;
}());
exports.Flipper = Flipper;
//# sourceMappingURL=flippers.js.map