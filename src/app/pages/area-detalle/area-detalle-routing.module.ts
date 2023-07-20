import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AreaDetallePage } from './area-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: AreaDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AreaDetallePageRoutingModule {}
