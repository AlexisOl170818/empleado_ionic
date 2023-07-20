import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TurnoServiceService } from 'src/app/services/turno-service.service';

@Component({
  selector: 'app-turno-detalle',
  templateUrl: './turno-detalle.page.html',
  styleUrls: ['./turno-detalle.page.scss'],
})
export class TurnoDetallePage implements OnInit {
  cve:any;
  turno:any={
    cveTurno:'',
    horaE:'',
    horaS:'',
    tipo:''
  }
  constructor(
    private turnoService:TurnoServiceService,
    private ruta:ActivatedRoute
  ) { }

  ngOnInit() {
    this.cve=this.ruta.snapshot.paramMap.get('cve');
  
    this.cargarUnTurno()
    
  }
  cargarUnTurno()
  {
    this.turnoService.leerUno(this.cve).subscribe((turno)=>
    {
      this.turno=turno
    });
  }

}
