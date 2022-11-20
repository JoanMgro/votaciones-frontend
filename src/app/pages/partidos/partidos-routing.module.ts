import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarPartidosComponent } from './listar-partidos/listar-partidos.component';

const routes: Routes = [
  {
    path: 'listar',
    component: ListarPartidosComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartidosRoutingModule { }
