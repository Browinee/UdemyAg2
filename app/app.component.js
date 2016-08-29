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
var test_component_1 = require('./test.component');
var AppComponent = (function () {
    function AppComponent() {
        this.Bear = ['Browinee', 'GuitarBrown', 'SuperBrown'];
        this.viewMode = 'map';
        this.post = {
            totalLikes: 10,
            isLike: 0,
        };
    }
    AppComponent.prototype.getChanged = function ($event) {
        console.log($event);
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            template: "\n  \n   <app-test \n      [totalLikes]=\"post.totalLikes\" \n      [isLike]=\"post.isLike\"\n      (isChanged)=\"getChanged($event)\">\n   </app-test>\n\n\n   <h2>ngSwitch change</h2>\n   <ul class=\"nav nav-pills\" >\n      <li [class.active]=\"viewMode=='map'\"><a (click)=\"viewMode='map'\"> Map view</a></li>\n      <li [class.active]=\"viewMode=='list'\"><a (click)=\"viewMode='list'\">List view</a></li>\n\n   </ul>\n   <div [ngSwitch]=\"viewMode\"> \n     <template [ngSwitchCase]=\"'map'\">Show map info </template>\n     <template [ngSwitchCase]=\"'list'\">Show List info </template>\n  </div>\n\n   <h2>*ngFor</h2>\n  <ul>\n    <li *ngFor=\"let bear of Bear ,let i=index\" >{{i+1}}-{{bear}}</li>\n  </ul>\n\n  ",
            directives: [test_component_1.TestComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map