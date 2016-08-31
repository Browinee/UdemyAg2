import { Component }           from '@angular/core';
import {FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';
import {CounterComponent}    from '../counter/counter.component';

@Component({
	selector:'md-form',
	templateUrl:'./app/ModelDrivenForm/mdform.component.html',
	styleUrls:['./app/ModelDrivenForm/mdform.component.css'],
    providers:[Validators,FormBuilder,CounterComponent]

})

export class MDFormComponent{
  	constructor(private formBuilder:FormBuilder){}
	  registerForm = new FormGroup({
	   	firstname: new FormControl(),
	    lastname: new FormControl(),
	    address: new FormGroup({
	      street: new FormControl(),
	      zip: new FormControl(),
	      city: new FormControl()
        })
      });

	  registerFormBuilder:FormGroup;
	  searchControl      :FormControl;
	  ngOnInit(){
	  	 this.registerFormBuilder = this.formBuilder.group({
	  	 	firstname: ['wei', Validators.required],
            lastname: ['Lin', Validators.required],
	  	 	
	  	 	address:this.formBuilder.group({
	  	 		street:'',
	  	 		zip:'',
	  	 		city:''
	  	 	})

	  	 });
	  	 this.searchControl = new FormControl();


	  }




}


