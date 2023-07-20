import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TurnoServiceService } from 'src/app/services/turno-service.service';

@Component({
  selector: 'app-turno',
  templateUrl: './turno.page.html',
  styleUrls: ['./turno.page.scss'],
})
export class TurnoPage implements OnInit {
  turnos:any;
  constructor(
  private activatedRoute: ActivatedRoute,
  private turnoService: TurnoServiceService,
  private ir:Router
  ) { }


  ionViewDidEnter()
  {
    this.cargarTurnos();
    this.ir.navigate(['/turno']);
  }
  cargarTurnos(){
    this.turnoService.leer().subscribe(
      (data:any)=>{
        this.turnos=data;
        console.log(this.turnos)
      }
    )
   
    
  }
ngOnInit() {
 
  //this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
}
borrar(cveTurno:string)
{
  this.turnoService.delete(cveTurno).subscribe(
    (data:any)=>{
      this.turnos=data;
      this.cargarTurnos()
    }
  );
 
}


}
