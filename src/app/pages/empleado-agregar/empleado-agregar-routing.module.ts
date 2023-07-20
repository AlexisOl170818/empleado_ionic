import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpleadoAgregarPage } from './empleado-agregar.page';

const routes: Routes = [
  {
    path: '',
    component: EmpleadoAgregarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmpleadoAgregarPageRoutingModule {}
