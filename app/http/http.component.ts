import {Component} 		  from '@angular/core';
import {HeroListComponent} from './hero-list.component';
import './rxjs-operators';
@Component({
	moduleId:module.id,
	selector:'my-http',
	template:`
		<hero-list></hero-list>
        


	`,
   directives:[HeroListComponent]


})
export class HttpComponent{
	



}