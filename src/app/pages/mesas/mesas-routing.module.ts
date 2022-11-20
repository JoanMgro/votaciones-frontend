import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarMesasComponent } from './listar-mesas/listar-mesas.component';

const routes: Routes = [
  {
    path: 'listar',
    component: ListarMesasComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MesasRoutingModule { }
