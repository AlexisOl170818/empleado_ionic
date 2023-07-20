import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PuestoService } from 'src/app/services/puesto.service';

@Component({
  selector: 'app-puesto-detalle',
  templateUrl: './puesto-detalle.page.html',
  styleUrls: ['./puesto-detalle.page.scss'],
})
export class PuestoDetallePage implements OnInit {
  cve:any;
  puesto:any={
    cvePuesto:'',
    nombreP:'',
    salario:'',
    
  }
  constructor(
    private puestoService:PuestoService,
    private ruta:ActivatedRoute
  ) { }

  ngOnInit() {
    this.cve=this.ruta.snapshot.paramMap.get('cve');
  
    this.cargarUnPuesto()
    
  }
  cargarUnPuesto()
  {
    this.puestoService.leerUno(this.cve).subscribe((puesto)=>
    {
      this.puesto=puesto
    });
  }

}
