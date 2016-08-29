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
var ZippyComponent = (function () {
    function ZippyComponent() {
        this.downTouched = false;
        this.upTouched = false;
        this.Info = [{
                title: "Who can see my stuff?",
                content: "Content of my stuff",
            },
            {
                title: "Who can contact me?",
                content: "Contact of my stuff",
            },
        ];
    }
    ZippyComponent.prototype.downClick = function (info) {
        this.downTouched = !this.downTouched;
        this.upTouched = !this.upTouched;
    };
    ZippyComponent.prototype.upClick = function (info) {
        this.upTouched = !this.upTouched;
        this.downTouched = !this.downTouched;
    };
    ZippyComponent = __decorate([
        core_1.Component({
            selector: 'zippy',
            templateUrl: './app/zippy/zippy.component.html',
            styleUrls: ['./app/zippy/zippy.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], ZippyComponent);
    return ZippyComponent;
}());
exports.ZippyComponent = ZippyComponent;
//# sourceMappingURL=zippy.component.js.map