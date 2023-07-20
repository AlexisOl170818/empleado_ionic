import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TurnoDetallePage } from './turno-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: TurnoDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TurnoDetallePageRoutingModule {}
