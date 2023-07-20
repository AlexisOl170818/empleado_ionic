import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmpleadoAgregarPageRoutingModule } from './empleado-agregar-routing.module';

import { EmpleadoAgregarPage } from './empleado-agregar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmpleadoAgregarPageRoutingModule
  ],
  declarations: [EmpleadoAgregarPage]
})
export class EmpleadoAgregarPageModule {}
