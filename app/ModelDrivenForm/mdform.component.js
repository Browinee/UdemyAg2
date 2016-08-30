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
var forms_1 = require('@angular/forms');
var counter_component_1 = require('../counter/counter.component');
var MDFormComponent = (function () {
    function MDFormComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.registerForm = new forms_1.FormGroup({
            firstname: new forms_1.FormControl(),
            lastname: new forms_1.FormControl(),
            address: new forms_1.FormGroup({
                street: new forms_1.FormControl(),
                zip: new forms_1.FormControl(),
                city: new forms_1.FormControl()
            })
        });
    }
    MDFormComponent.prototype.ngOnInit = function () {
        this.registerFormBuilder = this.formBuilder.group({
            firstname: ['wei', forms_1.Validators.required],
            lastname: ['Lin', forms_1.Validators.required],
            address: this.formBuilder.group({
                street: '',
                zip: '',
                city: ''
            })
        });
        this.searchControl = new forms_1.FormControl();
    };
    MDFormComponent = __decorate([
        core_1.Component({
            selector: 'md-form',
            templateUrl: './app/ModelDrivenForm/mdform.component.html',
            styleUrls: ['./app/ModelDrivenForm/mdform.component.css'],
            providers: [forms_1.Validators, forms_1.FormBuilder, counter_component_1.CounterComponent]
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], MDFormComponent);
    return MDFormComponent;
}());
exports.MDFormComponent = MDFormComponent;
//# sourceMappingURL=mdform.component.js.map