import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarResultadosComponent } from './listar-resultados/listar-resultados.component';

const routes: Routes = [
  {
    path: 'listar',
    component: ListarResultadosComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResultadosRoutingModule { }
