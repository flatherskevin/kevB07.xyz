"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NaviButton = (function () {
    function NaviButton(button) {
        this.mouseState = 'mouseOut';
        this.text = button.text;
        this.link = button.link;
    }
    NaviButton.prototype.mouseHover = function (mouseState) {
        this.mouseState = mouseState;
    };
    return NaviButton;
}());
exports.NaviButton = NaviButton;
exports.naviButtons = [
    {
        'text': 'Contact',
        'link': ''
    },
    {
        'text': 'About',
        'link': ''
    }
];
//# sourceMappingURL=navi.js.map