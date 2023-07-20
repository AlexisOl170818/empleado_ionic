import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PuestoService } from 'src/app/services/puesto.service';

@Component({
  selector: 'app-puesto',
  templateUrl: './puesto.page.html',
  styleUrls: ['./puesto.page.scss'],
})
export class PuestoPage implements OnInit {
  puestos:any;
  constructor(
   private activatedRoute: ActivatedRoute,
  private puestoService: PuestoService,
  private ir:Router
  ) { }
  ionViewDidEnter()
  {
    this.cargarPuesto();
    this.ir.navigate(['/puesto']);
  }
  cargarPuesto(){
    this.puestoService.leer().subscribe(
      (data:any)=>{
        this.puestos=data;
        console.log(this.puestos)
      }
    )
   
    
  }
ngOnInit() {
 
  //this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
}
borrar(cvePuesto:string)
{
  this.puestoService.delete(cvePuesto).subscribe(
    (data:any)=>{
      this.puestos=data;
      this.cargarPuesto()
    }
  );
 
}


}
