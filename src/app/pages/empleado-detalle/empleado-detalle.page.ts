import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-empleado-detalle',
  templateUrl: './empleado-detalle.page.html',
  styleUrls: ['./empleado-detalle.page.scss'],
})
export class EmpleadoDetallePage implements OnInit {
  rfc:any;
  /*
   $empleado['rfc']=$fila['rfc'];
                $empleado['nombreE']=$fila['nombreE'];
                $empleado['edadE']=$fila['edadE'];
                $empleado['domE']=$fila['domE'];
                $empleado['tel']=$fila['tel'];
                $empleado['cvePuesto']=$fila['cvePuesto'];
                $empleado['cveArea']=$fila['cveArea'];
                $empleado['cveTurno']=$fila['cveTurno'];
                $empleado['nombreA']=$fila['nombre'];
                $empleado['nombreP']=$fila['nombreP'];
                $empleado['horaS']=$fila['horaS'];
                $empleado['horaE']=$fila['horaE'];
                $empleado['tipo']=$fila['tipo'];*/ 
  empleado:any={
 
    
  }
  constructor(
    private empleadoService:EmpleadoService,
    private ruta:ActivatedRoute
  ) { }

  ngOnInit() {
    this.rfc=this.ruta.snapshot.paramMap.get('rfc');
  
    this.cargarUnEmpleado()
    
  }
  cargarUnEmpleado()
  {
    this.empleadoService.leerUno(this.rfc).subscribe((empleado)=>
    {
      this.empleado=empleado
    });
  }
}