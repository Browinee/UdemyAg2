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
var TestComponent = (function () {
    function TestComponent() {
        this.isChanged = new core_1.EventEmitter();
    }
    TestComponent.prototype.upClick = function () {
        if (this.isLike == 1)
            return;
        this.isLike++;
        this.isChanged.emit({ isLike: this.isLike });
    };
    TestComponent.prototype.downClick = function () {
        if (this.isLike == -1)
            return;
        this.isLike--;
        this.isChanged.emit({ isLike: this.isLike });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], TestComponent.prototype, "totalLikes", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], TestComponent.prototype, "isLike", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], TestComponent.prototype, "isChanged", void 0);
    TestComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-test',
            template: "\n   <span \n     [class.highlighted]=\"isLike==1\"\n     (click)=\"upClick()\"\n      aria-hidden=\"true\">like\n   </span>\n   <h1>{{totalLikes+isLike}}</h1>\n   \n   <span \n       [class.highlighted]=\"isLike==-1\"\n       (click)=\"downClick()\">\n\n   dislike</span>\n\n\n  ",
            styles: ["\n      span{\n        color:#ccc;\n        cursor:pointer;\n      }\n      .highlighted{\n         color:red;\n      }\n\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], TestComponent);
    return TestComponent;
}());
exports.TestComponent = TestComponent;
//# sourceMappingURL=test.component.js.map