import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AreaService } from 'src/app/services/area.service';

@Component({
  selector: 'app-area-actualizar',
  templateUrl: './area-actualizar.page.html',
  styleUrls: ['./area-actualizar.page.scss'],
})
export class AreaActualizarPage implements OnInit {
cve:any
nombre!:any
file!:any
area:any={
  cveArea:'',
  nombre:'',
  foto:''}
  constructor(
    private ruta:ActivatedRoute,
    private areaService:AreaService,
    private ir:Router
  ) { }

  ionViewDidEnter()
  {
   
  }
  ngOnInit() {
    this.cve=this.ruta.snapshot.paramMap.get('cve');
    this.cargarUnaArea()
  }
  onClick(){
    let form=new FormData();
    this.nombre=document.querySelector('#nombre')
    console.log(this.nombre.value)
    form.append('cveArea',this.cve);
    form.append('nombre',this.nombre.value);
    form.append('foto',this.file);
    
    this.areaService.update(form).subscribe(
      m=>console.log(m)
    );
    this.ir.navigate(['/area']);
  }
  archivo(event:any)
  {
    this.file=event.target.files[0];
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
