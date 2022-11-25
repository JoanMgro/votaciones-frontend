import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearPartidoComponent } from './crear-partido/crear-partido.component';
import { ListarPartidosComponent } from './listar-partidos/listar-partidos.component';

const routes: Routes = [
  {
    path: 'listar',
    component: ListarPartidosComponent
  },
  {
    path: 'crear',
    component: CrearPartidoComponent
  },
  {
    path: 'actualizar/:id_partido',
    component: CrearPartidoComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartidosRoutingModule { }
