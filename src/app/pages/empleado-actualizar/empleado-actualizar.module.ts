import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmpleadoActualizarPageRoutingModule } from './empleado-actualizar-routing.module';

import { EmpleadoActualizarPage } from './empleado-actualizar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmpleadoActualizarPageRoutingModule
  ],
  declarations: [EmpleadoActualizarPage]
})
export class EmpleadoActualizarPageModule {}
