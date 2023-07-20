import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  respuesta:any={
    ok:''
    ,token:''
  }
  usuario!:string
  contrasena!:string
  constructor(
    private http:HttpClient,
  private ruta:Router
  ) { }

  ngOnInit() {
  }
  iniciarSesion()
  {

      let form=new FormData()
      form.append('user',this.usuario)
      form.append('pass',this.contrasena)
      this.http.post('http://localhost:8080/EmpleadoApi/login.php',form).subscribe(
        (r:any)=>{
          console.log(r)
          if(r.ok=='si')
          {
            localStorage.setItem('token',r.token);
            this.ruta.navigate(['/folder/Inbox'])
            
          }
          else{
            this.ruta.navigate(['login'])
          }
        }
      );
      if(this.respuesta.ok=='si')
      {
        localStorage.setItem('token',this.respuesta.token);
        this.ruta.navigate(['/folder/Inbox'])
        
      }
      else{
        this.ruta.navigate(['login'])
      }
  }
  }


