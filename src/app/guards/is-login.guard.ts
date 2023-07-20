import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { appendFile } from 'fs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IsLoginGuard implements CanActivate {
 token!:any
 respuesta:any
constructor(
  private nav:Router,
  private http:HttpClient
)
{}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot){
     /* let form=new FormData();
      this.token=localStorage.getItem('token')
      form.append('token',this.token)
      this.http.post('http://localhost:8080/EmpleadoApi/isLogin.php',form).subscribe(
        (r:any)=>
        {
         this.respuesta=r.response
       
        }
      );
      if(this.respuesta.response=="true")
      return true
      else
      return false
      this.nav.navigate(['login'])
      //return false*/
      return true
  
}
}
