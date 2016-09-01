 import { Component }   from '@angular/core';
import {Hero}          from './hero';
//import {URLSearchParams,Jsonp} from '@angular/http';

@Component({
	selector:'hero-form',
	templateUrl:'./app/form/form.component.html',
	styleUrls:['./app/form/form.component.css']


})

export class FormComponent{
  active = true;

	powers    =['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];
  model     = new Hero(18,'Dr IQ',this.powers[0],'Chuck Overstreet');
  submitted = false;

  onSubmit(formvalue){
      this.submitted=true;
      console.log('formvalue:');
      console.log(formvalue);
  }
  get diagnostic(){return JSON.stringify(this.model);}
  newHero(){
    this.model=new Hero(42,'','');
    this.active = false;
    setTimeout(() => this.active = true, 0);
  }
  value:string="";
  onKey(e){
     this.value="hi,it's value";
     console.log(e.target.value);
  }
  value3:string=""
   onKey2(value){
     this.value3=value;
    console.log(this.value3);
    //  let ssearch = new URLSearchParams();
    // ssearch.set('action','opensearch');
    // ssearch.set('format','json');
    // console.log(ssearch);
  }
 
 entervalue:string="";
 onEn(val:string){
   this.entervalue=val;
 }

   
}