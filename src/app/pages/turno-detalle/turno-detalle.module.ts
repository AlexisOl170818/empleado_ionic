import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TurnoDetallePageRoutingModule } from './turno-detalle-routing.module';

import { TurnoDetallePage } from './turno-detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TurnoDetallePageRoutingModule
  ],
  declarations: [TurnoDetallePage]
})
export class TurnoDetallePageModule {}
