import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AreaDetallePageRoutingModule } from './area-detalle-routing.module';

import { AreaDetallePage } from './area-detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AreaDetallePageRoutingModule
  ],
  declarations: [AreaDetallePage]
})
export class AreaDetallePageModule {}
