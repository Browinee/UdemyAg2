import { Component, OnInit } from '@angular/core';
import { Hero }              from './hero';
import { HeroService }       from './hero.service';
import {Observable}          from 'rxjs/Observable';


@Component({
  moduleId:module.id,
  selector: 'hero-list',
  templateUrl: './hero-list.component.html',
  providers: [ HeroService ]
})
export class HeroListComponent{
   errorMessage:string;
   heroes:Hero[];
   mode = 'Observable'

   constructor(private heroService:HeroService){}
   ngOnInit(){
   	this.getHeroes();
   }
   
   getHeroes(){
   	  this.heroService.getHeroes()
   	                  .subscribe(
   	                  	  heroes=>this.heroes = heroes,
   	                  	  error=>this.errorMessage = error   );
   }
   addHero(name:string):Observable<Hero>{
   	 if(!name)return;
   	 this.heroService.addHero(name)
   	                 .subscribe(
   	                 	 hero  => this.heroes.push(hero),
                         error =>  this.errorMessage = <any>error)
   }

}