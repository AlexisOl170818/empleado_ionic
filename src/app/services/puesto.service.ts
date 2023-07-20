import {inject, Injectable } from '@angular/core';
import {environment} from '..//../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PuestoService {
  private url:string = environment.api;
  private  http=inject(HttpClient);
  private endpoint='puesto.php';
  constructor() { }
  leer(){
    return  this.http.get(this.url+this.endpoint);
  }
  leerUno(id:string)
  {
    return  this.http.get(this.url+this.endpoint+`?cvePuesto=${id}`);
  }
  agregar(form:any)
  {
    return  this.http.post(this.url+this.endpoint,form);
  }
  delete(id:string)
  {
    return this.http.delete(this.url+this.endpoint+`?cvePuesto=${id}`)
  }
  update(form:any)
  {
   
    return this.http.post(this.url+this.endpoint,form)
  }
}
