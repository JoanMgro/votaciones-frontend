import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsociarPartidoComponent } from './asociar-partido/asociar-partido.component';
import { CrearCandidatoComponent } from './crear-candidato/crear-candidato.component';
import { ListarCandidatosComponent } from './listar-candidatos/listar-candidatos.component';

const routes: Routes = [
  {
    path: 'listar',
    component: ListarCandidatosComponent
  },
  {
    path: 'crear',
    component: CrearCandidatoComponent
  },
  {
    path: 'actualizar/:id_candidato',
    component: CrearCandidatoComponent
  },
  {
    path: 'asociar/:id_candidato',
    component: AsociarPartidoComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidatosRoutingModule { }
