import { Component }   from '@angular/core';
import {TestComponent} from './test.component';
@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
  
   <app-test 
      [totalLikes]="post.totalLikes" 
      [isLike]="post.isLike"
      (isChanged)="getChanged($event)">
   </app-test>


   <h2>ngSwitch change</h2>
   <ul class="nav nav-pills" >
      <li [class.active]="viewMode=='map'"><a (click)="viewMode='map'"> Map view</a></li>
      <li [class.active]="viewMode=='list'"><a (click)="viewMode='list'">List view</a></li>

   </ul>
   <div [ngSwitch]="viewMode"> 
     <template [ngSwitchCase]="'map'">Show map info </template>
     <template [ngSwitchCase]="'list'">Show List info </template>
  </div>

   <h2>*ngFor</h2>
  <ul>
    <li *ngFor="let bear of Bear ,let i=index" >{{i+1}}-{{bear}}</li>
  </ul>

  `,
  
  directives:[TestComponent]
})
export class AppComponent {
  Bear:string[] =['Browinee','GuitarBrown','SuperBrown'];
  viewMode:string='map';
  post={
  	totalLikes:10,
  	isLike:0,
  	
  }
  getChanged($event){
  	
  	console.log($event);

  }


}


