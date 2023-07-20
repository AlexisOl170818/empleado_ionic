import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TurnoAgregarPageRoutingModule } from './turno-agregar-routing.module';

import { TurnoAgregarPage } from './turno-agregar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TurnoAgregarPageRoutingModule
  ],
  declarations: [TurnoAgregarPage]
})
export class TurnoAgregarPageModule {}
