import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Area } from 'src/app/interfaces/area';
import { AreaService } from 'src/app/services/area.service';

@Component({
  selector: 'app-area-detalle',
  templateUrl: './area-detalle.page.html',
  styleUrls: ['./area-detalle.page.scss'],
})
export class AreaDetallePage implements OnInit {
  cve:any;
  area:any={
    cveArea:'',
    nombre:'',
    foto:''
  }
  constructor(
    private ruta:ActivatedRoute,
    private areaService:AreaService
  ) { }

  ngOnInit() {
    this.cve=this.ruta.snapshot.paramMap.get('cve');
    
   this.cargarUnaArea();
    //console.log(this.area);
  }
  cargarUnaArea()
  {
    this.areaService.leerUno(this.cve).subscribe((area)=>
    {
      console.log(area);
      this.area=area
    });
  }

}
