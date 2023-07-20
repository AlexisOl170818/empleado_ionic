import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PuestoService } from 'src/app/services/puesto.service';

@Component({
  selector: 'app-puesto-agregar',
  templateUrl: './puesto-agregar.page.html',
  styleUrls: ['./puesto-agregar.page.scss'],
})
export class PuestoAgregarPage implements OnInit {
  nombreP!:any
  salario!:any
  validacion:string=""
  constructor(
    private puestoService:PuestoService,
    private ir:Router
  ) { }

  ngOnInit() {
  }
  agregarPuesto(){
    let form=new FormData();
    this.nombreP=document.querySelector('#nombreP')
   
    this.salario=document.querySelector('#salario')
   // this.tipo=document.querySelector('#tipo')
    if(this.nombreP.value=='' ||this.salario.value=='')
    {
      this.validacion="no"
    }else
    {
    form.append('nombreP',this.nombreP.value);
    form.append('salario',this.salario.value);
   
   // form.append('foto',this.file);
    this.puestoService.agregar(form).subscribe(
      m=>console.log(m)
    );
    this.ir.navigate(['/puesto']);
  }
}
 
}
