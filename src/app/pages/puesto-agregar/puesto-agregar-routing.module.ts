import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PuestoAgregarPage } from './puesto-agregar.page';

const routes: Routes = [
  {
    path: '',
    component: PuestoAgregarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PuestoAgregarPageRoutingModule {}
