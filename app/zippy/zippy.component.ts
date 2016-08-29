import { Component }   from '@angular/core';
@Component({
	selector:'zippy',
	templateUrl:'./app/zippy/zippy.component.html',
	styleUrls:['./app/zippy/zippy.component.css']


})

export class ZippyComponent{
	downTouched:boolean=false;
    upTouched:boolean=false;
    downClick(info){
    	this.downTouched = !this.downTouched;
    	this.upTouched = !this.upTouched;
    }
   upClick(info){
   	this.upTouched = !this.upTouched;
   	this.downTouched = !this.downTouched;
   }



  Info:any[]=[{
  	           title:"Who can see my stuff?",
  	           content:"Content of my stuff",
  	           // down: ()=>this.downClick(),
  	           // up:this.upClick
  	          },
  	          {
  	           title:"Who can contact me?",
  	           content:"Contact of my stuff",
  	            // down: ()=>this.downClick(),
  	            // up:this.upClick
  	          },

              ]



}