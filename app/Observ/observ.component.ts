import { Component }  from '@angular/core';
import {Observable}   from 'rxjs/Rx';
@Component({
  moduleId:module.id,
  selector: 'observ',
  templateUrl: 'observ.component.html',

})
export class ObservComponent {
  
   constructor(){

     var keyups = Observable.fromEvent($('#search'),'keyup')
         .map(e=>e.target.value)
         .filter(text=>text.length>=3)
         .debounceTime(400)
         .distinctUntilChanged()
         .flatMap(searchTern=>{
           var url="https://api.spotify.com/vi/search?type=artist&q="+searchTern;
           var promise = $.getJSON(url);
           return Observable.fromPromise(promise);
         })
       

     keyups.subscribe(data => console.log(data));

 

 
     //  var debounced =_.debounce(function(text){
     //    var url="https://api.spotify.com/vi/search?type=artist&q="+text;
     //   $.getJSON(url,function(artists){
     //     console.log(artists);
     //   })
     //  },400);
     // $('#search').keyup(function(e){
       
     //   var text = e.target.value;
     //   if(text.length<3)
     //       return
     //    debounced(text);
       




     })
   }

  }
}
