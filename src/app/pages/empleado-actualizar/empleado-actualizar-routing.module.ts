import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpleadoActualizarPage } from './empleado-actualizar.page';

const routes: Routes = [
  {
    path: '',
    component: EmpleadoActualizarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmpleadoActualizarPageRoutingModule {}
