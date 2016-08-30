/// <reference path="./../typings/index.d.ts" />

import { NgModule }          from '@angular/core';
import { BrowserModule }     from '@angular/platform-browser';
import {AppComponent}        from './app.component';
import {ExponentStrength}    from './exponential-strength.pipe';
import { FormsModule }       from '@angular/forms';
import {ZippyComponent}      from './zippy/zippy.component';
import {FormComponent}       from './form/form.component';
import {MDFormComponent}     from './ModelDrivenForm/mdform.component';
import {ReactiveFormsModule} from '@angular/forms';
import {CounterComponent}    from './counter/counter.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    ExponentStrength,
    ZippyComponent,
    FormComponent,
    MDFormComponent,
    CounterComponent
  ],
 
  bootstrap: [ AppComponent ]
})
export class AppModule { }


