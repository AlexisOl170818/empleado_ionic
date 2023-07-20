import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AreaService } from 'src/app/services/area.service';

@Component({
  selector: 'app-area-agregar',
  templateUrl: './area-agregar.page.html',
  styleUrls: ['./area-agregar.page.scss'],
})
export class AreaAgregarPage implements OnInit {
  formulario=new FormData();
  nombre!:any
  file!:any;
  validacion:string=""

  
  constructor(
    private areaService:AreaService,
    private ir:Router
  ) { }

  ngOnInit() {
  }
  onClick(){
    let form=new FormData();
    this.nombre=document.querySelector('#nombre')
    if(this.nombre.value=='')
    {
      this.validacion='no'
    }else{
    form.append('nombre',this.nombre.value);
    form.append('foto',this.file);
    this.areaService.agregar(form).subscribe(
      m=>console.log(m)
    );
    this.ir.navigate(['/area']);
    }
    
  }
  archivo(event:any)
  {
    this.file=event.target.files[0];
  }
}
