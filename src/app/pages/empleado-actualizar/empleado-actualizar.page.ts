import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AreaService } from 'src/app/services/area.service';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { PuestoService } from 'src/app/services/puesto.service';
import { TurnoServiceService } from 'src/app/services/turno-service.service';

@Component({
  selector: 'app-empleado-actualizar',
  templateUrl: './empleado-actualizar.page.html',
  styleUrls: ['./empleado-actualizar.page.scss'],
})
export class EmpleadoActualizarPage implements OnInit {
  validacion:string=""
  rfcR!:any
  rfc!:any
  nombreE!:any
  edadE!:any
  domE!:any
  tel!:any
  cveArea!:any
  cvePuesto!:any
  cveTurno!:any
  puestos:any=[{}]
  turnos:any=[{}]
  areas:any=[{}]
  empleado:any={}
  constructor(
    private puestoService:PuestoService,
    private areaService:AreaService,
    private empleadoService:EmpleadoService,
    private turnoService:TurnoServiceService,
    private ir:Router,
    private ruta:ActivatedRoute
    
  ) { }

  ngOnInit() {
    this.rfcR=this.ruta.snapshot.paramMap.get('rfc');
    this.cargarUnEmpleado()
    this.cargarAreas()
    this.cargarPuesto()
    this.cargarTurnos()
   
   
    
  }
  actualizarEmpleado(){
    let form=new FormData();
    this.rfc=document.querySelector('#rfc')
    this.nombreE=document.querySelector('#nombreE')
    this.edadE=document.querySelector('#edadE')
    this.domE=document.querySelector('#domE')
    this.tel=document.querySelector('#tel')
    this.cveArea=document.querySelector('#cveArea')
    this.cvePuesto=document.querySelector('#cvePuesto')
    this.cveTurno=document.querySelector('#cveTurno')
   
    
   // this.tipo=document.querySelector('#tipo')
    if(this.nombreE.value=='' )
    {
      this.validacion="no"
    }else if (this.rfc.value.length !== 13)
    {
      this.validacion = 'LI'
    }else
        {
      form.append('accion','update');
    form.append('nombreE',this.nombreE.value);
    form.append('rfc',this.rfc.value);
    form.append('edadE',this.edadE.value);
    form.append('domE',this.domE.value);
    form.append('tel',this.tel.value);
    form.append('cveArea',this.cveArea.value);
    form.append('cvePuesto',this.cvePuesto.value);
    form.append('cveTurno',this.cveTurno.value);
   
   // form.append('foto',this.file);
    this.empleadoService.update(form).subscribe(
      m=>console.log(m)
    );
    this.ir.navigate(['/empleado']);
  }
}
cargarPuesto(){
  this.puestoService.leer().subscribe(
    (data:any)=>{
      this.puestos=data;
      console.log(this.puestos)
    }
  )
 
  
}
cargarTurnos(){
  this.turnoService.leer().subscribe(
    (data:any)=>{
      this.turnos=data;
      console.log(this.turnos)
    }
  )
 
  
}
cargarAreas(){
  this.areaService.leer().subscribe(
    (data:any)=>{
      this.areas=data;
      console.log(this.areas)
    }
  )
 
  
}
cargarUnEmpleado()
{
  this.empleadoService.leerUno(this.rfcR).subscribe((empleado)=>
  {
    this.empleado=empleado
  });
}
 
}
