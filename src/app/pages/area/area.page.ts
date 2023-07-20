import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AreaService } from 'src/app/services/area.service';

@Component({
  selector: 'app-area',
  templateUrl: './area.page.html',
  styleUrls: ['./area.page.scss'],
})



export class AreaPage implements OnInit {
  public folder!: string;
  areas:any;
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private areaService: AreaService,
    private ir:Router
    ) { }

  
    ionViewDidEnter()
    {
      this.cargarAreas();
     //  this.ir.navigate(['area']);
    }
    cargarAreas(){
      this.areaService.leer().subscribe(
        (data:any)=>{
          this.areas=data;
        }
      )
     
      
    }
  ngOnInit() {
    this.cargarAreas();
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }
  borrar(cveArea:string)
  {
    this.areaService.delete(cveArea).subscribe(
      (data:any)=>{
        this.areas=data;
        this.cargarAreas()
        
      }
    );
  }
  

}
