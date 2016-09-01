import { Component, ViewChild, ElementRef }  from '@angular/core';
import {Observable}                          from 'rxjs/Rx';
import {WikipediaService}                    from './wikipedia-service';
import {FormControl}                         from '@angular/forms';

@Component({
  moduleId:module.id,
  selector: 'observ',
  templateUrl: 'observ.component.html',

})
export class ObservComponent {
  //@ViewChild('input') input: ElementRef;

   items:Observable<Array<string>>;
   obs:any;
    term = new FormControl();
   constructor(private wikipediaService:WikipediaService){ }
   ngOnInit(){
      this.obs = Observable.create(observer=>observer.next(Date.now()));
      this.obs.subscribe(v => console.log("1st subscriber: " + v));
      this.obs.subscribe(v => console.log("2nd subscriber: " + v));
   }
   
  
   search(term){

     this.items = this.wikipediaService.search(this.term.valueChanges);
         
    }
    
    
}
 
