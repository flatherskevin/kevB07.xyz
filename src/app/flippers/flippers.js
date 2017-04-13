"use strict";
var Flipper = (function () {
    function Flipper(job) {
        this.frontState = 'visible';
        this.backState = 'hidden';
        this.mouseState = 'mouseOut';
        this.isRunning = 0;
        this.company = job.company;
        this.jobTitle = job.jobTitle;
        this.dates = job.dates;
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
var Category = (function () {
    function Category(type) {
        this.name = type.name;
        this.subGroups = type.subGroups;
    }
    return Category;
}());
exports.Category = Category;
var Job = (function () {
    function Job(type) {
        this.name = type.name;
        this.role = type.role;
        this.startDate = type.startDate;
        this.endDate = type.endDate;
        this.logoURL = type.logoURL;
        this.symbolURL = type.symbolURL;
    }
    return Job;
}());
exports.Job = Job;
var JobDetail = (function () {
    function JobDetail(type) {
        this.detail = type.detail;
    }
    return JobDetail;
}());
exports.JobDetail = JobDetail;
//# sourceMappingURL=flippers.js.map