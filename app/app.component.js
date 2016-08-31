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
var exponential_strength_pipe_1 = require('./exponential-strength.pipe');
var zippy_component_1 = require('./zippy/zippy.component');
var form_component_1 = require('./form/form.component');
var mdform_component_1 = require('./ModelDrivenForm/mdform.component');
var question_service_1 = require('./dynamicForm/question.service');
var observ_component_1 = require('./Observ/observ.component');
var AppComponent = (function () {
    function AppComponent(service) {
        this.Bear = ['Browinee', 'GuitarBrown', 'SuperBrown'];
        this.Browinee = {
            name: "Browinee Brown",
            weight: 587.87546464,
            money: 105478,
            birthday: new Date(2016, 8, 29)
        };
        this.viewMode = 'map';
        this.post = {
            totalLikes: 10,
            isLike: 0,
        };
        this.toggle = true;
        this.power = 5;
        this.factor = 1;
        this.task = {
            title: 'Elvis operator',
            assignee: ''
        };
        this.questions = service.getQuestions();
    }
    AppComponent.prototype.getChanged = function ($event) {
        console.log($event);
    };
    AppComponent.prototype.toggleFormat = function () {
        this.toggle = !this.toggle;
    };
    Object.defineProperty(AppComponent.prototype, "format", {
        get: function () {
            return this.toggle ? 'shortDate' : 'fullDate';
        },
        enumerable: true,
        configurable: true
    });
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            templateUrl: 'app.component.html',
            directives: [test_component_1.TestComponent, zippy_component_1.ZippyComponent, form_component_1.FormComponent, mdform_component_1.MDFormComponent, observ_component_1.ObservComponent],
            pipes: [exponential_strength_pipe_1.ExponentStrength],
            providers: [question_service_1.QuestionService]
        }), 
        __metadata('design:paramtypes', [question_service_1.QuestionService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map