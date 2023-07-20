import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TurnoServiceService } from 'src/app/services/turno-service.service';

@Component({
  selector: 'app-turno-agregar',
  templateUrl: './turno-agregar.page.html',
  styleUrls: ['./turno-agregar.page.scss'],
})
export class TurnoAgregarPage implements OnInit {
  horaE:any
  horaS:any
  tipo:any
  validacion:string=""
  constructor(
    private turnoService:TurnoServiceService,
    private ir:Router
  ) { }

  ngOnInit() {
  }
  agregarTurno(){
    let form=new FormData();
    this.horaE=document.querySelector('#horarioE')
   
    this.horaS=document.querySelector('#horarioS')
    this.tipo=document.querySelector('#tipo')
    if(this.horaE.value=='' ||this.horaS.value==''||this.tipo.value=='')
    {
      this.validacion="no"
    }else
    {
    form.append('horaE',this.horaE.value);
    form.append('horaS',this.horaS.value);
    form.append('tipo',this.tipo.value);
   // form.append('foto',this.file);
    this.turnoService.agregar(form).subscribe(
      m=>console.log(m)
    );
    this.ir.navigate(['/turno']);
  }
}
 
}
