import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AreaAgregarPage } from './area-agregar.page';

const routes: Routes = [
  {
    path: '',
    component: AreaAgregarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AreaAgregarPageRoutingModule {}
