import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarCandidatosComponent } from './listar-candidatos/listar-candidatos.component';

const routes: Routes = [
  {
    path: 'listar',
    component: ListarCandidatosComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidatosRoutingModule { }
