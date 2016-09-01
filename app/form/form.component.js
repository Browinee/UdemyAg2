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
var hero_1 = require('./hero');
//import {URLSearchParams,Jsonp} from '@angular/http';
var FormComponent = (function () {
    function FormComponent() {
        this.active = true;
        this.powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];
        this.model = new hero_1.Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
        this.submitted = false;
        this.value = "";
        this.value3 = "";
        this.entervalue = "";
    }
    FormComponent.prototype.onSubmit = function (formvalue) {
        this.submitted = true;
        console.log('formvalue:');
        console.log(formvalue);
    };
    Object.defineProperty(FormComponent.prototype, "diagnostic", {
        get: function () { return JSON.stringify(this.model); },
        enumerable: true,
        configurable: true
    });
    FormComponent.prototype.newHero = function () {
        var _this = this;
        this.model = new hero_1.Hero(42, '', '');
        this.active = false;
        setTimeout(function () { return _this.active = true; }, 0);
    };
    FormComponent.prototype.onKey = function (e) {
        this.value = "hi,it's value";
        console.log(e.target.value);
    };
    FormComponent.prototype.onKey2 = function (value) {
        this.value3 = value;
        console.log(this.value3);
        //  let ssearch = new URLSearchParams();
        // ssearch.set('action','opensearch');
        // ssearch.set('format','json');
        // console.log(ssearch);
    };
    FormComponent.prototype.onEn = function (val) {
        this.entervalue = val;
    };
    FormComponent = __decorate([
        core_1.Component({
            selector: 'hero-form',
            templateUrl: './app/form/form.component.html',
            styleUrls: ['./app/form/form.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], FormComponent);
    return FormComponent;
}());
exports.FormComponent = FormComponent;
//# sourceMappingURL=form.component.js.map