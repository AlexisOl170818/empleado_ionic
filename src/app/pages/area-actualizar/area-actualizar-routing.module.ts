import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AreaActualizarPage } from './area-actualizar.page';

const routes: Routes = [
  {
    path: '',
    component: AreaActualizarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AreaActualizarPageRoutingModule {}
