import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PuestoActualizarPageRoutingModule } from './puesto-actualizar-routing.module';

import { PuestoActualizarPage } from './puesto-actualizar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PuestoActualizarPageRoutingModule
  ],
  declarations: [PuestoActualizarPage]
})
export class PuestoActualizarPageModule {}
