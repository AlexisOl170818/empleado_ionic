import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.page.html',
  styleUrls: ['./empleado.page.scss'],
})
export class EmpleadoPage implements OnInit {
  empleados:any=[{}];
  constructor(
  private activatedRoute: ActivatedRoute,
  private empleadoService: EmpleadoService,
  private ir:Router
  ) { }
  ionViewDidEnter()
  {
    this.cargarEmpleado();
    this.ir.navigate(['/empleado']);
  }
  cargarEmpleado(){
    this.empleadoService.leer().subscribe(
      (data:any)=>{
        this.empleados=data;
        //console.log(this.empleados)
      }
    )
   
    
  }
ngOnInit() {
 
  //this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
}
borrar(rfc:string)
{
  this.empleadoService.delete(rfc).subscribe(
    (data:any)=>{
      this.empleados=data;
      console.log(this.empleados)
      this.cargarEmpleado()
    }
  );
 
}


}

