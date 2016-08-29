import {Directive,ElementRef,Renderer} from '@angular/core';

@Directive({
  selector:'[bindinput]',
  host:{
  	'(focus)':'onFocus',
  	'(blur)':'onBlur'
  }




})


export class InputDirective{

  constructor(private el:ElementRef,private renderer:Renderer){}
  onFocus(){
  	this.renderer.setElementStyle(this.el.nativeElement,'width','200');
  }
  onBlur(){
  	this.renderer.setElementStyle(this.el.nativeElement,'width','150');
  }

  



}