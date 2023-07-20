import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AreaAgregarPageRoutingModule } from './area-agregar-routing.module';

import { AreaAgregarPage } from './area-agregar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AreaAgregarPageRoutingModule
  ],
  declarations: [AreaAgregarPage]
})
export class AreaAgregarPageModule {}
