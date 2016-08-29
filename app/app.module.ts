/// <reference path="./../typings/index.d.ts" />

import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import {AppComponent}     from './app.component';
import {ExponentStrength} from './exponential-strength.pipe';
import { FormsModule }    from '@angular/forms';
import {ZippyComponent}   from './zippy/zippy.component';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    ExponentStrength,
    ZippyComponent
  ],
 
  bootstrap: [ AppComponent ]
})
export class AppModule { }


