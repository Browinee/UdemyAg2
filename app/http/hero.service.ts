import {Injectable}    from '@angular/core';
import {Http,Response,Headers, RequestOptions} from '@angular/http';
import {Hero}          from './hero';
import {Observable}    from 'rxjs/Observable';

@Injectable()
export class HeroService{

	constructor(private http:Http){}
    private _heroesUrl ='./app/http/heroes.json';
    getHeroes():Observable<Hero[]>{
       return 	this.http.get(this._heroesUrl)
                         .map(this.extraData)
                         .catch(this.handleError);
    }

    addHero(name:string):Observable<Hero>{
    	let body = JSON.stringify({name});
        let headers = new Headers({'Content-Type':'application/json'});
        let options = new RequestOptions({headers:headers});
        return this.http.post(this._heroesUrl,body,options)
                        .map(this.extraData)
                        .catch(this.handleError);

    }


     private extraData(res:Response){
     	let body = res.json();
     	return body.data||{};
     }
	 
	 private handleError(error:any){
	 	let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
            console.error(errMsg); // log to console instead

	 	return Observable.throw(errMsg);
	 }

    


}