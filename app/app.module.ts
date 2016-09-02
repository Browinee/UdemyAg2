/// <reference path="./../typings/index.d.ts" />

import { NgModule }                     from '@angular/core';
import { BrowserModule }                from '@angular/platform-browser';
import {AppComponent}                   from './app.component';
import {ExponentStrength}               from './exponential-strength.pipe';
import { FormsModule }                  from '@angular/forms';
import {ZippyComponent}                 from './zippy/zippy.component';
import {FormComponent}                  from './form/form.component';
import {MDFormComponent}                from './ModelDrivenForm/mdform.component';
import {ReactiveFormsModule}            from '@angular/forms';
import {CounterComponent}               from './counter/counter.component';
import { DynamicFormComponent }         from './dynamicForm/dynamic-form.component';
import { DynamicFormQuestionComponent } from './dynamicForm/dynamic-form-question.component';
import {ObservComponent}                from './Observ/observ.component';
import {WikipediaService}               from './Observ/wikipedia-service';
import {HttpComponent}                  from './http/http.component';
import { HttpModule, JsonpModule }      from '@angular/http';
import {HeroListComponent}              from './http/hero-list.component';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    JsonpModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    ExponentStrength,
    ZippyComponent,
    FormComponent,
    MDFormComponent,
    CounterComponent,
    DynamicFormComponent,
    DynamicFormQuestionComponent,
    ObservComponent,
    HttpComponent,
    HeroListComponent
  ],
  providers:[WikipediaService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


