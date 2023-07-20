import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PuestoService } from 'src/app/services/puesto.service';

@Component({
  selector: 'app-puesto-actualizar',
  templateUrl: './puesto-actualizar.page.html',
  styleUrls: ['./puesto-actualizar.page.scss'],
})
export class PuestoActualizarPage implements OnInit {
  puesto:any={
    cvePuesto:'',
    nombreP:'',
    salario:'',
   
  }
  nombreP:any
  salario:any
 
  cve:any
  constructor( 
    private puestoService:PuestoService,
    private ir:Router,
    private ruta:ActivatedRoute
  ) { }

  ngOnInit() {
    
    this.cve=this.ruta.snapshot.paramMap.get('cve');
    this.cargarUnPuesto();
  }
  actualizarPuesto(){
    let form=new FormData();
    this.nombreP=document.querySelector('#nombreP')
    this.salario=document.querySelector('#salario')
   
   form.append('cvePuesto',this.cve)
    form.append('nombreP',this.nombreP.value);
    form.append('salario',this.salario.value);
   
   // form.append('foto',this.file);
    this.puestoService.update(form).subscribe(
      m=>console.log(m)
    );
    this.ir.navigate(['/puesto']);
  
}
cargarUnPuesto()
  {
    this.puestoService.leerUno(this.cve).subscribe((puesto)=>
    {
      //console.log(turno);
      this.puesto=puesto
      
    });
  }
 
}

