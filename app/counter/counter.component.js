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
var CounterComponent = (function () {
    function CounterComponent() {
        this.counterValue = 0;
        this.propagateChange = function (_) { };
    }
    CounterComponent.prototype.increment = function () {
        this.counterValue++;
    };
    CounterComponent.prototype.decrement = function () {
        this.counterValue--;
    };
    CounterComponent.prototype.writeVaule = function (value) {
        if (value !== undefined) {
            this.counterValue = value;
        }
    };
    CounterComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    CounterComponent.prototype.registerOnTouch = function () { };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], CounterComponent.prototype, "counterValue", void 0);
    CounterComponent = __decorate([
        core_1.Component({
            selector: 'counter-input',
            template: "\n\t\t<h1>Hi,it's for custom form controls</h1>\n\t\t<button (click)=\"increment()\">+</button>\n\t\t{{counterValue}}\n\t\t<button (click)=\"decrement()\">-</button>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], CounterComponent);
    return CounterComponent;
}());
exports.CounterComponent = CounterComponent;
//# sourceMappingURL=counter.component.js.map