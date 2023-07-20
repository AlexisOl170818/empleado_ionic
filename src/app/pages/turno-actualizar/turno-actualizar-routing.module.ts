import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TurnoActualizarPage } from './turno-actualizar.page';

const routes: Routes = [
  {
    path: '',
    component: TurnoActualizarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TurnoActualizarPageRoutingModule {}
