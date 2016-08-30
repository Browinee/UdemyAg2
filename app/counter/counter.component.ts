import {Component,Input} from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
@Component({
	selector:'counter-input',
	template:`
		<h1>Hi,it's for custom form controls</h1>
		<button (click)="increment()">+</button>
		{{counterValue}}
		<button (click)="decrement()">-</button>
	`

})
export class CounterComponent implements ControlValueAccessor{
	@Input()counterValue:number=0;

	increment(){
		this.counterValue++;
	}
	decrement(){
		this.counterValue--;
	}

	writeVaule(value:any){
		if(value !==undefined){
		 this.counterValue=value;		
		}
	}
	propagateChange =(_:any)=>{};
    registerOnChange(fn){
    	this.propagateChange=fn;
    }

	registerOnTouch() {}
}

