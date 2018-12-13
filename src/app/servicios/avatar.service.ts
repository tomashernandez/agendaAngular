import { Injectable } from '@angular/core';

import { Http,Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class AvatarService {
  API: string = "https://randomuser.me/api/?gender=";
  constructor(private _http:Http) {

  }
  
  obtenerAvatar(genero:string):Observable<any[]>{
    console.log(`${this.API}${genero}`);
    return this._http.get(`${this.API}${genero}`).map((response: Response)=>response.json());
  }


}
