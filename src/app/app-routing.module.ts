import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IsLoginGuard } from './guards/is-login.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule),
    canActivate:[]
  },
  {
    path: 'empleado-detalle/:rfc',
    loadChildren: () => import('./pages/empleado-detalle/empleado-detalle.module').then( m => m.EmpleadoDetallePageModule)
  },
  {
    path: 'area-detalle/:cve',
    canActivate:[],
    loadChildren: () => import('./pages/area-detalle/area-detalle.module').then( m => m.AreaDetallePageModule)
  },
  {
    path: 'area-agregar',
    canActivate:[],
    loadChildren: () => import('./pages/area-agregar/area-agregar.module').then( m => m.AreaAgregarPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'area',
    loadChildren: () => import('./pages/area/area.module').then( m => m.AreaPageModule)
  },
  {
    path: 'area-actualizar/:cve',
    loadChildren: () => import('./pages/area-actualizar/area-actualizar.module').then( m => m.AreaActualizarPageModule)
  },
  {
    path: 'empleado',
    loadChildren: () => import('./pages/empleado/empleado.module').then( m => m.EmpleadoPageModule)
  },
  {
    path: 'empleado-agregar',
    loadChildren: () => import('./pages/empleado-agregar/empleado-agregar.module').then( m => m.EmpleadoAgregarPageModule)
  },
  {
    path: 'empleado-actualizar/:rfc',
    loadChildren: () => import('./pages/empleado-actualizar/empleado-actualizar.module').then( m => m.EmpleadoActualizarPageModule)
  },
  {
    path: 'turno',
    loadChildren: () => import('./pages/turno/turno.module').then( m => m.TurnoPageModule)
  },
  {
    path: 'turno-actualizar/:cve',
    loadChildren: () => import('./pages/turno-actualizar/turno-actualizar.module').then( m => m.TurnoActualizarPageModule)
  },
  {
    path: 'turno-agregar',
    loadChildren: () => import('./pages/turno-agregar/turno-agregar.module').then( m => m.TurnoAgregarPageModule)
  },
  {
    path: 'turno-detalle/:cve',
    loadChildren: () => import('./pages/turno-detalle/turno-detalle.module').then( m => m.TurnoDetallePageModule)
  },
  {
    path: 'puesto',
    loadChildren: () => import('./pages/puesto/puesto.module').then( m => m.PuestoPageModule)
  },
  {
    path: 'puesto-actualizar/:cve',
    loadChildren: () => import('./pages/puesto-actualizar/puesto-actualizar.module').then( m => m.PuestoActualizarPageModule)
  },
  {
    path: 'puesto-agregar',
    loadChildren: () => import('./pages/puesto-agregar/puesto-agregar.module').then( m => m.PuestoAgregarPageModule)
  },
  {
    path: 'puesto-detalle/:cve',
    loadChildren: () => import('./pages/puesto-detalle/puesto-detalle.module').then( m => m.PuestoDetallePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
