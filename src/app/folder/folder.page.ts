import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AreaService } from '../services/area.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder!: string;
  areas:any;
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private areaService: AreaService
    ) { }

  
    ionViewDidEnter()
    {
      this.cargarAreas();
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
      }
    );
  }

}
