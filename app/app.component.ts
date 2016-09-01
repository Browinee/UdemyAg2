import { Component }          from '@angular/core';
import {TestComponent}        from './test.component';
import {ExponentStrength}     from './exponential-strength.pipe';
import {ZippyComponent}       from './zippy/zippy.component';
import {FormComponent}        from './form/form.component';
import {MDFormComponent}      from './ModelDrivenForm/mdform.component'; 
import { QuestionService }    from './dynamicForm/question.service';
import {DynamicFormComponent} from './dynamicForm/dynamic-form.component';
import {ObservComponent}      from './Observ/observ.component';
import {WikipediaService}     from './Observ/wikipedia-service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl:'app.component.html',
  
  directives:[TestComponent,ZippyComponent,FormComponent,MDFormComponent,ObservComponent],
  pipes:[ExponentStrength],
  providers:[QuestionService,WikipediaService]
})

export class AppComponent {
  questions: any[];
  constructor(service: QuestionService) {
    this.questions = service.getQuestions();
  }
  Bear:string[] =['Browinee','GuitarBrown','SuperBrown'];
  Browinee={
    name:"Browinee Brown",
    weight:587.87546464,
    money:105478,
    birthday:new Date(2016,8,29)
  };

  viewMode:string='map';
  post={
  	totalLikes:10,
  	isLike:0,
  	
  }
  getChanged($event):void{
  	
  	console.log($event);

  }

  toggle=true;
  toggleFormat():void{
    this.toggle = !this.toggle;
  }
  get format(){
    return this.toggle?'shortDate':'fullDate';
  }


  power=5;
  factor=1;
  task={
    title:'Elvis operator',
    assignee:''
  }

}
  

