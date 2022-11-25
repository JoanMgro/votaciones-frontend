import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearResultadoComponent } from './crear-resultado/crear-resultado.component';
import { ListarResultadosComponent } from './listar-resultados/listar-resultados.component';
import { ReportarResultadosComponent } from './reportar-resultados/reportar-resultados.component';

const routes: Routes = [
  {
    path: 'listar',
    component: ListarResultadosComponent
  },
  {
    path: 'crear',
    component: CrearResultadoComponent
  },
  {
    path: 'actualizar/:id_resultado',
    component: CrearResultadoComponent
  },
  {
    path: 'reportar',
    component: ReportarResultadosComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResultadosRoutingModule { }
