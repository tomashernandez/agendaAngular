import { Injectable } from '@angular/core';
import { Contacto } from '../modelos/contacto';
import { Http,Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class ContactoService {
  API: string = "http://hernandezsomos.com/api/v1/contacts";
  constructor(private _http:Http) {

  }
  
  obtenerContactos():Observable<Contacto[]>{
    return this._http.get(this.API).map((response: Response)=>response.json());
  }

  agregarContacto(contacto:Object):Observable<Contacto[]>{
    return this._http.post(this.API,contacto)
      .map((response:Response)=>response.json())
      .catch((error:any)=>Observable.throw(error.json() ||{message:'Error del Servidor'}));
  }

  obtenerContacto(id:string):Observable<Contacto[]>{
    return this._http.get(`${this.API}/${id}`)
      .map((response:Response)=> response.json());
  }

  actualizarContacto(contacto:Object):Observable<Contacto[]>{
    return this._http.put(`${this.API}/${contacto["id"]}`,contacto)
      .map((response:Response) => response.json())
      .catch((error:any)=>Observable.throw(error.json().error || {message:"Error del Servidor"}));
  }

  eliminarContacto(id:string):Observable<Contacto[]>{
    return this._http.delete(`${this.API}/${id}`)
      .map((response:Response)=> response.json());
  }
  
}
