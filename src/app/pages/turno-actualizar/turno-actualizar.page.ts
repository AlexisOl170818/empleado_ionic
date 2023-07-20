import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TurnoServiceService } from 'src/app/services/turno-service.service';

@Component({
  selector: 'app-turno-actualizar',
  templateUrl: './turno-actualizar.page.html',
  styleUrls: ['./turno-actualizar.page.scss'],
})
export class TurnoActualizarPage implements OnInit {
  turno:any={
    cveTurno:'',
    horaE:'',
    horaS:'',
    tipo:''
  }
  horaE:any
  horaS:any
  tipo:any
  cve:any
  constructor( 
    private turnoService:TurnoServiceService,
    private ir:Router,
    private ruta:ActivatedRoute
  ) { }

  ngOnInit() {
    
    this.cve=this.ruta.snapshot.paramMap.get('cve');
    this.cargarUnTurno();
  }
  actualizarTurno(){
    let form=new FormData();
    this.horaE=document.querySelector('#horarioE')
    this.horaS=document.querySelector('#horarioS')
    this.tipo=document.querySelector('#tipo')
   form.append('cveTurno',this.cve)
    form.append('horaE',this.horaE.value);
    form.append('horaS',this.horaS.value);
    form.append('tipo',this.tipo.value);
   // form.append('foto',this.file);
    this.turnoService.update(form).subscribe(
      m=>console.log(m)
    );
    this.ir.navigate(['/turno']);
  
}
cargarUnTurno()
  {
    this.turnoService.leerUno(this.cve).subscribe((turno)=>
    {
      //console.log(turno);
      this.turno=turno
      
    });
  }
 
}
