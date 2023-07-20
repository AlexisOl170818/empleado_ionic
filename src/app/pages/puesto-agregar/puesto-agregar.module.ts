import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PuestoAgregarPageRoutingModule } from './puesto-agregar-routing.module';

import { PuestoAgregarPage } from './puesto-agregar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PuestoAgregarPageRoutingModule
  ],
  declarations: [PuestoAgregarPage]
})
export class PuestoAgregarPageModule {}
