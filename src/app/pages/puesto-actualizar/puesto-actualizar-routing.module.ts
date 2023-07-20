import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PuestoActualizarPage } from './puesto-actualizar.page';

const routes: Routes = [
  {
    path: '',
    component: PuestoActualizarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PuestoActualizarPageRoutingModule {}
