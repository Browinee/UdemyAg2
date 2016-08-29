import { Component,Input,Output,EventEmitter }   from '@angular/core';
@Component({
  moduleId: module.id,
  selector: 'app-test',
  template: `
   <span 
     [class.highlighted]="isLike==1"
     (click)="upClick()"
      aria-hidden="true">like
   </span>
   <h1>{{totalLikes+isLike}}</h1>
   
   <span 
       [class.highlighted]="isLike==-1"
       (click)="downClick()">

   dislike</span>


  `,
  styles:[`
      span{
        color:#ccc;
        cursor:pointer;
      }
      .highlighted{
         color:red;
      }

  `]
   
 
  
})
export class TestComponent  {
  
   @Input() totalLikes:number;
   @Input() isLike:    number;
   
   @Output() isChanged = new EventEmitter();
    upClick(){
      if(this.isLike == 1)
        return;
      this.isLike++;
      this.isChanged.emit({isLike:this.isLike});
    }

    downClick(){
      if(this.isLike == -1)
        return;
      this.isLike--;
      this.isChanged.emit({isLike:this.isLike});


    }
 
 



}
