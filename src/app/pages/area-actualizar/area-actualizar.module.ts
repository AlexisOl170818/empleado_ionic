import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AreaActualizarPageRoutingModule } from './area-actualizar-routing.module';

import { AreaActualizarPage } from './area-actualizar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AreaActualizarPageRoutingModule
  ],
  declarations: [AreaActualizarPage]
})
export class AreaActualizarPageModule {}
