import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor( private http: Http ) { }

  create( contactData ){     //1. receive data from comp.ts 
    console.log(contactData);
    //2. send the same data to rest api 
          //2.1  find the api endpoint -- https://jsonplaceholder.typicode.com/users
          //2.2 figure out a http method -- POST
    return this.http.post("https://jsonplaceholder.typicode.com/users", contactData)   // sending data to rest api 
              .pipe(map( (resp ) =>{ //3. receive resp from rest api 
                console.log(resp);
                return resp.json(); //4. send the resp back to comp 
              }));
  }

}
