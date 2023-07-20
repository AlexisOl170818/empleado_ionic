import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AreaService } from 'src/app/services/area.service';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { PuestoService } from 'src/app/services/puesto.service';
import { TurnoServiceService } from 'src/app/services/turno-service.service';

@Component({
  selector: 'app-empleado-agregar',
  templateUrl: './empleado-agregar.page.html',
  styleUrls: ['./empleado-agregar.page.scss'],
})
export class EmpleadoAgregarPage implements OnInit {
  validacion:string=""
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
  constructor(
    private puestoService:PuestoService,
    private areaService:AreaService,
    private empleadoService:EmpleadoService,
    private turnoService:TurnoServiceService,
    private ir:Router
  ) { }

  ngOnInit() {
    this.cargarAreas()
    this.cargarPuesto()
    this.cargarTurnos()
  }
  agregarEmpleado(){
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
   let elementos = [this.nombreE, this.rfc, this.edadE, this.domE,this.tel,this.cveArea,this.cvePuesto,this.cveTurno];

if (elementos.some(elemento => elemento.value === '')) {
  this.validacion = 'no';
}else if (this.rfc.value.length !== 13)
{
  this.validacion = 'LI'
}else
    {
    form.append('nombreE',this.nombreE.value);
    form.append('rfc',this.rfc.value);
    form.append('edadE',this.edadE.value);
    form.append('domE',this.domE.value);
    form.append('tel',this.tel.value);
    form.append('cveArea',this.cveArea.value);
    form.append('cvePuesto',this.cvePuesto.value);
    form.append('cveTurno',this.cveTurno.value);
   
   // form.append('foto',this.file);
    this.empleadoService.agregar(form).subscribe(
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
 
}
