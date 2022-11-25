import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearCandidatoComponent } from '../candidatos/crear-candidato/crear-candidato.component';
import { CrearMesaComponent } from './crear-mesa/crear-mesa.component';
import { ListarMesasComponent } from './listar-mesas/listar-mesas.component';

const routes: Routes = [
  {
    path: 'listar',
    component: ListarMesasComponent
  },
  {
    path: 'crear',
    component: CrearMesaComponent
  },
  {
    path: 'actualizar/:id_mesa',
    component: CrearMesaComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MesasRoutingModule { }
