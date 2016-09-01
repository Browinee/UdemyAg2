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
var Rx_1 = require('rxjs/Rx');
var wikipedia_service_1 = require('./wikipedia-service');
var forms_1 = require('@angular/forms');
var ObservComponent = (function () {
    function ObservComponent(wikipediaService) {
        this.wikipediaService = wikipediaService;
        this.term = new forms_1.FormControl();
    }
    ObservComponent.prototype.ngOnInit = function () {
        this.obs = Rx_1.Observable.create(function (observer) { return observer.next(Date.now()); });
        this.obs.subscribe(function (v) { return console.log("1st subscriber: " + v); });
        this.obs.subscribe(function (v) { return console.log("2nd subscriber: " + v); });
    };
    ObservComponent.prototype.search = function (term) {
        this.items = this.wikipediaService.search(this.term.valueChanges);
    };
    ObservComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'observ',
            templateUrl: 'observ.component.html',
        }), 
        __metadata('design:paramtypes', [wikipedia_service_1.WikipediaService])
    ], ObservComponent);
    return ObservComponent;
}());
exports.ObservComponent = ObservComponent;
//# sourceMappingURL=observ.component.js.map