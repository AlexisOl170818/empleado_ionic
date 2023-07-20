import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TurnoActualizarPageRoutingModule } from './turno-actualizar-routing.module';

import { TurnoActualizarPage } from './turno-actualizar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TurnoActualizarPageRoutingModule
  ],
  declarations: [TurnoActualizarPage]
})
export class TurnoActualizarPageModule {}
