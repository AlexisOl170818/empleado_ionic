import { HttpClient } from '@angular/common/http';
import {inject, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TurnoServiceService {
  private url:string = environment.api;
  private  http=inject(HttpClient);
  private endpoint='turno.php';
  constructor() { }
  leer(){
    return  this.http.get(this.url+this.endpoint);
  }
  leerUno(id:string)
  {
    return  this.http.get(this.url+this.endpoint+`?cveTurno=${id}`);
  }
  agregar(form:any)
  {
    return  this.http.post(this.url+this.endpoint,form);
  }
  delete(id:string)
  {
    return this.http.delete(this.url+this.endpoint+`?cveTurno=${id}`)
  }
  update(form:any)
  {
   
    return this.http.post(this.url+this.endpoint,form)
  }
}
